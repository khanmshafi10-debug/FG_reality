const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');
const indexHtmlPath = path.join(publicDir, 'index.html');
const indexCssPath = path.join(publicDir, 'index.css');
const coreCssPath = path.join(publicDir, 'build/assets/core-BJlXrooN.css');
const homeNavCssPath = path.join(__dirname, 'home_nav.css');

// 1. Clean and update index.html
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Ensure dropdown cards are white with gold border
indexHtml = indexHtml.replace(/background:\s*rgba\(12,\s*12,\s*18,\s*0\.97\);?/g, 'background: rgba(255, 255, 255, 0.98);');
// Ensure inline link colors in header mega menus are black #111111
indexHtml = indexHtml.replace(/(class="navMegaMenu__column-link"[^>]*style="[^"]*?)color:\s*#ffffff;?/g, '$1color: #111111;');

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
console.log('✓ index.html updated: mega menu link color set to black');

// 2. Comprehensive Dropdown Styling with BLACK link text
const megaMenuStyles = `
/* ==========================================================================
   PREMIUM MEGA MENU DROPDOWNS - CRISP BLACK LINKS & GOLD HEADINGS
   ========================================================================== */
.navMegaMenu,
.devMegaMenuCustom,
.navSubmenu {
  position: absolute !important;
  top: calc(100% + 10px) !important;
  background: rgba(255, 255, 255, 0.98) !important;
  backdrop-filter: blur(25px) !important;
  -webkit-backdrop-filter: blur(25px) !important;
  border: 1px solid rgba(201, 168, 76, 0.35) !important;
  border-radius: 14px !important;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18), 0 0 20px rgba(201, 168, 76, 0.12) !important;
  padding: 24px 22px !important;
  z-index: 10000 !important;
  box-sizing: border-box !important;
}

.headerNavLink--withSubmenu {
  position: relative !important;
}

.headerNavLink--withSubmenu:hover .navMegaMenu,
.headerNavLink--withSubmenu:hover .devMegaMenuCustom,
.headerNavLink--withSubmenu:hover .navSubmenu {
  display: block !important;
  opacity: 1 !important;
  visibility: visible !important;
  animation: megaMenuFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
}

@keyframes megaMenuFadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.navMegaMenu__body {
  display: flex !important;
  background-color: transparent !important;
  background: transparent !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  gap: 20px !important;
  width: 100% !important;
  box-sizing: border-box !important;
  justify-content: space-between !important;
}

.navMegaMenu__column {
  flex: 1 !important;
  min-width: 170px !important;
  background: transparent !important;
}

.navMegaMenu__column-heading {
  color: #c9a84c !important;
  font-weight: 700 !important;
  font-size: 0.72rem !important;
  letter-spacing: 1.2px !important;
  text-transform: uppercase !important;
  border-bottom: 1.5px solid rgba(201, 168, 76, 0.35) !important;
  padding-bottom: 6px !important;
  margin-bottom: 12px !important;
  display: block !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  background: transparent !important;
}

.navMegaMenu__column-list,
.navSubmenu__list {
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
  background: transparent !important;
}

.navMegaMenu__column-item,
.navSubmenu__item {
  margin-bottom: 8px !important;
  list-style: none !important;
  background: transparent !important;
}

/* Inner links: ALWAYS AUTO-VISIBLE BLACK COLOR */
.navMegaMenu__column-link,
.navMegaMenu a,
.devMegaMenuCustom a,
.navSubmenu__link {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  font-size: 0.85rem !important;
  font-weight: 500 !important;
  color: #111111 !important;
  text-decoration: none !important;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
  display: inline-block !important;
  white-space: nowrap !important;
  opacity: 1 !important;
  padding: 2px 0 !important;
  background: transparent !important;
}

.navMegaMenu__column-link:hover,
.navMegaMenu a:hover,
.devMegaMenuCustom a:hover,
.navSubmenu__link:hover {
  color: #c9a84c !important;
  transform: translateX(4px) !important;
  text-shadow: 0 0 8px rgba(201, 168, 76, 0.3) !important;
  background: transparent !important;
}
`;

function updateFileCss(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    const marker = '/* ==========================================================================\n   PREMIUM MEGA MENU DROPDOWNS';
    const oldMarker = '/* ==========================================================================\n   ULTRA-LUXURY MEGA MENU DROPDOWNS';
    if (content.includes(marker)) {
        content = content.substring(0, content.indexOf(marker));
    } else if (content.includes(oldMarker)) {
        content = content.substring(0, content.indexOf(oldMarker));
    }
    content += '\n' + megaMenuStyles;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✓ Updated CSS in', filePath);
}

updateFileCss(indexCssPath);
updateFileCss(coreCssPath);
updateFileCss(homeNavCssPath);
