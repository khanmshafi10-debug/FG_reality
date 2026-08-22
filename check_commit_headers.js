const { execSync } = require('child_process');
const fs = require('fs');

const commits = ['2cafaa6', 'eefd755', '8d27456', '44b597e', '2a8a2da', '3f17fbf'];

commits.forEach(c => {
    try {
        const html = execSync(`git show ${c}:src/www.fgrealty.qa/index.html`, { maxBuffer: 10 * 1024 * 1024, encoding: 'utf8' });
        const s = html.indexOf('<header class="hero__content-top">');
        const e = html.indexOf('</header>', s);
        console.log(`Commit ${c} header length:`, e !== -1 && s !== -1 ? (e + 9 - s) : 'not found');
        if (s !== -1 && e !== -1) {
            fs.writeFileSync(`header_${c}.html`, html.substring(s, e + 9), 'utf8');
        }
    } catch (err) {
        console.log(`Commit ${c} error:`, err.message);
    }
});
