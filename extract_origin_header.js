const { execSync } = require('child_process');
const fs = require('fs');
const originHtml = execSync('git show origin/main:src/www.fgrealty.qa/index.html', { maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' });

const start = originHtml.indexOf('<header class="hero__content-top">');
const end = originHtml.indexOf('</header>', start);

console.log('start index:', start, 'end index:', end);
if (start !== -1 && end !== -1) {
    const headerHtml = originHtml.substring(start, end + 9);
    console.log('Header length:', headerHtml.length);
    fs.writeFileSync('origin_header.html', headerHtml, 'utf8');
    console.log('Written to origin_header.html');
}
