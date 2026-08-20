const fs = require('fs');
const path = require('path');

const devDir = 'src/www.fgrealty.qa/en/development';
const files = fs.readdirSync(devDir).filter(f => f.endsWith('.html'));

console.log('Verifying Navbar dropdown in all', files.length, 'development pages:');
files.forEach(f => {
  const content = fs.readFileSync(path.join(devDir, f), 'utf8');
  const countLinks = (content.match(/\/en\/development\//g) || []).length;
  console.log(`${f} -> Total development links in page: ${countLinks}`);
});
