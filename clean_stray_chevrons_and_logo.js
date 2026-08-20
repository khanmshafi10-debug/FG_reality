const fs = require('fs');
const path = require('path');

const devDir = 'src/www.fgrealty.qa/en/development';
const allFiles = [
  'src/www.fgrealty.qa/index.html',
  ...fs.readdirSync(devDir).filter(f => f.endsWith('.html')).map(f => path.join(devDir, f))
];

console.log('Cleaning stray chevrons and logo styling in', allFiles.length, 'files...');

allFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Remove isolated > lines
  const lines = content.split('\n');
  const cleanedLines = lines.filter(line => !/^\s*>\s*$/.test(line));
  content = cleanedLines.join('\n');

  // Fix logo styling for ultra crisp display
  content = content.replace(/style="height:\s*48px;\s*width:\s*auto;\s*max-width:\s*260px;\s*display:\s*block;"/g, 'style="height: 48px; width: auto; max-width: 260px; display: block; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));"');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('🎉 STRAY CHEVRONS REMOVED & LOGO STYLING ENHANCED ACROSS ALL PAGES!');
