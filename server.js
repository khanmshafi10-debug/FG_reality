const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'src', 'www.fgrealty.qa');
const SRC_DIR = path.join(__dirname, 'src');

// High-speed In-Memory File Cache
const fileCache = new Map();
const MAX_CACHE_SIZE_BYTES = 50 * 1024 * 1024; // 50 MB in-memory cache limit
let currentCacheSize = 0;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.avif': 'image/avif',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

const COMPRESSIBLE = new Set([
    'text/html; charset=utf-8',
    'text/css; charset=utf-8',
    'application/javascript; charset=utf-8',
    'application/json; charset=utf-8',
    'image/svg+xml'
]);

function sendResponse(req, res, statusCode, headers, buffer) {
    const acceptEncoding = req.headers['accept-encoding'] || '';
    const mimeType = headers['Content-Type'] || '';

    const defaultHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
        'Access-Control-Allow-Headers': '*',
        ...headers
    };

    if (req.method === 'OPTIONS') {
        res.writeHead(204, defaultHeaders);
        return res.end();
    }

    // Enable Gzip Compression for text/CSS/JS/HTML/SVG
    if (COMPRESSIBLE.has(mimeType) && acceptEncoding.includes('gzip') && buffer.length > 256) {
        zlib.gzip(buffer, (err, compressed) => {
            if (!err) {
                res.writeHead(statusCode, {
                    ...defaultHeaders,
                    'Content-Encoding': 'gzip',
                    'Content-Length': compressed.length
                });
                return res.end(compressed);
            }
            res.writeHead(statusCode, { ...defaultHeaders, 'Content-Length': buffer.length });
            res.end(buffer);
        });
    } else {
        res.writeHead(statusCode, { ...defaultHeaders, 'Content-Length': buffer.length });
        res.end(buffer);
    }
}

function serveFileFromDiskOrCache(req, res, filePath) {
    const ext = path.extname(filePath).toLowerCase() || '.html';
    const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
    const isHtml = ext === '.html';
    const isSvg = ext === '.svg';

    const cacheKey = filePath;
    if (!isHtml && !isSvg && fileCache.has(cacheKey)) {
        const cached = fileCache.get(cacheKey);
        const headers = {
            'Content-Type': mimeType,
            'Cache-Control': 'public, max-age=31536000, immutable',
            'X-Local-Cache': 'HIT'
        };
        return sendResponse(req, res, 200, headers, cached);
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
        }

        // Cache non-HTML, non-SVG static assets in RAM memory for instant delivery
        if (!isHtml && !isSvg && data.length < 2 * 1024 * 1024 && (currentCacheSize + data.length < MAX_CACHE_SIZE_BYTES)) {
            fileCache.set(cacheKey, data);
            currentCacheSize += data.length;
        }

        const headers = {
            'Content-Type': mimeType,
            'Cache-Control': (isHtml || isSvg) ? 'no-cache, no-store, must-revalidate, max-age=0' : 'public, max-age=31536000, immutable',
            'Pragma': (isHtml || isSvg) ? 'no-cache' : undefined,
            'Expires': (isHtml || isSvg) ? '0' : undefined,
            'X-Local-Cache': 'MISS'
        };
        // Remove undefined headers
        Object.keys(headers).forEach(key => headers[key] === undefined && delete headers[key]);
        sendResponse(req, res, 200, headers, data);
    });
}

const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0].split('#')[0];

    // Fast-stub third party tracking/analytics requests & unregister lingering Service Workers
    if (reqPath.includes('gtm.js') || reqPath.includes('analytics') || reqPath.includes('facebook') || reqPath.includes('stape')) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        return res.end('/* Analytics stub */');
    }
    if (reqPath.endsWith('/sw.js') || reqPath.endsWith('/service-worker.js')) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        return res.end('self.addEventListener("install", () => self.skipWaiting()); self.addEventListener("activate", () => self.clients.matchAll({type: "window"}).then(clients => { clients.forEach(c => c.navigate(c.url)); return self.registration.unregister(); }));');
    }

    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

    // Redirect account, international, developments, learn (resources), and agent routes to home
    if (reqPath.startsWith('/account') || reqPath.startsWith('/en/international') || reqPath.startsWith('/en/developments') || reqPath.startsWith('/learn') || reqPath.startsWith('/en/find-agent') || reqPath.startsWith('/en/careers') || reqPath.startsWith('/find-agent') || reqPath.startsWith('/careers')) {
        res.writeHead(302, { 'Location': '/' });
        return res.end();
    }

    let filePath;
    if (reqPath.startsWith('/yourstay.qa/')) {
        filePath = path.join(SRC_DIR, reqPath);
    } else {
        filePath = path.join(PUBLIC_DIR, reqPath);
    }

    // 1. If request has no extension, prioritize filePath + .html file check first
    const hasExt = path.extname(filePath).length > 0;
    if (!hasExt) {
        const htmlPath = filePath + '.html';
        if (fs.existsSync(htmlPath) && fs.statSync(htmlPath).isFile()) {
            return serveFileFromDiskOrCache(req, res, htmlPath);
        }
    }

    // 2. If filePath is a directory, check for index.html or .html inside it
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        const indexPath = path.join(filePath, 'index.html');
        if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
            return serveFileFromDiskOrCache(req, res, indexPath);
        }
        const dotHtmlPath = path.join(filePath, '.html');
        if (fs.existsSync(dotHtmlPath) && fs.statSync(dotHtmlPath).isFile()) {
            return serveFileFromDiskOrCache(req, res, dotHtmlPath);
        }
    }

    // 3. Direct file check
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        return serveFileFromDiskOrCache(req, res, filePath);
    }

    // 4. Live Auto-Caching Proxy Fallback
    const targetUrl = 'https://www.fgrealty.qa' + reqPath;
    console.log(`[FAST PROXY FETCH] ${reqPath} -> ${targetUrl}`);

    https.get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (proxyRes) => {
        if (proxyRes.statusCode === 200) {
            const chunks = [];
            proxyRes.on('data', c => chunks.push(c));
            proxyRes.on('end', () => {
                try {
                    const buffer = Buffer.concat(chunks);
                    let savePath = (!hasExt && (proxyRes.headers['content-type'] || '').includes('text/html')) ? filePath + '.html' : filePath;
                    
                    // Prevent writing if savePath is an existing directory
                    if (fs.existsSync(savePath) && fs.statSync(savePath).isDirectory()) {
                        savePath = path.join(savePath, 'index.html');
                    }

                    const dir = path.dirname(savePath);
                    if (!fs.existsSync(dir)) {
                        fs.mkdirSync(dir, { recursive: true });
                    }
                    
                    fs.writeFile(savePath, buffer, (err) => {
                        if (err) console.error(`[SAVE ERROR] Failed to save ${savePath}:`, err.message);
                    });

                    const mimeType = proxyRes.headers['content-type'] || 'text/html; charset=utf-8';
                    sendResponse(req, res, 200, { 'Content-Type': mimeType }, buffer);
                } catch(e) {
                    console.error('[RESPONSE ERROR]:', e.message);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end(`Internal Server Error: ${e.message}`);
                }
            });
        } else {
            res.writeHead(proxyRes.statusCode, { 'Content-Type': 'text/plain' });
            res.end(`404 Not Found (${proxyRes.statusCode})`);
        }
    }).on('error', (proxyErr) => {
        console.error('[PROXY ERROR]:', proxyErr.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Fetch error: ${proxyErr.message}`);
    });
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

server.listen(PORT, () => {
    console.log(`⚡ FGREALTY High-Performance Local Server running at: http://localhost:${PORT}/`);
});
