const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(filePath, 'utf8');

const targetSectionStart = '<section class="pvReelsSec" id="featured-reels-carousel">';
const startIdx = html.indexOf(targetSectionStart);

if (startIdx === -1) {
  console.error('Target section not found!');
  process.exit(1);
}

const endMarker = '</section>';
const endIdx = html.indexOf(endMarker, startIdx);

if (endIdx === -1) {
  console.error('End of section not found!');
  process.exit(1);
}

const fullSectionEndIdx = endIdx + endMarker.length;
const sectionContent = html.substring(startIdx, fullSectionEndIdx);

// Wrap section with clear comment block
const commentedSection = `<!--
══════════════════════════════════════════════════════════════════════════════════
[HIDDEN] REELS HORIZONTAL CAROUSEL SHOWCASE (Restore by removing surrounding HTML comment tags)
══════════════════════════════════════════════════════════════════════════════════
${sectionContent}
-->`;

html = html.substring(0, startIdx) + commentedSection + html.substring(fullSectionEndIdx);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully commented out the Explore Landmark Projects (Reels Carousel) section!');
