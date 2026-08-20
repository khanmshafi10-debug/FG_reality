const fs = require('fs');
const html = fs.readFileSync('src/www.fgrealty.qa/index.html', 'utf8');

const matches = html.match(/src="([^"]+\.(jpg|jpeg|png|webp))"/gi) || [];
console.log('Total img src occurrences in whole index.html:', matches.length);

const counts = {};
matches.forEach(m => {
  const path = m.replace(/src="/i, '').replace('"', '');
  counts[path] = (counts[path] || 0) + 1;
});

console.log('\n--- Images occurring multiple times in index.html ---');
Object.keys(counts).forEach(p => {
  if (counts[p] > 1) {
    console.log(`${counts[p]}x -> ${p}`);
  }
});
