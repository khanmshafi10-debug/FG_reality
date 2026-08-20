const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 1. Remove any previous pvProj injection if present
const cssStart = html.indexOf('<style id="pvProjectsCSS">');
if (cssStart > -1) {
  // Find where the pvProjects section ends (before blog section or </main>)
  const blogPos = html.indexOf('<section class="latestBlogPosts');
  if (blogPos > -1) {
    // Find the section wrap before blog
    const sectionBeforeBlog = html.lastIndexOf('<section class="pageBlock', blogPos);
    if (sectionBeforeBlog > cssStart) {
      html = html.slice(0, cssStart) + html.slice(blogPos);
    }
  }
}

// 2. Comprehensive 19 Projects Dataset with curated unique images & payment plans
const projects = [
  {
    num: '03',
    slug: 'via-doro',
    name: "Via D'Oro",
    district: "Qetaifan Island North",
    city: "Lusail",
    cat: "villas waterfront",
    catLabel: "Waterfront & Islands",
    type: "Signature Luxury Villas",
    beds: "4+ Maid Villas",
    price: "QAR 4,250,000",
    handover: "Q2 2028",
    dp: "10% Down Payment",
    plan: "10% Booking, 40% during construction, 50% on Handover (Q2 2028)",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/skala-villas/sk-feature-1.jpg",
    desc: "A luxury Mediterranean-style compound featuring 34 premium signature villas on Qetaifan Island. Each villa includes a private elevator, fully equipped backyard with a private waterfall, barbecue grill, and pergola."
  },
  {
    num: '04',
    slug: 'elite-residence',
    name: "Elite Residence",
    district: "Al Erkyah City",
    city: "Lusail",
    cat: "lusail apartments",
    catLabel: "Lusail City",
    type: "1 Bedroom Apartments",
    beds: "1 Bedroom",
    price: "QAR 825,000",
    handover: "Q4 2027",
    dp: "QAR 50K Fixed DP",
    plan: "QAR 50,000 initial down payment, flexible monthly installments over 6 years",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/city-avenue/city_feature_1.jpg",
    desc: "Modern residential tower in Al Erkyah City offering stylish 1-bedroom apartments with smart layouts, premium finishes, and a 6-year flexible payment plan starting from QAR 825,000."
  },
  {
    num: '05',
    slug: 'floresta-105',
    name: "Floresta 105",
    district: "Floresta Gardens",
    city: "The Pearl-Qatar",
    cat: "pearl apartments",
    catLabel: "The Pearl Island",
    type: "High-End Apartments",
    beds: "1 - 3 Bedrooms",
    price: "QAR 1,770,000",
    handover: "Immediate / Ready",
    dp: "Ready Move-In",
    plan: "100% Cash or Bank Financing eligible with immediate key delivery",
    badge: "Ready",
    badgeClass: "ready",
    img: "/images/developments/milos/milos_real_1.jpg",
    desc: "Located in the Floresta Gardens precinct of The Pearl Island. High-end mid-rise residential tower offering modern 2-to-3-bedroom apartments with master suites, maid's rooms, and private balconies overlooking landscaped green spaces."
  },
  {
    num: '06',
    slug: 'boulevard-residence',
    name: "Boulevard Residence",
    district: "Fox Hills",
    city: "Lusail",
    cat: "lusail apartments",
    catLabel: "Lusail City",
    type: "1 & 2 BR Apartments",
    beds: "1 - 2 Bedrooms",
    price: "QAR 1,000,000",
    handover: "July 2027",
    dp: "5% Down Payment",
    plan: "5% Down Payment, 7-year payment plan with post-handover options",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/city-avenue/city_feature_2.jpg",
    desc: "Contemporary residential tower in Fox Hills, Lusail offering elegantly designed 1 and 2-bedroom apartments with a 7-year payment plan, rooftop pool amenities, and close proximity to Lusail Boulevard."
  },
  {
    num: '08',
    slug: 'carlton-house',
    name: "Carlton House",
    district: "Qetaifan Island North",
    city: "Lusail",
    cat: "waterfront apartments",
    catLabel: "Waterfront & Islands",
    type: "Curved Waterfront Residences",
    beds: "Studio - 3 BR",
    price: "QAR 1,460,000",
    handover: "Q4 2028",
    dp: "2% Down Payment",
    plan: "2% Down Payment upon booking, monthly installments extending until 2033",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/skala-villas/sk-feature-4.jpg",
    desc: "An iconic curved waterfront tower on Qetaifan Island featuring studios to 3-bedroom luxury apartments with panoramic sea views, smart-home automation, and payment plans extending till 2033."
  },
  {
    num: '10',
    slug: 'orjuwan',
    name: "Orjuwan Tower",
    district: "Al Erkyah City",
    city: "Lusail",
    cat: "lusail apartments",
    catLabel: "Lusail City",
    type: "Modern Apartments",
    beds: "1 Bedroom",
    price: "QAR 1,100,000",
    handover: "October 2026",
    dp: "30% Before Handover",
    plan: "30% paid before handover in Oct 2026, remaining 70% post-handover until 2032",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/city-avenue/city_hero_new.jpg",
    desc: "Premium residential tower in Al Erkyah City offering 1-bedroom apartments starting at QAR 1.1M with flexible payment structure — 30% before handover and 70% post-handover till end of 2032."
  },
  {
    num: '11',
    slug: 'canal-bay',
    name: "Canal Bay",
    district: "Qetaifan Island North",
    city: "Lusail",
    cat: "waterfront apartments",
    catLabel: "Waterfront & Islands",
    type: "Architectural Beachfront Tower",
    beds: "2 Bedrooms",
    price: "QAR 2,000,000",
    handover: "Q4 2028",
    dp: "2% Down Payment",
    plan: "2% initial reservation, flexible quarterly installments extending till 2033",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/skala-villas/sk-feature-5.jpg",
    desc: "A striking architectural waterfront development on Qetaifan Island with 2-bedroom apartments starting at QAR 2M, featuring organic curved facades, direct beach access, and payment plans till end of 2033."
  },
  {
    num: '12',
    slug: 'al-mayyas',
    name: "Al Mayyas Tower",
    district: "The Pearl-Qatar",
    city: "The Pearl",
    cat: "pearl apartments",
    catLabel: "The Pearl Island",
    type: "Luxury Sea View Apartments",
    beds: "1 - 3 Bedrooms",
    price: "QAR 2,110,000",
    handover: "Q4 2026",
    dp: "10% Down Payment",
    plan: "10% Down Payment, 40% during construction, 50% on Handover in Q4 2026",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/milos/milos_real_3.jpg",
    desc: "Luxury residential tower at The Pearl offering 1 to 3-bedroom apartments with premium Arabian Gulf views, world-class spa facilities, and handover by Q4 2026 with 10% down payment."
  },
  {
    num: '13',
    slug: 'coralia-villas',
    name: "Coralia Compound Villas",
    district: "The Pearl-Qatar",
    city: "The Pearl",
    cat: "pearl villas waterfront",
    catLabel: "The Pearl Island",
    type: "Ultra-Luxury Island Villa",
    beds: "5 BR + Maid + Pool",
    price: "QAR 55,000,000",
    handover: "Q4 2026",
    dp: "50% Booking",
    plan: "50% Down payment upon reservation, 50% upon final completion & keys",
    badge: "Ultra Luxury",
    badgeClass: "luxury",
    img: "/images/developments/flora-villas/unit_1.jpg",
    desc: "Ultra-luxury 5-bedroom waterfront villas at The Pearl featuring exclusive island living, private beach access, grand architectural design, and direct marina views. A rare trophy asset at QAR 55M."
  },
  {
    num: '14',
    slug: 'corallia',
    name: "Corallia Residences",
    district: "The Pearl-Qatar",
    city: "The Pearl",
    cat: "pearl apartments",
    catLabel: "The Pearl Island",
    type: "20-Year Lease to Own",
    beds: "Studio - 2 BR",
    price: "QAR 3,650,000",
    handover: "Immediate Lease-to-Own",
    dp: "2% Down Payment",
    plan: "Unique 20-year Lease to Own program: 2% Down Payment, fixed monthly rent-to-own structure",
    badge: "Lease to Own",
    badgeClass: "lease",
    img: "/images/developments/milos/milos_real_4.jpg",
    desc: "Premium residences at The Pearl offering a unique 20-year Lease to Own model with only 2% down payment. Studios from QAR 3.65M, 1-bedrooms from QAR 3.72M, and 2-bedrooms from QAR 6.96M."
  },
  {
    num: '15',
    slug: 'skala-tower',
    name: "Skala Tower",
    district: "Lusail Waterfront",
    city: "Lusail",
    cat: "waterfront apartments",
    catLabel: "Waterfront & Islands",
    type: "33-Story Beachfront Tower",
    beds: "1 - 2 Bedrooms",
    price: "QAR 2,000,000",
    handover: "Q4 2026",
    dp: "5% Down Payment",
    plan: "5% Booking down payment, 35% during construction, 60% post-handover plan till 2031",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/skala-villas/sk-feature-2.jpg",
    desc: "An iconic 33-story luxury waterfront tower on the Lusail Waterfront featuring 189 premium apartments with high-end smart-home amenities, direct private beach access, and payment plans till end of 2031."
  },
  {
    num: '16',
    slug: 'la-mer-tower',
    name: "La Mer Tower",
    district: "Lusail Waterfront",
    city: "Lusail",
    cat: "waterfront apartments",
    catLabel: "Waterfront & Islands",
    type: "Coastal Glass High-Rise",
    beds: "Studio & 1 BR",
    price: "QAR 1,000,000",
    handover: "Q4 2027",
    dp: "2% Down Payment",
    plan: "2% reservation fee, zero interest installments over 8 years extending till 2032",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/skala-villas/sk-feature-6.jpg",
    desc: "A sleek waterfront tower on Lusail Waterfront offering studios from QAR 1M and 1-bedrooms from QAR 2M. Features modern coastal design, rooftop infinity pool, and payment plans extending till 2032."
  },
  {
    num: '17',
    slug: 'bliss-residences',
    name: "Bliss Residences",
    district: "Fox Hills",
    city: "Lusail",
    cat: "lusail apartments",
    catLabel: "Lusail City",
    type: "Ready Luxury Apartments",
    beds: "1 - 3 Bedrooms",
    price: "QAR 1,540,000",
    handover: "Ready Move-In",
    dp: "35% Down Payment",
    plan: "35% Down Payment for immediate key handover, balance over 5-year post-handover plan",
    badge: "Ready",
    badgeClass: "ready",
    img: "/images/developments/city-avenue/city_feature_3.jpg",
    desc: "Ready-to-move-in luxury residences in Fox Hills, Lusail offering 1 to 3-bedroom apartments with premium finishes, 5-year post-handover payment plan, and immediate move-in key handover."
  },
  {
    num: '18',
    slug: 'marbella',
    name: "Marbella Residence",
    district: "Entertainment City",
    city: "Lusail",
    cat: "lusail apartments",
    catLabel: "Lusail City",
    type: "Lifestyle Residences",
    beds: "1 - 3 Bedrooms",
    price: "QAR 1,670,000",
    handover: "Q3 2027",
    dp: "10% Down Payment",
    plan: "10% Down payment upon reservation, 7-year total payment structure",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/milos/milos_real_6.jpg",
    desc: "Modern residential tower in Lusail Entertainment City offering 1 to 3-bedroom apartments with maid rooms, 7-year payment plan at 10% down payment, and proximity to entertainment venues."
  },
  {
    num: '19',
    slug: 'bliss-tower',
    name: "Bliss Tower",
    district: "Al Kharaej",
    city: "Lusail",
    cat: "lusail apartments",
    catLabel: "Lusail City",
    type: "Duplex High-Rise",
    beds: "1 - 3 BR Duplex",
    price: "QAR 1,520,000",
    handover: "December 2028",
    dp: "5% Down Payment",
    plan: "5% booking fee, flexible 6-year payment plan with handover in December 2028",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/milos/milos_real_8.jpg",
    desc: "A premium residential tower in Al Kharaej, Lusail offering 1-bedroom to 3-bedroom duplex apartments with a 6-year payment plan, 5% down payment, and handover in December 2028."
  },
  {
    num: '20',
    slug: 'bliss-gardens',
    name: "Bliss Gardens",
    district: "New Salata",
    city: "Doha",
    cat: "villas",
    catLabel: "Villas & Estates",
    type: "Private Gated Villa Compound",
    beds: "5 BR + Maid",
    price: "QAR 4,290,000",
    handover: "October 2027",
    dp: "10% Down Payment",
    plan: "10% reservation, 5-year total payment plan with private pool included",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/flora-villas/unit_2.jpg",
    desc: "Exclusive villa compound in New Salata, Doha featuring 5-bedroom villas with maid quarters, private swimming pools, 5-year payment plan, and handover in October 2027."
  },
  {
    num: '21',
    slug: 'bliss-gardens-2',
    name: "Bliss Gardens II",
    district: "Al Muraikh",
    city: "Doha",
    cat: "villas",
    catLabel: "Villas & Estates",
    type: "Standalone Villa Community",
    beds: "5 BR + Maid",
    price: "QAR 4,080,000",
    handover: "December 2027",
    dp: "10% Down Payment",
    plan: "10% Down Payment, 5-year payment plan with driver room & private garden",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/flora-villas/unit_3.jpg",
    desc: "Premium villa compound in Al Muraikh, Doha offering 5-bedroom standalone villas with maid quarters, landscaped gardens, 5-year payment plan, and handover in December 2027."
  },
  {
    num: '23',
    slug: 'voya-residence',
    name: "Voya Residence",
    district: "Al Kharaej (Seef Lusail)",
    city: "Lusail",
    cat: "waterfront apartments",
    catLabel: "Waterfront & Islands",
    type: "Coastal Waterfront Chalets",
    beds: "1 - 4 BR & Chalets",
    price: "QAR 1,458,000",
    handover: "Immediate / Ready",
    dp: "60% Down Payment",
    plan: "60% Down payment for immediate move-in key handover, balance over 2 years",
    badge: "Ready",
    badgeClass: "ready",
    img: "/images/developments/valencia-residence/hero.jpg",
    desc: "A coastal architectural masterpiece on the Lusail Waterfront offering 119 luxury units from 1 to 4-bedroom sea-view apartments and private chalets with direct beach entry, infinity pools, and private health club."
  },
  {
    num: '24',
    slug: 'miran-tower',
    name: "Miran Tower",
    district: "Al Kharaej (Seef Lusail)",
    city: "Lusail",
    cat: "lusail apartments",
    catLabel: "Lusail City",
    type: "Fully Furnished Smart Tower",
    beds: "2 Bedrooms",
    price: "QAR 1,590,000",
    handover: "March 2028",
    dp: "10% Down Payment",
    plan: "10% Booking fee, post-handover installment structure extending to 2031",
    badge: "Off-Plan",
    badgeClass: "offplan",
    img: "/images/developments/valencia-residence/unit_1.jpg",
    desc: "Developed by Mazaya Real Estate in the Al Kharaej district of Seef Lusail offering fully furnished smart apartments with open-plan layouts, rooftop pools, and close proximity to the waterfront promenade."
  }
];

// Helper to escape JSON for html attribute
function jsonAttr(obj) {
  return JSON.stringify(obj).replace(/"/g, '&quot;');
}

// Generate Card HTML for a project
function renderCard(p) {
  return `
    <article class="fgProjCard" data-cat="${p.cat}" data-search="${(p.name + ' ' + p.district + ' ' + p.city + ' ' + p.type + ' ' + p.badge).toLowerCase()}">
      <div class="fgProjCard__media">
        <img src="${p.img}" alt="${p.name}" class="fgProjCard__img" loading="lazy">
        <div class="fgProjCard__gradient"></div>
        <div class="fgProjCard__badges">
          <span class="fgBadge fgBadge--${p.badgeClass}">${p.badge}</span>
          <span class="fgBadge fgBadge--num">NO. ${p.num}</span>
        </div>
        <div class="fgProjCard__location">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0C2.68629 0 0 2.68629 0 6C0 10.5 6 14 6 14C6 14 12 10.5 12 6C12 2.68629 9.31371 0 6 0ZM6 8.5C4.61929 8.5 3.5 7.38071 3.5 6C3.5 4.61929 4.61929 3.5 6 3.5C7.38071 3.5 8.5 4.61929 8.5 6C8.5 7.38071 7.38071 8.5 6 8.5Z" fill="#c5a880"/></svg>
          <span>${p.district}, ${p.city}</span>
        </div>
      </div>
      <div class="fgProjCard__content">
        <h3 class="fgProjCard__title">${p.name}</h3>
        <p class="fgProjCard__sub">${p.type}</p>
        <p class="fgProjCard__desc">${p.desc}</p>
        
        <div class="fgProjCard__specs">
          <div class="fgSpec">
            <span class="fgSpec__label">BEDROOMS</span>
            <span class="fgSpec__val">${p.beds}</span>
          </div>
          <div class="fgSpec">
            <span class="fgSpec__label">HANDOVER</span>
            <span class="fgSpec__val">${p.handover}</span>
          </div>
          <div class="fgSpec">
            <span class="fgSpec__label">DOWN PAYMENT</span>
            <span class="fgSpec__val">${p.dp}</span>
          </div>
          <div class="fgSpec fgSpec--price">
            <span class="fgSpec__label">STARTING FROM</span>
            <span class="fgSpec__val">${p.price}</span>
          </div>
        </div>

        <div class="fgProjCard__actions">
          <button type="button" class="fgBtnModal" onclick="openFgProjectModal('${p.slug}')">
            <span>Quick Details</span>
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M8 1L13 6M13 6L8 11M13 6H1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <a href="https://wa.me/97460005054?text=Hello%20Prime%20View%20Real%20Estate%2C%20I%20am%20interested%20in%20inquiring%20about%20${encodeURIComponent(p.name)}%20(${encodeURIComponent(p.district)})" target="_blank" rel="noopener" class="fgBtnWhatsapp" aria-label="Inquire via WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.027-1.056z"/></svg>
            <span>Inquire</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

// Complete Section HTML + CSS + JS Injection
const fullComponentCode = `
<style id="fgProjectsShowcaseCSS">
/* ════════════════════════════════════════════════════════════════
   PRIME VIEW REAL ESTATE - NEW PROJECTS LUXURY SHOWCASE
   ════════════════════════════════════════════════════════════════ */

.fgShowcase {
  padding: 80px 0 60px;
  background: linear-gradient(180deg, #0b0f17 0%, #111723 100%);
  color: #ffffff;
  font-family: var(--font-primary, "Plus Jakarta Sans", sans-serif);
  position: relative;
  overflow: hidden;
}

.fgShowcase::before {
  content: '';
  position: absolute;
  top: -150px;
  right: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(197, 168, 128, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.fgShowcase__container {
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 24px;
}

.fgShowcase__header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 48px;
}

.fgShowcase__pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 22px;
  border-radius: 40px;
  background: rgba(197, 168, 128, 0.1);
  border: 1px solid rgba(197, 168, 128, 0.3);
  color: #c5a880;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.fgShowcase__pill-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c5a880;
  box-shadow: 0 0 10px #c5a880;
}

.fgShowcase__title {
  font-size: 2.6rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
  margin: 0 0 16px;
  line-height: 1.2;
}

.fgShowcase__subtitle {
  font-size: 1.05rem;
  color: #a0aec0;
  line-height: 1.65;
  margin: 0;
}

/* ── Filter Bar ── */
.fgShowcase__controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 16px 20px;
  border-radius: 20px;
  backdrop-filter: blur(12px);
}

.fgShowcase__tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.fgTab {
  padding: 10px 22px;
  border-radius: 12px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #cbd5e0;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.fgTab:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(197, 168, 128, 0.4);
  color: #ffffff;
}

.fgTab.active {
  background: linear-gradient(135deg, #c5a880 0%, #a38438 100%);
  border-color: #c5a880;
  color: #0b0f17;
  font-weight: 700;
  box-shadow: 0 4px 18px rgba(197, 168, 128, 0.25);
}

.fgSearchBox {
  position: relative;
  min-width: 280px;
  flex: 1;
  max-width: 340px;
}

.fgSearchBox__input {
  width: 100%;
  padding: 12px 18px 12px 42px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #ffffff;
  font-size: 0.88rem;
  outline: none;
  transition: border-color 0.3s ease;
}

.fgSearchBox__input:focus {
  border-color: #c5a880;
  box-shadow: 0 0 0 3px rgba(197, 168, 128, 0.15);
}

.fgSearchBox__icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #718096;
  pointer-events: none;
}

/* ── Projects Grid ── */
.fgProjGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 28px;
}

@media (max-width: 768px) {
  .fgShowcase__title { font-size: 1.9rem; }
  .fgProjGrid { grid-template-columns: 1fr; gap: 24px; }
  .fgSearchBox { min-width: 100%; max-width: 100%; }
  .fgShowcase__controls { padding: 14px; }
}

/* ── Card Component ── */
.fgProjCard {
  background: #141b27;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.fgProjCard:hover {
  transform: translateY(-8px);
  border-color: rgba(197, 168, 128, 0.6);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}

.fgProjCard.hidden {
  display: none !important;
}

.fgProjCard__media {
  position: relative;
  height: 230px;
  overflow: hidden;
}

.fgProjCard__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.fgProjCard:hover .fgProjCard__img {
  transform: scale(1.08);
}

.fgProjCard__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(20,27,39,0.95) 100%);
  pointer-events: none;
}

.fgProjCard__badges {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.fgBadge {
  padding: 6px 14px;
  border-radius: 30px;
  font-size: 0.73rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
}

.fgBadge--offplan {
  background: linear-gradient(135deg, #c5a880 0%, #96742c 100%);
  color: #0b0f17;
}

.fgBadge--ready {
  background: #10b981;
  color: #ffffff;
}

.fgBadge--lease {
  background: #3b82f6;
  color: #ffffff;
}

.fgBadge--luxury {
  background: linear-gradient(135deg, #e0a96d 0%, #8c5319 100%);
  color: #ffffff;
  box-shadow: 0 0 12px rgba(224, 169, 109, 0.4);
}

.fgBadge--num {
  background: rgba(0, 0, 0, 0.65);
  border: 1px solid rgba(197, 168, 128, 0.4);
  color: #c5a880;
}

.fgProjCard__location {
  position: absolute;
  bottom: 14px;
  left: 18px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #e2e8f0;
  font-size: 0.82rem;
  font-weight: 600;
  z-index: 2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
}

.fgProjCard__content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.fgProjCard__title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 4px;
  letter-spacing: -0.2px;
}

.fgProjCard__sub {
  font-size: 0.85rem;
  color: #c5a880;
  font-weight: 600;
  margin: 0 0 12px;
}

.fgProjCard__desc {
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0 0 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fgProjCard__specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 14px;
  border-radius: 14px;
  margin-bottom: 22px;
}

.fgSpec {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.fgSpec__label {
  font-size: 0.65rem;
  font-weight: 700;
  color: #64748b;
  letter-spacing: 0.8px;
}

.fgSpec__val {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e2e8f0;
}

.fgSpec--price .fgSpec__val {
  color: #c5a880;
  font-size: 0.95rem;
  font-weight: 800;
}

.fgProjCard__actions {
  display: flex;
  gap: 10px;
  margin-top: auto;
}

.fgBtnModal {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-size: 0.84rem;
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
  padding: 12px 18px;
  border-radius: 12px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff;
  font-size: 0.84rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.25);
}

.fgBtnWhatsapp:hover {
  background: linear-gradient(135deg, #34d399 0%, #10b981 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
}

/* ── Modal Dialog ── */
.fgModalOverlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.fgModalOverlay.open {
  opacity: 1;
  pointer-events: auto;
}

.fgModalCard {
  background: #141b27;
  border: 1px solid rgba(197, 168, 128, 0.4);
  border-radius: 24px;
  max-width: 680px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 32px;
  position: relative;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.fgModalOverlay.open .fgModalCard {
  transform: translateY(0);
}

.fgModalClose {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fgModalClose:hover { background: rgba(255, 255, 255, 0.2); }

.fgModalImg {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 24px;
}

.fgModalTitle {
  font-size: 1.8rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 6px;
}

.fgModalLoc {
  font-size: 0.9rem;
  color: #c5a880;
  font-weight: 600;
  margin-bottom: 18px;
}

.fgModalGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  background: rgba(0,0,0,0.3);
  padding: 16px;
  border-radius: 14px;
  margin-bottom: 24px;
  border: 1px solid rgba(255,255,255,0.06);
}

.fgModalPlan {
  background: rgba(197, 168, 128, 0.08);
  border: 1px solid rgba(197, 168, 128, 0.25);
  padding: 16px;
  border-radius: 14px;
  margin-bottom: 24px;
}

.fgModalPlanTitle {
  font-size: 0.8rem;
  font-weight: 700;
  color: #c5a880;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.fgModalPlanText {
  font-size: 0.9rem;
  color: #e2e8f0;
  margin: 0;
  line-height: 1.5;
}
</style>

<!-- ════ PRIME VIEW REAL ESTATE 19 PROJECTS SHOWCASE ════ -->
<section class="fgShowcase" id="all-new-projects">
  <div class="fgShowcase__container">
    
    <!-- Header -->
    <div class="fgShowcase__header">
      <span class="fgShowcase__pill">
        <span class="fgShowcase__pill-dot"></span>
        Prime View Portfolio
      </span>
      <h2 class="fgShowcase__title">19 New Masterpiece Developments</h2>
      <p class="fgShowcase__subtitle">
        Explore Qatar’s most exclusive real estate developments across Lusail City, Qetaifan Islands, and The Pearl. Featuring flexible multi-year payment plans and off-market opportunities.
      </p>
    </div>

    <!-- Controls Bar -->
    <div class="fgShowcase__controls">
      <div class="fgShowcase__tabs" id="fgCatTabs">
        <button class="fgTab active" data-filter="all">All Projects (19)</button>
        <button class="fgTab" data-filter="waterfront">🌊 Waterfront & Islands</button>
        <button class="fgTab" data-filter="lusail">🏙️ Lusail City</button>
        <button class="fgTab" data-filter="pearl">💎 The Pearl Island</button>
        <button class="fgTab" data-filter="villas">🏡 Villas & Estates</button>
      </div>

      <div class="fgSearchBox">
        <svg class="fgSearchBox__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <input type="text" id="fgSearchInput" class="fgSearchBox__input" placeholder="Search by project, location, specs..." />
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="fgProjGrid" id="fgProjectsGrid">
      ${projects.map(renderCard).join('\n')}
    </div>

  </div>
</section>

<!-- Quick View Modal -->
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
      <a id="modalWhatsapp" href="#" target="_blank" class="fgBtnWhatsapp" style="flex:1; justify-content:center;">Direct WhatsApp Inquiry →</a>
    </div>
  </div>
</div>

<script>
// Project Data Map for Modal
const FG_PROJECTS_DATA = ${JSON.stringify(projects.reduce((acc, p) => { acc[p.slug] = p; return acc; }, {}))};

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('#fgCatTabs .fgTab');
  const cards = document.querySelectorAll('#fgProjectsGrid .fgProjCard');
  const searchInput = document.getElementById('fgSearchInput');

  let currentCategory = 'all';

  function filterProjects() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    cards.forEach(card => {
      const cardCats = card.getAttribute('data-cat') || '';
      const cardSearch = card.getAttribute('data-search') || '';

      const matchCat = (currentCategory === 'all') || cardCats.includes(currentCategory);
      const matchSearch = !query || cardSearch.includes(query);

      if (matchCat && matchSearch) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.getAttribute('data-filter');
      filterProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('keyup', filterProjects);
  }
});

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
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeFgModal();
});
</script>
`;

// Insert the new component code right before the blog section
const blogMarker = '<section class="pageBlock">\r\n                <section class="latestBlogPosts';
const blogMarkerAlt = '<section class="pageBlock">\n                <section class="latestBlogPosts';

let insertIdx = html.indexOf(blogMarker);
if (insertIdx === -1) insertIdx = html.indexOf(blogMarkerAlt);
if (insertIdx === -1) insertIdx = html.indexOf('<section class="latestBlogPosts');

if (insertIdx > -1) {
  html = html.slice(0, insertIdx) + fullComponentCode + '\n\n' + html.slice(insertIdx);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('✨ SUCCESS: Upgraded 19 projects showcase injected into homepage index.html!');
} else {
  console.error('❌ Could not find target insertion point in index.html!');
}
