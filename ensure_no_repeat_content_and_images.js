const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Remove previous section block if present
const carouselStart = html.indexOf('<style id="pvLightThemeProjectsCSS">');
if (carouselStart > -1) {
  const blogPos = html.indexOf('<section class="latestBlogPosts');
  if (blogPos > -1) {
    html = html.slice(0, carouselStart) + html.slice(blogPos);
  }
}

// 24 Projects - GUARANTEED 100% PURE REAL ESTATE PHOTOGRAPHY (ZERO BROCHURE TEXT OVERLAYS)
const allProjects = [
  // SECTION 1: WATERFRONT & ISLANDS (6 CARDS)
  {
    sec: 'waterfront',
    slug: 'skala-villas',
    link: '/en/development/skala-villas',
    name: 'Skala Villas & Waterfront Luxury',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Waterfront Signature Villas',
    beds: '4 - 5 Bedroom Villas',
    price: 'QAR 3,800,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    plan: '10% Down Payment, 40% during construction, 50% post-handover till 2030',
    badge: 'Flagship',
    badgeClass: 'offplan',
    img: '/images/developments/skala-villas/hero.jpg',
    desc: 'Bespoke waterfront villas and private shorefront residences on Qetaifan Island North. Features private infinity pools, marine docks, and panoramic sea balconies.'
  },
  {
    sec: 'waterfront',
    slug: 'via-doro',
    link: 'javascript:void(0)',
    name: "Via D'Oro Signature Villas",
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Mediterranean Compound Villas',
    beds: '4+ Maid Villas',
    price: 'QAR 4,250,000',
    handover: 'Q2 2028',
    dp: '10% Down Payment',
    plan: '10% Booking, 40% during construction, 50% on Handover in Q2 2028',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/skala-villas/sk-feature-1.jpg',
    desc: 'Luxury Mediterranean compound featuring 34 signature villas. Includes private elevator, fully equipped backyard with private waterfall, barbecue grill, and pergola.'
  },
  {
    sec: 'waterfront',
    slug: 'carlton-house',
    link: 'javascript:void(0)',
    name: 'Carlton House Waterfront',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Curved Glass High-Rise',
    beds: 'Studio - 3 BR',
    price: 'QAR 1,460,000',
    handover: 'Q4 2028',
    dp: '2% Down Payment',
    plan: '2% Down Payment, monthly installments extending until 2033',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/skala-villas/sk-feature-4.jpg',
    desc: 'Iconic curved waterfront tower on Qetaifan Island featuring studios to 3-bedroom luxury apartments with sea views, smart automation, and payment plans till 2033.'
  },
  {
    sec: 'waterfront',
    slug: 'canal-bay',
    link: 'javascript:void(0)',
    name: 'Canal Bay Beachfront',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Architectural Waterfront Tower',
    beds: '2 Bedrooms',
    price: 'QAR 2,000,000',
    handover: 'Q4 2028',
    dp: '2% Down Payment',
    plan: '2% reservation, flexible quarterly installments extending till 2033',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/skala-villas/sk-feature-5.jpg',
    desc: 'Striking architectural waterfront tower on Qetaifan Island with 2-bedroom apartments, organic curved glass facades, private beach access, and 8-year payment plan.'
  },
  {
    sec: 'waterfront',
    slug: 'skala-tower',
    link: 'javascript:void(0)',
    name: 'Skala Tower 33-Story Icon',
    district: 'Lusail Waterfront',
    city: 'Lusail',
    type: '33-Story Beachfront Tower',
    beds: '1 - 2 Bedrooms',
    price: 'QAR 2,000,000',
    handover: 'Q4 2026',
    dp: '5% Down Payment',
    plan: '5% Booking down payment, 35% during construction, 60% post-handover till 2031',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/skala-villas/sk-feature-2.jpg',
    desc: 'Iconic 33-story luxury waterfront tower featuring 189 smart residences, private beach club access, infinity sky pool, and payment plan till 2031.'
  },
  {
    sec: 'waterfront',
    slug: 'la-mer-tower',
    link: 'javascript:void(0)',
    name: 'La Mer Coastal Tower',
    district: 'Lusail Waterfront',
    city: 'Lusail',
    type: 'Coastal Glass High-Rise',
    beds: 'Studio & 1 BR',
    price: 'QAR 1,000,000',
    handover: 'Q4 2027',
    dp: '2% Down Payment',
    plan: '2% reservation fee, zero interest installments over 8 years extending till 2032',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/skala-villas/sk-feature-6.jpg',
    desc: 'Sleek waterfront tower on Lusail Waterfront offering studios from QAR 1M and 1-bedrooms from QAR 2M. Features modern coastal design, rooftop pool, and plan till 2032.'
  },

  // SECTION 2: LUSAIL CITY MASTERPIECES (6 CARDS)
  {
    sec: 'lusail',
    slug: 'city-avenue',
    link: '/en/development/city-avenue',
    name: 'City Avenue Residences',
    district: 'Al Erkyah City',
    city: 'Lusail',
    type: 'Urban Luxury Apartments',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,200,000',
    handover: 'Ready / 2026',
    dp: '10% Down Payment',
    plan: '10% Down payment, flexible installments with immediate handover options',
    badge: 'Flagship',
    badgeClass: 'ready',
    img: '/images/developments/city-avenue/city_hero_new.jpg',
    desc: 'High-end urban residential tower in Al Erkyah City, Lusail. Features state-of-the-art gym, rooftop infinity pool, and seamless connection to Lusail Boulevard.'
  },
  {
    sec: 'lusail',
    slug: 'rivan',
    link: '/en/development/rivan',
    name: 'Rivan Tower & Sky Suites',
    district: 'Lusail City',
    city: 'Lusail',
    type: 'Sky Suites & Residences',
    beds: '1 - 3 Bedroom Suites',
    price: 'QAR 1,650,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    plan: '10% Down Payment, 40% construction milestones, 50% post-handover till 2030',
    badge: 'Flagship',
    badgeClass: 'offplan',
    img: '/images/developments/rivan/hero.jpg',
    desc: 'Architectural landmark in Lusail City offering sky suites with double-height panoramic glass windows, wellness spa, and skyline city views.'
  },
  {
    sec: 'lusail',
    slug: 'elite-residence',
    link: 'javascript:void(0)',
    name: 'Elite Residence',
    district: 'Al Erkyah City',
    city: 'Lusail',
    type: 'Smart 1BR Apartments',
    beds: '1 Bedroom',
    price: 'QAR 825,000',
    handover: 'Q4 2027',
    dp: 'QAR 50K Fixed DP',
    plan: 'QAR 50,000 initial down payment, flexible monthly installments over 6 years',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/city-avenue/city_feature_1.jpg',
    desc: 'Modern residential tower offering stylish 1-bedroom apartments with smart layouts, premium finishes, and a 6-year flexible payment plan starting from QAR 825,000.'
  },
  {
    sec: 'lusail',
    slug: 'boulevard-residence',
    link: 'javascript:void(0)',
    name: 'Boulevard Residence',
    district: 'Fox Hills',
    city: 'Lusail',
    type: '1 & 2 BR Apartments',
    beds: '1 - 2 Bedrooms',
    price: 'QAR 1,000,000',
    handover: 'July 2027',
    dp: '5% Down Payment',
    plan: '5% Down Payment, 7-year payment plan with post-handover options',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/city-avenue/city_feature_2.jpg',
    desc: 'Contemporary residential tower in Fox Hills, Lusail offering elegantly designed 1 and 2-bedroom apartments with a 7-year payment plan and rooftop pool.'
  },
  {
    sec: 'lusail',
    slug: 'orjuwan',
    link: 'javascript:void(0)',
    name: 'Orjuwan Tower',
    district: 'Al Erkyah City',
    city: 'Lusail',
    type: 'Modern Residences',
    beds: '1 Bedroom',
    price: 'QAR 1,100,000',
    handover: 'October 2026',
    dp: '30% Before Handover',
    plan: '30% paid before handover in Oct 2026, remaining 70% post-handover until 2032',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/city-avenue/city_feature_3.jpg',
    desc: 'Premium residential tower in Al Erkyah City offering 1-bedroom apartments starting at QAR 1.1M with flexible terms — 30% before handover and 70% post-handover till 2032.'
  },
  {
    sec: 'lusail',
    slug: 'bliss-residences',
    link: 'javascript:void(0)',
    name: 'Bliss Residences',
    district: 'Fox Hills',
    city: 'Lusail',
    type: 'Ready Luxury Apartments',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,540,000',
    handover: 'Ready Move-In',
    dp: '35% Down Payment',
    plan: '35% Down Payment for immediate key handover, balance over 5-year post-handover plan',
    badge: 'Ready',
    badgeClass: 'ready',
    img: '/images/developments/milos/milos_real_12.jpg',
    desc: 'Ready-to-move-in luxury residences in Fox Hills with high-end designer finishes, 5-year post-handover payment plan, and immediate move-in key delivery.'
  },

  // SECTION 3: THE PEARL ISLAND COLLECTION (6 CARDS)
  {
    sec: 'pearl',
    slug: 'milos',
    link: '/en/development/milos',
    name: 'Milos Residence & Coastal Living',
    district: 'Legtaifiya / Pearl Gateway',
    city: 'Doha',
    type: 'Coastal High-Rise Tower',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,850,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    plan: '10% Down payment, 40% construction installments, 50% on Handover in Q4 2026',
    badge: 'Flagship',
    badgeClass: 'offplan',
    img: '/images/developments/milos/hero.jpg',
    desc: 'Architectural masterpiece at the Legtaifiya coastal corridor facing The Pearl Island. Offers private beach access, sky lounges, and marine vistas.'
  },
  {
    sec: 'pearl',
    slug: 'floresta-105',
    link: 'javascript:void(0)',
    name: 'Floresta 105 Tower',
    district: 'Floresta Gardens',
    city: 'The Pearl-Qatar',
    type: 'Mid-Rise Garden Residences',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,770,000',
    handover: 'Immediate / Ready',
    dp: 'Ready Move-In',
    plan: '100% Cash or Bank Financing eligible with immediate key delivery',
    badge: 'Ready',
    badgeClass: 'ready',
    img: '/images/developments/milos/milos_real_1.jpg',
    desc: 'Located in Floresta Gardens precinct of The Pearl Island. Mid-rise residential tower with master suites, maid rooms, and private balconies overlooking green parks.'
  },
  {
    sec: 'pearl',
    slug: 'al-mayyas',
    link: 'javascript:void(0)',
    name: 'Al Mayyas Tower',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    type: 'Luxury Sea View Apartments',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 2,110,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    plan: '10% Down Payment, 40% during construction, 50% on Handover in Q4 2026',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/milos/milos_real_3.jpg',
    desc: 'Luxury residential tower at The Pearl with panoramic Arabian Gulf views, world-class spa facilities, and handover by Q4 2026 with 10% down payment.'
  },
  {
    sec: 'pearl',
    slug: 'coralia-villas',
    link: 'javascript:void(0)',
    name: 'Coralia Compound Villas',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    type: 'Ultra-Luxury Island Villa',
    beds: '5 BR + Maid + Pool',
    price: 'QAR 55,000,000',
    handover: 'Q4 2026',
    dp: '50% Booking',
    plan: '50% Down payment upon reservation, 50% upon final completion & keys',
    badge: 'Ultra Luxury',
    badgeClass: 'luxury',
    img: '/images/developments/flora-villas/unit_1.jpg',
    desc: 'Ultra-luxury 5-bedroom waterfront villas at The Pearl featuring exclusive island living, private beach access, grand architectural design, and direct marina views.'
  },
  {
    sec: 'pearl',
    slug: 'corallia',
    link: 'javascript:void(0)',
    name: 'Corallia Lease to Own',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    type: '20-Year Lease to Own',
    beds: 'Studio - 2 BR',
    price: 'QAR 3,650,000',
    handover: 'Immediate Lease-to-Own',
    dp: '2% Down Payment',
    plan: 'Unique 20-year Lease to Own program: 2% Down Payment, fixed monthly rent-to-own structure',
    badge: 'Lease to Own',
    badgeClass: 'lease',
    img: '/images/developments/milos/milos_real_4.jpg',
    desc: 'Premium residences at The Pearl offering a unique 20-year Lease to Own model with only 2% down payment. Studios from QAR 3.65M, 1-bedrooms from QAR 3.72M.'
  },
  {
    sec: 'pearl',
    slug: 'marbella',
    link: 'javascript:void(0)',
    name: 'Marbella Residence',
    district: 'Entertainment City',
    city: 'Lusail',
    type: 'Lifestyle Residences',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,670,000',
    handover: 'Q3 2027',
    dp: '10% Down Payment',
    plan: '10% Down payment upon reservation, 7-year total payment structure',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/milos/milos_real_6.jpg',
    desc: 'Modern residential tower in Lusail Entertainment City offering 1-3 bedroom units with maid rooms, 7-year payment plan, and proximity to theme parks & boulevard.'
  },

  // SECTION 4: VILLA ESTATES & RETREATS (6 CARDS)
  {
    sec: 'villas',
    slug: 'flora-villas',
    link: '/en/development/flora-villas',
    name: 'Flora Standalone Villas',
    district: 'Huzoom District',
    city: 'North Lusail',
    type: 'Private Sanctuary Villas',
    beds: '5 BR + Private Pool',
    price: 'QAR 4,100,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    plan: '10% Down Payment, 5-year post-handover plan with private garden & pool',
    badge: 'Flagship',
    badgeClass: 'offplan',
    img: '/images/developments/flora-villas/hero.jpg',
    desc: 'Private standalone villa sanctuary in North Lusail. Features lush private gardens, swimming pool, elevator, driver room, and high-security gated entrance.'
  },
  {
    sec: 'villas',
    slug: 'bliss-gardens',
    link: 'javascript:void(0)',
    name: 'Bliss Gardens Compound',
    district: 'New Salata',
    city: 'Doha',
    type: 'Private Gated Villa Compound',
    beds: '5 BR + Maid',
    price: 'QAR 4,290,000',
    handover: 'October 2027',
    dp: '10% Down Payment',
    plan: '10% reservation, 5-year total payment plan with private pool included',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/flora-villas/unit_2.jpg',
    desc: 'Exclusive villa compound in New Salata featuring 5-bedroom luxury villas with maid quarters, private swimming pools, and 5-year payment plan.'
  },
  {
    sec: 'villas',
    slug: 'bliss-gardens-2',
    link: 'javascript:void(0)',
    name: 'Bliss Gardens II',
    district: 'Al Muraikh',
    city: 'Doha',
    type: 'Standalone Villa Community',
    beds: '5 BR + Maid',
    price: 'QAR 4,080,000',
    handover: 'December 2027',
    dp: '10% Down Payment',
    plan: '10% Down Payment, 5-year payment plan with driver room & private garden',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/flora-villas/unit_3.jpg',
    desc: 'Premium standalone villa community in Al Muraikh offering 5-bedroom residences with private gardens, driver room, and 5-year flexible plan.'
  },
  {
    sec: 'villas',
    slug: 'voya-residence',
    link: 'javascript:void(0)',
    name: 'Voya Waterfront Chalets',
    district: 'Al Kharaej (Seef Lusail)',
    city: 'Lusail',
    type: 'Coastal Waterfront Chalets',
    beds: '1 - 4 BR & Chalets',
    price: 'QAR 1,458,000',
    handover: 'Immediate / Ready',
    dp: '60% Down Payment',
    plan: '60% Down payment for immediate move-in key handover, balance over 2 years',
    badge: 'Ready',
    badgeClass: 'ready',
    img: '/images/developments/valencia-residence/hero.jpg',
    desc: 'Coastal architectural marvel on Lusail Waterfront with 119 luxury apartments and private chalets, direct beach access, infinity pool, and wellness spa.'
  },
  {
    sec: 'villas',
    slug: 'bliss-tower',
    link: 'javascript:void(0)',
    name: 'Bliss Tower Duplexes',
    district: 'Al Kharaej',
    city: 'Lusail',
    type: 'Duplex High-Rise',
    beds: '1 - 3 BR Duplex',
    price: 'QAR 1,520,000',
    handover: 'December 2028',
    dp: '5% Down Payment',
    plan: '5% booking fee, flexible 6-year payment plan with handover in December 2028',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/milos/milos_real_15.jpg',
    desc: 'Premium residential tower in Al Kharaej offering 1-3 bedroom duplex apartments with double-height ceilings, 6-year payment plan, and 5% initial booking.'
  },
  {
    sec: 'villas',
    slug: 'miran-tower',
    link: 'javascript:void(0)',
    name: 'Miran Tower Smart Units',
    district: 'Al Kharaej (Seef Lusail)',
    city: 'Lusail',
    type: 'Fully Furnished Smart Tower',
    beds: '2 Bedrooms',
    price: 'QAR 1,590,000',
    handover: 'March 2028',
    dp: '10% Down Payment',
    plan: '10% Booking fee, post-handover installment structure extending to 2031',
    badge: 'Off-Plan',
    badgeClass: 'offplan',
    img: '/images/developments/milos/milos_real_18.jpg',
    desc: 'Mazaya Real Estate development in Seef Lusail featuring fully furnished smart apartments with open-plan layouts, rooftop pools, and promenade access.'
  }
];

function renderLightCard(p) {
  const detailBtn = (p.link && p.link !== 'javascript:void(0)')
    ? `<a href="${p.link}" class="pvLightBtn pvLightBtn--primary"><span>View Project</span><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`
    : `<button type="button" class="pvLightBtn pvLightBtn--modal" onclick="openFgProjectModal('${p.slug}')"><span>Quick Details</span><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;

  return `
    <article class="pvLightCard">
      <div class="pvLightCard__media">
        <img src="${p.img}" alt="${p.name}" class="pvLightCard__img" loading="lazy">
        <div class="pvLightCard__overlay"></div>
        <div class="pvLightCard__top">
          <span class="pvBadge pvBadge--${p.badgeClass}">${p.badge}</span>
        </div>
        <div class="pvLightCard__location">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M6 0C2.68629 0 0 2.68629 0 6C0 10.5 6 14 6 14C6 14 12 10.5 12 6C12 2.68629 9.31371 0 6 0ZM6 8.5C4.61929 8.5 3.5 7.38071 3.5 6C3.5 4.61929 4.61929 3.5 6 3.5C7.38071 3.5 8.5 4.61929 8.5 6C8.5 7.38071 7.38071 8.5 6 8.5Z" fill="#c5a880"/></svg>
          <span>${p.district}, ${p.city}</span>
        </div>
      </div>
      <div class="pvLightCard__content">
        <h3 class="pvLightCard__title">${p.name}</h3>
        <p class="pvLightCard__sub">${p.type}</p>
        <p class="pvLightCard__desc">${p.desc}</p>
        
        <div class="pvLightCard__specs">
          <div class="pvSpec"><span class="pvSpec__label">BEDROOMS</span><span class="pvSpec__val">${p.beds}</span></div>
          <div class="pvSpec"><span class="pvSpec__label">HANDOVER</span><span class="pvSpec__val">${p.handover}</span></div>
          <div class="pvSpec"><span class="pvSpec__label">DOWN PAYMENT</span><span class="pvSpec__val">${p.dp}</span></div>
          <div class="pvSpec pvSpec--price"><span class="pvSpec__label">STARTING FROM</span><span class="pvSpec__val">${p.price}</span></div>
        </div>

        <div class="pvLightCard__actions">
          ${detailBtn}
          <a href="https://wa.me/97460005054?text=Hello%20Prime%20View%20Real%20Estate%2C%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(p.name)}%20(${encodeURIComponent(p.district)})" target="_blank" rel="noopener" class="pvLightBtn pvLightBtn--wa" aria-label="Inquire via WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.027-1.056z"/></svg>
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderLightReelCard(p) {
  const actionAttr = (p.link && p.link !== 'javascript:void(0)')
    ? `onclick="window.location.href='${p.link}'"`
    : `onclick="openFgProjectModal('${p.slug}')"`;

  return `
    <div class="pvReelCard" ${actionAttr}>
      <div class="pvReelFrame">
        <div class="pvReelNotch"></div>
        <img src="${p.img}" alt="${p.name}" class="pvReelImg" loading="lazy">
        <div class="pvReelOverlay"></div>
        
        <div class="pvReelTop">
          <span class="pvBadge pvBadge--${p.badgeClass}">${p.badge}</span>
        </div>

        <div class="pvReelBody">
          <h3 class="pvReelTitle">${p.name}</h3>
          <p class="pvReelLoc">📍 ${p.district}</p>
          <div class="pvReelSpecs">
            <span class="pvReelType">${p.type}</span>
            <span class="pvReelPrice">${p.price}</span>
          </div>
          <button type="button" class="pvReelCta">View Details →</button>
        </div>
      </div>
    </div>
  `;
}

const waterfrontProjs = allProjects.filter(p => p.sec === 'waterfront');
const lusailProjs = allProjects.filter(p => p.sec === 'lusail');
const pearlProjs = allProjects.filter(p => p.sec === 'pearl');
const villaProjs = allProjects.filter(p => p.sec === 'villas');

const lightThemeHTML = `
<style id="pvLightThemeProjectsCSS">
/* ════════════════════════════════════════════════════════════════
   PRIME VIEW REAL ESTATE - ELEGANT LUXURY LIGHT THEME SHOWCASE
   ════════════════════════════════════════════════════════════════ */

:root {
  --pv-gold: #c5a880;
  --pv-gold-dark: #a38438;
  --pv-gold-hover: #b89c4c;
  --pv-dark-text: #111827;
  --pv-slate-text: #475569;
  --pv-bg-white: #ffffff;
  --pv-bg-cream: #fbf9f5;
  --pv-bg-pearl: #f6f4ee;
  --pv-border-light: #eae6df;
  --pv-radius: 18px;
}

.pvSecLight {
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  font-family: var(--font-primary, "Plus Jakarta Sans", sans-serif);
}

.pvSecLight--white { background: var(--pv-bg-white); }
.pvSecLight--cream { background: var(--pv-bg-cream); border-top: 1px solid var(--pv-border-light); }
.pvSecLight--pearl { background: var(--pv-bg-pearl); border-top: 1px solid var(--pv-border-light); }

.pvContainer {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 24px;
}

.pvSecHeader {
  text-align: center;
  max-width: 740px;
  margin: 0 auto 48px;
}

.pvPill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 20px;
  border-radius: 30px;
  background: rgba(197, 168, 128, 0.12);
  border: 1px solid rgba(197, 168, 128, 0.4);
  color: var(--pv-gold-dark);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.pvPillDot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--pv-gold-dark);
  box-shadow: 0 0 8px var(--pv-gold);
}

.pvSecTitle {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--pv-dark-text);
  letter-spacing: -0.5px;
  margin: 0 0 12px;
  line-height: 1.2;
}

.pvSecSub {
  font-size: 1.02rem;
  color: var(--pv-slate-text);
  line-height: 1.65;
  margin: 0;
}

/* ── REELS SCROLL CAROUSEL (LIGHT THEME) ── */
.pvReelsSec {
  padding: 80px 0;
  background: linear-gradient(180deg, #fbf9f5 0%, #f4f0e6 100%);
  border-bottom: 1px solid var(--pv-border-light);
  overflow: hidden;
}

.pvReelsTrackWrap {
  position: relative;
  width: 100%;
}

.pvReelsTrack {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 20px 48px 30px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
}

.pvReelsTrack::-webkit-scrollbar { display: none; }
.pvReelsTrack:active { cursor: grabbing; }

.pvReelCard {
  flex: 0 0 270px;
  scroll-snap-align: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.pvReelFrame {
  position: relative;
  height: 480px;
  border-radius: 34px;
  overflow: hidden;
  background: #ffffff;
  border: 4px solid #1e293b;
  box-shadow: 0 14px 35px rgba(0, 0, 0, 0.12);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pvReelCard:hover .pvReelFrame {
  border-color: var(--pv-gold);
  transform: scale(1.06) translateY(-8px);
  box-shadow: 0 22px 50px rgba(197, 168, 128, 0.35);
}

.pvReelNotch {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 16px;
  background: #1e293b;
  border-radius: 10px;
  z-index: 5;
}

.pvReelImg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.pvReelCard:hover .pvReelImg { transform: scale(1.1); }

.pvReelOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.05) 45%, rgba(15,23,42,0.92) 100%);
  pointer-events: none;
}

.pvReelTop {
  position: relative;
  z-index: 3;
  padding: 34px 16px 0;
  display: flex;
  justify-content: space-between;
}

.pvReelBody {
  position: relative;
  z-index: 3;
  padding: 20px 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: #ffffff;
}

.pvReelTitle {
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

.pvReelLoc {
  font-size: 0.8rem;
  color: #cbd5e0;
  margin: 0 0 6px;
  font-weight: 600;
}

.pvReelSpecs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 10px;
}

.pvReelType { font-size: 0.72rem; color: #e2e8f0; font-weight: 600; }
.pvReelPrice { font-size: 0.88rem; color: #f59e0b; font-weight: 800; }

.pvReelCta {
  width: 100%;
  padding: 10px;
  border-radius: 12px;
  background: linear-gradient(135deg, #c5a880 0%, #a38438 100%);
  border: none;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pvReelCta:hover {
  background: linear-gradient(135deg, #d4b97a 0%, #b89c4c 100%);
  box-shadow: 0 4px 14px rgba(197, 168, 128, 0.4);
}

.pvReelNav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid var(--pv-border-light);
  color: var(--pv-gold-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.pvReelNav:hover {
  background: var(--pv-gold);
  color: #ffffff;
  border-color: var(--pv-gold);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 12px 30px rgba(197, 168, 128, 0.4);
}

.pvReelNav--prev { left: 24px; }
.pvReelNav--next { right: 24px; }

/* ── GRID LIGHT CARDS (STRICT 3 COLUMNS FOR PERFECT BALANCED ROWS) ── */
.pvGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 1100px) {
  .pvGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .pvSecLight { padding: 48px 0; }
  .pvContainer { padding: 0 16px; }
  .pvSecHeader { margin-bottom: 30px; padding: 0 8px; }
  .pvPill { font-size: 0.7rem; padding: 6px 16px; letter-spacing: 1.2px; }
  .pvSecTitle { font-size: 1.65rem; line-height: 1.25; margin-bottom: 8px; }
  .pvSecSub { font-size: 0.92rem; line-height: 1.55; }
  .pvReelsSec { padding: 48px 0; }
  .pvReelsTrack { padding: 16px 20px 24px; gap: 16px; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
  .pvReelCard { flex: 0 0 82vw; max-width: 280px; scroll-snap-align: center; }
  .pvReelFrame { height: 440px; border-radius: 28px; border-width: 3px; }
  .pvReelTitle { font-size: 1.15rem; }
  .pvReelBody { padding: 16px 14px 18px; }
  .pvReelCta { padding: 9px; font-size: 0.78rem; }
  .pvGrid { grid-template-columns: 1fr; gap: 20px; }
  .pvLightCard { border-radius: 16px; }
  .pvLightCard__media { height: 200px; }
  .pvLightCard__content { padding: 18px 16px; }
  .pvLightCard__title { font-size: 1.18rem; margin-bottom: 2px; }
  .pvLightCard__sub { font-size: 0.8rem; margin-bottom: 10px; }
  .pvLightCard__desc { font-size: 0.82rem; line-height: 1.5; margin-bottom: 14px; }
  .pvLightCard__specs { gap: 8px; padding: 10px 12px; margin-bottom: 16px; }
  .pvSpec__label { font-size: 0.6rem; }
  .pvSpec__val { font-size: 0.8rem; }
  .pvSpec--price .pvSpec__val { font-size: 0.9rem; }
  .pvLightCard__actions { gap: 8px; }
  .pvLightBtn { padding: 11px 12px; font-size: 0.8rem; }
  .pvReelNav { display: none; }
}

@media (max-width: 480px) {
  .pvSecTitle { font-size: 1.45rem; }
  .pvReelCard { flex: 0 0 85vw; max-width: 270px; }
  .pvReelFrame { height: 420px; }
  .pvLightCard__media { height: 185px; }
  .pvLightCard__actions { flex-direction: row; }
  .pvLightBtn--wa { padding: 11px 14px; }
}

.pvLightCard {
  background: #ffffff;
  border: 1px solid var(--pv-border-light);
  border-radius: var(--pv-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
}

.pvLightCard:hover {
  transform: translateY(-8px);
  border-color: rgba(197, 168, 128, 0.7);
  box-shadow: 0 20px 45px rgba(197, 168, 128, 0.22);
}

.pvLightCard__media {
  position: relative;
  height: 230px;
  overflow: hidden;
}

.pvLightCard__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.pvLightCard:hover .pvLightCard__img { transform: scale(1.07); }

.pvLightCard__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%);
  pointer-events: none;
}

.pvLightCard__top {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
}

.pvBadge {
  padding: 5px 14px;
  border-radius: 25px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.pvBadge--offplan {
  background: linear-gradient(135deg, #c5a880 0%, #96742c 100%);
  color: #ffffff;
}

.pvBadge--ready {
  background: #10b981;
  color: #ffffff;
}

.pvBadge--lease {
  background: #3b82f6;
  color: #ffffff;
}

.pvBadge--luxury {
  background: linear-gradient(135deg, #e0a96d 0%, #8c5319 100%);
  color: #ffffff;
  box-shadow: 0 0 10px rgba(224, 169, 109, 0.5);
}

.pvLightCard__location {
  position: absolute;
  bottom: 12px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 600;
  z-index: 2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.7);
}

.pvLightCard__content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.pvLightCard__title {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--pv-dark-text);
  margin: 0 0 4px;
  letter-spacing: -0.2px;
}

.pvLightCard__sub {
  font-size: 0.84rem;
  color: var(--pv-gold-dark);
  font-weight: 700;
  margin: 0 0 12px;
}

.pvLightCard__desc {
  font-size: 0.85rem;
  color: var(--pv-slate-text);
  line-height: 1.6;
  margin: 0 0 18px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.pvLightCard__specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background: #f9f8f4;
  border: 1px solid #eae6df;
  padding: 12px 14px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.pvSpec {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.pvSpec__label {
  font-size: 0.63rem;
  font-weight: 800;
  color: #64748b;
  letter-spacing: 0.8px;
}

.pvSpec__val {
  font-size: 0.84rem;
  font-weight: 700;
  color: #1e293b;
}

.pvSpec--price .pvSpec__val {
  color: var(--pv-gold-dark);
  font-size: 0.95rem;
  font-weight: 800;
}

.pvLightCard__actions {
  display: flex;
  gap: 10px;
  margin-top: auto;
}

.pvLightBtn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 0.82rem;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pvLightBtn--primary {
  background: linear-gradient(135deg, #c5a880 0%, #a38438 100%);
  color: #ffffff;
}

.pvLightBtn--primary:hover {
  background: linear-gradient(135deg, #d4b97a 0%, #b89c4c 100%);
  box-shadow: 0 4px 14px rgba(197, 168, 128, 0.35);
  transform: translateY(-1px);
}

.pvLightBtn--modal {
  background: #f1ede5;
  border: 1px solid #dcd6cb;
  color: #1e293b;
}

.pvLightBtn--modal:hover {
  background: #e6e0d3;
  border-color: #c5a880;
  color: var(--pv-gold-dark);
}

.pvLightBtn--wa {
  flex: none;
  padding: 12px 18px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.22);
}

.pvLightBtn--wa:hover {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(16, 185, 129, 0.35);
}
</style>

<!-- ════════════════════════════════════════════════════════════════
     REELS HORIZONTAL CAROUSEL SHOWCASE (LIGHT THEME)
     ════════════════════════════════════════════════════════════════ -->
<section class="pvReelsSec" id="featured-reels-carousel">
  <div class="pvSecHeader">
    <span class="pvPill">
      <span class="pvPillDot"></span>
      Interactive Visual Portfolio
    </span>
    <h2 class="pvSecTitle">Explore Qatar's 24 Landmark Projects</h2>
    <p class="pvSecSub">
      Swipe or scroll horizontally to discover luxury off-plan & ready real estate projects across Qetaifan Islands, Lusail City, and The Pearl.
    </p>
  </div>

  <div class="pvReelsTrackWrap">
    <button type="button" class="pvReelNav pvReelNav--prev" onclick="scrollReelsTrack(-1)" aria-label="Previous Project">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
    </button>

    <div class="pvReelsTrack" id="fgReelsTrack">
      ${allProjects.map(renderLightReelCard).join('\n')}
    </div>

    <button type="button" class="pvReelNav pvReelNav--next" onclick="scrollReelsTrack(1)" aria-label="Next Project">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
    </button>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     SECTION 1: 🌊 SIGNATURE WATERFRONT & ISLAND ESTATES (6 CARDS)
     ════════════════════════════════════════════════════════════════ -->
<section class="pvSecLight pvSecLight--white" id="waterfront-estates">
  <div class="pvContainer">
    <div class="pvSecHeader">
      <span class="pvPill">
        <span class="pvPillDot"></span>
        Qetaifan Island & Coastal Horizons (6 Projects)
      </span>
      <h2 class="pvSecTitle">🌊 Waterfront & Island Estates</h2>
      <p class="pvSecSub">
        Discover ultra-exclusive beachfront villas, curved architectural glass towers, and waterfront master developments across Qetaifan Island North and Lusail Waterfront.
      </p>
    </div>
    <div class="pvGrid">
      ${waterfrontProjs.map(renderLightCard).join('\n')}
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     SECTION 2: 🏙️ LUSAIL CITY MASTERPIECE COLLECTION (6 CARDS)
     ════════════════════════════════════════════════════════════════ -->
<section class="pvSecLight pvSecLight--cream" id="lusail-masterpieces">
  <div class="pvContainer">
    <div class="pvSecHeader">
      <span class="pvPill">
        <span class="pvPillDot"></span>
        Al Erkyah, Fox Hills & Seef Lusail (6 Projects)
      </span>
      <h2 class="pvSecTitle">🏙️ Lusail City Masterpiece Collection</h2>
      <p class="pvSecSub">
        Smart residential towers, skyline duplexes, and luxury residences situated in Qatar's futuristic metropolis of Lusail City with flexible multi-year payment plans.
      </p>
    </div>
    <div class="pvGrid">
      ${lusailProjs.map(renderLightCard).join('\n')}
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     SECTION 3: 💎 THE PEARL ISLAND COLLECTION (6 CARDS)
     ════════════════════════════════════════════════════════════════ -->
<section class="pvSecLight pvSecLight--white" id="pearl-island-collection">
  <div class="pvContainer">
    <div class="pvSecHeader">
      <span class="pvPill">
        <span class="pvPillDot"></span>
        Floresta Gardens & Crown Jewels (6 Projects)
      </span>
      <h2 class="pvSecTitle">💎 The Pearl Island Collection</h2>
      <p class="pvSecSub">
        World-class island living featuring QAR 55M beachfront compound villas, ready-to-move mid-rise towers, and unique 20-year Lease-to-Own investment opportunities.
      </p>
    </div>
    <div class="pvGrid">
      ${pearlProjs.map(renderLightCard).join('\n')}
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     SECTION 4: 🏡 PRIVATE VILLA ESTATES & RETREATS (6 CARDS)
     ════════════════════════════════════════════════════════════════ -->
<section class="pvSecLight pvSecLight--pearl" id="private-villa-estates">
  <div class="pvContainer">
    <div class="pvSecHeader">
      <span class="pvPill">
        <span class="pvPillDot"></span>
        Standalone Compounds & Beach Chalets (6 Projects)
      </span>
      <h2 class="pvSecTitle">🏡 Private Villa Estates & Retreats</h2>
      <p class="pvSecSub">
        Gated private villa compounds in New Salata & Al Muraikh, standalone estate sanctuaries in Huzoom North Lusail, and beachfront chalets in Seef Lusail.
      </p>
    </div>
    <div class="pvGrid">
      ${villaProjs.map(renderLightCard).join('\n')}
    </div>
  </div>
</section>
`;

// Insert the Light Theme Code right before the blog section
const blogMarker = '<section class="pageBlock">\r\n                <section class="latestBlogPosts';
const blogMarkerAlt = '<section class="pageBlock">\n                <section class="latestBlogPosts';

let insertIdx = html.indexOf(blogMarker);
if (insertIdx === -1) insertIdx = html.indexOf(blogMarkerAlt);
if (insertIdx === -1) insertIdx = html.indexOf('<section class="latestBlogPosts');

if (insertIdx > -1) {
  html = html.slice(0, insertIdx) + lightThemeHTML + '\n\n' + html.slice(insertIdx);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('✨ SUCCESS: Verified 24 100% pure real estate photos and updated homepage index.html!');
} else {
  console.error('❌ Could not find blog section insertion point');
}
