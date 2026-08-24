const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = process.env.PORT || 3000;
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
    '.xml': 'application/xml; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8',
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
    const isNoCacheAsset = isHtml || isSvg || isCss || isJs || ext === '.ico' || filePath.includes('favicon') || filePath.includes('hero');

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

    // Fast-stub analytics / service workers
    if (reqPath.includes('gtm.js') || reqPath.includes('analytics') || reqPath.includes('facebook') || reqPath.includes('stape')) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        return res.end('/* Analytics disabled */');
    }
    if (reqPath.endsWith('/sw.js') || reqPath.endsWith('/service-worker.js')) {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        return res.end('self.addEventListener("install", () => self.skipWaiting()); self.addEventListener("activate", () => self.clients.matchAll({type: "window"}).then(clients => { clients.forEach(c => c.navigate(c.url)); return self.registration.unregister(); }));');
    }

    if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

    // 1. Permanent 301 Redirects for Legacy / Old Project URLs
    const isLegacyRoute = /^\/(?:en\/)?(?:buy|rent|property|lp|learn|blog)(?:\/.*)?$/i.test(reqPath) ||
                          /^\/(?:en\/)?development\/(?:the-lofts|the-seef|the-weekend-by-elie-saab|lusail-marina-heights)(?:\.html)?$/i.test(reqPath);
    if (isLegacyRoute) {
        res.writeHead(301, { 'Location': '/developments' });
        return res.end();
    }

    // 2. Direct clean route rewrites
    const cleanRouteMap = {
        '/en/privacy-policy': path.join(PUBLIC_DIR, 'en', 'privacy-policy.html'),
        '/privacy-policy': path.join(PUBLIC_DIR, 'en', 'privacy-policy.html'),
        '/en/terms-and-conditions': path.join(PUBLIC_DIR, 'en', 'terms-and-conditions.html'),
        '/terms-and-conditions': path.join(PUBLIC_DIR, 'en', 'terms-and-conditions.html'),
        '/en/developments': path.join(PUBLIC_DIR, 'en', 'developments.html'),
        '/developments': path.join(PUBLIC_DIR, 'en', 'developments.html'),
        '/en/projects': path.join(PUBLIC_DIR, 'en', 'developments.html'),
        '/projects': path.join(PUBLIC_DIR, 'en', 'developments.html'),
        '/en/areas': path.join(PUBLIC_DIR, 'en', 'areas.html'),
        '/areas': path.join(PUBLIC_DIR, 'en', 'areas.html'),
        '/en/about': path.join(PUBLIC_DIR, 'en', 'about.html'),
        '/about': path.join(PUBLIC_DIR, 'en', 'about.html'),
        '/en/contact': path.join(PUBLIC_DIR, 'en', 'contact.html'),
        '/contact': path.join(PUBLIC_DIR, 'en', 'contact.html'),
        '/en/development/valencia-residence': path.join(PUBLIC_DIR, 'en', 'development', 'valencia-residence.html'),
        '/en/development/valencia-residence.html': path.join(PUBLIC_DIR, 'en', 'development', 'valencia-residence.html'),
        '/development/valencia-residence': path.join(PUBLIC_DIR, 'en', 'development', 'valencia-residence.html'),
        '/development/valencia-residence.html': path.join(PUBLIC_DIR, 'en', 'development', 'valencia-residence.html')
    };

    if (cleanRouteMap[reqPath] && fs.existsSync(cleanRouteMap[reqPath])) {
        return serveFileFromDiskOrCache(req, res, cleanRouteMap[reqPath]);
    }

    // 3. Direct project slug rewrites: /developments/:slug, /projects/:slug, /en/development/:slug
    const devSlugMatch = reqPath.match(/^\/(?:en\/)?(?:developments|development|projects)\/([a-zA-Z0-9\-_]+)(?:\.html)?$/i);
    if (devSlugMatch) {
        const slug = devSlugMatch[1];
        const devFilePath = path.join(PUBLIC_DIR, 'en', 'development', `${slug}.html`);
        if (fs.existsSync(devFilePath)) {
            return serveFileFromDiskOrCache(req, res, devFilePath);
        }
    }

    let filePath;
    if (reqPath.startsWith('/yourstay.qa/')) {
        filePath = path.join(SRC_DIR, reqPath);
    } else {
        filePath = path.join(PUBLIC_DIR, reqPath);
    }

    // 1. If request has no extension, check filePath + .html first
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

    // 4. Missing image fallback: return local agent avatar or fallback logo instead of 404/proxy
    if (reqPath.match(/\.(png|jpg|jpeg|webp|avif)$/i)) {
        const fallbackAvatar = path.join(PUBLIC_DIR, 'images', 'agent-avatar.svg');
        if (fs.existsSync(fallbackAvatar)) {
            return serveFileFromDiskOrCache(req, res, fallbackAvatar);
        }
    }

    // 5. Final fallback: If not found, return 404 or index.html for page navigations
    const isHtmlRoute = !hasExt || reqPath.endsWith('.html');
    if (isHtmlRoute) {
        const homePath = path.join(PUBLIC_DIR, 'index.html');
        if (fs.existsSync(homePath)) {
            return serveFileFromDiskOrCache(req, res, homePath);
        }
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

if (!process.env.VERCEL) {
    server.listen(PORT, () => {
        console.log(`⚡ Prime View Real Estate 100% Local Server running at: http://localhost:${PORT}/`);
    });
}

module.exports = server;

