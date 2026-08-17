const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');

function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, fileList);
        } else if (!['learn.html', 'find-agent.html', 'careers.html', 'developments.html'].includes(file)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const files = getAllFiles(publicDir);
let updatedCount = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    if (content.includes('Join Our Team')) {
        content = content.replace(/<li[^>]*>\s*<a href="\/en\/careers"[^>]*>\s*Join Our Team\s*<\/a>\s*<\/li>/gi, '');
        content = content.replace(/<a href="\/en\/careers"[^>]*>\s*Join Our Team\s*<\/a>/gi, '');
        content = content.replace(/Join Our Team/g, '');
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
    }
}

console.log(`Successfully purged remaining Join Our Team references in ${updatedCount} files!`);
