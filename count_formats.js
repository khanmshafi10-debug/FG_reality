const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src', 'www.fgrealty.qa');

const pngRefs = new Set();
const jpgRefs = new Set();
const webpRefs = new Set();
const avifRefs = new Set();
const svgRefs = new Set();

function scanHtml(dir) {
    fs.readdirSync(dir).forEach(f => {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) scanHtml(full);
        else if (f.endsWith('.html')) {
            const content = fs.readFileSync(full, 'utf8');
            const regex = /(?:src=["']|srcset=["']|url\(["']?|href=["'])([\w\-\/\.]+\.(?:png|jpg|jpeg|webp|avif|svg))/gi;
            let m;
            while ((m = regex.exec(content)) !== null) {
                const clean = m[1].split('?')[0].split('#')[0];
                if (clean.endsWith('.webp')) webpRefs.add(clean);
                else if (clean.endsWith('.png')) pngRefs.add(clean);
                else if (clean.endsWith('.jpg') || clean.endsWith('.jpeg')) jpgRefs.add(clean);
                else if (clean.endsWith('.avif')) avifRefs.add(clean);
                else if (clean.endsWith('.svg')) svgRefs.add(clean);
            }
        }
    });
}
scanHtml(publicDir);

console.log('=== WebP References (' + webpRefs.size + ' unique) ===');
console.log(Array.from(webpRefs));

console.log('\n=== PNG References (' + pngRefs.size + ' unique) ===');
console.log(Array.from(pngRefs));

console.log('\n=== JPG/JPEG References (' + jpgRefs.size + ' unique) ===');
console.log(Array.from(jpgRefs));

console.log('\n=== AVIF References (' + avifRefs.size + ' unique) ===');
console.log(Array.from(avifRefs));
