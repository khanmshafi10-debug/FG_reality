const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// 24 Projects Data for the Scroll Showcase
const projects = [
  {
    num: '01',
    slug: 'skala-villas',
    link: '/en/development/skala-villas',
    name: 'Skala Villas',
    location: 'Qetaifan Island North',
    price: 'QAR 3.8M',
    type: 'Waterfront Villas',
    badge: 'Flagship',
    img: '/images/developments/skala-villas/hero.jpg'
  },
  {
    num: '02',
    slug: 'city-avenue',
    link: '/en/development/city-avenue',
    name: 'City Avenue',
    location: 'Al Erkyah, Lusail',
    price: 'QAR 1.2M',
    type: 'Urban Apartments',
    badge: 'Flagship',
    img: '/images/developments/city-avenue/city_hero_new.jpg'
  },
  {
    num: '03',
    slug: 'via-doro',
    link: 'javascript:void(0)',
    name: "Via D'Oro Villas",
    location: 'Qetaifan Island',
    price: 'QAR 4.25M',
    type: 'Mediterranean Villas',
    badge: 'Off-Plan',
    img: '/images/developments/skala-villas/sk-feature-1.jpg'
  },
  {
    num: '04',
    slug: 'elite-residence',
    link: 'javascript:void(0)',
    name: 'Elite Residence',
    location: 'Al Erkyah, Lusail',
    price: 'QAR 825K',
    type: '1 Bedroom Units',
    badge: 'Off-Plan',
    img: '/images/developments/city-avenue/city_feature_1.jpg'
  },
  {
    num: '05',
    slug: 'floresta-105',
    link: 'javascript:void(0)',
    name: 'Floresta 105',
    location: 'Floresta, The Pearl',
    price: 'QAR 1.77M',
    type: 'Ready Apartments',
    badge: 'Ready',
    img: '/images/developments/milos/milos_real_1.jpg'
  },
  {
    num: '06',
    slug: 'boulevard-residence',
    link: 'javascript:void(0)',
    name: 'Boulevard Residence',
    location: 'Fox Hills, Lusail',
    price: 'QAR 1.0M',
    type: '1-2 BR Apartments',
    badge: 'Off-Plan',
    img: '/images/developments/city-avenue/city_feature_2.jpg'
  },
  {
    num: '07',
    slug: 'rivan',
    link: '/en/development/rivan',
    name: 'Rivan Tower',
    location: 'Lusail City',
    price: 'QAR 1.65M',
    type: 'Sky Suites',
    badge: 'Flagship',
    img: '/images/developments/rivan/hero.jpg'
  },
  {
    num: '08',
    slug: 'carlton-house',
    link: 'javascript:void(0)',
    name: 'Carlton House',
    location: 'Qetaifan Island',
    price: 'QAR 1.46M',
    type: 'Curved Glass Tower',
    badge: 'Off-Plan',
    img: '/images/developments/skala-villas/sk-feature-4.jpg'
  },
  {
    num: '09',
    slug: 'milos',
    link: '/en/development/milos',
    name: 'Milos Residence',
    location: 'Legtaifiya Coastal',
    price: 'QAR 1.85M',
    type: 'Coastal High-Rise',
    badge: 'Flagship',
    img: '/images/developments/milos/hero.jpg'
  },
  {
    num: '10',
    slug: 'orjuwan',
    link: 'javascript:void(0)',
    name: 'Orjuwan Tower',
    location: 'Al Erkyah, Lusail',
    price: 'QAR 1.1M',
    type: 'Modern Apartments',
    badge: 'Off-Plan',
    img: '/images/developments/city-avenue/city_feature_3.jpg'
  },
  {
    num: '11',
    slug: 'canal-bay',
    link: 'javascript:void(0)',
    name: 'Canal Bay',
    location: 'Qetaifan Island',
    price: 'QAR 2.0M',
    type: 'Beachfront Tower',
    badge: 'Off-Plan',
    img: '/images/developments/skala-villas/sk-feature-5.jpg'
  },
  {
    num: '12',
    slug: 'al-mayyas',
    link: 'javascript:void(0)',
    name: 'Al Mayyas Tower',
    location: 'The Pearl-Qatar',
    price: 'QAR 2.11M',
    type: 'Sea View Units',
    badge: 'Off-Plan',
    img: '/images/developments/milos/milos_real_3.jpg'
  },
  {
    num: '13',
    slug: 'coralia-villas',
    link: 'javascript:void(0)',
    name: 'Coralia Compound',
    location: 'The Pearl-Qatar',
    price: 'QAR 55M',
    type: 'Ultra Trophy Villa',
    badge: 'Ultra Luxury',
    img: '/images/developments/flora-villas/unit_1.jpg'
  },
  {
    num: '14',
    slug: 'corallia',
    link: 'javascript:void(0)',
    name: 'Corallia Lease-to-Own',
    location: 'The Pearl-Qatar',
    price: 'QAR 3.65M',
    type: '20-Yr Lease to Own',
    badge: 'Lease to Own',
    img: '/images/developments/milos/milos_real_4.jpg'
  },
  {
    num: '15',
    slug: 'skala-tower',
    link: 'javascript:void(0)',
    name: 'Skala Tower',
    location: 'Lusail Waterfront',
    price: 'QAR 2.0M',
    type: '33-Story Tower',
    badge: 'Off-Plan',
    img: '/images/developments/skala-villas/sk-feature-2.jpg'
  },
  {
    num: '16',
    slug: 'la-mer-tower',
    link: 'javascript:void(0)',
    name: 'La Mer Tower',
    location: 'Lusail Waterfront',
    price: 'QAR 1.0M',
    type: 'Coastal High-Rise',
    badge: 'Off-Plan',
    img: '/images/developments/skala-villas/sk-feature-6.jpg'
  },
  {
    num: '17',
    slug: 'bliss-residences',
    link: 'javascript:void(0)',
    name: 'Bliss Residences',
    location: 'Fox Hills, Lusail',
    price: 'QAR 1.54M',
    type: 'Ready Apartments',
    badge: 'Ready',
    img: '/images/developments/milos/milos_real_5.jpg'
  },
  {
    num: '18',
    slug: 'marbella',
    link: 'javascript:void(0)',
    name: 'Marbella Residence',
    location: 'Entertainment City',
    price: 'QAR 1.67M',
    type: 'Lifestyle Units',
    badge: 'Off-Plan',
    img: '/images/developments/milos/milos_real_6.jpg'
  },
  {
    num: '19',
    slug: 'bliss-tower',
    link: 'javascript:void(0)',
    name: 'Bliss Duplex Tower',
    location: 'Al Kharaej, Lusail',
    price: 'QAR 1.52M',
    type: 'Duplex Apartments',
    badge: 'Off-Plan',
    img: '/images/developments/milos/milos_real_8.jpg'
  },
  {
    num: '20',
    slug: 'bliss-gardens',
    link: 'javascript:void(0)',
    name: 'Bliss Gardens',
    location: 'New Salata, Doha',
    price: 'QAR 4.29M',
    type: '5 BR Villa Compound',
    badge: 'Off-Plan',
    img: '/images/developments/flora-villas/unit_2.jpg'
  },
  {
    num: '21',
    slug: 'bliss-gardens-2',
    link: 'javascript:void(0)',
    name: 'Bliss Gardens II',
    location: 'Al Muraikh, Doha',
    price: 'QAR 4.08M',
    type: 'Standalone Villas',
    badge: 'Off-Plan',
    img: '/images/developments/flora-villas/unit_3.jpg'
  },
  {
    num: '22',
    slug: 'flora-villas',
    link: '/en/development/flora-villas',
    name: 'Flora Standalone Villas',
    location: 'North Lusail',
    price: 'QAR 4.10M',
    type: 'Estate Sanctuary',
    badge: 'Flagship',
    img: '/images/developments/flora-villas/hero.jpg'
  },
  {
    num: '23',
    slug: 'voya-residence',
    link: 'javascript:void(0)',
    name: 'Voya Waterfront',
    location: 'Seef Lusail',
    price: 'QAR 1.458M',
    type: 'Coastal Chalets',
    badge: 'Ready',
    img: '/images/developments/valencia-residence/hero.jpg'
  },
  {
    num: '24',
    slug: 'miran-tower',
    link: 'javascript:void(0)',
    name: 'Miran Tower',
    location: 'Seef Lusail',
    price: 'QAR 1.59M',
    type: 'Smart Furnished Units',
    badge: 'Off-Plan',
    img: '/images/developments/valencia-residence/unit_1.jpg'
  }
];

// Build portrait card HTML for each project
function renderScrollCard(p, isCenter = false) {
  const centerClass = isCenter ? 'fgReelCard--featured' : '';
  const actionAttr = (p.link && p.link !== 'javascript:void(0)')
    ? `onclick="window.location.href='${p.link}'"`
    : `onclick="openFgProjectModal('${p.slug}')"`;

  return `
    <div class="fgReelCard ${centerClass}" ${actionAttr}>
      <div class="fgReelCard__phoneFrame">
        <div class="fgReelCard__notch"></div>
        <img src="${p.img}" alt="${p.name}" class="fgReelCard__img" loading="lazy">
        <div class="fgReelCard__gradient"></div>
        
        <div class="fgReelCard__topBadge">
          <span class="fgReelTag">${p.badge}</span>
          <span class="fgReelNum">#${p.num}</span>
        </div>

        <div class="fgReelCard__info">
          <h3 class="fgReelTitle">${p.name}</h3>
          <p class="fgReelLoc">📍 ${p.location}</p>
          <div class="fgReelMeta">
            <span class="fgReelType">${p.type}</span>
            <span class="fgReelPrice">${p.price}</span>
          </div>
          <button type="button" class="fgReelBtn">View Details →</button>
        </div>
      </div>
    </div>
  `;
}

const carouselSectionHTML = `
<style id="fgReelsCarouselCSS">
/* ════════════════════════════════════════════════════════════════
   PRIME VIEW REAL ESTATE - MODERN REELS / PORTRAIT SCROLL SHOWCASE
   ════════════════════════════════════════════════════════════════ */

.fgReelsSec {
  padding: 85px 0 75px;
  background: linear-gradient(180deg, #070a10 0%, #0d131f 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
  font-family: var(--font-primary, "Plus Jakarta Sans", sans-serif);
}

.fgReelsSec::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(197, 168, 128, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.fgReelsHeader {
  text-align: center;
  max-width: 780px;
  margin: 0 auto 48px;
  padding: 0 24px;
}

.fgReelsPill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 22px;
  border-radius: 40px;
  background: rgba(197, 168, 128, 0.12);
  border: 1px solid rgba(197, 168, 128, 0.35);
  color: #c5a880;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.fgReelsPillDot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c5a880;
  box-shadow: 0 0 12px #c5a880;
}

.fgReelsTitle {
  font-size: 2.7rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.5px;
  margin: 0 0 14px;
  line-height: 1.2;
}

.fgReelsSub {
  font-size: 1.05rem;
  color: #94a3b8;
  line-height: 1.6;
  margin: 0;
}

/* ── Horizontal Scroll Track ── */
.fgReelsTrackWrap {
  position: relative;
  width: 100%;
  padding: 20px 0 40px;
}

.fgReelsTrack {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 20px 48px 30px;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE */
  cursor: grab;
}

.fgReelsTrack::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.fgReelsTrack:active {
  cursor: grabbing;
}

/* ── Card (Phone Mockup Style) ── */
.fgReelCard {
  flex: 0 0 270px;
  scroll-snap-align: center;
  perspective: 1000px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.fgReelCard__phoneFrame {
  position: relative;
  height: 480px;
  border-radius: 36px;
  overflow: hidden;
  background: #121824;
  border: 4px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fgReelCard:hover .fgReelCard__phoneFrame,
.fgReelCard--featured .fgReelCard__phoneFrame {
  border-color: #c5a880;
  transform: scale(1.06) translateY(-8px);
  box-shadow: 0 25px 60px rgba(197, 168, 128, 0.3);
}

.fgReelCard__notch {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 85px;
  height: 18px;
  background: #000000;
  border-radius: 12px;
  z-index: 5;
}

.fgReelCard__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.fgReelCard:hover .fgReelCard__img {
  transform: scale(1.1);
}

.fgReelCard__gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 40%, rgba(8,12,19,0.95) 100%);
  pointer-events: none;
}

.fgReelCard__topBadge {
  position: relative;
  z-index: 3;
  padding: 38px 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fgReelTag {
  background: rgba(197, 168, 128, 0.9);
  color: #070a10;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.fgReelNum {
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 3px 9px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 700;
}

.fgReelCard__info {
  position: relative;
  z-index: 3;
  padding: 20px 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.fgReelTitle {
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  line-height: 1.3;
}

.fgReelLoc {
  font-size: 0.8rem;
  color: #cbd5e0;
  margin: 0 0 6px;
  font-weight: 600;
}

.fgReelMeta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 10px;
}

.fgReelType {
  font-size: 0.72rem;
  color: #94a3b8;
  font-weight: 600;
}

.fgReelPrice {
  font-size: 0.88rem;
  color: #c5a880;
  font-weight: 800;
}

.fgReelBtn {
  width: 100%;
  padding: 10px;
  border-radius: 12px;
  background: linear-gradient(135deg, #c5a880 0%, #a38438 100%);
  border: none;
  color: #070a10;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
}

.fgReelBtn:hover {
  background: linear-gradient(135deg, #d4b97a 0%, #b89c4c 100%);
  box-shadow: 0 4px 14px rgba(197, 168, 128, 0.4);
}

/* ── Navigation Arrows ── */
.fgReelNavBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: rgba(14, 20, 30, 0.85);
  border: 1px solid rgba(197, 168, 128, 0.4);
  color: #c5a880;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);
}

.fgReelNavBtn:hover {
  background: #c5a880;
  color: #070a10;
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 12px 30px rgba(197, 168, 128, 0.4);
}

.fgReelNavBtn--prev { left: 24px; }
.fgReelNavBtn--next { right: 24px; }

@media(max-width: 768px) {
  .fgReelsTitle { font-size: 2rem; }
  .fgReelsTrack { padding: 10px 20px 20px; gap: 16px; }
  .fgReelCard { flex: 0 0 240px; }
  .fgReelCard__phoneFrame { height: 430px; }
  .fgReelNavBtn { display: none; }
}
</style>

<!-- ════════════════════════════════════════════════════════════════
     MODERN 3D REELS PORTRAIT CAROUSEL SHOWCASE (24 PROJECTS)
     ════════════════════════════════════════════════════════════════ -->
<section class="fgReelsSec" id="featured-reels-carousel">
  <div class="fgReelsHeader">
    <span class="fgReelsPill">
      <span class="fgReelsPillDot"></span>
      Interactive Visual Showcase
    </span>
    <h2 class="fgReelsTitle">Qatar's 24 Premier Developments</h2>
    <p class="fgReelsSub">
      Swipe or scroll horizontally to preview our luxury property portfolio across Qetaifan Islands, Lusail City, and The Pearl Qatar.
    </p>
  </div>

  <div class="fgReelsTrackWrap">
    <button type="button" class="fgReelNavBtn fgReelNavBtn--prev" onclick="scrollReelsTrack(-1)" aria-label="Previous Project">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
    </button>

    <div class="fgReelsTrack" id="fgReelsTrack">
      ${projects.map((p, idx) => renderScrollCard(p, idx === 2)).join('\n')}
    </div>

    <button type="button" class="fgReelNavBtn fgReelNavBtn--next" onclick="scrollReelsTrack(1)" aria-label="Next Project">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
    </button>
  </div>
</section>

<script>
function scrollReelsTrack(direction) {
  const track = document.getElementById('fgReelsTrack');
  if (track) {
    const scrollAmount = 300 * direction;
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

// Drag to scroll functionality
document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('fgReelsTrack');
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  track.addEventListener('mouseleave', () => { isDown = false; });
  track.addEventListener('mouseup', () => { isDown = false; });

  track.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });
});
</script>
`;

// Insert the Carousel Section BEFORE the 4 detailed sections (waterfront-estates)
const targetSec = '<section class="fgSecWrap fgSecWrap--dark1" id="waterfront-estates">';
const targetSecIdx = html.indexOf(targetSec);

if (targetSecIdx > -1) {
  html = html.slice(0, targetSecIdx) + carouselSectionHTML + '\n\n' + html.slice(targetSecIdx);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('✨ SUCCESS: Injected Modern Reels Scroll Showcase Carousel into index.html!');
} else {
  console.error('❌ Target insertion index for carousel section not found in index.html');
}
