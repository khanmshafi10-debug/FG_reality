const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Strip any non-ASCII prefix characters (emoji, corrupted multibyte) from pvSecTitle headings
// Pattern: <h2 class="pvSecTitle">[NON-ASCII chars + space]TEXT</h2>
// Replace the opening tag content - strip leading non-word/non-letter chars up to first ASCII letter
html = html.replace(
  /(<h2 class="pvSecTitle">)([^\x00-\x7F\s]+\s+)/g,
  '$1'
);

// Verify result
const headings = [];
const re = /<h2 class="pvSecTitle">([^<]+)<\/h2>/g;
let m;
while ((m = re.exec(html)) !== null) {
  headings.push(m[1].trim());
}
console.log('Section headings after cleanup:');
headings.forEach(h => console.log(' -', h));

fs.writeFileSync(indexPath, html, 'utf8');
console.log('\nSaved index.html');
