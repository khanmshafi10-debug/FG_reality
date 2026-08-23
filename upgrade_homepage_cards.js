const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Ensure FontAwesome and Cinzel fonts are in head
if (!html.includes('cdnjs.cloudflare.com/ajax/libs/font-awesome')) {
  const headPos = html.indexOf('</head>');
  if (headPos > -1) {
    const fontLinks = `    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">\n`;
    html = html.slice(0, headPos) + fontLinks + html.slice(headPos);
  }
}

// 24 Projects Definition
const all24Projects = [
  // SECTION 1: WATERFRONT & ISLANDS (6 CARDS)
  {
    sec: 'waterfront',
    secTitle: '🌊 Waterfront Estates & Island Living',
    secPill: 'Waterfront & Private Beach (6 Projects)',
    secSub: 'Bespoke shoreline villas, curved architectural high-rises, and private beach towers located along Qetaifan Island North and Lusail Waterfront.',
    slug: 'skala-villas',
    file: 'skala-villas.html',
    name: 'Skala Villas & Waterfront Luxury',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    categoryName: 'Waterfront Estates',
    type: 'Waterfront Signature Villas',
    beds: '4 - 5 Bedroom Villas',
    price: 'QAR 3,800,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/skala-villas/hero.jpg',
    desc: 'Bespoke waterfront villas and private shorefront residences on Qetaifan Island North. Features private infinity pools, marine docks, and panoramic sea balconies.'
  },
  {
    sec: 'waterfront',
    slug: 'via-doro',
    file: 'via-doro.html',
    name: "Via D'Oro Signature Villas",
    district: 'Qetaifan Island North',
    city: 'Lusail',
    categoryName: 'Waterfront Estates',
    type: 'Mediterranean Compound Villas',
    beds: '4+ Maid Villas',
    price: 'QAR 4,250,000',
    handover: 'Q2 2028',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/skala-villas/sk-feature-1.jpg',
    desc: 'Luxury Mediterranean compound featuring 34 signature villas. Includes private elevator, fully equipped backyard with private waterfall, and pergola.'
  },
  {
    sec: 'waterfront',
    slug: 'carlton-house',
    file: 'carlton-house.html',
    name: 'Carlton House Waterfront',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    categoryName: 'Waterfront Estates',
    type: 'Curved Glass High-Rise',
    beds: 'Studio - 3 BR',
    price: 'QAR 1,460,000',
    handover: 'Q4 2028',
    dp: '2% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/skala-villas/sk-feature-4.jpg',
    desc: 'Iconic curved waterfront tower on Qetaifan Island featuring studios to 3-bedroom luxury apartments with sea views, smart automation, and payment plans till 2033.'
  },
  {
    sec: 'waterfront',
    slug: 'canal-bay',
    file: 'canal-bay.html',
    name: 'Canal Bay Beachfront',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    categoryName: 'Waterfront Estates',
    type: 'Architectural Waterfront Tower',
    beds: '2 Bedrooms',
    price: 'QAR 2,000,000',
    handover: 'Q4 2028',
    dp: '2% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/skala-villas/sk-feature-5.jpg',
    desc: 'Striking architectural waterfront tower on Qetaifan Island with 2-bedroom apartments, organic curved glass facades, private beach access, and 8-year payment plan.'
  },
  {
    sec: 'waterfront',
    slug: 'skala-tower',
    file: 'skala-tower.html',
    name: 'Skala Tower 33-Story Icon',
    district: 'Lusail Waterfront',
    city: 'Lusail',
    categoryName: 'Waterfront Estates',
    type: '33-Story Beachfront Tower',
    beds: '1 - 2 Bedrooms',
    price: 'QAR 2,000,000',
    handover: 'December 2028',
    dp: '5% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/skala-tower/hero.jpg',
    desc: '33-story beachfront architectural landmark in Seef Lusail with 6-year payment plan until 2032, offering direct promenade access and sea views.'
  },
  {
    sec: 'waterfront',
    slug: 'la-mer-tower',
    file: 'la-mer-tower.html',
    name: 'La Mer Waterfront Tower',
    district: 'Lusail Waterfront',
    city: 'Lusail',
    categoryName: 'Waterfront Estates',
    type: 'Waterfront High-Rise',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,000,000',
    handover: 'Q4 2028',
    dp: '5% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/milos/milos_real_3.jpg',
    desc: 'Waterfront residential tower in Seef Lusail offering private beach access, infinity pool decks, and scenic sea views with payment plans up to 7 years.'
  },

  // SECTION 2: LUSAIL CITY HEIGHTS (6 CARDS)
  {
    sec: 'lusail',
    secTitle: '🏙️ Lusail City Heights & Towers',
    secPill: 'Al Erkyah & Fox Hills (6 Projects)',
    secSub: 'High-yield freehold investments and contemporary high-rise towers in Qatar’s prime smart metropolis, situated near Lusail Boulevard and Lusail Stadium.',
    slug: 'city-avenue',
    file: 'city-avenue.html',
    name: 'City Avenue & Commercial Boulevard',
    district: 'Al Erkyah City',
    city: 'Lusail',
    categoryName: 'Lusail Heights',
    type: 'Urban Luxury Apartments',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,200,000',
    handover: 'Ready Move-In',
    dp: '20% Down Payment',
    badge: 'Ready',
    badgeText: 'Ready to Move',
    badgeClass: 'badge--ready',
    heroImg: '/images/developments/city-avenue/city_hero_new.jpg',
    desc: 'Iconic mixed-use master development in Al Erkyah City facing Lusail Stadium with hotel-grade amenities, retail boulevard, and 6-year flexible plan.'
  },
  {
    sec: 'lusail',
    slug: 'rivan',
    file: 'rivan.html',
    name: 'Rivan Tower & Sky Suites',
    district: 'Lusail City',
    city: 'Lusail',
    categoryName: 'Lusail Heights',
    type: 'Sky Suites & Residences',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,650,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/rivan/hero.jpg',
    desc: 'High-rise residential tower in the heart of Lusail featuring sky infinity pools, panoramic city vistas, and private concierge services.'
  },
  {
    sec: 'lusail',
    slug: 'elite-residence',
    file: 'elite-residence.html',
    name: 'Elite Residence',
    district: 'Al Erkyah City',
    city: 'Lusail',
    categoryName: 'Lusail Heights',
    type: 'Smart 1BR Apartments',
    beds: '1 Bedroom',
    price: 'QAR 825,000',
    handover: 'Q4 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/city-avenue/city_feature_1.jpg',
    desc: 'Modern smart-home residential tower in Al Erkyah City with fully fitted kitchens, swimming pool, gym, and 6-year payment terms.'
  },
  {
    sec: 'lusail',
    slug: 'boulevard-residence',
    file: 'boulevard-residence.html',
    name: 'Boulevard Residence',
    district: 'Fox Hills',
    city: 'Lusail',
    categoryName: 'Lusail Heights',
    type: '1 & 2 BR Apartments',
    beds: '1 - 2 Bedrooms',
    price: 'QAR 1,000,000',
    handover: 'Q4 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/city-avenue/city_feature_2.jpg',
    desc: 'Prime residential apartments situated right on Lusail Commercial Boulevard with immediate access to luxury dining, retail, and Metro.'
  },
  {
    sec: 'lusail',
    slug: 'orjuwan',
    file: 'orjuwan.html',
    name: 'Orjuwan Tower',
    district: 'Al Erkyah City',
    city: 'Lusail',
    categoryName: 'Lusail Heights',
    type: 'Modern Residences',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,100,000',
    handover: 'Q4 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/city-avenue/city_feature_3.jpg',
    desc: 'Contemporary residential tower in Al Erkyah offering luxury balconies, gym facilities, covered parking, and 5-year installment terms.'
  },
  {
    sec: 'lusail',
    slug: 'bliss-residences',
    file: 'bliss-residences.html',
    name: 'Bliss Residences',
    district: 'Fox Hills',
    city: 'Lusail',
    categoryName: 'Lusail Heights',
    type: 'Ready Luxury Apartments',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,540,000',
    handover: 'Ready Move-In',
    dp: '35% Down Payment',
    badge: 'Ready',
    badgeText: 'Ready to Move',
    badgeClass: 'badge--ready',
    heroImg: '/images/developments/milos/milos_real_12.jpg',
    desc: 'Ready-to-move-in luxury residences in Fox Hills with high-end designer finishes, 5-year post-handover payment plan, and immediate move-in key delivery.'
  },

  // SECTION 3: THE PEARL ISLAND (6 CARDS)
  {
    sec: 'pearl',
    secTitle: '💎 The Pearl Island Collection',
    secPill: 'Floresta Gardens & Crown Jewels (6 Projects)',
    secSub: 'World-class island living featuring beachfront compound villas, ready-to-move mid-rise towers, and unique 20-year Lease-to-Own investment opportunities.',
    slug: 'milos',
    file: 'milos.html',
    name: 'Milos Residence & Coastal Living',
    district: 'Legtaifiya / Pearl Gateway',
    city: 'Doha',
    categoryName: 'The Pearl Island',
    type: 'Coastal High-Rise Tower',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,850,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/milos/hero.jpg',
    desc: 'Architectural masterpiece at the Legtaifiya coastal corridor facing The Pearl Island. Offers private beach access, sky lounges, and marine vistas.'
  },
  {
    sec: 'pearl',
    slug: 'floresta-105',
    file: 'floresta-105.html',
    name: 'Floresta 105 Luxury Tower',
    district: 'Floresta Gardens',
    city: 'The Pearl-Qatar',
    categoryName: 'The Pearl Island',
    type: 'Island High-Rise Tower',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,770,000',
    handover: 'Ready Move-In',
    dp: 'Ready Move-In',
    badge: 'Ready',
    badgeText: 'Ready to Move',
    badgeClass: 'badge--ready',
    heroImg: '/images/developments/milos/milos_real_6.jpg',
    desc: 'Mid-rise luxury residential tower in Floresta Gardens offering marina views, concierge services, and immediate title deed issuance upon purchase.'
  },
  {
    sec: 'pearl',
    slug: 'al-mayyas',
    file: 'al-mayyas.html',
    name: 'Al Mayyas Tower',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    categoryName: 'The Pearl Island',
    type: 'Mediterranean Residences',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 2,110,000',
    handover: 'Q4 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/flora-villas/unit_1.jpg',
    desc: 'Mediterranean-inspired architectural residence at The Pearl-Qatar featuring private swimming pool, marina views, and wellness spa.'
  },
  {
    sec: 'pearl',
    slug: 'coralia-villas',
    file: 'coralia-villas.html',
    name: 'Coralia Compound Villas',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    categoryName: 'The Pearl Island',
    type: 'Exclusive Gated Villas',
    beds: '4 - 5 Bedrooms',
    price: 'QAR 5,500,000',
    handover: 'Immediate / Ready',
    dp: 'Ready Move-In',
    badge: 'Ready',
    badgeText: 'Ready to Move',
    badgeClass: 'badge--ready',
    heroImg: '/images/developments/flora-villas/img_1.jpg',
    desc: 'Gated compound villas located within The Pearl-Qatar featuring private swimming pools, landscaped gardens, and 24/7 security.'
  },
  {
    sec: 'pearl',
    slug: 'corallia',
    file: 'corallia.html',
    name: 'Corallia Lease to Own',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    categoryName: 'The Pearl Island',
    type: 'Lease to Own Residences',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,950,000',
    handover: 'Immediate Handover',
    dp: 'Flexible Lease-to-Own',
    badge: 'Ready',
    badgeText: 'Ready to Move',
    badgeClass: 'badge--ready',
    heroImg: '/images/developments/milos/milos_real_8.jpg',
    desc: 'Exclusive lease-to-own residential opportunity on The Pearl Island offering direct transition from rental to full title deed ownership.'
  },
  {
    sec: 'pearl',
    slug: 'marbella',
    file: 'marbella.html',
    name: 'Marbella Residence',
    district: 'Entertainment City',
    city: 'Lusail',
    categoryName: 'The Pearl Island',
    type: 'Resort-Style Living',
    beds: '1 - 3 Bedrooms',
    price: 'QAR 1,350,000',
    handover: 'Q4 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/city-avenue/city_feature_1.jpg',
    desc: 'Resort-style luxury living in Lusail Entertainment City featuring expansive terraces, swimming lagoons, and clubhouse amenities.'
  },

  // SECTION 4: VILLAS & TOWERS (6 CARDS)
  {
    sec: 'villas',
    secTitle: '🏡 Private Villa Estates & Luxury Towers',
    secPill: 'Standalone Compounds & Smart Towers (6 Projects)',
    secSub: 'Spacious gated residential compounds in Doha and North Lusail with private pools, maid quarters, and fully furnished smart duplex units.',
    slug: 'flora-villas',
    file: 'flora-villas.html',
    name: 'Flora Standalone Villas',
    district: 'Huzoom District',
    city: 'North Lusail',
    categoryName: 'Villa Estates & Towers',
    type: 'Private Sanctuary Villas',
    beds: '5 BR + Private Pool',
    price: 'QAR 4,100,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/flora-villas/hero.jpg',
    desc: 'Private standalone villa sanctuary in North Lusail with private gardens, swimming pool, double-height living areas, and driver quarters.'
  },
  {
    sec: 'villas',
    slug: 'bliss-gardens',
    file: 'bliss-gardens.html',
    name: 'Bliss Gardens Compound',
    district: 'New Salata',
    city: 'Doha',
    categoryName: 'Villa Estates & Towers',
    type: 'Private Gated Villa Compound',
    beds: '5 BR + Maid',
    price: 'QAR 4,290,000',
    handover: 'October 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/flora-villas/unit_2.jpg',
    desc: 'Exclusive villa compound in New Salata featuring 5-bedroom luxury villas with private gardens, clubhouse, gym, and central security.'
  },
  {
    sec: 'villas',
    slug: 'bliss-gardens-2',
    file: 'bliss-gardens-2.html',
    name: 'Bliss Gardens II',
    district: 'Al Muraikh',
    city: 'Doha',
    categoryName: 'Villa Estates & Towers',
    type: 'Standalone Villa Community',
    beds: '5 BR + Maid',
    price: 'QAR 4,080,000',
    handover: 'December 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/flora-villas/unit_3.jpg',
    desc: 'Premium standalone villa community in Al Muraikh offering 5-bedroom luxury residences with spacious layouts and modern architecture.'
  },
  {
    sec: 'villas',
    slug: 'voya-residence',
    file: 'voya-residence.html',
    name: 'Voya Waterfront Chalets',
    district: 'Al Kharaej (Seef Lusail)',
    city: 'Lusail',
    categoryName: 'Villa Estates & Towers',
    type: 'Coastal Waterfront Chalets',
    beds: '1 - 4 BR & Chalets',
    price: 'QAR 1,458,000',
    handover: 'Immediate / Ready',
    dp: '60% Down Payment',
    badge: 'Ready',
    badgeText: 'Ready to Move',
    badgeClass: 'badge--ready',
    heroImg: '/images/developments/valencia-residence/hero.jpg',
    desc: 'Coastal architectural marvel on Lusail Waterfront offering luxury apartments & chalets with panoramic sea vistas.'
  },
  {
    sec: 'villas',
    slug: 'bliss-tower',
    file: 'bliss-tower.html',
    name: 'Bliss Tower Duplexes',
    district: 'Al Kharaej',
    city: 'Lusail',
    categoryName: 'Villa Estates & Towers',
    type: 'Duplex High-Rise',
    beds: '1 - 3 BR Duplex',
    price: 'QAR 1,520,000',
    handover: 'December 2028',
    dp: '5% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/milos/milos_real_15.jpg',
    desc: 'Premium residential tower in Al Kharaej offering 1-3 bedroom duplex apartments with double-height ceilings and 6-year payment plans.'
  },
  {
    sec: 'villas',
    slug: 'miran-tower',
    file: 'miran-tower.html',
    name: 'Miran Tower Smart Units',
    district: 'Al Kharaej (Seef Lusail)',
    city: 'Lusail',
    categoryName: 'Villa Estates & Towers',
    type: 'Fully Furnished Smart Tower',
    beds: '2 Bedrooms',
    price: 'QAR 1,590,000',
    handover: 'March 2028',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    badgeText: 'Off-Plan',
    badgeClass: 'badge--offplan',
    heroImg: '/images/developments/milos/milos_real_18.jpg',
    desc: 'Mazaya Real Estate development in Seef Lusail featuring fully furnished smart home units with concierge and resort facilities.'
  }
];

// Function to render a single luxury p-card
function renderLuxuryPCard(p) {
  const encodedWhatsapp = encodeURIComponent(`Hello Prime View Real Estate, I would like to receive the brochure, payment plan, and available inventory for ${p.name} in ${p.district}, ${p.city}.`);
  const detailLink = `/en/development/${p.file}`;

  return `
    <article class="p-card">
      <div class="p-card__image-wrapper">
        <img decoding="async" src="${p.heroImg}" alt="${p.name}" class="p-card__img" loading="lazy">
        <div class="p-card__overlay"></div>
        
        <div class="p-card__tags-top">
          <span class="p-card__badge ${p.badgeClass}">${p.badgeText}</span>
          <span class="p-card__category-tag">${p.categoryName}</span>
        </div>

        <div class="p-card__image-bottom">
          <span class="p-card__dp-pill"><i class="fa-solid fa-credit-card"></i> ${p.dp}</span>
          <span class="p-card__handover-pill"><i class="fa-regular fa-calendar-check"></i> ${p.handover}</span>
        </div>
      </div>

      <div class="p-card__body">
        <div class="p-card__header">
          <span class="p-card__location"><i class="fa-solid fa-location-dot"></i> ${p.district}, ${p.city}</span>
          <h3 class="p-card__title"><a href="${detailLink}">${p.name}</a></h3>
          <span class="p-card__type-beds">${p.type} • <strong>${p.beds}</strong></span>
        </div>

        <p class="p-card__desc">${p.desc}</p>

        <div class="p-card__footer">
          <div class="p-card__price-box">
            <span class="p-card__price-label">Starting Price</span>
            <span class="p-card__price-val">${p.price}</span>
          </div>

          <div class="p-card__actions">
            <a href="https://wa.me/97460005054?text=${encodedWhatsapp}" target="_blank" rel="noopener" class="p-card__btn-wa" aria-label="Inquire via WhatsApp for ${p.name}">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="${detailLink}" class="p-card__btn-explore">
              Explore <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

// Function to render a reel card
function renderReelCard(p) {
  const detailLink = `/en/development/${p.file}`;
  return `
    <div class="pvReelCard" onclick="window.location.href='${detailLink}'">
      <div class="pvReelFrame">
        <div class="pvReelNotch"></div>
        <img decoding="async" src="${p.heroImg}" alt="${p.name}" class="pvReelImg" loading="lazy">
        <div class="pvReelOverlay"></div>
        
        <div class="pvReelTop">
          <span class="pvBadge ${p.badgeClass}">${p.badgeText}</span>
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

// Group into 4 sections
const sec1Projects = all24Projects.slice(0, 6);
const sec2Projects = all24Projects.slice(6, 12);
const sec3Projects = all24Projects.slice(12, 18);
const sec4Projects = all24Projects.slice(18, 24);

const sectionsData = [
  {
    id: 'waterfront-estates',
    bgClass: 'pvSecLight--white',
    title: '🌊 Waterfront Estates & Island Living',
    pill: 'Waterfront & Private Beach (6 Projects)',
    sub: 'Bespoke shoreline villas, curved architectural high-rises, and private beach towers located along Qetaifan Island North and Lusail Waterfront.',
    cards: sec1Projects
  },
  {
    id: 'lusail-masterpieces',
    bgClass: 'pvSecLight--cream',
    title: '🏙️ Lusail City Heights & Towers',
    pill: 'Al Erkyah & Fox Hills (6 Projects)',
    sub: 'High-yield freehold investments and contemporary high-rise towers in Qatar’s prime smart metropolis, situated near Lusail Boulevard and Lusail Stadium.',
    cards: sec2Projects
  },
  {
    id: 'pearl-island-collection',
    bgClass: 'pvSecLight--white',
    title: '💎 The Pearl Island Collection',
    pill: 'Floresta Gardens & Crown Jewels (6 Projects)',
    sub: 'World-class island living featuring beachfront compound villas, ready-to-move mid-rise towers, and unique 20-year Lease-to-Own investment opportunities.',
    cards: sec3Projects
  },
  {
    id: 'private-villa-estates',
    bgClass: 'pvSecLight--pearl',
    title: '🏡 Private Villa Estates & Luxury Towers',
    pill: 'Standalone Compounds & Smart Towers (6 Projects)',
    sub: 'Spacious gated residential compounds in Doha and North Lusail with private pools, maid quarters, and fully furnished smart duplex units.',
    cards: sec4Projects
  }
];

// Build Complete Replacement CSS
const luxuryCardCSS = `
<style id="pvLightThemeProjectsCSS">
/* ════════════════════════════════════════════════════════════════
   LUXURY CARD & LIGHT THEME STYLING
   ════════════════════════════════════════════════════════════════ */
:root {
  --pv-gold: #c5a880;
  --pv-gold-dark: #b8902a;
  --pv-gold-light: #e2c068;
  --pv-bg-white: #ffffff;
  --pv-bg-cream: #faf8f5;
  --pv-bg-pearl: #f5f3ee;
  --pv-dark-text: #111827;
  --pv-slate-text: #4b5563;
  --pv-border-light: #e5e7eb;
  --pv-radius: 20px;
}

.pvSecLight {
  padding: 85px 0;
  position: relative;
}
.pvSecLight--white { background: var(--pv-bg-white); }
.pvSecLight--cream { background: var(--pv-bg-cream); border-top: 1px solid var(--pv-border-light); }
.pvSecLight--pearl { background: var(--pv-bg-pearl); border-top: 1px solid var(--pv-border-light); }

.pvContainer {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.pvSecHeader {
  text-align: center;
  max-width: 860px;
  margin: 0 auto 52px;
}

.pvPill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 20px;
  border-radius: 50px;
  background: rgba(197, 168, 128, 0.14);
  border: 1px solid rgba(197, 168, 128, 0.35);
  color: var(--pv-gold-dark);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.pvPillDot {
  width: 7px;
  height: 7px;
  background: var(--pv-gold-dark);
  border-radius: 50%;
  animation: pvPulseDot 2s infinite ease-in-out;
}

@keyframes pvPulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}

.pvSecTitle {
  font-family: 'Cinzel', serif;
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: var(--pv-dark-text);
  letter-spacing: -0.5px;
  margin: 0 0 14px;
  line-height: 1.25;
}

.pvSecSub {
  font-size: 1.02rem;
  color: var(--pv-slate-text);
  line-height: 1.65;
  margin: 0;
}

/* ── REELS SCROLL CAROUSEL ── */
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

.pvBadge {
  padding: 5px 14px;
  border-radius: 25px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.pvBadge.badge--offplan, .pvBadge--offplan {
  background: linear-gradient(135deg, #c5a880 0%, #96742c 100%);
  color: #ffffff;
}

.pvBadge.badge--ready, .pvBadge--ready {
  background: #10b981;
  color: #ffffff;
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

/* ════════════════════════════════════════════════════════════════
   LUXURY PROJECT CARDS GRID (P-CARD)
   ════════════════════════════════════════════════════════════════ */
.pvGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

@media (max-width: 1100px) {
  .pvGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .pvGrid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .pvSecLight { padding: 50px 0; }
  .pvContainer { padding: 0 16px; }
  .pvSecTitle { font-size: 1.65rem; }
}

.p-card {
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e8e4dc;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.04);
  position: relative;
}

.p-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: rgba(197, 168, 128, 0.6);
}

.p-card__image-wrapper {
  position: relative;
  height: 250px;
  overflow: hidden;
  background: #181818;
}

.p-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.p-card:hover .p-card__img {
  transform: scale(1.08);
}

.p-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%);
  pointer-events: none;
}

.p-card__tags-top {
  position: absolute;
  top: 14px;
  left: 14px;
  right: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.p-card__badge {
  padding: 5px 12px;
  border-radius: 30px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.badge--offplan {
  background: linear-gradient(135deg, #c5a85c 0%, #a38438 100%);
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.badge--ready {
  background: #10B981;
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.p-card__category-tag {
  background: rgba(15, 13, 10, 0.75);
  backdrop-filter: blur(8px);
  color: #E2C068;
  border: 1px solid rgba(226, 192, 104, 0.35);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 600;
}

.p-card__image-bottom {
  position: absolute;
  bottom: 12px;
  left: 14px;
  right: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.p-card__dp-pill, .p-card__handover-pill {
  background: rgba(0, 0, 0, 0.68);
  backdrop-filter: blur(8px);
  color: #FFFFFF;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.72rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.p-card__dp-pill i, .p-card__handover-pill i {
  color: #d4a843;
}

.p-card__body {
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.p-card__header {
  margin-bottom: 8px;
}

.p-card__location {
  color: #b8902a;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.p-card__title {
  font-family: 'Cinzel', serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.35;
  margin: 0 0 6px;
}

.p-card__title a {
  color: #1c1a16;
  text-decoration: none;
  transition: color 0.2s ease;
}

.p-card__title a:hover {
  color: #b8902a;
}

.p-card__type-beds {
  font-size: 0.84rem;
  color: #5c5648;
  display: block;
  margin-bottom: 12px;
}

.p-card__desc {
  font-size: 0.86rem;
  color: #5c5648;
  line-height: 1.6;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

.p-card__footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid #e8e4dc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.p-card__price-box {
  display: flex;
  flex-direction: column;
}

.p-card__price-label {
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #8a8278;
  font-weight: 600;
}

.p-card__price-val {
  font-size: 1.15rem;
  font-weight: 800;
  color: #b8902a;
  font-family: 'Cinzel', serif;
}

.p-card__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.p-card__btn-wa {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #25D366;
  color: #FFFFFF;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.15rem;
  transition: transform 0.2s ease, background 0.2s ease;
}

.p-card__btn-wa:hover {
  background: #1eb956;
  transform: scale(1.06);
}

.p-card__btn-explore {
  padding: 10px 18px;
  border-radius: 10px;
  background: #111111;
  color: #FFFFFF;
  font-size: 0.84rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.p-card__btn-explore:hover {
  background: #b8902a;
  color: #FFFFFF;
  transform: translateX(2px);
}
</style>
`;

// Build HTML for the 4 Sections
let sectionsHtml = '';
for (const sec of sectionsData) {
  const cardsHtml = sec.cards.map(p => renderLuxuryPCard(p)).join('\n');
  sectionsHtml += `
<!-- ════════════════════════════════════════════════════════════════
     SECTION: ${sec.title} (6 CARDS)
     ════════════════════════════════════════════════════════════════ -->
<section class="pvSecLight ${sec.bgClass}" id="${sec.id}">
  <div class="pvContainer">
    <div class="pvSecHeader">
      <span class="pvPill">
        <span class="pvPillDot"></span>
        ${sec.pill}
      </span>
      <h2 class="pvSecTitle">${sec.title}</h2>
      <p class="pvSecSub">
        ${sec.sub}
      </p>
    </div>
    <div class="pvGrid">
      ${cardsHtml}
    </div>
  </div>
</section>
`;
}

// Build Carousel HTML
const reelsCardsHtml = all24Projects.map(p => renderReelCard(p)).join('\n');
const carouselHtml = `
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
      ${reelsCardsHtml}
    </div>

    <button type="button" class="pvReelNav pvReelNav--next" onclick="scrollReelsTrack(1)" aria-label="Next Project">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
    </button>
  </div>
</section>
`;

const completeBlock = luxuryCardCSS + '\n' + carouselHtml + '\n' + sectionsHtml;

// Replace in index.html
const startPos = html.indexOf('<style id="pvLightThemeProjectsCSS">');
if (startPos > -1) {
  const endPos = html.indexOf('<section class="latestBlogPosts');
  if (endPos > -1) {
    html = html.slice(0, startPos) + completeBlock + '\n\n' + html.slice(endPos);
  } else {
    console.error('Could not find latestBlogPosts section');
  }
} else {
  console.error('Could not find pvLightThemeProjectsCSS block');
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully upgraded homepage cards to luxury p-card design!');
