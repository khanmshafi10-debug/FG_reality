const fs = require('fs');
const html = fs.readFileSync('src/www.fgrealty.qa/index.html', 'utf8');

const s1 = html.indexOf('waterfront-estates');
const sEnd = html.indexOf('latestBlogPosts');

const sectionHTML = html.slice(s1, sEnd);
const matches = sectionHTML.match(/src="([^"]+)"/g) || [];
const imgPaths = matches.map(m => m.replace('src="', '').replace('"', '')).filter(p => p.includes('/images/'));

const uniquePaths = new Set(imgPaths);
console.log('Total img src occurrences in grid:', imgPaths.length);
console.log('Unique img src paths:', uniquePaths.size);

Array.from(uniquePaths).forEach((p, i) => console.log(`${i+1}. ${p}`));
