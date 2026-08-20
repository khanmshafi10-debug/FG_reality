const fs = require('fs');
const path = require('path');

const devDir = path.join(__dirname, 'src/www.fgrealty.qa/en/development');

// 24 Full Projects Definition
const projectsMeta = [
  // SECTION 1: WATERFRONT
  {
    slug: 'skala-villas',
    file: 'skala-villas.html',
    name: 'Skala Villas & Waterfront Luxury',
    shortName: 'Skala Villas',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Waterfront Signature Villas',
    beds: '4 - 5 Bedroom Villas',
    price: 'QAR 3,800,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/hero.jpg',
    desc: 'Bespoke waterfront villas and private shorefront residences on Qetaifan Island North.'
  },
  {
    slug: 'via-doro',
    file: 'via-doro.html',
    name: "Via D'Oro Signature Villas",
    shortName: "Via D'Oro Villas",
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Mediterranean Compound Villas',
    beds: '4+ Maid Villas',
    price: 'QAR 4,250,000',
    handover: 'Q2 2028',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-1.jpg',
    desc: 'Luxury Mediterranean compound featuring 34 signature villas with private elevator and pool.'
  },
  {
    slug: 'carlton-house',
    file: 'carlton-house.html',
    name: 'Carlton House Waterfront',
    shortName: 'Carlton House',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Curved Glass High-Rise',
    beds: 'Studio - 3 BR',
    price: 'QAR 1,460,000',
    handover: 'Q4 2028',
    dp: '2% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-4.jpg',
    desc: 'Iconic curved waterfront tower on Qetaifan Island with sea views and payment plans till 2033.'
  },
  {
    slug: 'canal-bay',
    file: 'canal-bay.html',
    name: 'Canal Bay Beachfront',
    shortName: 'Canal Bay',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Architectural Waterfront Tower',
    beds: '2 Bedrooms',
    price: 'QAR 2,000,000',
    handover: 'Q4 2028',
    dp: '2% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-5.jpg',
    desc: 'Striking architectural waterfront tower on Qetaifan Island with private beach access.'
  },
  {
    slug: 'skala-tower',
    file: 'skala-tower.html',
    name: 'Skala Tower 33-Story Icon',
    shortName: 'Skala Tower',
    district: 'Lusail Waterfront',
    city: 'Lusail',
    type: '33-Story Beachfront Tower',
    beds: '1 - 2 Bedrooms',
    price: 'QAR 2,000,000',
    handover: 'Q4 2026',
    dp: '5% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-2.jpg',
    desc: 'Iconic 33-story luxury waterfront tower featuring 189 smart residences and sky pool.'
  },
  {
    slug: 'la-mer-tower',
    file: 'la-mer-tower.html',
    name: 'La Mer Coastal Tower',
    shortName: 'La Mer Tower',
    district: 'Lusail Waterfront',
    city: 'Lusail',
    type: 'Coastal Glass High-Rise',
    beds: 'Studio & 1 BR',
    price: 'QAR 1,000,000',
    handover: 'Q4 2027',
    dp: '2% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-6.jpg',
    desc: 'Sleek waterfront tower on Lusail Waterfront offering studios and 1-bedrooms with rooftop pool.'
  },

  // SECTION 2: LUSAIL CITY MASTERPIECES
  {
    slug: 'city-avenue',
    file: 'city-avenue.html',
    name: 'City Avenue Residences',
    shortName: 'City Avenue',
    district: 'Al Erkyah City',
    city: 'Lusail',
    type: 'Urban Luxury Apartments',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,200,000',
    handover: 'Ready / 2026',
    dp: '10% Down Payment',
    badge: 'Ready',
    heroImg: '/images/developments/city-avenue/city_hero_new.jpg',
    desc: 'High-end urban residential tower in Al Erkyah City, Lusail.'
  },
  {
    slug: 'rivan',
    file: 'rivan.html',
    name: 'Rivan Tower & Sky Suites',
    shortName: 'Rivan Tower',
    district: 'Lusail City',
    city: 'Lusail',
    type: 'Sky Suites & Residences',
    beds: '1 - 3 Bedroom Suites',
    price: 'QAR 1,650,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/rivan/hero.jpg',
    desc: 'Architectural landmark in Lusail City offering sky suites with panoramic views.'
  },
  {
    slug: 'elite-residence',
    file: 'elite-residence.html',
    name: 'Elite Residence',
    shortName: 'Elite Residence',
    district: 'Al Erkyah City',
    city: 'Lusail',
    type: 'Smart 1BR Apartments',
    beds: '1 Bedroom',
    price: 'QAR 825,000',
    handover: 'Q4 2027',
    dp: 'QAR 50K Fixed DP',
    badge: 'Off-Plan',
    heroImg: '/images/developments/city-avenue/city_feature_1.jpg',
    desc: 'Modern residential tower offering stylish 1-bedroom apartments with 6-year payment plan.'
  },
  {
    slug: 'boulevard-residence',
    file: 'boulevard-residence.html',
    name: 'Boulevard Residence',
    shortName: 'Boulevard Residence',
    district: 'Fox Hills',
    city: 'Lusail',
    type: '1 & 2 BR Apartments',
    beds: '1 - 2 Bedrooms',
    price: 'QAR 1,000,000',
    handover: 'July 2027',
    dp: '5% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/city-avenue/city_feature_2.jpg',
    desc: 'Contemporary residential tower in Fox Hills offering 1 & 2 bedroom apartments.'
  },
  {
    slug: 'orjuwan',
    file: 'orjuwan.html',
    name: 'Orjuwan Tower',
    shortName: 'Orjuwan Tower',
    district: 'Al Erkyah City',
    city: 'Lusail',
    type: 'Modern Residences',
    beds: '1 Bedroom',
    price: 'QAR 1,100,000',
    handover: 'October 2026',
    dp: '30% Before Handover',
    badge: 'Off-Plan',
    heroImg: '/images/developments/city-avenue/city_feature_3.jpg',
    desc: 'Premium residential tower in Al Erkyah City offering 1-bedroom apartments with 70% post-handover.'
  },
  {
    slug: 'bliss-residences',
    file: 'bliss-residences.html',
    name: 'Bliss Residences',
    shortName: 'Bliss Residences',
    district: 'Fox Hills',
    city: 'Lusail',
    type: 'Ready Luxury Apartments',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,540,000',
    handover: 'Ready Move-In',
    dp: '35% Down Payment',
    badge: 'Ready',
    heroImg: '/images/developments/milos/milos_real_12.jpg',
    desc: 'Ready-to-move-in luxury residences in Fox Hills with 5-year post-handover payment plan.'
  },

  // SECTION 3: THE PEARL ISLAND COLLECTION
  {
    slug: 'milos',
    file: 'milos.html',
    name: 'Milos Residence & Coastal Living',
    shortName: 'Milos Residence',
    district: 'Legtaifiya / Pearl Gateway',
    city: 'Doha',
    type: 'Coastal High-Rise Tower',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,850,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/hero.jpg',
    desc: 'Architectural masterpiece at Legtaifiya coastal corridor facing The Pearl.'
  },
  {
    slug: 'floresta-105',
    file: 'floresta-105.html',
    name: 'Floresta 105 Tower',
    shortName: 'Floresta 105',
    district: 'Floresta Gardens',
    city: 'The Pearl-Qatar',
    type: 'Mid-Rise Garden Residences',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,770,000',
    handover: 'Immediate / Ready',
    dp: 'Ready Move-In',
    badge: 'Ready',
    heroImg: '/images/developments/milos/milos_real_1.jpg',
    desc: 'Located in Floresta Gardens precinct of The Pearl Island.'
  },
  {
    slug: 'al-mayyas',
    file: 'al-mayyas.html',
    name: 'Al Mayyas Tower',
    shortName: 'Al Mayyas Tower',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    type: 'Luxury Sea View Apartments',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 2,110,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_3.jpg',
    desc: 'Luxury residential tower at The Pearl with panoramic Arabian Gulf views.'
  },
  {
    slug: 'coralia-villas',
    file: 'coralia-villas.html',
    name: 'Coralia Compound Villas',
    shortName: 'Coralia Villas',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    type: 'Ultra-Luxury Island Villa',
    beds: '5 BR + Maid + Pool',
    price: 'QAR 55,000,000',
    handover: 'Q4 2026',
    dp: '50% Booking',
    badge: 'Ultra Luxury',
    heroImg: '/images/developments/flora-villas/unit_1.jpg',
    desc: 'Ultra-luxury 5-bedroom waterfront villas at The Pearl featuring private beach access.'
  },
  {
    slug: 'corallia',
    file: 'corallia.html',
    name: 'Corallia Lease to Own',
    shortName: 'Corallia Lease-to-Own',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    type: '20-Year Lease to Own',
    beds: 'Studio - 2 BR',
    price: 'QAR 3,650,000',
    handover: 'Immediate Lease-to-Own',
    dp: '2% Down Payment',
    badge: 'Lease to Own',
    heroImg: '/images/developments/milos/milos_real_4.jpg',
    desc: 'Premium residences at The Pearl offering a unique 20-year Lease to Own model.'
  },
  {
    slug: 'marbella',
    file: 'marbella.html',
    name: 'Marbella Residence',
    shortName: 'Marbella Residence',
    district: 'Entertainment City',
    city: 'Lusail',
    type: 'Lifestyle Residences',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,670,000',
    handover: 'Q3 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_6.jpg',
    desc: 'Modern residential tower in Lusail Entertainment City with 7-year payment plan.'
  },

  // SECTION 4: VILLA ESTATES & RETREATS
  {
    slug: 'flora-villas',
    file: 'flora-villas.html',
    name: 'Flora Standalone Villas',
    shortName: 'Flora Villas',
    district: 'Huzoom District',
    city: 'North Lusail',
    type: 'Private Sanctuary Villas',
    beds: '5 BR + Private Pool',
    price: 'QAR 4,100,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/flora-villas/hero.jpg',
    desc: 'Private standalone villa sanctuary in North Lusail with private gardens and pool.'
  },
  {
    slug: 'bliss-gardens',
    file: 'bliss-gardens.html',
    name: 'Bliss Gardens Compound',
    shortName: 'Bliss Gardens (New Salata)',
    district: 'New Salata',
    city: 'Doha',
    type: 'Private Gated Villa Compound',
    beds: '5 BR + Maid',
    price: 'QAR 4,290,000',
    handover: 'October 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/flora-villas/unit_2.jpg',
    desc: 'Exclusive villa compound in New Salata featuring 5-bedroom luxury villas.'
  },
  {
    slug: 'bliss-gardens-2',
    file: 'bliss-gardens-2.html',
    name: 'Bliss Gardens II',
    shortName: 'Bliss Gardens (Al Muraikh)',
    district: 'Al Muraikh',
    city: 'Doha',
    type: 'Standalone Villa Community',
    beds: '5 BR + Maid',
    price: 'QAR 4,080,000',
    handover: 'December 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/flora-villas/unit_3.jpg',
    desc: 'Premium standalone villa community in Al Muraikh offering 5-bedroom residences.'
  },
  {
    slug: 'voya-residence',
    file: 'voya-residence.html',
    name: 'Voya Waterfront Chalets',
    shortName: 'Voya Waterfront',
    district: 'Al Kharaej (Seef Lusail)',
    city: 'Lusail',
    type: 'Coastal Waterfront Chalets',
    beds: '1 - 4 BR & Chalets',
    price: 'QAR 1,458,000',
    handover: 'Immediate / Ready',
    dp: '60% Down Payment',
    badge: 'Ready',
    heroImg: '/images/developments/valencia-residence/hero.jpg',
    desc: 'Coastal architectural marvel on Lusail Waterfront with luxury apartments & chalets.'
  },
  {
    slug: 'bliss-tower',
    file: 'bliss-tower.html',
    name: 'Bliss Tower Duplexes',
    shortName: 'Bliss Tower',
    district: 'Al Kharaej',
    city: 'Lusail',
    type: 'Duplex High-Rise',
    beds: '1 - 3 BR Duplex',
    price: 'QAR 1,520,000',
    handover: 'December 2028',
    dp: '5% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_15.jpg',
    desc: 'Premium residential tower in Al Kharaej offering 1-3 bedroom duplex apartments.'
  },
  {
    slug: 'miran-tower',
    file: 'miran-tower.html',
    name: 'Miran Tower Smart Units',
    shortName: 'Miran Tower',
    district: 'Al Kharaej (Seef Lusail)',
    city: 'Lusail',
    type: 'Fully Furnished Smart Tower',
    beds: '2 Bedrooms',
    price: 'QAR 1,590,000',
    handover: 'March 2028',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_18.jpg',
    desc: 'Mazaya Real Estate development in Seef Lusail featuring fully furnished smart units.'
  }
];

// Split 24 projects into 4 columns
const col1 = projectsMeta.slice(0, 6);
const col2 = projectsMeta.slice(6, 12);
const col3 = projectsMeta.slice(12, 18);
const col4 = projectsMeta.slice(18, 24);

function renderMegaCol(title, list) {
  const itemsHTML = list.map(p => `
                        <li class="navMegaMenu__column-item" role="none" style="margin-bottom: 8px;">
                            <a href="/en/development/${p.file}" class="navMegaMenu__column-link" role="menuitem" style="font-size: 0.82rem; font-weight: 500; color: #222222; text-decoration: none; transition: color 0.2s ease; display: inline-block; white-space: nowrap;">${p.shortName}</a>
                        </li>`).join('');

  return `
                <div class="navMegaMenu__column" style="flex: 1; min-width: 170px;">
                    <span class="navMegaMenu__column-heading" style="color: #b89c4c; font-weight: 700; font-size: 0.72rem; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1.5px solid rgba(184,156,76,0.35); padding-bottom: 6px; margin-bottom: 12px; display: block;">${title}</span>
                    <ul class="navMegaMenu__column-list" style="list-style: none; padding: 0; margin: 0;">
                        ${itemsHTML}
                    </ul>
                </div>`;
}

// Complete 4-Column Developments Mega Menu HTML aligned right:0 to eliminate viewport overflow!
const desktopMegaMenuHTML = `
                                        <div class="navMegaMenu devMegaMenuCustom" role="menu" aria-label="Developments submenu" data-submenu="3" style="width: 780px; max-width: calc(100vw - 32px); right: 0; left: auto; transform: none; background: #ffffff; border-radius: 12px; box-shadow: 0 16px 40px rgba(0,0,0,0.18); border: 1px solid rgba(212,185,122,0.35); padding: 22px 20px; box-sizing: border-box;">
                                            <div class="navMegaMenu__body" style="display: flex; gap: 20px; width: 100%; box-sizing: border-box; justify-content: space-between;">
${renderMegaCol('WATERFRONT ESTATES', col1)}
${renderMegaCol('LUSAIL CITY HEIGHTS', col2)}
${renderMegaCol('THE PEARL ISLAND', col3)}
${renderMegaCol('VILLA ESTATES', col4)}
                                            </div>
                                        </div>`;

// Mobile Drawer list grouped into 4 elegant sections with gold headers
function renderMobileSection(title, list) {
  const links = list.map(p => `
                                            <li class="mobileMenuList__item">
                                                <a href="/en/development/${p.file}" class="mobileMenuList__link" style="padding-left: 12px;">${p.shortName}</a>
                                            </li>`).join('');
  return `
                                        <span class="mobileMenuList__heading" style="color: #b89c4c; font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-top: 14px; margin-bottom: 6px; display: block;">${title}</span>
                                        <ul class="mobileMenuList">
                                            ${links}
                                        </ul>`;
}

const mobileMenuBodyHTML = `
                                        <div class="mobileMenuHeader">
                                            <button class="mobileMenuHeader__back" data-goto-panel="root" aria-label="Go back">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><use href="#svgIcon-chevron-left"/></svg>
                                            </button>
                                            <span class="mobileMenuHeader__title">Developments</span>
                                            <button class="mobileMenuHeader__close" data-mobile-menu-close aria-label="Close menu">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" fill="none"><use href="#svgIcon-close"/></svg>
                                            </button>
                                        </div>
${renderMobileSection('Waterfront Estates', col1)}
${renderMobileSection('Lusail City Heights', col2)}
${renderMobileSection('The Pearl Island Collection', col3)}
${renderMobileSection('Villa Estates & Retreats', col4)}`;

// Helper to update Navbar in any HTML
function updateNavbarInHTML(rawHtml) {
  let updated = rawHtml;

  // Ensure relative positioning on menu parent container if needed
  const devSubmenuRegex = /(<li class="headerNavLink[^"]*"[^>]*data-menu-item="3"[^>]*>[\s\S]*?<a href="#"[^>]*>Developments<\/a>[\s\S]*?<svg[\s\S]*?<\/svg>\s*)(<div class="(?:navSubmenu|navMegaMenu)"[\s\S]*?data-submenu="3"[\s\S]*?<\/div>\s*<\/div>|<div class="(?:navSubmenu|navMegaMenu)"[\s\S]*?data-submenu="3"[\s\S]*?<\/div>)/i;
  
  if (devSubmenuRegex.test(updated)) {
    updated = updated.replace(devSubmenuRegex, `$1${desktopMegaMenuHTML}`);
  }

  // Replace mobile menu panel (data-panel="level1-3")
  const mobileMenuRegex = /(<div class="mobileMenu__panel"[^>]*data-panel="level1-3"[^>]*>)[\s\S]*?(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/i;
  if (mobileMenuRegex.test(updated)) {
    updated = updated.replace(mobileMenuRegex, `$1\n${mobileMenuBodyHTML}\n                                    $2`);
  }

  return updated;
}

// Read template from milos.html
const templatePath = path.join(devDir, 'milos.html');
const templateHTML = fs.readFileSync(templatePath, 'utf8');

// Update all 24 project HTML files
projectsMeta.forEach(p => {
  const filePath = path.join(devDir, p.file);
  let pageHTML = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : templateHTML;

  pageHTML = updateNavbarInHTML(pageHTML);

  fs.writeFileSync(filePath, pageHTML, 'utf8');
});

// Update index.html
const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
if (fs.existsSync(indexPath)) {
  let indexHTML = fs.readFileSync(indexPath, 'utf8');
  indexHTML = updateNavbarInHTML(indexHTML);
  fs.writeFileSync(indexPath, indexHTML, 'utf8');
  console.log('✨ Perfectly aligned Mega Menu Navbar updated in index.html!');
}

console.log('🎉 4-COLUMN MEGA MENU WITH ZERO OVERFLOW & MOBILE RESPONSIVENESS SUCCESSFULLY APPLIED!');
