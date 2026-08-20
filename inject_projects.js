const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// All 19 projects data with real content from the brochure images
const projects = [
  {
    num: '03', name: "Via D'Oro", location: 'Qetaifan Island, Lusail', category: 'villas',
    type: 'Luxury Mediterranean Villas', beds: '4+ Maid', price: 'QAR 4.25M', handover: 'Q2 2028', dp: '10%',
    desc: 'A luxury Mediterranean-style compound featuring 34 premium signature villas on Qetaifan Island. Each villa includes a private elevator, fully equipped backyard with private waterfall, grill, and pergola.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '04', name: 'Elite Residence', location: 'Lusail, Erkyah', category: 'apartments',
    type: '1 Bedroom Apartments', beds: '1 BR', price: 'QAR 825K', handover: 'End of 2027', dp: 'QAR 50K Fixed',
    desc: 'Modern residential tower in Al Erkyah City offering stylish 1-bedroom apartments with smart layouts, premium finishes, and a 6-year flexible payment plan starting from QAR 825K.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '05', name: 'Floresta 105', location: 'The Pearl-Qatar', category: 'apartments',
    type: 'Ready Apartments', beds: '1-3 BR', price: 'QAR 1.77M', handover: 'Ready', dp: '—',
    desc: 'Located in the Floresta Gardens precinct of The Pearl Island. A high-end mid-rise residential tower offering modern 2-to-3-bedroom apartments with master suites, maid rooms, and private balconies overlooking landscaped green spaces.',
    badge: 'Ready', badgeClass: 'ready'
  },
  {
    num: '06', name: 'Boulevard Residence', location: 'Lusail Fox Hills', category: 'apartments',
    type: '1 & 2 Bedroom Apartments', beds: '1-2 BR', price: 'QAR 1M', handover: 'July 2027', dp: '5%',
    desc: 'Contemporary residential tower in Fox Hills, Lusail offering elegantly designed 1 and 2-bedroom apartments with a 7-year payment plan, rooftop amenities, and proximity to Lusail Boulevard.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '08', name: 'Carlton House', location: 'Qetaifan Island', category: 'apartments',
    type: 'Studio to 3 BR Apartments', beds: 'Studio-3 BR', price: 'QAR 1.46M', handover: 'Q4 2028', dp: '2%',
    desc: 'An iconic curved waterfront tower on Qetaifan Island featuring studios to 3-bedroom luxury apartments with panoramic sea views, smart-home technology, and payment plans extending till 2033.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '10', name: 'Orjuwan', location: 'Lusail, Erkyah', category: 'apartments',
    type: '1 Bedroom Apartments', beds: '1 BR', price: 'QAR 1.1M', handover: 'October 2026', dp: '30% Before',
    desc: 'Premium residential tower in Al Erkyah City offering 1-bedroom apartments starting at QAR 1.1M with flexible payment structure — 30% before handover and 70% post handover till end of 2032.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '11', name: 'Canal Bay', location: 'Qetaifan Island', category: 'apartments',
    type: '2 Bedroom Apartments', beds: '2 BR', price: 'QAR 2M', handover: 'Q4 2028', dp: '2%',
    desc: 'A striking architectural waterfront development on Qetaifan Island with 2-bedroom apartments starting at QAR 2M, featuring organic curved facades, direct beach access, and payment plans till end of 2033.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '12', name: 'Al Mayyas', location: 'The Pearl', category: 'apartments',
    type: '1-3 Bedroom Apartments', beds: '1-3 BR', price: 'QAR 2.11M', handover: 'Q4 2026', dp: '10%',
    desc: 'Luxury residential tower at The Pearl offering 1 to 3-bedroom apartments with premium Arabian Gulf views, world-class amenities, and handover by Q4 2026 with 10% down payment.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '13', name: 'Coralia Villas', location: 'The Pearl', category: 'villas',
    type: '5 Bedroom Villa', beds: '5 BR', price: 'QAR 55M', handover: 'Q4 2026', dp: '50%',
    desc: 'Ultra-luxury 5-bedroom waterfront villas at The Pearl featuring exclusive island living, private beach access, grand architectural design, and direct marina views. A rare trophy asset at QAR 55M.',
    badge: 'Ultra Luxury', badgeClass: 'offplan'
  },
  {
    num: '14', name: 'Corallia', location: 'The Pearl', category: 'apartments',
    type: 'Studio to 2 BR', beds: 'Studio-2 BR', price: 'QAR 3.65M', handover: 'Lease to Own', dp: '2%',
    desc: 'Premium residences at The Pearl offering a unique 20-year Lease to Own model with only 2% down payment. Studios from QAR 3.65M, 1-bedrooms from QAR 3.72M, and 2-bedrooms from QAR 6.96M.',
    badge: 'Lease to Own', badgeClass: 'offplan'
  },
  {
    num: '15', name: 'Skala Tower', location: 'Lusail Waterfront', category: 'apartments',
    type: '1-2 Bedroom Apartments', beds: '1-2 BR', price: 'QAR 2M', handover: 'Q4 2026', dp: '5%',
    desc: 'An iconic 33-story luxury waterfront tower on the Lusail Waterfront featuring 189 premium apartments with high-end smart-home amenities, direct private beach access, and payment plans till end of 2031.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '16', name: 'La Mer Tower', location: 'Lusail Waterfront', category: 'apartments',
    type: 'Studio & 1 BR', beds: 'Studio-1 BR', price: 'QAR 1M', handover: 'Q4 2027', dp: '2%',
    desc: 'A sleek waterfront tower on Lusail Waterfront offering studios from QAR 1M and 1-bedrooms from QAR 2M. Features modern coastal design, rooftop infinity pool, and payment plans extending till 2032.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '17', name: 'Bliss Residences', location: 'Lusail Fox Hills', category: 'apartments',
    type: '1-3 BR Ready Apartments', beds: '1-3 BR', price: 'QAR 1.54M', handover: 'Ready', dp: '35%',
    desc: 'Ready-to-move-in luxury residences in Fox Hills, Lusail offering 1 to 3-bedroom apartments with premium finishes, 5-year payment plan, and immediate handover availability.',
    badge: 'Ready', badgeClass: 'ready'
  },
  {
    num: '18', name: 'Marbella', location: 'Lusail Entertainment City', category: 'apartments',
    type: '1-3 BR Apartments', beds: '1-3 BR', price: 'QAR 1.67M', handover: 'Off-Plan', dp: '10%',
    desc: 'Modern residential tower in Lusail Entertainment City offering 1 to 3-bedroom apartments with maid rooms, 7-year payment plan at 10% down payment, and proximity to entertainment venues.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '19', name: 'Bliss Tower', location: 'Lusail Al Kharaej', category: 'apartments',
    type: '1-3 BR Apartments', beds: '1-3 BR', price: 'QAR 1.52M', handover: 'December 2028', dp: '5%',
    desc: 'A premium residential tower in Al Kharaej, Lusail offering 1-bedroom to 3-bedroom duplex apartments with a 6-year payment plan, 5% down payment, and handover in December 2028.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '20', name: 'Bliss Gardens', location: 'New Salata, Doha', category: 'villas',
    type: '5 BR Villa Compound', beds: '5 BR + Maid', price: 'QAR 4.29M', handover: 'October 2027', dp: '10%',
    desc: 'Exclusive villa compound in New Salata, Doha featuring 5-bedroom villas with maid quarters, private swimming pools, 5-year payment plan, and handover in October 2027.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '21', name: 'Bliss Gardens II', location: 'Al Muraikh, Doha', category: 'villas',
    type: '5+ Maid Villa Compound', beds: '5 BR + Maid', price: 'QAR 4.08M', handover: 'December 2027', dp: '10%',
    desc: 'Premium villa compound in Al Muraikh, Doha offering 5-bedroom standalone villas with maid quarters, landscaped gardens, 5-year payment plan, and handover in December 2027.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  },
  {
    num: '23', name: 'Voya Residence', location: 'Lusail Al Kharaej', category: 'apartments',
    type: '1-4 BR Apartments', beds: '1-4 BR', price: 'QAR 1.458M', handover: 'Ready', dp: '60%',
    desc: 'A coastal architectural masterpiece on the Lusail Waterfront offering 119 luxury units from 1 to 4-bedroom sea-view apartments and private chalets with direct beach entry, infinity pools, and private health club.',
    badge: 'Ready', badgeClass: 'ready'
  },
  {
    num: '24', name: 'Miran Tower', location: 'Lusail Al Kharaej', category: 'apartments',
    type: '2 Bedroom Apartments', beds: '2 BR', price: 'QAR 1.59M', handover: 'March 2028', dp: '10%',
    desc: 'Developed by Mazaya Real Estate in the Al Kharaej district of Seef Lusail offering fully furnished smart apartments with open-plan layouts, rooftop pools, and close proximity to the waterfront promenade.',
    badge: 'Off-Plan', badgeClass: 'offplan'
  }
];

// Use images from the 6 brochure images in all project folder as hero references
// Map project images from existing development images as placeholders
const imgMap = {
  "Via D'Oro": '/images/developments/skala-villas/hero.jpg',
  'Elite Residence': '/images/developments/city-avenue/city_hero_new.jpg',
  'Floresta 105': '/images/developments/milos/hero.jpg',
  'Boulevard Residence': '/images/developments/city-avenue/hero.jpg',
  'Carlton House': '/images/developments/skala-villas/sk-feature-2.jpg',
  'Orjuwan': '/images/developments/rivan/hero.jpg',
  'Canal Bay': '/images/developments/skala-villas/sk-feature-1.jpg',
  'Al Mayyas': '/images/developments/flora-villas/hero.jpg',
  'Coralia Villas': '/images/developments/flora-villas/unit_1.jpg',
  'Corallia': '/images/developments/milos/milos_real_1.jpg',
  'Skala Tower': '/images/developments/skala-villas/sk-feature-4.jpg',
  'La Mer Tower': '/images/developments/skala-villas/sk-feature-5.jpg',
  'Bliss Residences': '/images/developments/city-avenue/city_feature_1.jpg',
  'Marbella': '/images/developments/milos/milos_real_3.jpg',
  'Bliss Tower': '/images/developments/city-avenue/city_feature_2.jpg',
  'Bliss Gardens': '/images/developments/flora-villas/unit_2.jpg',
  'Bliss Gardens II': '/images/developments/flora-villas/unit_3.jpg',
  'Voya Residence': '/images/developments/valencia-residence/hero.jpg',
  'Miran Tower': '/images/developments/valencia-residence/unit_1.jpg',
};

function getImg(name) { return imgMap[name] || '/images/developments/skala-villas/hero.jpg'; }

// Build the sections HTML
// Section 1: Featured Waterfront Developments (hero bento grid)
const featWaterfront = projects.filter(p => ['15','16','11','08','03'].includes(p.num));
const featLusail = projects.filter(p => ['04','06','10','17','18','19'].includes(p.num));
const featPearl = projects.filter(p => ['05','12','13','14'].includes(p.num));
const featVillas = projects.filter(p => ['20','21','23','24'].includes(p.num));

function card(p) {
  const img = getImg(p.name);
  return `
                        <a href="javascript:void(0)" class="pvProj__card" data-category="${p.category}">
                            <div class="pvProj__card-imgWrap">
                                <img src="${img}" alt="${p.name}" class="pvProj__card-img" loading="lazy">
                                <div class="pvProj__card-overlay"></div>
                                <span class="pvProj__card-badge pvProj__card-badge--${p.badgeClass}">${p.badge}</span>
                                <span class="pvProj__card-num">${p.num}</span>
                            </div>
                            <div class="pvProj__card-body">
                                <div class="pvProj__card-top">
                                    <h3 class="pvProj__card-title">${p.name}</h3>
                                    <p class="pvProj__card-loc">📍 ${p.location}</p>
                                </div>
                                <p class="pvProj__card-desc">${p.desc}</p>
                                <div class="pvProj__card-details">
                                    <div class="pvProj__card-detail"><span class="pvProj__card-detail-label">Type</span><span class="pvProj__card-detail-val">${p.type}</span></div>
                                    <div class="pvProj__card-detail"><span class="pvProj__card-detail-label">Bedrooms</span><span class="pvProj__card-detail-val">${p.beds}</span></div>
                                    <div class="pvProj__card-detail"><span class="pvProj__card-detail-label">From</span><span class="pvProj__card-detail-val pvProj__card-price">${p.price}</span></div>
                                    <div class="pvProj__card-detail"><span class="pvProj__card-detail-label">Down</span><span class="pvProj__card-detail-val">${p.dp}</span></div>
                                </div>
                                <div class="pvProj__card-footer">
                                    <span class="pvProj__card-handover">🔑 ${p.handover}</span>
                                    <a href="https://wa.me/97460005054?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(p.name)}" target="_blank" class="pvProj__card-cta">WhatsApp →</a>
                                </div>
                            </div>
                        </a>`;
}

function sectionBlock(id, title, subtitle, emoji, projs) {
  return `
            <!-- ${title} -->
            <section class="pageBlock pvProj__section" id="${id}">
                <div class="pvProj__sectionHeader">
                    <span class="pvProj__sectionBadge"><span class="pvProj__sectionBadgeDot"></span>${emoji}</span>
                    <h2 class="pvProj__sectionTitle">${title}</h2>
                    <p class="pvProj__sectionSub">${subtitle}</p>
                </div>
                <div class="pvProj__grid">
${projs.map(card).join('\n')}
                </div>
            </section>`;
}

const sections = [
  sectionBlock('waterfront-projects', 'Waterfront & Island Developments',
    'Exclusive beachfront towers and villas on Qetaifan Island & Lusail Waterfront', '🌊 WATERFRONT',
    featWaterfront),
  sectionBlock('lusail-projects', 'Lusail City Residences',
    'Modern apartments and towers across Lusail\'s most prestigious districts', '🏙️ LUSAIL CITY',
    featLusail),
  sectionBlock('pearl-projects', 'The Pearl Island Collection',
    'Ultra-luxury residences and villas on Qatar\'s iconic man-made island', '💎 THE PEARL',
    featPearl),
  sectionBlock('villa-projects', 'Villa Compounds & Premium Residences',
    'Private villa estates and ready coastal residences across Doha & Lusail', '🏡 VILLAS & ESTATES',
    featVillas),
];

// CSS for the new project sections
const css = `
<style id="pvProjectsCSS">
/* ═══ PRIME VIEW ALL PROJECTS SHOWCASE ═══ */
.pvProj__section { padding: 50px 0 30px; }
.pvProj__sectionHeader { text-align: center; max-width: 650px; margin: 0 auto 36px; }
.pvProj__sectionBadge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 18px; border-radius: 30px; background: rgba(197,168,128,0.10); border: 1px solid rgba(197,168,128,0.30); color: #c5a880; font-size: 0.78rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
.pvProj__sectionBadgeDot { width: 6px; height: 6px; border-radius: 50%; background: #c5a880; box-shadow: 0 0 8px #c5a880; }
.pvProj__sectionTitle { font-size: 2rem; font-weight: 700; color: #1a1a1a; letter-spacing: -0.3px; margin: 0 0 10px; }
.pvProj__sectionSub { font-size: 0.95rem; color: #666; line-height: 1.6; margin: 0; }
.pvProj__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; max-width: 1320px; margin: 0 auto; padding: 0 24px; }
@media(max-width:768px){ .pvProj__grid { grid-template-columns: 1fr; padding: 0 16px; gap: 20px; } }

.pvProj__card { display: flex; flex-direction: column; border-radius: 18px; overflow: hidden; background: #fff; border: 1px solid #eaeaea; text-decoration: none; color: inherit; transition: all 0.35s cubic-bezier(.4,0,.2,1); box-shadow: 0 2px 12px rgba(0,0,0,0.04); }
.pvProj__card:hover { transform: translateY(-6px); box-shadow: 0 20px 44px rgba(0,0,0,0.10); border-color: #d4b97a; }
.pvProj__card-imgWrap { position: relative; height: 220px; overflow: hidden; }
.pvProj__card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.pvProj__card:hover .pvProj__card-img { transform: scale(1.06); }
.pvProj__card-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.55) 100%); pointer-events: none; }
.pvProj__card-badge { position: absolute; top: 14px; left: 14px; padding: 5px 14px; border-radius: 20px; font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; z-index: 2; }
.pvProj__card-badge--offplan { background: linear-gradient(135deg, #c5a85c, #a38438); color: #fff; }
.pvProj__card-badge--ready { background: #10b981; color: #fff; }
.pvProj__card-num { position: absolute; top: 14px; right: 14px; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); color: #d4b97a; padding: 4px 10px; border-radius: 8px; font-size: 0.75rem; font-weight: 700; border: 1px solid rgba(212,185,122,0.3); z-index: 2; }
.pvProj__card-body { padding: 20px; display: flex; flex-direction: column; flex-grow: 1; gap: 12px; }
.pvProj__card-top {}
.pvProj__card-title { font-size: 1.2rem; font-weight: 700; color: #111; margin: 0 0 4px; font-family: optimaltstd-medium, sans-serif; }
.pvProj__card-loc { font-size: 0.82rem; color: #888; margin: 0; display: flex; align-items: center; gap: 4px; }
.pvProj__card-desc { font-size: 0.84rem; color: #555; line-height: 1.55; margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.pvProj__card-details { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; padding: 14px 0; border-top: 1px solid #f0f0f0; border-bottom: 1px solid #f0f0f0; }
.pvProj__card-detail { display: flex; flex-direction: column; gap: 2px; }
.pvProj__card-detail-label { font-size: 0.68rem; text-transform: uppercase; color: #aaa; letter-spacing: 0.5px; font-weight: 600; }
.pvProj__card-detail-val { font-size: 0.82rem; font-weight: 600; color: #333; }
.pvProj__card-price { color: #b89c4c !important; font-weight: 700 !important; font-size: 0.88rem !important; }
.pvProj__card-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 4px; }
.pvProj__card-handover { font-size: 0.78rem; color: #666; font-weight: 500; }
.pvProj__card-cta { font-size: 0.8rem; font-weight: 700; color: #fff; background: linear-gradient(135deg, #c5a85c, #a38438); padding: 8px 18px; border-radius: 8px; text-decoration: none; transition: all 0.25s ease; }
.pvProj__card-cta:hover { background: linear-gradient(135deg, #d4b97a, #b89c4c); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(184,156,76,0.3); }

/* Divider between sections */
.pvProj__section + .pvProj__section { border-top: 1px solid #f0ece3; }
</style>`;

// Build the full injection block
const injectionHTML = `
${css}
${sections.join('\n')}
`;

// Insert BEFORE the blog section (line containing "latestBlogPosts")
const marker = `<section class="pageBlock">\r\n                <section class="latestBlogPosts`;
const markerAlt = `<section class="pageBlock">\n                <section class="latestBlogPosts`;

let insertPos = html.indexOf(marker);
if (insertPos === -1) insertPos = html.indexOf(markerAlt);

if (insertPos === -1) {
  // Try another approach - find the closing of gallery section
  const galleryEnd = html.indexOf('</section>\n\n<section class="pageBlock">');
  if (galleryEnd !== -1) {
    insertPos = galleryEnd + '</section>\n'.length;
  }
}

if (insertPos !== -1) {
  html = html.slice(0, insertPos) + injectionHTML + '\n' + html.slice(insertPos);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('✅ Successfully injected 19 projects into homepage!');
  console.log('   - 4 sections: Waterfront, Lusail City, The Pearl, Villas & Estates');
  console.log('   - 19 project cards with real content from brochure images');
} else {
  console.error('❌ Could not find insertion point. Trying fallback...');
  // Fallback: insert before </main>
  const mainEnd = html.indexOf('</main>');
  if (mainEnd !== -1) {
    html = html.slice(0, mainEnd) + injectionHTML + '\n' + html.slice(mainEnd);
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('✅ Injected via fallback (before </main>)');
  } else {
    console.error('❌ Failed completely - could not find </main> tag');
  }
}
