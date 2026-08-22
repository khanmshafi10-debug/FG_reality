const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');
const indexCssPath = path.join(publicDir, 'index.css');
const coreCssPath = path.join(publicDir, 'build/assets/core-BJlXrooN.css');

// Build the complete, clean navbar stylesheet
const completeNavCss = `
/* ==========================================================================
   1. HOMEPAGE HERO NAVBAR (Original Clean Transparent Floating Layout)
   ========================================================================== */
.hero__content-top {
  padding: 1.5rem 0 !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  position: relative !important;
  z-index: 1000 !important;
  width: 100% !important;
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

.hero__content-top .navigationMobile__left-desktopLogo a,
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
}

.hero__content-top .navigationMobile__left-desktopLogo img,
.hero__content-top .navigationMobile__left-mobileLogo img {
  height: 48px !important;
  width: auto !important;
  max-width: 260px !important;
  display: block !important;
  object-fit: contain !important;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4)) !important;
}

.hero__content-top .headerNavLinks {
  display: flex !important;
  align-items: center !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  gap: 12px !important;
}

.hero__content-top .headerNavLink > a {
  color: #ffffff !important;
  font-size: 0.88rem !important;
  font-weight: 500 !important;
  letter-spacing: 0.5px !important;
  text-transform: uppercase !important;
  padding: 6px 12px !important;
  border-radius: 6px !important;
  background: transparent !important;
  border: none !important;
  transition: all 0.2s ease !important;
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
}

.hero__content-top .headerNavLink > a:hover,
.hero__content-top .headerNavLink.headerNavLink--active > a {
  color: #ffffff !important;
  background: rgba(255, 255, 255, 0.15) !important;
}

.hero__content-top .headerNavLinks .chevron {
  color: #ffffff !important;
  fill: #ffffff !important;
  stroke: #ffffff !important;
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
  .hero__content-top .headerNavLinks {
    display: none !important;
  }
}

/* ==========================================================================
   2. REGULAR PAGES LIGHT THEME NAVBAR & HIGH-CONTRAST LOGO BADGE
   ========================================================================== */
.listingPageMenuWrapper,
.listingPageMenuWrapper--withDivider {
  background: rgba(255, 255, 255, 0.96) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border-bottom: 1px solid rgba(228, 224, 216, 0.9) !important;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04) !important;
  position: sticky !important;
  top: 0 !important;
  z-index: 999 !important;
  padding: 8px 0 !important;
}

.listingPageMenuWrapper .navigationMobile,
.listingPageMenuWrapper .navigationMobile--colorInverted,
.listingPageMenuWrapper .navigationMobile--regularPage {
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
  max-width: 1400px !important;
  margin: 0 auto !important;
  padding: 0 24px !important;
  height: 60px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
}

/* Dark Luxury Badge ONLY on regular light theme pages & project detail pages */
.listingPageMenuWrapper .navigationMobile__left-desktopLogo a,
.listingPageMenuWrapper .navigationMobile__left-mobileLogo a,
.project-top-nav__logo,
.brand-logo-badge-light {
  display: inline-flex !important;
  align-items: center !important;
  background: #0e0d11 !important;
  padding: 6px 16px !important;
  border-radius: 10px !important;
  border: 1px solid rgba(201, 168, 76, 0.45) !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.14) !important;
  transition: all 0.25s ease !important;
  text-decoration: none !important;
}

.listingPageMenuWrapper .navigationMobile__left-desktopLogo a:hover,
.listingPageMenuWrapper .navigationMobile__left-mobileLogo a:hover,
.project-top-nav__logo:hover,
.brand-logo-badge-light:hover {
  border-color: #c9a84c !important;
  box-shadow: 0 4px 20px rgba(201, 168, 76, 0.3) !important;
  transform: translateY(-1px) !important;
}

.listingPageMenuWrapper .navigationMobile__left-desktopLogo img,
.listingPageMenuWrapper .navigationMobile__left-mobileLogo img,
.project-top-nav__logo img {
  height: 38px !important;
  width: auto !important;
  max-width: 220px !important;
  display: block !important;
  object-fit: contain !important;
  filter: none !important;
}

.listingPageMenuWrapper .headerNavLinks {
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.listingPageMenuWrapper .headerNavLinks .headerNavLink > a {
  color: #1c1a16 !important;
  font-size: 0.88rem !important;
  font-weight: 600 !important;
  letter-spacing: 0.3px !important;
  padding: 8px 14px !important;
  border-radius: 8px !important;
  text-decoration: none !important;
  transition: all 0.2s ease !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
}

.listingPageMenuWrapper .headerNavLinks .headerNavLink > a:hover,
.listingPageMenuWrapper .headerNavLinks .headerNavLink.headerNavLink--active > a {
  color: #b8902a !important;
  background: rgba(184, 144, 42, 0.08) !important;
}

.listingPageMenuWrapper .headerNavLinks .chevron {
  color: #1c1a16 !important;
  fill: #1c1a16 !important;
  stroke: #1c1a16 !important;
}

.listingPageMenuWrapper .navigationMobile__left-hamburger {
  color: #1c1a16 !important;
  background: none !important;
  border: none !important;
}
.listingPageMenuWrapper .navigationMobile__left-hamburger svg {
  fill: #1c1a16 !important;
  color: #1c1a16 !important;
}
;

// Read index.css and remove old conflict rules, then append clean stylesheet
let indexCss = fs.readFileSync(indexCssPath, 'utf8');
const splitPoint = indexCss.indexOf('/* ======================================================== */\n/* ULTRA-PREMIUM GLASSMORPHISM');
if (splitPoint !== -1) {
  indexCss = indexCss.substring(0, splitPoint).trim();
} else {
  const altSplit = indexCss.indexOf('/* ==========================================================================');
  if (altSplit !== -1) {
    indexCss = indexCss.substring(0, altSplit).trim();
  }
}

indexCss += '\n\n' + completeNavCss;
fs.writeFileSync(indexCssPath, indexCss, 'utf8');
console.log('✓ index.css successfully updated with separate homepage hero nav & regular pages nav!');

// Ensure core-BJlXrooN.css is also cleaned and updated
if (fs.existsSync(coreCssPath)) {
  let coreCss = fs.readFileSync(coreCssPath, 'utf8');
  const coreSplit = coreCss.indexOf('/* ==========================================================================');
  if (coreSplit !== -1) {
    coreCss = coreCss.substring(0, coreSplit).trim();
  }
  coreCss += '\n\n' + completeNavCss;
  fs.writeFileSync(coreCssPath, coreCss, 'utf8');
  console.log('✓ core-BJlXrooN.css successfully synced!');
}
