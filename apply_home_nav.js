const fs = require('fs');

const indexHtmlPath = 'src/www.fgrealty.qa/index.html';
const homeNavHtmlPath = 'C:/Users/AR LAPTOP/.gemini/antigravity-ide/brain/3c80c16d-d6a1-4f1f-8382-57fc148c91db/scratch/home_nav.html'; // we extracted this to cwd earlier
const homeNavHtmlLocal = 'home_nav.html';
const homeNavCssLocal = 'home_nav.css';
const homeNavJsLocal = 'home_nav.js';

let html = fs.readFileSync(indexHtmlPath, 'utf8');
const newNavHtml = fs.readFileSync(homeNavHtmlLocal, 'utf8');
const newNavCss = fs.readFileSync(homeNavCssLocal, 'utf8');
const newNavJs = fs.readFileSync(homeNavJsLocal, 'utf8');

// Find boundaries
const startMarker = '<header class="hero__content-top">';
const endMarker = '<section class="hero__content-middle">';

const startIndex = html.indexOf(startMarker);
const endIndex = html.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find boundaries.");
    process.exit(1);
}

const before = html.substring(0, startIndex);
// Keep the indentation of the start marker
let indent = '';
const lastNewline = before.lastIndexOf('\n');
if (lastNewline !== -1) {
    indent = before.substring(lastNewline + 1);
}

const after = html.substring(endIndex);

// Construct new content
const styleBlock = '\n<style>\n' + newNavCss + '\n</style>\n';
const scriptBlock = '\n<script>\n' + newNavJs + '\n</script>\n';

const newContent = before + newNavHtml + scriptBlock + styleBlock + '\n' + indent + after;

fs.writeFileSync(indexHtmlPath, newContent, 'utf8');
console.log('Successfully updated index.html with new navbar!');
