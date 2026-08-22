const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');
const indexCssPath = path.join(publicDir, 'index.css');
const coreCssPath = path.join(publicDir, 'build/assets/core-BJlXrooN.css');
const homeNavCssPath = path.join(__dirname, 'home_nav.css');

const megaMenuStyles = `
/* ==========================================================================
   ULTRA-LUXURY MEGA MENU DROPDOWNS (HIGH CONTRAST & VISIBILITY)
   ========================================================================== */
.navMegaMenu,
.devMegaMenuCustom,
.navSubmenu {
  position: absolute !important;
  top: calc(100% + 10px) !important;
  background: rgba(12, 12, 18, 0.97) !important;
  backdrop-filter: blur(25px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(180%) !important;
  border: 1px solid rgba(201, 168, 76, 0.38) !important;
  border-radius: 14px !important;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), 0 0 25px rgba(201, 168, 76, 0.15) !important;
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
  animation: megaMenuFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
}

@keyframes megaMenuFadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
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
  color: #e7cf8a !important;
  font-weight: 700 !important;
  font-size: 0.75rem !important;
  letter-spacing: 1.3px !important;
  text-transform: uppercase !important;
  border-bottom: 1.5px solid rgba(201, 168, 76, 0.35) !important;
  padding-bottom: 8px !important;
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

.navMegaMenu__column-link,
.navMegaMenu a,
.devMegaMenuCustom a,
.navSubmenu__link {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  font-size: 0.88rem !important;
  font-weight: 500 !important;
  color: #ffffff !important;
  text-decoration: none !important;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
  display: inline-block !important;
  white-space: nowrap !important;
  opacity: 0.95 !important;
  padding: 3px 0 !important;
  background: transparent !important;
}

.navMegaMenu__column-link:hover,
.navMegaMenu a:hover,
.devMegaMenuCustom a:hover,
.navSubmenu__link:hover {
  color: #e8cf8a !important;
  transform: translateX(4px) !important;
  text-shadow: 0 0 10px rgba(232, 207, 138, 0.6) !important;
  opacity: 1 !important;
  background: transparent !important;
}
`;

// Helper to replace or append
function updateCssFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    const marker = '/* ==========================================================================\n   ULTRA-LUXURY MEGA MENU DROPDOWNS';
    if (content.includes(marker)) {
        content = content.substring(0, content.indexOf(marker));
    }
    content += '\n' + megaMenuStyles;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✓ Updated', filePath);
}

updateCssFile(indexCssPath);
updateCssFile(coreCssPath);
updateCssFile(homeNavCssPath);
