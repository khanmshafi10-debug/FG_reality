const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Remove previous project showcase if present
const cssStart = html.indexOf('<style id="fgProjectsShowcaseCSS">');
if (cssStart > -1) {
  const blogPos = html.indexOf('<section class="latestBlogPosts');
  if (blogPos > -1) {
    html = html.slice(0, cssStart) + html.slice(blogPos);
  }
}

// 2. All 24 Projects Full Data
const allProjects = [
  // SECTION 1: WATERFRONT & ISLANDS
  {
    sec: 'waterfront',
    num: '01',
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
    num: '03',
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
    num: '08',
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
    num: '11',
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
    num: '15',
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
    num: '16',
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

  // SECTION 2: LUSAIL CITY MASTERPIECES
  {
    sec: 'lusail',
    num: '02',
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
    num: '07',
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
    num: '04',
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
    num: '06',
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
    num: '10',
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
    num: '17',
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
    img: '/images/developments/milos/milos_real_5.jpg',
    desc: 'Ready-to-move-in luxury residences in Fox Hills with high-end designer finishes, 5-year post-handover payment plan, and immediate move-in key delivery.'
  },
  {
    sec: 'lusail',
    num: '18',
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
  {
    sec: 'lusail',
    num: '19',
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
    img: '/images/developments/milos/milos_real_8.jpg',
    desc: 'Premium residential tower in Al Kharaej offering 1-3 bedroom duplex apartments with double-height ceilings, 6-year payment plan, and 5% initial booking.'
  },
  {
    sec: 'lusail',
    num: '24',
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
    img: '/images/developments/valencia-residence/unit_1.jpg',
    desc: 'Mazaya Real Estate development in Seef Lusail featuring fully furnished smart apartments with open-plan layouts, rooftop pools, and promenade access.'
  },

  // SECTION 3: THE PEARL ISLAND COLLECTION
  {
    sec: 'pearl',
    num: '09',
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
    num: '05',
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
    num: '12',
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
    num: '13',
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
    num: '14',
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

  // SECTION 4: VILLA ESTATES & RETREATS
  {
    sec: 'villas',
    num: '22',
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
    num: '20',
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
    num: '21',
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
    num: '23',
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
  }
];

// Helper to generate a single project card
function renderProjectCard(p) {
  const detailAction = (p.link && p.link !== 'javascript:void(0)')
    ? `<a href="${p.link}" class="fgBtnViewLink"><span>View Project Page</span><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`
    : `<button type="button" class="fgBtnModal" onclick="openFgProjectModal('${p.slug}')"><span>Quick Details</span><svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;

  return `
    <article class="fgCard24">
      <div class="fgCard24__media">
        <img src="${p.img}" alt="${p.name}" class="fgCard24__img" loading="lazy">
        <div class="fgCard24__overlay"></div>
        <div class="fgCard24__topRow">
          <span class="fgBadge24 fgBadge24--${p.badgeClass}">${p.badge}</span>
          <span class="fgBadge24 fgBadge24--num">NO. ${p.num}</span>
        </div>
        <div class="fgCard24__loc">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M6 0C2.68629 0 0 2.68629 0 6C0 10.5 6 14 6 14C6 14 12 10.5 12 6C12 2.68629 9.31371 0 6 0ZM6 8.5C4.61929 8.5 3.5 7.38071 3.5 6C3.5 4.61929 4.61929 3.5 6 3.5C7.38071 3.5 8.5 4.61929 8.5 6C8.5 7.38071 7.38071 8.5 6 8.5Z" fill="#c5a880"/></svg>
          <span>${p.district}, ${p.city}</span>
        </div>
      </div>
      <div class="fgCard24__body">
        <h3 class="fgCard24__title">${p.name}</h3>
        <p class="fgCard24__sub">${p.type}</p>
        <p class="fgCard24__desc">${p.desc}</p>
        
        <div class="fgCard24__specs">
          <div class="fgSpecItem"><span class="fgSpecItem__label">BEDROOMS</span><span class="fgSpecItem__val">${p.beds}</span></div>
          <div class="fgSpecItem"><span class="fgSpecItem__label">HANDOVER</span><span class="fgSpecItem__val">${p.handover}</span></div>
          <div class="fgSpecItem"><span class="fgSpecItem__label">DOWN PAYMENT</span><span class="fgSpecItem__val">${p.dp}</span></div>
          <div class="fgSpecItem fgSpecItem--price"><span class="fgSpecItem__label">STARTING PRICE</span><span class="fgSpecItem__val">${p.price}</span></div>
        </div>

        <div class="fgCard24__actions">
          ${detailAction}
          <a href="https://wa.me/97460005054?text=Hello%20Prime%20View%20Real%20Estate%2C%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(p.name)}%20(${encodeURIComponent(p.district)})" target="_blank" rel="noopener" class="fgBtnWhatsapp" aria-label="Inquire via WhatsApp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.027-1.056z"/></svg>
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

// Group into sections
const waterfrontProjs = allProjects.filter(p => p.sec === 'waterfront');
const lusailProjs = allProjects.filter(p => p.sec === 'lusail');
const pearlProjs = allProjects.filter(p => p.sec === 'pearl');
const villaProjs = allProjects.filter(p => p.sec === 'villas');

const full24ProjectsHTML = `
<style id="fgProjects24CSS">
/* ════════════════════════════════════════════════════════════════
   PRIME VIEW REAL ESTATE - 24 PROJECTS MULTI-SECTION SHOWCASE
   ════════════════════════════════════════════════════════════════ */

.fgSecWrap {
  padding: 75px 0;
  position: relative;
  overflow: hidden;
  font-family: var(--font-primary, "Plus Jakarta Sans", sans-serif);
}

.fgSecWrap--dark1 {
  background: linear-gradient(180deg, #090d14 0%, #0f1522 100%);
  color: #ffffff;
}

.fgSecWrap--dark2 {
  background: linear-gradient(180deg, #0d121c 0%, #141b27 100%);
  color: #ffffff;
  border-top: 1px solid rgba(197, 168, 128, 0.12);
}

.fgSecWrap--pearl {
  background: linear-gradient(180deg, #111723 0%, #090d14 100%);
  color: #ffffff;
  border-top: 1px solid rgba(197, 168, 128, 0.15);
}

.fgSecWrap--villas {
  background: linear-gradient(180deg, #0a0e17 0%, #111824 100%);
  color: #ffffff;
  border-top: 1px solid rgba(197, 168, 128, 0.12);
}

.fgSecContainer {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 24px;
}

.fgSecHeader {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 760px;
  margin: 0 auto 44px;
}

.fgSecPill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 18px;
  border-radius: 30px;
  background: rgba(197, 168, 128, 0.1);
  border: 1px solid rgba(197, 168, 128, 0.3);
  color: #c5a880;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.fgSecPillDot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #c5a880;
  box-shadow: 0 0 10px #c5a880;
}

.fgSecTitle {
  font-size: 2.3rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
  margin: 0 0 12px;
  line-height: 1.25;
}

.fgSecSub {
  font-size: 1.02rem;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0;
}

/* ── Grid Layout ── */
.fgGrid24 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 28px;
}

@media (max-width: 768px) {
  .fgSecWrap { padding: 50px 0; }
  .fgSecTitle { font-size: 1.8rem; }
  .fgGrid24 { grid-template-columns: 1fr; gap: 22px; }
  .fgSecContainer { padding: 0 16px; }
}

/* ── Card Styling ── */
.fgCard24 {
  background: rgba(20, 27, 39, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.fgCard24:hover {
  transform: translateY(-8px);
  border-color: rgba(197, 168, 128, 0.6);
  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.55);
}

.fgCard24__media {
  position: relative;
  height: 230px;
  overflow: hidden;
}

.fgCard24__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.fgCard24:hover .fgCard24__img {
  transform: scale(1.08);
}

.fgCard24__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(14,20,30,0.95) 100%);
  pointer-events: none;
}

.fgCard24__topRow {
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.fgBadge24 {
  padding: 5px 12px;
  border-radius: 25px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
}

.fgBadge24--offplan {
  background: linear-gradient(135deg, #c5a880 0%, #96742c 100%);
  color: #090d14;
}

.fgBadge24--ready {
  background: #10b981;
  color: #ffffff;
}

.fgBadge24--lease {
  background: #3b82f6;
  color: #ffffff;
}

.fgBadge24--luxury {
  background: linear-gradient(135deg, #e0a96d 0%, #8c5319 100%);
  color: #ffffff;
  box-shadow: 0 0 12px rgba(224, 169, 109, 0.4);
}

.fgBadge24--num {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(197, 168, 128, 0.4);
  color: #c5a880;
}

.fgCard24__loc {
  position: absolute;
  bottom: 12px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #e2e8f0;
  font-size: 0.82rem;
  font-weight: 600;
  z-index: 2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
}

.fgCard24__body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.fgCard24__title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 4px;
  letter-spacing: -0.2px;
}

.fgCard24__sub {
  font-size: 0.84rem;
  color: #c5a880;
  font-weight: 600;
  margin: 0 0 12px;
}

.fgCard24__desc {
  font-size: 0.84rem;
  color: #94a3b8;
  line-height: 1.55;
  margin: 0 0 18px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fgCard24__specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 12px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.fgSpecItem {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.fgSpecItem__label {
  font-size: 0.64rem;
  font-weight: 700;
  color: #64748b;
  letter-spacing: 0.8px;
}

.fgSpecItem__val {
  font-size: 0.83rem;
  font-weight: 600;
  color: #e2e8f0;
}

.fgSpecItem--price .fgSpecItem__val {
  color: #c5a880;
  font-size: 0.92rem;
  font-weight: 800;
}

.fgCard24__actions {
  display: flex;
  gap: 10px;
  margin-top: auto;
}

.fgBtnViewLink {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 14px;
  border-radius: 10px;
  background: linear-gradient(135deg, #c5a880 0%, #a38438 100%);
  color: #090d14;
  font-size: 0.82rem;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.3s ease;
}

.fgBtnViewLink:hover {
  background: linear-gradient(135deg, #d4b97a 0%, #b89c4c 100%);
  box-shadow: 0 4px 14px rgba(197, 168, 128, 0.3);
}

.fgBtnModal {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 14px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.fgBtnModal:hover {
  background: rgba(197, 168, 128, 0.15);
  border-color: #c5a880;
  color: #c5a880;
}

.fgBtnWhatsapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 11px 16px;
  border-radius: 10px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
}

.fgBtnWhatsapp:hover {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  transform: translateY(-2px);
}
</style>

<!-- ════════════════════════════════════════════════════════════════
     SECTION 1: 🌊 SIGNATURE WATERFRONT & ISLAND ESTATES
     ════════════════════════════════════════════════════════════════ -->
<section class="fgSecWrap fgSecWrap--dark1" id="waterfront-estates">
  <div class="fgSecContainer">
    <div class="fgSecHeader">
      <span class="fgSecPill">
        <span class="fgSecPillDot"></span>
        Qetaifan Island & Coastal Horizons (6 Projects)
      </span>
      <h2 class="fgSecTitle">🌊 Waterfront & Island Estates</h2>
      <p class="fgSecSub">
        Discover ultra-exclusive beachfront villas, curved architectural glass towers, and waterfront master developments across Qetaifan Island North and Lusail Waterfront.
      </p>
    </div>
    <div class="fgGrid24">
      ${waterfrontProjs.map(renderProjectCard).join('\n')}
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     SECTION 2: 🏙️ LUSAIL CITY MASTERPIECE COLLECTION
     ════════════════════════════════════════════════════════════════ -->
<section class="fgSecWrap fgSecWrap--dark2" id="lusail-masterpieces">
  <div class="fgSecContainer">
    <div class="fgSecHeader">
      <span class="fgSecPill">
        <span class="fgSecPillDot"></span>
        Al Erkyah, Fox Hills & Seef Lusail (9 Projects)
      </span>
      <h2 class="fgSecTitle">🏙️ Lusail City Masterpiece Collection</h2>
      <p class="fgSecSub">
        Smart residential towers, skyline duplexes, and luxury residences situated in Qatar's futuristic metropolis of Lusail City with flexible multi-year payment plans.
      </p>
    </div>
    <div class="fgGrid24">
      ${lusailProjs.map(renderProjectCard).join('\n')}
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     SECTION 3: 💎 THE PEARL ISLAND COLLECTION
     ════════════════════════════════════════════════════════════════ -->
<section class="fgSecWrap fgSecWrap--pearl" id="pearl-island-collection">
  <div class="fgSecContainer">
    <div class="fgSecHeader">
      <span class="fgSecPill">
        <span class="fgSecPillDot"></span>
        Floresta Gardens & Crown Jewels (5 Projects)
      </span>
      <h2 class="fgSecTitle">💎 The Pearl Island Collection</h2>
      <p class="fgSecSub">
        World-class island living featuring QAR 55M beachfront compound villas, ready-to-move mid-rise towers, and unique 20-year Lease-to-Own investment opportunities.
      </p>
    </div>
    <div class="fgGrid24">
      ${pearlProjs.map(renderProjectCard).join('\n')}
    </div>
  </div>
</section>

<!-- ════════════════════════════════════════════════════════════════
     SECTION 4: 🏡 PRIVATE VILLA ESTATES & RETREATS
     ════════════════════════════════════════════════════════════════ -->
<section class="fgSecWrap fgSecWrap--villas" id="private-villa-estates">
  <div class="fgSecContainer">
    <div class="fgSecHeader">
      <span class="fgSecPill">
        <span class="fgSecPillDot"></span>
        Standalone Compounds & Beach Chalets (4 Projects)
      </span>
      <h2 class="fgSecTitle">🏡 Private Villa Estates & Coastal Retreats</h2>
      <p class="fgSecSub">
        Gated private villa compounds in New Salata & Al Muraikh, standalone estate sanctuaries in Huzoom North Lusail, and beachfront chalets in Seef Lusail.
      </p>
    </div>
    <div class="fgGrid24">
      ${villaProjs.map(renderProjectCard).join('\n')}
    </div>
  </div>
</section>

<!-- ── Quick View Modal ── -->
<div class="fgModalOverlay" id="fgProjectModal" onclick="closeFgModal(event)">
  <div class="fgModalCard" onclick="event.stopPropagation()">
    <button type="button" class="fgModalClose" onclick="closeFgModal()">&times;</button>
    <img id="modalImg" src="" alt="" class="fgModalImg">
    <h3 id="modalTitle" class="fgModalTitle"></h3>
    <div id="modalLoc" class="fgModalLoc"></div>
    <p id="modalDesc" style="color:#94a3b8; font-size:0.95rem; line-height:1.6; margin-bottom:20px;"></p>
    
    <div class="fgModalGrid">
      <div class="fgSpec"><span class="fgSpec__label">PROPERTY TYPE</span><span id="modalType" class="fgSpec__val"></span></div>
      <div class="fgSpec"><span class="fgSpec__label">BEDROOMS</span><span id="modalBeds" class="fgSpec__val"></span></div>
      <div class="fgSpec"><span class="fgSpec__label">EXPECTED HANDOVER</span><span id="modalHandover" class="fgSpec__val"></span></div>
      <div class="fgSpec fgSpec--price"><span class="fgSpec__label">STARTING PRICE</span><span id="modalPrice" class="fgSpec__val"></span></div>
    </div>

    <div class="fgModalPlan">
      <div class="fgModalPlanTitle">FLEXIBLE PAYMENT PLAN & STRUCTURE</div>
      <p id="modalPlan" class="fgModalPlanText"></p>
    </div>

    <div style="display:flex; gap:12px;">
      <a id="modalWhatsapp" href="#" target="_blank" class="fgBtnWhatsapp" style="flex:1; justify-content:center; padding:14px;">Direct WhatsApp Inquiry →</a>
    </div>
  </div>
</div>

<script>
const FG_PROJECTS_DATA = ${JSON.stringify(allProjects.reduce((acc, p) => { acc[p.slug] = p; return acc; }, {}))};

function openFgProjectModal(slug) {
  const p = FG_PROJECTS_DATA[slug];
  if (!p) return;

  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalLoc').textContent = '📍 ' + p.district + ', ' + p.city + ' (' + p.badge + ')';
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalType').textContent = p.type;
  document.getElementById('modalBeds').textContent = p.beds;
  document.getElementById('modalHandover').textContent = p.handover;
  document.getElementById('modalPrice').textContent = p.price;
  document.getElementById('modalPlan').textContent = p.plan;

  const waUrl = 'https://wa.me/97460005054?text=Hello%20Prime%20View%20Real%20Estate%2C%20I%20would%20like%20more%20information%20about%20' + encodeURIComponent(p.name) + '%20(' + encodeURIComponent(p.district) + ')';
  document.getElementById('modalWhatsapp').href = waUrl;

  const modal = document.getElementById('fgProjectModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeFgModal(e) {
  const modal = document.getElementById('fgProjectModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeFgModal();
});
</script>
`;

// Insert the new multi-section code right before the blog section
const blogMarker = '<section class="pageBlock">\r\n                <section class="latestBlogPosts';
const blogMarkerAlt = '<section class="pageBlock">\n                <section class="latestBlogPosts';

let insertIdx = html.indexOf(blogMarker);
if (insertIdx === -1) insertIdx = html.indexOf(blogMarkerAlt);
if (insertIdx === -1) insertIdx = html.indexOf('<section class="latestBlogPosts');

if (insertIdx > -1) {
  html = html.slice(0, insertIdx) + full24ProjectsHTML + '\n\n' + html.slice(insertIdx);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('✨ SUCCESS: Integrated 24 total projects into 4 dedicated sections on index.html!');
} else {
  console.error('❌ Target insertion point not found in index.html');
}
