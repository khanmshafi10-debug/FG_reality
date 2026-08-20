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
    plan: '10% Down Payment, 40% during construction, 50% post-handover till 2030',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/hero.jpg',
    desc: 'Bespoke waterfront villas and private shorefront residences on Qetaifan Island North. Features private infinity pools, marine docks, and panoramic sea balconies.'
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
    plan: '10% Booking, 40% during construction, 50% on Handover in Q2 2028',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-1.jpg',
    desc: 'Luxury Mediterranean compound featuring 34 signature villas. Includes private elevator, fully equipped backyard with private waterfall, barbecue grill, and pergola.'
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
    plan: '2% Down Payment, monthly installments extending until 2033',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-4.jpg',
    desc: 'Iconic curved waterfront tower on Qetaifan Island featuring studios to 3-bedroom luxury apartments with sea views, smart automation, and payment plans till 2033.'
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
    plan: '2% reservation, flexible quarterly installments extending till 2033',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-5.jpg',
    desc: 'Striking architectural waterfront tower on Qetaifan Island with 2-bedroom apartments, organic curved glass facades, private beach access, and 8-year payment plan.'
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
    plan: '5% Booking down payment, 35% during construction, 60% post-handover till 2031',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-2.jpg',
    desc: 'Iconic 33-story luxury waterfront tower featuring 189 smart residences, private beach club access, infinity sky pool, and payment plan till 2031.'
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
    plan: '2% reservation fee, zero interest installments over 8 years extending till 2032',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-6.jpg',
    desc: 'Sleek waterfront tower on Lusail Waterfront offering studios from QAR 1M and 1-bedrooms from QAR 2M. Features modern coastal design, rooftop pool, and plan till 2032.'
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
    plan: '10% Down payment, flexible installments with immediate handover options',
    badge: 'Ready',
    heroImg: '/images/developments/city-avenue/city_hero_new.jpg',
    desc: 'High-end urban residential tower in Al Erkyah City, Lusail. Features state-of-the-art gym, rooftop infinity pool, and seamless connection to Lusail Boulevard.'
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
    plan: '10% Down Payment, 40% construction milestones, 50% post-handover till 2030',
    badge: 'Off-Plan',
    heroImg: '/images/developments/rivan/hero.jpg',
    desc: 'Architectural landmark in Lusail City offering sky suites with double-height panoramic glass windows, wellness spa, and skyline city views.'
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
    plan: 'QAR 50,000 initial down payment, flexible monthly installments over 6 years',
    badge: 'Off-Plan',
    heroImg: '/images/developments/city-avenue/city_feature_1.jpg',
    desc: 'Modern residential tower offering stylish 1-bedroom apartments with smart layouts, premium finishes, and a 6-year flexible payment plan starting from QAR 825,000.'
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
    plan: '5% Down Payment, 7-year payment plan with post-handover options',
    badge: 'Off-Plan',
    heroImg: '/images/developments/city-avenue/city_feature_2.jpg',
    desc: 'Contemporary residential tower in Fox Hills, Lusail offering elegantly designed 1 and 2-bedroom apartments with a 7-year payment plan and rooftop pool.'
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
    plan: '30% paid before handover in Oct 2026, remaining 70% post-handover until 2032',
    badge: 'Off-Plan',
    heroImg: '/images/developments/city-avenue/city_feature_3.jpg',
    desc: 'Premium residential tower in Al Erkyah City offering 1-bedroom apartments starting at QAR 1.1M with flexible terms — 30% before handover and 70% post-handover till 2032.'
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
    plan: '35% Down Payment for immediate key handover, balance over 5-year post-handover plan',
    badge: 'Ready',
    heroImg: '/images/developments/milos/milos_real_12.jpg',
    desc: 'Ready-to-move-in luxury residences in Fox Hills with high-end designer finishes, 5-year post-handover payment plan, and immediate move-in key delivery.'
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
    plan: '10% Down payment, 40% construction installments, 50% on Handover in Q4 2026',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/hero.jpg',
    desc: 'Architectural masterpiece at the Legtaifiya coastal corridor facing The Pearl Island. Offers private beach access, sky lounges, and marine vistas.'
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
    plan: '100% Cash or Bank Financing eligible with immediate key delivery',
    badge: 'Ready',
    heroImg: '/images/developments/milos/milos_real_1.jpg',
    desc: 'Located in Floresta Gardens precinct of The Pearl Island. Mid-rise residential tower with master suites, maid rooms, and private balconies overlooking green parks.'
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
    plan: '10% Down Payment, 40% during construction, 50% on Handover in Q4 2026',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_3.jpg',
    desc: 'Luxury residential tower at The Pearl with panoramic Arabian Gulf views, world-class spa facilities, and handover by Q4 2026 with 10% down payment.'
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
    plan: '50% Down payment upon reservation, 50% upon final completion & keys',
    badge: 'Ultra Luxury',
    heroImg: '/images/developments/flora-villas/unit_1.jpg',
    desc: 'Ultra-luxury 5-bedroom waterfront villas at The Pearl featuring exclusive island living, private beach access, grand architectural design, and direct marina views.'
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
    plan: 'Unique 20-year Lease to Own program: 2% Down Payment, fixed monthly rent-to-own structure',
    badge: 'Lease to Own',
    heroImg: '/images/developments/milos/milos_real_4.jpg',
    desc: 'Premium residences at The Pearl offering a unique 20-year Lease to Own model with only 2% down payment. Studios from QAR 3.65M, 1-bedrooms from QAR 3.72M.'
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
    plan: '10% Down payment upon reservation, 7-year total payment structure',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_6.jpg',
    desc: 'Modern residential tower in Lusail Entertainment City offering 1-3 bedroom units with maid rooms, 7-year payment plan, and proximity to theme parks & boulevard.'
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
    plan: '10% Down Payment, 5-year post-handover plan with private garden & pool',
    badge: 'Off-Plan',
    heroImg: '/images/developments/flora-villas/hero.jpg',
    desc: 'Private standalone villa sanctuary in North Lusail. Features lush private gardens, swimming pool, elevator, driver room, and high-security gated entrance.'
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
    plan: '10% reservation, 5-year total payment plan with private pool included',
    badge: 'Off-Plan',
    heroImg: '/images/developments/flora-villas/unit_2.jpg',
    desc: 'Exclusive villa compound in New Salata featuring 5-bedroom luxury villas with maid quarters, private swimming pools, and 5-year payment plan.'
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
    plan: '10% Down Payment, 5-year payment plan with driver room & private garden',
    badge: 'Off-Plan',
    heroImg: '/images/developments/flora-villas/unit_3.jpg',
    desc: 'Premium standalone villa community in Al Muraikh offering 5-bedroom residences with private gardens, driver room, and 5-year flexible plan.'
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
    plan: '60% Down payment for immediate move-in key handover, balance over 2 years',
    badge: 'Ready',
    heroImg: '/images/developments/valencia-residence/hero.jpg',
    desc: 'Coastal architectural marvel on Lusail Waterfront with 119 luxury apartments and private chalets, direct beach access, infinity pool, and wellness spa.'
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
    plan: '5% booking fee, flexible 6-year payment plan with handover in December 2028',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_15.jpg',
    desc: 'Premium residential tower in Al Kharaej offering 1-3 bedroom duplex apartments with double-height ceilings, 6-year payment plan, and 5% initial booking.'
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
    plan: '10% Booking fee, post-handover installment structure extending to 2031',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_18.jpg',
    desc: 'Mazaya Real Estate development in Seef Lusail featuring fully furnished smart apartments with open-plan layouts, rooftop pools, and promenade access.'
  }
];

// Split 24 projects into 4 columns (6 items per column)
const col1 = projectsMeta.slice(0, 6);
const col2 = projectsMeta.slice(6, 12);
const col3 = projectsMeta.slice(12, 18);
const col4 = projectsMeta.slice(18, 24);

function renderMegaCol(title, list) {
  const itemsHTML = list.map(p => `
                        <li class="navMegaMenu__column-item" role="none" style="margin-bottom: 6px;">
                            <a href="/en/development/${p.file}" class="navMegaMenu__column-link" role="menuitem" style="font-size: 0.85rem; font-weight: 500; color: #333; transition: color 0.2s ease; display: inline-block;">${p.shortName}</a>
                        </li>`).join('');

  return `
                <div class="navMegaMenu__column" style="flex: 1; min-width: 180px;">
                    <span class="navMegaMenu__column-heading" style="color: #b89c4c; font-weight: 700; font-size: 0.75rem; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(184,156,76,0.3); padding-bottom: 8px; margin-bottom: 12px; display: block;">${title}</span>
                    <ul class="navMegaMenu__column-list" style="list-style: none; padding: 0; margin: 0;">
                        ${itemsHTML}
                    </ul>
                </div>`;
}

// Complete 4-Column Developments Mega Menu HTML
const desktopMegaMenuHTML = `
                                        <div class="navMegaMenu" role="menu" aria-label="Developments submenu" data-submenu="3" style="width: 880px; max-width: 90vw; left: 50%; transform: translateX(-50%); background: #ffffff; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.15); border: 1px solid rgba(212,185,122,0.3); padding: 24px;">
                                            <div class="navMegaMenu__body" style="display: flex; gap: 24px; width: 100%;">
${renderMegaCol('WATERFRONT ESTATES', col1)}
${renderMegaCol('LUSAIL CITY HEIGHTS', col2)}
${renderMegaCol('THE PEARL ISLAND', col3)}
${renderMegaCol('VILLA ESTATES', col4)}
                                            </div>
                                        </div>`;

// Mobile Drawer list for 24 items
const mobileNavItemsHTML = projectsMeta.map(p => `
                                            <li class="mobileMenuList__item">
                                                <a href="/en/development/${p.file}" class="mobileMenuList__link">${p.shortName}</a>
                                            </li>`).join('');

// Helper to update Navbar in any HTML
function updateNavbarInHTML(rawHtml) {
  let updated = rawHtml;

  // Replace desktop dropdown for item 3 (Developments)
  // Match either <div class="navSubmenu"...data-submenu="3"...> OR <div class="navMegaMenu"...data-submenu="3"...>
  const devSubmenuRegex = /(<li class="headerNavLink[^"]*"[^>]*data-menu-item="3"[^>]*>[\s\S]*?<a href="#"[^>]*>Developments<\/a>[\s\S]*?<svg[\s\S]*?<\/svg>\s*)(<div class="(?:navSubmenu|navMegaMenu)"[\s\S]*?data-submenu="3"[\s\S]*?<\/div>\s*<\/div>|<div class="(?:navSubmenu|navMegaMenu)"[\s\S]*?data-submenu="3"[\s\S]*?<\/div>)/i;
  
  if (devSubmenuRegex.test(updated)) {
    updated = updated.replace(devSubmenuRegex, `$1${desktopMegaMenuHTML}`);
  }

  // Replace mobile menu panel (data-panel="level1-3")
  const mobileMenuRegex = /(<div class="mobileMenu__panel"[^>]*data-panel="level1-3"[^>]*>[\s\S]*?<ul class="mobileMenuList">)([\s\S]*?)(<\/ul>[\s\S]*?<\/div>)/i;
  if (mobileMenuRegex.test(updated)) {
    updated = updated.replace(mobileMenuRegex, `$1${mobileNavItemsHTML}\n$3`);
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
  console.log(`✨ Mega Menu Navbar updated in: ${p.file}`);
});

// Update index.html
const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
if (fs.existsSync(indexPath)) {
  let indexHTML = fs.readFileSync(indexPath, 'utf8');
  indexHTML = updateNavbarInHTML(indexHTML);
  fs.writeFileSync(indexPath, indexHTML, 'utf8');
  console.log('✨ Mega Menu Navbar updated in index.html!');
}

console.log('🎉 4-COLUMN DEVELOPMENTS MEGA MENU SUCCESSFULLY APPLIED ACROSS SITE!');
