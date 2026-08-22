const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');
const indexHtmlPath = path.join(publicDir, 'index.html');
const indexCssPath = path.join(publicDir, 'index.css');
const coreCssPath = path.join(publicDir, 'build/assets/core-BJlXrooN.css');
const homeNavCssPath = path.join(__dirname, 'home_nav.css');

// 1. Clean up inline styles in index.html for all mega menus
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Replace any inline background: rgba(255, 255, 255, 0.98) or color: #1e1e24 with clean mega menu classes
indexHtml = indexHtml.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.98\);?/g, 'background: rgba(12, 12, 18, 0.97);');
indexHtml = indexHtml.replace(/color:\s*#1e1e24;?/g, 'color: #ffffff;');

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
console.log('✓ index.html mega menus updated to high-contrast white text on dark luxury background');

// 2. Comprehensive Mega Menu CSS Styles
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
  gap: 20px !important;
  width: 100% !important;
  box-sizing: border-box !important;
  justify-content: space-between !important;
}

.navMegaMenu__column {
  flex: 1 !important;
  min-width: 170px !important;
}

.navMegaMenu__column-heading {
  color: #e7cf8a !important;
  font-weight: 700 !important;
  font-size: 0.72rem !important;
  letter-spacing: 1.3px !important;
  text-transform: uppercase !important;
  border-bottom: 1.5px solid rgba(201, 168, 76, 0.35) !important;
  padding-bottom: 6px !important;
  margin-bottom: 12px !important;
  display: block !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
}

.navMegaMenu__column-list,
.navSubmenu__list {
  list-style: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

.navMegaMenu__column-item,
.navSubmenu__item {
  margin-bottom: 8px !important;
  list-style: none !important;
}

.navMegaMenu__column-link,
.navMegaMenu a,
.devMegaMenuCustom a,
.navSubmenu__link {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  font-size: 0.86rem !important;
  font-weight: 500 !important;
  color: #ffffff !important;
  text-decoration: none !important;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
  display: inline-block !important;
  white-space: nowrap !important;
  opacity: 0.92 !important;
  padding: 2px 0 !important;
}

.navMegaMenu__column-link:hover,
.navMegaMenu a:hover,
.devMegaMenuCustom a:hover,
.navSubmenu__link:hover {
  color: #e8cf8a !important;
  transform: translateX(4px) !important;
  text-shadow: 0 0 10px rgba(232, 207, 138, 0.6) !important;
  opacity: 1 !important;
}
`;

// Append to index.css
let indexCss = fs.readFileSync(indexCssPath, 'utf8');
const megaMarker = '/* ==========================================================================\n   ULTRA-LUXURY MEGA MENU DROPDOWNS';
if (indexCss.includes(megaMarker)) {
    indexCss = indexCss.substring(0, indexCss.indexOf(megaMarker));
}
indexCss += '\n' + megaMenuStyles;
fs.writeFileSync(indexCssPath, indexCss, 'utf8');
console.log('✓ index.css updated with high-visibility mega menu styles');

// Append to core-BJlXrooN.css
if (fs.existsSync(coreCssPath)) {
    let coreCss = fs.readFileSync(coreCssPath, 'utf8');
    if (coreCss.includes(megaMarker)) {
        coreCss = coreCss.substring(0, coreCss.indexOf(megaMarker));
    }
    coreCss += '\n' + megaMenuStyles;
    fs.writeFileSync(coreCssPath, coreCss, 'utf8');
    console.log('✓ core-BJlXrooN.css updated with high-visibility mega menu styles');
}

// Update home_nav.css
if (fs.existsSync(homeNavCssPath)) {
    let homeNavCss = fs.readFileSync(homeNavCssPath, 'utf8');
    if (homeNavCss.includes(megaMarker)) {
        homeNavCss = homeNavCss.substring(0, homeNavCss.indexOf(megaMarker));
    }
    homeNavCss += '\n' + megaMenuStyles;
    fs.writeFileSync(homeNavCssPath, homeNavCss, 'utf8');
    console.log('✓ home_nav.css updated');
}
