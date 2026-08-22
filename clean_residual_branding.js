const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');

function getAllFiles(dir, list = []) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
        const full = path.join(dir, d.name);
        if (d.isDirectory()) getAllFiles(full, list);
        else if (d.name.endsWith('.html') || d.name.endsWith('.js') || d.name.endsWith('.json')) list.push(full);
    });
    return list;
}

const files = getAllFiles(publicDir);
let fixedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // 1. Remove appBanner div if any left
    if (content.includes('class="appBanner"')) {
        const appBannerRegex = /<div class="appBanner"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi;
        if (appBannerRegex.test(content)) {
            content = content.replace(appBannerRegex, '');
            modified = true;
        }
        const appBannerAlt = /<div class="appBanner"[\s\S]*?<\/div>\s*<\/div>/gi;
        if (appBannerAlt.test(content)) {
            content = content.replace(appBannerAlt, '');
            modified = true;
        }
    }

    // 2. Remove all app store links (Apple / Google Play for fgrealty)
    if (content.includes('apps.apple.com/us/app/fgrealty') || content.includes('play.google.com/store/apps/details?id=qa.fgrealty')) {
        content = content.replace(/https:\/\/apps\.apple\.com\/us\/app\/fgrealty\/id1537303031/gi, '#');
        content = content.replace(/https:\/\/play\.google\.com\/store\/apps\/details\?id=qa\.fgrealty\.app\.mobile/gi, '#');
        content = content.replace(/https?:\/\/apps\.apple\.com[^\s"']*/gi, '#');
        content = content.replace(/https?:\/\/play\.google\.com\/store\/apps\/details\?id=[^\s"']*/gi, '#');
        modified = true;
    }

    // 3. Replace all remaining fgrealty domains / URLs
    if (/fgrealty\.qa/i.test(content)) {
        content = content.replace(/https?:\/\/(?:www\.)?fgrealty\.qa\/en\/privacy-policy(?:\.html)?/gi, '/en/privacy-policy.html');
        content = content.replace(/https?:\/\/(?:www\.)?fgrealty\.qa\/en\/terms-and-conditions(?:\.html)?/gi, '/en/terms-and-conditions.html');
        content = content.replace(/https?:\/\/(?:www\.)?fgrealty\.qa\/en\/cookie-policy/gi, '/en/privacy-policy.html');
        content = content.replace(/https?:\/\/(?:www\.)?fgrealty\.qa\/en\/about-us/gi, '/en/about.html');
        content = content.replace(/https?:\/\/(?:www\.)?fgrealty\.qa\/en\/contact-us/gi, '/en/contact.html');
        content = content.replace(/https?:\/\/(?:www\.)?fgrealty\.qa\/en\/areas/gi, '/en/areas.html');
        content = content.replace(/https?:\/\/(?:www\.)?fgrealty\.qa\/en\/developments/gi, '/en/developments.html');
        content = content.replace(/https?:\/\/(?:www\.)?fgrealty\.qa\//gi, '/');
        content = content.replace(/https?:\/\/(?:www\.)?fgrealty\.qa/gi, '/');
        content = content.replace(/office@fgrealty\.qa/gi, 'office@primeview.qa');
        content = content.replace(/csr@fgrealty\.qa/gi, 'office@primeview.qa');
        content = content.replace(/commercial@fgrealty\.qa/gi, 'office@primeview.qa');
        content = content.replace(/@fgrealty_qatar/gi, '@primeview_qatar');
        content = content.replace(/fgrealty/gi, 'primeview');
        modified = true;
    }

    // 4. Clean up any remaining STA Group footer logo or text
    if (content.includes('STA-logo') || content.includes('A platform by')) {
        content = content.replace(/<div class="footer__poweredBy">[\s\S]*?<\/div>/gi, '<div class="footer__copyright"><span class="text-grey-50 text-xs">© 2026 Prime View Real Estate W.L.L. All Rights Reserved.</span></div>');
        modified = true;
    }

    // 5. Clean up any remaining Find Great Realty
    if (/Find Great Realty/i.test(content)) {
        content = content.replace(/Find Great Realty W\.L\.L\./gi, 'Prime View Real Estate W.L.L.');
        content = content.replace(/Find Great Realty WLL/gi, 'Prime View Real Estate WLL');
        content = content.replace(/Find Great Realty/gi, 'Prime View Real Estate');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        fixedFiles++;
    }
});

console.log(`Cleaned up residual branding / links in ${fixedFiles} files.`);
