const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');
const indexHtmlPath = path.join(publicDir, 'index.html');
const indexCssPath = path.join(publicDir, 'index.css');
const coreCssPath = path.join(publicDir, 'build/assets/core-BJlXrooN.css');

// 1. Read origin header
const headerHtml = fs.readFileSync(path.join(__dirname, 'origin_header.html'), 'utf8');

// 2. Read index.html
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Find boundaries of header in index.html
const headerStart = indexHtml.indexOf('<header class="hero__content-top">');
const heroMiddleStart = indexHtml.indexOf('<section class="hero__content-middle">');

if (headerStart === -1 || heroMiddleStart === -1) {
    console.error('Could not find header or hero__content-middle in index.html');
    process.exit(1);
}

const beforeHeader = indexHtml.substring(0, headerStart);
const afterHeroMiddle = indexHtml.substring(heroMiddleStart);

// Clean replacement
const updatedIndexHtml = beforeHeader + headerHtml + '\n                    ' + afterHeroMiddle;
fs.writeFileSync(indexHtmlPath, updatedIndexHtml, 'utf8');
console.log('✓ index.html successfully updated with original clean navbar from repo!');

// 3. Update CSS rules to guarantee transparent, dark-pill-free hero navbar on homepage
const heroNavbarStyles = `
/* ==========================================================================
   HOMEPAGE TRANSPARENT FLOATING NAVBAR (NO DARK BACKGROUND)
   ========================================================================== */
.hero__content-top {
  padding: 1.5rem 2rem !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  position: relative !important;
  z-index: 1000 !important;
  width: 100% !important;
  max-width: 100rem !important;
  margin: 0 auto !important;
  box-sizing: border-box !important;
}

.hero__content-top .navigationMobile {
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  padding: 0 !important;
  max-width: 100% !important;
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  height: auto !important;
}

.hero__content-top .navigationMobile:hover {
  border: none !important;
  box-shadow: none !important;
}

.hero__content-top .navigationMobile__left-desktopLogo,
.hero__content-top .navigationMobile__left-desktopLogo a,
.hero__content-top .navigationMobile__left-desktopLogo span,
.hero__content-top .navigationMobile__left-mobileLogo,
.hero__content-top .navigationMobile__left-mobileLogo a,
.hero__content-top .brand-logo-badge,
.hero__content-top .navbar-logo-badge {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 0 !important;
  border-radius: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  text-decoration: none !important;
  transform: none !important;
}

.hero__content-top .navigationMobile__left-desktopLogo img {
  height: 48px !important;
  width: auto !important;
  max-width: 260px !important;
  display: block !important;
  object-fit: contain !important;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45)) !important;
}

.hero__content-top .navigationMobile__left-mobileLogo img {
  height: 38px !important;
  width: auto !important;
  max-width: 200px !important;
  display: block !important;
  object-fit: contain !important;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.45)) !important;
}

.hero__content-top .headerNavLinks {
  display: flex !important;
  align-items: center !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  gap: 2rem !important;
}

.hero__content-top .headerNavLink {
  position: relative !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 5px !important;
}

.hero__content-top .headerNavLink > a {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  color: #ffffff !important;
  font-size: 0.92rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.8px !important;
  text-transform: uppercase !important;
  padding: 8px 4px !important;
  border-radius: 0 !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  transition: color 0.2s ease, text-shadow 0.2s ease !important;
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center !important;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6) !important;
  white-space: nowrap !important;
}

.hero__content-top .headerNavLink > a:hover,
.hero__content-top .headerNavLink:hover > a {
  color: #e8cf8a !important;
  text-shadow: 0 0 12px rgba(232, 207, 138, 0.6) !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.hero__content-top .headerNavLinks .chevron {
  color: rgba(255, 255, 255, 0.85) !important;
  fill: rgba(255, 255, 255, 0.85) !important;
  stroke: rgba(255, 255, 255, 0.85) !important;
  transition: transform 0.25s ease, color 0.25s ease !important;
  display: flex !important;
  align-items: center !important;
}

.hero__content-top .headerNavLink:hover .chevron {
  transform: rotate(180deg) !important;
  color: #e8cf8a !important;
  fill: #e8cf8a !important;
  stroke: #e8cf8a !important;
}

.hero__content-top .navigationMobile__left-hamburger {
  display: none !important;
  color: #ffffff !important;
  background: none !important;
  border: none !important;
  cursor: pointer !important;
}
.hero__content-top .navigationMobile__left-hamburger svg {
  fill: #ffffff !important;
  color: #ffffff !important;
}

@media (max-width: 992px) {
  .hero__content-top .navigationMobile__left-hamburger {
    display: flex !important;
  }
  .hero__content-top .navigationMobile__left-desktopLogo {
    display: none !important;
  }
  .hero__content-top .navigationMobile__left-mobileLogo {
    display: flex !important;
  }
  .hero__content-top .headerNavLinks {
    display: none !important;
  }
}
`;

// Update index.css
let indexCss = fs.readFileSync(indexCssPath, 'utf8');
// Remove any duplicate or conflicting hero navbar styles
const marker = '/* ==========================================================================\n   HOMEPAGE TRANSPARENT FLOATING NAVBAR';
if (indexCss.includes(marker)) {
    const idx = indexCss.indexOf(marker);
    indexCss = indexCss.substring(0, idx);
}
indexCss += '\n' + heroNavbarStyles;
fs.writeFileSync(indexCssPath, indexCss, 'utf8');
console.log('✓ index.css updated with homepage transparent navbar styles');

// Update core-BJlXrooN.css
if (fs.existsSync(coreCssPath)) {
    let coreCss = fs.readFileSync(coreCssPath, 'utf8');
    if (coreCss.includes(marker)) {
        const idx = coreCss.indexOf(marker);
        coreCss = coreCss.substring(0, idx);
    }
    coreCss += '\n' + heroNavbarStyles;
    fs.writeFileSync(coreCssPath, coreCss, 'utf8');
    console.log('✓ core-BJlXrooN.css updated with homepage transparent navbar styles');
}
