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
    '.ttf': 'font/ttf',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm'
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
    const isCss = ext === '.css';
    const isJs = ext === '.js';
    const isNoCacheAsset = isHtml || isSvg || isCss || isJs || ext === '.ico' || filePath.includes('favicon') || filePath.includes('\\video\\') || filePath.includes('/video/') || filePath.includes('\\hero\\') || filePath.includes('/hero/');

    const cacheKey = filePath;
    if (!isNoCacheAsset && fileCache.has(cacheKey)) {
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

        // Cache non-HTML, non-SVG, non-hero static assets in RAM memory for instant delivery
        if (!isNoCacheAsset && data.length < 2 * 1024 * 1024 && (currentCacheSize + data.length < MAX_CACHE_SIZE_BYTES)) {
            fileCache.set(cacheKey, data);
            currentCacheSize += data.length;
        }

        const headers = {
            'Content-Type': mimeType,
            'Cache-Control': isNoCacheAsset ? 'no-cache, no-store, must-revalidate, max-age=0' : 'public, max-age=31536000, immutable',
            'Pragma': isNoCacheAsset ? 'no-cache' : undefined,
            'Expires': isNoCacheAsset ? '0' : undefined,
            'X-Local-Cache': 'MISS'
        };
        // Remove undefined headers
        Object.keys(headers).forEach(key => headers[key] === undefined && delete headers[key]);
        sendResponse(req, res, 200, headers, data);
    });
}

const server = http.createServer((req, res) => {
    let rawPath = req.url.split('?')[0].split('#')[0];
    let reqPath;
    try {
        reqPath = decodeURIComponent(rawPath);
    } catch(e) {
        reqPath = rawPath;
    }

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

    // Direct clean route rewrites
    if (reqPath === '/en/privacy-policy' || reqPath === '/privacy-policy') {
        const p = path.join(PUBLIC_DIR, 'en', 'privacy-policy.html');
        if (fs.existsSync(p)) return serveFileFromDiskOrCache(req, res, p);
    }
    if (reqPath === '/en/terms-and-conditions' || reqPath === '/terms-and-conditions') {
        const p = path.join(PUBLIC_DIR, 'en', 'terms-and-conditions.html');
        if (fs.existsSync(p)) return serveFileFromDiskOrCache(req, res, p);
    }
    if (reqPath === '/en/developments' || reqPath === '/developments') {
        const p = path.join(PUBLIC_DIR, 'en', 'developments.html');
        if (fs.existsSync(p)) return serveFileFromDiskOrCache(req, res, p);
    }
    if (reqPath === '/en/areas' || reqPath === '/areas') {
        const p = path.join(PUBLIC_DIR, 'en', 'areas.html');
        if (fs.existsSync(p)) return serveFileFromDiskOrCache(req, res, p);
    }
    if (reqPath === '/en/about' || reqPath === '/about') {
        const p = path.join(PUBLIC_DIR, 'en', 'about.html');
        if (fs.existsSync(p)) return serveFileFromDiskOrCache(req, res, p);
    }
    if (reqPath === '/en/contact' || reqPath === '/contact') {
        const p = path.join(PUBLIC_DIR, 'en', 'contact.html');
        if (fs.existsSync(p)) return serveFileFromDiskOrCache(req, res, p);
    }

    // Cookie policy, legacy buy/rent listings, and old portals redirect
    if (reqPath.startsWith('/en/cookie-policy') || reqPath.startsWith('/cookie-policy')) {
        res.writeHead(302, { 'Location': '/en/privacy-policy.html' });
        return res.end();
    }
    if (reqPath.startsWith('/en/buy') || reqPath.startsWith('/en/rent') || reqPath.startsWith('/buy') || reqPath.startsWith('/rent')) {
        res.writeHead(302, { 'Location': '/en/developments.html' });
        return res.end();
    }
    if (reqPath.startsWith('/account') || reqPath.startsWith('/en/international') || reqPath.startsWith('/learn') || reqPath.startsWith('/en/find-agent') || reqPath.startsWith('/en/careers') || reqPath.startsWith('/find-agent') || reqPath.startsWith('/careers')) {
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

    // 4. If an HTML page / page route is not found, redirect to home - never proxy HTML routes
    const isHtmlRoute = !hasExt || reqPath.endsWith('.html');
    if (isHtmlRoute) {
        res.writeHead(302, { 'Location': '/' });
        return res.end();
    }

    // 5. Fallback auto-caching for missing static assets (images, fonts, media only)
    const targetUrl = 'https://www.fgrealty.qa' + reqPath;
    https.get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (proxyRes) => {
        if (proxyRes.statusCode === 200) {
            const chunks = [];
            proxyRes.on('data', c => chunks.push(c));
            proxyRes.on('end', () => {
                try {
                    const buffer = Buffer.concat(chunks);
                    let savePath = filePath;
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

                    const mimeType = proxyRes.headers['content-type'] || 'application/octet-stream';
                    sendResponse(req, res, 200, { 'Content-Type': mimeType }, buffer);
                } catch(e) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end(`Internal Server Error: ${e.message}`);
                }
            });
        } else {
            res.writeHead(proxyRes.statusCode, { 'Content-Type': 'text/plain' });
            res.end(`404 Not Found (${proxyRes.statusCode})`);
        }
    }).on('error', (proxyErr) => {
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
    console.log(`⚡ Prime View Real Estate High-Performance Server running at: http://localhost:${PORT}/`);
});
