const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');
const indexCssPath = path.join(publicDir, 'index.css');
const coreCssPath = path.join(publicDir, 'build/assets/core-BJlXrooN.css');

// Read current index.css
let css = fs.readFileSync(indexCssPath, 'utf8');

// Remove old Glassmorphism Mega Menus block if it exists
css = css.replace(/\/\* Glassmorphism Mega Menus \*\/[\s\S]*?\.navMegaMenu__column-link:hover\s*\{[\s\S]*?\}/g, '');

fs.writeFileSync(indexCssPath, css, 'utf8');
console.log('✓ Cleaned up redundant mega menu block in index.css');
