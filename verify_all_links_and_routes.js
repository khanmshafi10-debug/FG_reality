const fs = require('fs');
const path = require('path');
const http = require('http');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');

function getAllHtml(dir, list = []) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
        const full = path.join(dir, d.name);
        if (d.isDirectory()) getAllHtml(full, list);
        else if (d.name.endsWith('.html')) list.push(full);
    });
    return list;
}

const files = getAllHtml(publicDir);
let fgrealtyFound = 0;
let oldFooterFound = 0;
let deadFooterLinkFound = 0;

const deadPatterns = [
    'fgrealty.qa',
    'facebook.com/fgrealty',
    'x.com/fgrealty',
    'instagram.com/fgrealty',
    'linkedin.com/company/fg',
    'tiktok.com/@fgrealty',
    'STA-logo',
    'A platform by',
    'Find Great Realty',
    'apps.apple.com/us/app/fgrealty',
    'play.google.com/store/apps/details?id=qa.fgrealty'
];

files.forEach(file => {
    const html = fs.readFileSync(file, 'utf8');
    const rel = path.relative(publicDir, file);
    
    deadPatterns.forEach(pattern => {
        if (html.includes(pattern)) {
            console.log(`[ALERT] ${pattern} found in ${rel}`);
            fgrealtyFound++;
        }
    });
});

console.log(`\nScan complete! Total dead/fgrealty occurrences across all files: ${fgrealtyFound}`);
