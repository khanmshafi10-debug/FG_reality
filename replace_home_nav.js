const fs = require('fs');
const path = require('path');

const indexHtmlPath = 'src/www.fgrealty.qa/index.html';
const homeNavHtmlPath = 'C:/Users/AR LAPTOP/.gemini/antigravity-ide/brain/3c80c16d-d6a1-4f1f-8382-57fc148c91db/scratch/home_nav.html'; // Wait, the node script from earlier wrote to the Cwd.
const homeNavHtmlLocal = 'home_nav.html';
const homeNavCssLocal = 'home_nav.css';
const homeNavJsLocal = 'home_nav.js';

let html = fs.readFileSync(indexHtmlPath, 'utf8');
const newNavHtml = fs.readFileSync(homeNavHtmlLocal, 'utf8');
const newNavCss = fs.readFileSync(homeNavCssLocal, 'utf8');
const newNavJs = fs.readFileSync(homeNavJsLocal, 'utf8');

// Find start of header
const startIndex = html.indexOf('<header class="hero__content-top">');
if (startIndex === -1) {
    console.error("Could not find <header class='hero__content-top'>");
    process.exit(1);
}

// Find the end of the mobile drawer or SVGs.
// Let's find the next section. In index.html, what comes after the SVGs for the header?
// Usually, it's the end of <section class="hero__content"> and then <div class="hero__content-center">, but maybe it's just <div class="hero__content-center">.
// Let's log what follows.
const endSearchStart = html.indexOf('<div class="hero__content-center">', startIndex);
if (endSearchStart !== -1) {
    console.log("Found hero__content-center at", endSearchStart);
} else {
    // Let's search for <h1
    console.log("hero__content-center not found, looking for <h1", html.indexOf('<h1', startIndex));
}
