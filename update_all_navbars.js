const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');

// 1. Update index.css with comprehensive light-theme navbar and high-contrast logo badge
const indexCssPath = path.join(publicDir, 'index.css');
let indexCss = fs.readFileSync(indexCssPath, 'utf8');

const navStylesToAdd = `
/* ==========================================================================
   PRIME VIEW REAL ESTATE - LUXURY LIGHT THEME NAVBAR & HIGH-CONTRAST LOGO BADGE
   ========================================================================== */

/* Universal High-Contrast Logo Badge (Keeps original white+gold logo 100% visible on light & dark themes) */
.navigationMobile__left-desktopLogo a,
.navigationMobile__left-mobileLogo a,
.project-top-nav__logo a,
.project-top-nav__logo,
.brand-logo-badge,
.navbar-logo-badge {
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

.navigationMobile__left-desktopLogo a:hover,
.navigationMobile__left-mobileLogo a:hover,
.project-top-nav__logo a:hover,
.project-top-nav__logo:hover,
.brand-logo-badge:hover,
.navbar-logo-badge:hover {
  border-color: #c9a84c !important;
  box-shadow: 0 4px 20px rgba(201, 168, 76, 0.3) !important;
  transform: translateY(-1px) !important;
}

.navigationMobile__left-desktopLogo img,
.navigationMobile__left-mobileLogo img,
.project-top-nav__logo img,
.brand-logo-badge img,
.navbar-logo-badge img {
  height: 38px !important;
  width: auto !important;
  max-width: 220px !important;
  display: block !important;
  object-fit: contain !important;
  filter: none !important;
}

/* Light Theme Header Styling for Regular Pages */
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

.navigationMobile,
.navigationMobile--colorInverted,
.navigationMobile--regularPage {
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

.headerNavLinks {
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.headerNavLinks .headerNavLink > a {
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

.headerNavLinks .headerNavLink > a:hover,
.headerNavLinks .headerNavLink.headerNavLink--active > a {
  color: #b8902a !important;
  background: rgba(184, 144, 42, 0.08) !important;
}

.headerNavLinks .chevron {
  color: #1c1a16 !important;
  fill: #1c1a16 !important;
  stroke: #1c1a16 !important;
}

.navigationMobile__left-hamburger {
  color: #1c1a16 !important;
}
.navigationMobile__left-hamburger svg {
  fill: #1c1a16 !important;
  color: #1c1a16 !important;
}
`;

if (!indexCss.includes('PRIME VIEW REAL ESTATE - LUXURY LIGHT THEME NAVBAR')) {
  indexCss += '\n' + navStylesToAdd;
  fs.writeFileSync(indexCssPath, indexCss, 'utf8');
  console.log('✓ Updated index.css with luxury light-theme navbar and logo badge styles');
}

// 2. Also append to build/assets/core-BJlXrooN.css so all cached or core pages inherit it immediately
const coreCssPath = path.join(publicDir, 'build/assets/core-BJlXrooN.css');
if (fs.existsSync(coreCssPath)) {
  let coreCss = fs.readFileSync(coreCssPath, 'utf8');
  if (!coreCss.includes('brand-logo-badge')) {
    coreCss += '\n' + navStylesToAdd;
    fs.writeFileSync(coreCssPath, coreCss, 'utf8');
    console.log('✓ Injected logo badge & light theme navbar styles into build/assets/core-BJlXrooN.css');
  }
}

// 3. Update all HTML files across the site to include index.css in <head> if missing, and wrap logo in brand-logo-badge
function walkHtmlFiles(dir) {
  let files = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!full.includes('node_modules') && !full.includes('.git') && !full.includes('.gemini')) {
        files = files.concat(walkHtmlFiles(full));
      }
    } else if (file.endsWith('.html')) {
      files.push(full);
    }
  });
  return files;
}

const allHtmlFiles = walkHtmlFiles(publicDir);
let updatedCount = 0;

allHtmlFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Ensure index.css is linked in head
  if (!content.includes('href="/index.css"') && content.includes('</head>')) {
    content = content.replace('</head>', '    <link rel="stylesheet" href="/index.css">\n</head>');
    changed = true;
  }

  // Ensure desktop logo is wrapped with brand-logo-badge
  if (content.includes('class="navigationMobile__left-desktopLogo"') && !content.includes('class="brand-logo-badge"')) {
    content = content.replace(/<div class="navigationMobile__left-desktopLogo">\s*<a href="\/">\s*<img([^>]*)src="\/images\/prime-view-logo\.png"([^>]*)>\s*<\/a>\s*<\/div>/g, 
      '<div class="navigationMobile__left-desktopLogo"><a href="/" class="brand-logo-badge" aria-label="Prime View Home"><img$1src="/images/prime-view-logo.png"$2></a></div>');
    
    // Also handle alternate spacing
    content = content.replace(/<div class="navigationMobile__left-desktopLogo">\s*<a href="\/">/g,
      '<div class="navigationMobile__left-desktopLogo"><a href="/" class="brand-logo-badge" aria-label="Prime View Home">');
    
    changed = true;
  }

  // Ensure mobile logo is wrapped
  if (content.includes('class="navigationMobile__left-mobileLogo"') && !content.includes('class="brand-logo-badge"')) {
    content = content.replace(/<div class="navigationMobile__left-mobileLogo">\s*<a href="\/">/g,
      '<div class="navigationMobile__left-mobileLogo"><a href="/" class="brand-logo-badge" aria-label="Prime View Home">');
    changed = true;
  }

  // Update project top nav logo in development detail pages
  if (content.includes('class="project-top-nav__logo"') && !content.includes('class="brand-logo-badge"')) {
    content = content.replace(/<a href="\/" class="project-top-nav__logo"/g,
      '<a href="/" class="project-top-nav__logo brand-logo-badge"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
  }
});

console.log(`✓ Processed and updated navbar & logo badges across ${updatedCount} / ${allHtmlFiles.length} HTML files!`);

// 4. Re-run generate_developments_page.js & update_all_project_pages.js to align generated templates
require('./generate_developments_page.js');
require('./update_all_project_pages.js');

console.log('🎉 ALL HEADERS UPDATED: Light theme applied, logo content 100% visible via luxury dark badge without modifying logo colors!');
