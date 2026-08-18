const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');

const newDesktopDropdown = `<li class="headerNavLink  headerNavLink--withSubmenu " role="none" data-menu-item="3">
                                        <a href="#" role="menuitem" aria-haspopup="true" aria-expanded="false">Developments</a>

                                        <svg xmlns="http://www.w3.org/2000/svg" class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><use href="#svgIcon-chevron-down-menu"/></svg>

                                        <div class="navSubmenu" role="menu" aria-label="Developments submenu" data-submenu="3">
                                            <ul class="navSubmenu__list">
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/skala-villas" class="navSubmenu__link" role="menuitem">
                                                Skala Villas
                                                    </a>
                                                </li>
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/city-avenue" class="navSubmenu__link" role="menuitem">
                                                City Avenue
                                                    </a>
                                                </li>
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/milos" class="navSubmenu__link" role="menuitem">
                                                Milos Residence
                                                    </a>
                                                </li>
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/rivan" class="navSubmenu__link" role="menuitem">
                                                Rivan Tower
                                                    </a>
                                                </li>
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/valencia-residence" class="navSubmenu__link" role="menuitem">
                                                Valencia Residence
                                                    </a>
                                                </li>
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/flora-villas" class="navSubmenu__link" role="menuitem">
                                                Flora Villas
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>`;

const newMobileItem = `<li class="mobileMenuList__item">
                                                <button class="mobileMenuList__button" data-goto-panel="level1-3">
                                    <span>Developments</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mobileMenuList__chevron" width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><use href="#svgIcon-chevron-left"/></svg>                                </button>
                                            </li>`;

const newMobilePanel = `

                                    <div class="mobileMenu__panel" data-panel="level1-3">
                                        <div class="mobileMenuHeader">
                                            <button class="mobileMenuHeader__back" data-goto-panel="root" aria-label="Go back">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><use href="#svgIcon-chevron-left"/></svg>                                </button>
                                            <span class="mobileMenuHeader__title">Developments</span>
                                            <button class="mobileMenuHeader__close" data-mobile-menu-close aria-label="Close menu">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" fill="none"><use href="#svgIcon-close"/></svg>                                </button>
                                        </div>
                                        <ul class="mobileMenuList">
                                            <li class="mobileMenuList__item">
                                                <a href="/en/development/skala-villas" class="mobileMenuList__link">Skala Villas</a>
                                            </li>
                                            <li class="mobileMenuList__item">
                                                <a href="/en/development/city-avenue" class="mobileMenuList__link">City Avenue</a>
                                            </li>
                                            <li class="mobileMenuList__item">
                                                <a href="/en/development/milos" class="mobileMenuList__link">Milos Residence</a>
                                            </li>
                                            <li class="mobileMenuList__item">
                                                <a href="/en/development/rivan" class="mobileMenuList__link">Rivan Tower</a>
                                            </li>
                                            <li class="mobileMenuList__item">
                                                <a href="/en/development/valencia-residence" class="mobileMenuList__link">Valencia Residence</a>
                                            </li>
                                            <li class="mobileMenuList__item">
                                                <a href="/en/development/flora-villas" class="mobileMenuList__link">Flora Villas</a>
                                            </li>
                                        </ul>
                                    </div>`;

function getAllHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllHtmlFiles(filePath, fileList);
        } else if (file.endsWith('.html')) {
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

    // Update existing navSubmenu__list if missing Valencia Residence
    if (content.includes('navSubmenu__list') && !content.includes('valencia-residence')) {
        const listRegex = /<ul class="navSubmenu__list">[\s\S]*?<\/ul>/i;
        const newSubmenuList = `<ul class="navSubmenu__list">
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/skala-villas" class="navSubmenu__link" role="menuitem">
                                                Skala Villas
                                                    </a>
                                                </li>
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/city-avenue" class="navSubmenu__link" role="menuitem">
                                                City Avenue
                                                    </a>
                                                </li>
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/milos" class="navSubmenu__link" role="menuitem">
                                                Milos Residence
                                                    </a>
                                                </li>
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/rivan" class="navSubmenu__link" role="menuitem">
                                                Rivan Tower
                                                    </a>
                                                </li>
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/valencia-residence" class="navSubmenu__link" role="menuitem">
                                                Valencia Residence
                                                    </a>
                                                </li>
                                                <li class="navSubmenu__item" role="none">
                                                    <a href="/en/development/flora-villas" class="navSubmenu__link" role="menuitem">
                                                Flora Villas
                                                    </a>
                                                </li>
                                            </ul>`;
        content = content.replace(listRegex, newSubmenuList);
        modified = true;
    }

    // Update mobile menu if missing Valencia Residence
    if (content.includes('data-panel="level1-3"') && !content.includes('valencia-residence')) {
        const mobilePanelRegex = /<div class="mobileMenu__panel" data-panel="level1-3">[\s\S]*?<\/div>/i;
        content = content.replace(mobilePanelRegex, newMobilePanel.trim());
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
    }
}

console.log(`Synced navbars across ${updatedCount} HTML files!`);
