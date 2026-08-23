const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, 'src/www.fgrealty.qa');

// ── 1. developments.html (and en/developments.html) ──────────────────────────
const devFiles = [
  path.join(base, 'developments.html'),
  path.join(base, 'en/developments.html'),
];

for (const file of devFiles) {
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, 'utf8');
  const before = html;

  // Hero title: "24 Flagship Luxury Developments" → "Flagship Luxury Developments"
  html = html.replace(/24 Flagship Luxury Developments/g, 'Flagship Luxury Developments');

  // Stats strip: <strong>24</strong> Flagship Developments → Flagship Developments
  html = html.replace(/<strong>24<\/strong>\s*Flagship Developments/g, 'Flagship Developments');

  // Stats strip: <strong>4</strong> Premier Districts → Premier Districts
  html = html.replace(/<strong>4<\/strong>\s*Premier Districts/g, 'Premier Districts');

  // Filter tab count badges - remove the entire <span class="count-badge">N</span>
  html = html.replace(/\s*<span class="count-badge">\d+<\/span>/g, '');

  // Footer: "24 Flagship Developments" bullet → "Flagship Developments"
  html = html.replace(/24 Flagship Developments/g, 'Flagship Developments');

  // Footer: "bespoke portfolio of 24 flagship" → "bespoke portfolio of flagship"
  html = html.replace(/portfolio of 24 flagship/g, 'portfolio of flagship');

  if (html !== before) {
    fs.writeFileSync(file, html, 'utf8');
    console.log('Fixed:', path.relative(__dirname, file));
  }
}

// ── 2. All en/development/*.html ─────────────────────────────────────────────
const devDir = path.join(base, 'en/development');
const devPages = fs.readdirSync(devDir).filter(f => f.endsWith('.html'));

for (const name of devPages) {
  const file = path.join(devDir, name);
  let html = fs.readFileSync(file, 'utf8');
  const before = html;

  // Back-link header: "All 24 Projects" → "All Projects"
  html = html.replace(/All 24 Projects/g, 'All Projects');

  // Footer link text "All 24 Projects →"  → "All Projects →"
  html = html.replace(/All 24 Projects →/g, 'All Projects →');
  html = html.replace(/All 24 Projects ?\?/g, 'All Projects →');

  // Footer text "portfolio of 24 flagship" → "portfolio of flagship"
  html = html.replace(/portfolio of 24 flagship/g, 'portfolio of flagship');

  if (html !== before) {
    fs.writeFileSync(file, html, 'utf8');
    console.log('Fixed:', name);
  }
}

// ── 3. Any remaining \d+ in inline text across root *.html ───────────────────
// Already handled above for the specific known patterns.

console.log('\nAll done!');
