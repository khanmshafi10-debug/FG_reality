const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');

function getAllHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html') && !['learn.html', 'find-agent.html', 'careers.html', 'developments.html'].includes(file)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const htmlFiles = getAllHtmlFiles(publicDir);
let updatedCount = 0;

for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // 1. Remove Desktop Header Agents menu block
    const desktopAgentsRegex = /<li class="headerNavLink\s*headerNavLink--withSubmenu\s*" role="none"\s*data-menu-item="4"[\s\S]*?<\/li>/gi;
    if (desktopAgentsRegex.test(content)) {
        content = content.replace(desktopAgentsRegex, '');
        modified = true;
    }

    // 2. Remove Desktop Header Resources link block
    const desktopResourcesRegex = /<li class="headerNavLink\s*" role="none">\s*<a href="\/learn" role="menuitem">Resources<\/a>\s*<\/li>/gi;
    if (desktopResourcesRegex.test(content)) {
        content = content.replace(desktopResourcesRegex, '');
        modified = true;
    }

    // 3. Remove Mobile Menu Agents button item from root panel
    const mobileAgentsItemRegex = /<li class="mobileMenuList__item">\s*<button class="mobileMenuList__button" data-goto-panel="level1-4">[\s\S]*?<\/button>\s*<\/li>/gi;
    if (mobileAgentsItemRegex.test(content)) {
        content = content.replace(mobileAgentsItemRegex, '');
        modified = true;
    }

    // 4. Remove Mobile Menu Resources link item from root panel
    const mobileResourcesItemRegex = /<li class="mobileMenuList__item">\s*<a href="\/learn" class="mobileMenuList__link">Resources<\/a>\s*<\/li>/gi;
    if (mobileResourcesItemRegex.test(content)) {
        content = content.replace(mobileResourcesItemRegex, '');
        modified = true;
    }

    // 5. Remove Mobile Menu Panel for Agents (level1-4)
    const mobileAgentsPanelRegex = /<div class="mobileMenu__panel" data-panel="level1-4">[\s\S]*?<\/div>/gi;
    if (mobileAgentsPanelRegex.test(content)) {
        content = content.replace(mobileAgentsPanelRegex, '');
        modified = true;
    }

    // 6. Remove any footer links to /learn, /en/find-agent, /en/careers
    const footerLearnRegex = /<a href="\/learn"[\s\S]*?<\/a>/gi;
    if (footerLearnRegex.test(content)) {
        content = content.replace(footerLearnRegex, '');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
    }
}

console.log(`Successfully removed Resources and Agents from navbar in ${updatedCount} HTML files!`);
