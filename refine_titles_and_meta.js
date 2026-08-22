const fs = require('fs');
const path = require('path');

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
let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Replace primeview in titles with Prime View Real Estate
    if (content.includes('primeview developments page')) {
        content = content.replace(/primeview developments page/gi, 'Luxury Developments in Qatar | Prime View Real Estate');
        modified = true;
    }
    if (content.includes('Explore Areas in Qatar | primeview')) {
        content = content.replace(/Explore Areas in Qatar \| primeview/gi, 'Explore Areas in Qatar | Prime View Real Estate');
        modified = true;
    }
    if (content.includes('primeview')) {
        content = content.replace(/primeview\s+Qatar/gi, 'Prime View Real Estate Qatar');
        content = content.replace(/"name":\s*"primeview"/gi, '"name": "Prime View Real Estate"');
        content = content.replace(/<meta property="og:site_name" content="primeview">/gi, '<meta property="og:site_name" content="Prime View Real Estate">');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
    }
});

console.log(`Refined titles and meta in ${modifiedCount} files.`);
