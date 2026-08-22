const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'src/www.fgrealty.qa');

// Extract Navbar from contact.html
const contactHtml = fs.readFileSync(path.join(publicDir, 'en/contact.html'), 'utf8');
const navStart = contactHtml.indexOf('<!-- SITE NAVBAR - Copied from Homepage -->');
const navEnd = contactHtml.indexOf('<!-- ── HERO ── -->');
let navbarHtml = contactHtml.substring(navStart, navEnd).trim();

// 24 Full Projects Definition with Complete Details & Categories
const all24Projects = [
  // CATEGORY 1: WATERFRONT ESTATES (6)
  {
    category: 'waterfront',
    categoryName: 'Waterfront Estates',
    slug: 'skala-villas',
    file: 'skala-villas.html',
    name: 'Skala Villas & Waterfront Luxury',
    shortName: 'Skala Villas',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Waterfront Signature Villas',
    beds: '4 - 5 Bedroom Villas',
    price: '3.8M',
    priceNum: 3800000,
    priceFull: 'QAR 3,800,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/hero.jpg',
    desc: 'Bespoke waterfront villas and private shorefront residences on Qetaifan Island North with private beach access and private marina.'
  },
  {
    category: 'waterfront',
    categoryName: 'Waterfront Estates',
    slug: 'via-doro',
    file: 'via-doro.html',
    name: "Via D'Oro Signature Villas",
    shortName: "Via D'Oro Villas",
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Mediterranean Compound Villas',
    beds: '4+ Maid Villas',
    price: '4.25M',
    priceNum: 4250000,
    priceFull: 'QAR 4,250,000',
    handover: 'Q2 2028',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-1.jpg',
    desc: 'Luxury Mediterranean compound featuring 34 signature villas with private elevator, private pool, and expansive landscape gardens.'
  },
  {
    category: 'waterfront',
    categoryName: 'Waterfront Estates',
    slug: 'carlton-house',
    file: 'carlton-house.html',
    name: 'Carlton House Waterfront',
    shortName: 'Carlton House',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Curved Glass High-Rise',
    beds: 'Studio - 3 BR',
    price: '1.46M',
    priceNum: 1460000,
    priceFull: 'QAR 1,460,000',
    handover: 'Q4 2028',
    dp: '2% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-4.jpg',
    desc: 'Iconic curved waterfront tower on Qetaifan Island offering sea view residences with extended payment plans till 2033.'
  },
  {
    category: 'waterfront',
    categoryName: 'Waterfront Estates',
    slug: 'canal-bay',
    file: 'canal-bay.html',
    name: 'Canal Bay Beachfront',
    shortName: 'Canal Bay',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Architectural Waterfront Tower',
    beds: '2 Bedrooms',
    price: '2.0M',
    priceNum: 2000000,
    priceFull: 'QAR 2,000,000',
    handover: 'Q4 2028',
    dp: '2% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-5.jpg',
    desc: 'Striking architectural waterfront tower on Qetaifan Island with private beach access and world-class resort amenities.'
  },
  {
    category: 'waterfront',
    categoryName: 'Waterfront Estates',
    slug: 'skala-tower',
    file: 'skala-tower.html',
    name: 'Skala Tower 33-Story Icon',
    shortName: 'Skala Tower',
    district: 'Lusail Waterfront',
    city: 'Lusail',
    type: '33-Story Beachfront Tower',
    beds: '1 - 2 Bedrooms',
    price: '2.0M',
    priceNum: 2000000,
    priceFull: 'QAR 2,000,000',
    handover: 'Q4 2026',
    dp: '5% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-2.jpg',
    desc: 'Iconic 33-story luxury waterfront tower featuring 189 smart residences, infinity sky pool, and panoramic coastal panoramas.'
  },
  {
    category: 'waterfront',
    categoryName: 'Waterfront Estates',
    slug: 'la-mer-tower',
    file: 'la-mer-tower.html',
    name: 'La Mer Coastal Tower',
    shortName: 'La Mer Tower',
    district: 'Lusail Waterfront',
    city: 'Lusail',
    type: 'Coastal Glass High-Rise',
    beds: 'Studio & 1 BR',
    price: '1.0M',
    priceNum: 1000000,
    priceFull: 'QAR 1,000,000',
    handover: 'Q4 2027',
    dp: '2% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-6.jpg',
    desc: 'Sleek waterfront tower on Lusail Waterfront offering stylish studios and 1-bedrooms with rooftop infinity pool and promenade access.'
  },

  // CATEGORY 2: LUSAIL HEIGHTS (6)
  {
    category: 'lusail',
    categoryName: 'Lusail Heights',
    slug: 'city-avenue',
    file: 'city-avenue.html',
    name: 'City Avenue Residences',
    shortName: 'City Avenue',
    district: 'Al Erkyah City',
    city: 'Lusail',
    type: 'Urban Luxury Apartments',
    beds: '1 - 3 Bedrooms',
    price: '1.2M',
    priceNum: 1200000,
    priceFull: 'QAR 1,200,000',
    handover: 'Ready / 2026',
    dp: '10% Down Payment',
    badge: 'Ready',
    heroImg: '/images/developments/city-avenue/city_hero_new.jpg',
    desc: 'High-end urban residential tower in Al Erkyah City, Lusail. Features turnkey interiors, fitness spa, and prime metro accessibility.'
  },
  {
    category: 'lusail',
    categoryName: 'Lusail Heights',
    slug: 'rivan',
    file: 'rivan.html',
    name: 'Rivan Tower & Sky Suites',
    shortName: 'Rivan Tower',
    district: 'Lusail City',
    city: 'Lusail',
    type: 'Sky Suites & Residences',
    beds: '1 - 3 Bedroom Suites',
    price: '1.65M',
    priceNum: 1650000,
    priceFull: 'QAR 1,650,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/rivan/hero.jpg',
    desc: 'Architectural landmark in Lusail City offering sky suites with floor-to-ceiling glass, smart climate automation, and skyline views.'
  },
  {
    category: 'lusail',
    categoryName: 'Lusail Heights',
    slug: 'elite-residence',
    file: 'elite-residence.html',
    name: 'Elite Residence',
    shortName: 'Elite Residence',
    district: 'Al Erkyah City',
    city: 'Lusail',
    type: 'Smart 1BR Apartments',
    beds: '1 Bedroom',
    price: '825K',
    priceNum: 825000,
    priceFull: 'QAR 825,000',
    handover: 'Q4 2027',
    dp: 'QAR 50K Fixed DP',
    badge: 'Off-Plan',
    heroImg: '/images/developments/city-avenue/city_feature_1.jpg',
    desc: 'Modern residential tower offering stylish 1-bedroom apartments with high ROI potential and a flexible 6-year payment schedule.'
  },
  {
    category: 'lusail',
    categoryName: 'Lusail Heights',
    slug: 'boulevard-residence',
    file: 'boulevard-residence.html',
    name: 'Boulevard Residence',
    shortName: 'Boulevard Residence',
    district: 'Fox Hills',
    city: 'Lusail',
    type: '1 & 2 BR Apartments',
    beds: '1 - 2 Bedrooms',
    price: '1.0M',
    priceNum: 1000000,
    priceFull: 'QAR 1,000,000',
    handover: 'July 2027',
    dp: '5% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/city-avenue/city_feature_2.jpg',
    desc: 'Contemporary residential tower in Fox Hills offering 1 & 2 bedroom apartments overlooking the vibrant Lusail Boulevard district.'
  },
  {
    category: 'lusail',
    categoryName: 'Lusail Heights',
    slug: 'orjuwan',
    file: 'orjuwan.html',
    name: 'Orjuwan Tower',
    shortName: 'Orjuwan Tower',
    district: 'Al Erkyah City',
    city: 'Lusail',
    type: 'Modern Residences',
    beds: '1 Bedroom',
    price: '1.1M',
    priceNum: 1100000,
    priceFull: 'QAR 1,100,000',
    handover: 'October 2026',
    dp: '30% Before Handover',
    badge: 'Off-Plan',
    heroImg: '/images/developments/city-avenue/city_feature_3.jpg',
    desc: 'Premium residential tower in Al Erkyah City offering 1-bedroom apartments with 70% post-handover payment flexibility.'
  },
  {
    category: 'lusail',
    categoryName: 'Lusail Heights',
    slug: 'bliss-residences',
    file: 'bliss-residences.html',
    name: 'Bliss Residences',
    shortName: 'Bliss Residences',
    district: 'Fox Hills',
    city: 'Lusail',
    type: 'Ready Luxury Apartments',
    beds: '1 - 3 Bedrooms',
    price: '1.54M',
    priceNum: 1540000,
    priceFull: 'QAR 1,540,000',
    handover: 'Ready Move-In',
    dp: '35% Down Payment',
    badge: 'Ready',
    heroImg: '/images/developments/milos/milos_real_12.jpg',
    desc: 'Ready-to-move-in luxury residences in Fox Hills featuring premium European kitchens and a 5-year post-handover payment plan.'
  },

  // CATEGORY 3: THE PEARL ISLAND (6)
  {
    category: 'pearl',
    categoryName: 'The Pearl Island',
    slug: 'milos',
    file: 'milos.html',
    name: 'Milos Residence & Coastal Living',
    shortName: 'Milos Residence',
    district: 'Legtaifiya / Pearl Gateway',
    city: 'Doha',
    type: 'Coastal High-Rise Tower',
    beds: '1 - 3 Bedrooms',
    price: '1.85M',
    priceNum: 1850000,
    priceFull: 'QAR 1,850,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/hero.jpg',
    desc: 'Architectural masterpiece at Legtaifiya coastal corridor facing The Pearl with private beach access and rooftop infinity pool.'
  },
  {
    category: 'pearl',
    categoryName: 'The Pearl Island',
    slug: 'floresta-105',
    file: 'floresta-105.html',
    name: 'Floresta 105 Tower',
    shortName: 'Floresta 105',
    district: 'Floresta Gardens',
    city: 'The Pearl-Qatar',
    type: 'Mid-Rise Garden Residences',
    beds: '1 - 3 Bedrooms',
    price: '1.77M',
    priceNum: 1770000,
    priceFull: 'QAR 1,770,000',
    handover: 'Immediate / Ready',
    dp: 'Ready Move-In',
    badge: 'Ready',
    heroImg: '/images/developments/milos/milos_real_1.jpg',
    desc: 'Located in Floresta Gardens precinct of The Pearl Island with lush Mediterranean garden views, retail plaza, and private club.'
  },
  {
    category: 'pearl',
    categoryName: 'The Pearl Island',
    slug: 'al-mayyas',
    file: 'al-mayyas.html',
    name: 'Al Mayyas Tower',
    shortName: 'Al Mayyas Tower',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    type: 'Luxury Sea View Apartments',
    beds: '1 - 3 Bedrooms',
    price: '2.11M',
    priceNum: 2110000,
    priceFull: 'QAR 2,110,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_3.jpg',
    desc: 'Boutique luxury tower in The Pearl with floor-to-ceiling windows, panoramic sea vistas, concierge service, and private spa.'
  },
  {
    category: 'pearl',
    categoryName: 'The Pearl Island',
    slug: 'coralia-villas',
    file: 'coralia-villas.html',
    name: 'Coralia Compound Villas',
    shortName: 'Coralia Villas',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    type: 'Exclusive Gated Villas',
    beds: '4 - 5 Bedrooms',
    price: '5.5M',
    priceNum: 5500000,
    priceFull: 'QAR 5,500,000',
    handover: 'Immediate / Ready',
    dp: 'Ready Move-In',
    badge: 'Ready',
    heroImg: '/images/developments/flora-villas/img_1.jpg',
    desc: 'Gated compound villas located within The Pearl-Qatar featuring private swimming pools, landscaped gardens, and 24/7 security.'
  },
  {
    category: 'pearl',
    categoryName: 'The Pearl Island',
    slug: 'corallia',
    file: 'corallia.html',
    name: 'Corallia Lease to Own',
    shortName: 'Corallia Lease-to-Own',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    type: 'Lease to Own Residences',
    beds: '1 - 3 Bedrooms',
    price: '1.95M',
    priceNum: 1950000,
    priceFull: 'QAR 1,950,000',
    handover: 'Immediate Handover',
    dp: 'Flexible Lease-to-Own',
    badge: 'Ready',
    heroImg: '/images/developments/milos/milos_real_8.jpg',
    desc: 'Exclusive lease-to-own residential opportunity on The Pearl Island offering direct transition from rental to full title deed ownership.'
  },
  {
    category: 'pearl',
    categoryName: 'The Pearl Island',
    slug: 'marbella',
    file: 'marbella.html',
    name: 'Marbella Residence',
    shortName: 'Marbella Residence',
    district: 'Entertainment City',
    city: 'Lusail',
    type: 'Resort-Style Living',
    beds: '1 - 3 Bedrooms',
    price: '1.35M',
    priceNum: 1350000,
    priceFull: 'QAR 1,350,000',
    handover: 'Q4 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/city-avenue/city_feature_1.jpg',
    desc: 'Resort-style luxury living in Lusail Entertainment City featuring expansive terraces, swimming lagoons, and clubhouse amenities.'
  },

  // CATEGORY 4: VILLA ESTATES & TOWERS (6)
  {
    category: 'villas',
    categoryName: 'Villa Estates & Towers',
    slug: 'flora-villas',
    file: 'flora-villas.html',
    name: 'Flora Standalone Villas',
    shortName: 'Flora Villas',
    district: 'Huzoom District',
    city: 'North Lusail',
    type: 'Private Sanctuary Villas',
    beds: '5 BR + Private Pool',
    price: '4.1M',
    priceNum: 4100000,
    priceFull: 'QAR 4,100,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/flora-villas/hero.jpg',
    desc: 'Private standalone villa sanctuary in North Lusail with private gardens, swimming pool, double-height living areas, and driver quarters.'
  },
  {
    category: 'villas',
    categoryName: 'Villa Estates & Towers',
    slug: 'bliss-gardens',
    file: 'bliss-gardens.html',
    name: 'Bliss Gardens Compound',
    shortName: 'Bliss Gardens (New Salata)',
    district: 'New Salata',
    city: 'Doha',
    type: 'Private Gated Villa Compound',
    beds: '5 BR + Maid',
    price: '4.29M',
    priceNum: 4290000,
    priceFull: 'QAR 4,290,000',
    handover: 'October 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/flora-villas/unit_2.jpg',
    desc: 'Exclusive villa compound in New Salata featuring 5-bedroom luxury villas with private gardens, clubhouse, gym, and central security.'
  },
  {
    category: 'villas',
    categoryName: 'Villa Estates & Towers',
    slug: 'bliss-gardens-2',
    file: 'bliss-gardens-2.html',
    name: 'Bliss Gardens II',
    shortName: 'Bliss Gardens (Al Muraikh)',
    district: 'Al Muraikh',
    city: 'Doha',
    type: 'Standalone Villa Community',
    beds: '5 BR + Maid',
    price: '4.08M',
    priceNum: 4080000,
    priceFull: 'QAR 4,080,000',
    handover: 'December 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/flora-villas/unit_3.jpg',
    desc: 'Premium standalone villa community in Al Muraikh offering 5-bedroom luxury residences with spacious layouts and modern architecture.'
  },
  {
    category: 'villas',
    categoryName: 'Villa Estates & Towers',
    slug: 'voya-residence',
    file: 'voya-residence.html',
    name: 'Voya Waterfront Chalets',
    shortName: 'Voya Waterfront',
    district: 'Al Kharaej (Seef Lusail)',
    city: 'Lusail',
    type: 'Coastal Waterfront Chalets',
    beds: '1 - 4 BR & Chalets',
    price: '1.458M',
    priceNum: 1458000,
    priceFull: 'QAR 1,458,000',
    handover: 'Immediate / Ready',
    dp: '60% Down Payment',
    badge: 'Ready',
    heroImg: '/images/developments/valencia-residence/hero.jpg',
    desc: 'Coastal architectural marvel on Lusail Waterfront offering luxury apartments & chalets with panoramic sea vistas.'
  },
  {
    category: 'villas',
    categoryName: 'Villa Estates & Towers',
    slug: 'bliss-tower',
    file: 'bliss-tower.html',
    name: 'Bliss Tower Duplexes',
    shortName: 'Bliss Tower',
    district: 'Al Kharaej',
    city: 'Lusail',
    type: 'Duplex High-Rise',
    beds: '1 - 3 BR Duplex',
    price: '1.52M',
    priceNum: 1520000,
    priceFull: 'QAR 1,520,000',
    handover: 'December 2028',
    dp: '5% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_15.jpg',
    desc: 'Premium residential tower in Al Kharaej offering 1-3 bedroom duplex apartments with double-height ceilings and 6-year payment plans.'
  },
  {
    category: 'villas',
    categoryName: 'Villa Estates & Towers',
    slug: 'miran-tower',
    file: 'miran-tower.html',
    name: 'Miran Tower Smart Units',
    shortName: 'Miran Tower',
    district: 'Al Kharaej (Seef Lusail)',
    city: 'Lusail',
    type: 'Fully Furnished Smart Tower',
    beds: '2 Bedrooms',
    price: '1.59M',
    priceNum: 1590000,
    priceFull: 'QAR 1,590,000',
    handover: 'March 2028',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_18.jpg',
    desc: 'Mazaya Real Estate development in Seef Lusail featuring fully furnished smart home units with concierge and resort facilities.'
  }
];

// Unified 5-Column 24-Projects Footer
const unifiedEnglishFooter = `    <div class="footerWrapper" style="background: #0d0d11; border-top: 1px solid rgba(201, 168, 76, 0.25); color: #fff;">
        <footer class="footer" style="max-width: 1400px; margin: 0 auto; padding: 60px 24px 28px;">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 40px; margin-bottom: 48px;">
                <!-- Brand Info -->
                <div style="flex: 1 1 280px; max-width: 320px;">
                    <a href="/" aria-label="Prime View Real Estate Home">
                        <img src="/images/prime-view-logo.png" alt="Prime View Real Estate" style="height: 44px; width: auto; max-width: 220px; display: block; margin-bottom: 18px;" loading="lazy" decoding="async" />
                    </a>
                    <p style="color: rgba(255,255,255,0.7); font-size: 0.86rem; line-height: 1.7; margin-bottom: 16px; font-family: 'Plus Jakarta Sans', sans-serif;">
                        Prime View Real Estate W.L.L. is Qatar's premier luxury real estate brokerage. Discover our bespoke portfolio of 24 flagship residential, waterfront, and architectural developments across Lusail, The Pearl, and Doha.
                    </p>
                    <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; background: rgba(201,168,76,0.12); border: 1px solid rgba(201,168,76,0.3); border-radius: 20px; font-size: 0.78rem; color: #e7cf8a; font-weight: 600;">
                        <span style="display: inline-block; width: 8px; height: 8px; background: #c9a84c; border-radius: 50%;"></span> 24 Flagship Developments
                    </div>
                </div>

                <!-- 24 Projects Grid & Company Links -->
                <div style="flex: 3 1 720px; display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 28px;">
                    
                    <!-- Col 1: Waterfront Estates (Lusail / Qetaifan) -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">Waterfront Estates</span>
                        <a href="/en/development/skala-villas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Skala Villas</a>
                        <a href="/en/development/via-doro.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Via D'Oro Villas</a>
                        <a href="/en/development/carlton-house.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Carlton House</a>
                        <a href="/en/development/canal-bay.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Canal Bay</a>
                        <a href="/en/development/skala-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Skala Tower</a>
                        <a href="/en/development/la-mer-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">La Mer Tower</a>
                    </div>

                    <!-- Col 2: Lusail City Heights -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">Lusail Heights</span>
                        <a href="/en/development/city-avenue.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">City Avenue</a>
                        <a href="/en/development/rivan.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Rivan Tower</a>
                        <a href="/en/development/elite-residence.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Elite Residence</a>
                        <a href="/en/development/boulevard-residence.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Boulevard Residence</a>
                        <a href="/en/development/orjuwan.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Orjuwan Tower</a>
                        <a href="/en/development/bliss-residences.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Bliss Residences</a>
                    </div>

                    <!-- Col 3: The Pearl Island Collection -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">The Pearl Island</span>
                        <a href="/en/development/milos.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Milos Residence</a>
                        <a href="/en/development/floresta-105.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Floresta 105</a>
                        <a href="/en/development/al-mayyas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Al Mayyas Tower</a>
                        <a href="/en/development/coralia-villas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Coralia Villas</a>
                        <a href="/en/development/corallia.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Corallia Lease-to-Own</a>
                        <a href="/en/development/marbella.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Marbella Residence</a>
                    </div>

                    <!-- Col 4: Villa Estates & Towers -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">Villa Estates & Towers</span>
                        <a href="/en/development/flora-villas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Flora Villas</a>
                        <a href="/en/development/bliss-gardens.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Bliss Gardens (Salata)</a>
                        <a href="/en/development/bliss-gardens-2.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Bliss Gardens (Muraikh)</a>
                        <a href="/en/development/voya-residence.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Voya Waterfront</a>
                        <a href="/en/development/bliss-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Bliss Tower</a>
                        <a href="/en/development/miran-tower.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Miran Tower</a>
                    </div>

                    <!-- Col 5: Company & Quick Links -->
                    <div style="display: flex; flex-direction: column; gap: 9px;">
                        <span style="color: #c9a84c; font-size: 0.76rem; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 6px; margin-bottom: 4px;">Company</span>
                        <a href="/en/about.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">About Us</a>
                        <a href="/en/developments.html" style="color: #c9a84c; font-weight: 600; font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c9a84c'">All 24 Projects ↗</a>
                        <a href="/en/areas.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Qatar's Areas</a>
                        <a href="/en/contact.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Contact Advisory</a>
                        <a href="/en/privacy-policy.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Privacy Policy</a>
                        <a href="/en/terms-and-conditions.html" style="color: rgba(255,255,255,0.85); font-size: 0.84rem; text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#c9a84c'" onmouseout="this.style.color='rgba(255,255,255,0.85)'">Terms & Conditions</a>
                    </div>
                </div>
            </div>

            <!-- Social & Legal Bar -->
            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px;">
                <div class="footerSocialMedia" style="display: flex; gap: 12px; align-items: center;">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="Facebook">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99999 0C9.49 0.017003 10.8361 0.383206 12.0382 1.09861C13.2261 1.79973 14.2141 2.79386 14.908 3.98593C15.6191 5.19533 15.9831 6.54957 16 8.04867C15.9578 10.0998 15.3108 11.8516 14.0592 13.3042C12.8075 14.7568 11.2045 15.6555 9.54498 16V10.2493H11.1139L11.4687 7.9894H9.09301V6.50924C9.07982 6.20239 9.17686 5.90094 9.36658 5.65941C9.55657 5.41722 9.89114 5.28993 10.3703 5.27753H11.8049V3.29792C11.7843 3.29129 11.589 3.26511 11.2189 3.21935C10.7992 3.17025 10.3772 3.14402 9.95467 3.14078C8.99835 3.1452 8.24203 3.41496 7.68571 3.95006C7.12937 4.48502 6.84518 5.25899 6.83313 6.27197V7.9894H5.02522V10.2493H6.83313V16C4.79552 15.6555 3.19245 14.7568 1.9408 13.3042C0.689143 11.8516 0.0422341 10.0998 0 8.04867C0.0168975 6.5495 0.380886 5.19526 1.09196 3.98593C1.78584 2.79386 2.77393 1.79973 3.96175 1.09861C5.16387 0.383344 6.50995 0.0171408 7.99999 0Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://x.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="X">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.52217 6.77491L15.4785 0H14.0671L8.89516 5.88256L4.76437 0H0L6.24656 8.89547L0 16H1.41155L6.87321 9.78782L11.2356 16H16L9.52183 6.77491H9.52217ZM7.58887 8.97384L6.95596 8.08805L1.92015 1.03974H4.0882L8.15216 6.72795L8.78507 7.61374L14.0677 15.0075H11.8997L7.58887 8.97418V8.97384Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="Instagram">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9593 4.70406C15.9218 3.85391 15.7843 3.26945 15.5874 2.763C15.3842 2.22542 15.0715 1.74412 14.662 1.34402C14.2618 0.937686 13.7772 0.621949 13.2458 0.421959C12.7363 0.22502 12.1548 0.0875418 11.3044 0.0500587C10.4478 0.00940127 10.1758 0 8.00311 0C5.83039 0 5.55844 0.00940127 4.70496 0.0468843C3.85465 0.0843673 3.27007 0.221968 2.76365 0.418784C2.22584 0.621949 1.74445 0.934512 1.34427 1.34402C0.937865 1.74412 0.62219 2.22859 0.422039 2.75995C0.225063 3.26945 0.0875585 3.85074 0.0500683 4.70088C0.00940308 5.55738 0 5.82928 0 8.00159C0 10.1739 0.00940308 10.4458 0.0468933 11.2991C0.0843835 12.1493 0.22201 12.7337 0.418986 13.2402C0.62219 13.7778 0.937865 14.2591 1.34427 14.6592C1.74445 15.0655 2.22902 15.3812 2.76047 15.5812C3.27007 15.7782 3.85147 15.9156 4.7019 15.9531C5.55526 15.9907 5.82734 16 8.00006 16C10.1728 16 10.4447 15.9907 11.2982 15.9531C12.1485 15.9156 12.7331 15.7782 13.2395 15.5812C14.315 15.1655 15.1653 14.3153 15.5811 13.2402C15.778 12.7307 15.9156 12.1493 15.9531 11.2991C15.9906 10.4458 16 10.1739 16 8.00159C16 5.82928 15.9968 5.55738 15.9593 4.70406ZM14.5182 11.2366C14.4838 12.018 14.3525 12.44 14.2431 12.7213C13.9742 13.4183 13.4209 13.9715 12.7237 14.2404C12.4423 14.3498 12.0172 14.481 11.2387 14.5153C10.3947 14.5529 10.1415 14.5622 8.00629 14.5622C5.87106 14.5622 5.61473 14.5529 4.77371 14.5153C3.99215 14.481 3.57012 14.3498 3.28876 14.2404C2.94182 14.1122 2.62602 13.909 2.3697 13.6433C2.10397 13.3839 1.90076 13.0713 1.77254 12.7244C1.66312 12.4431 1.53185 12.018 1.49753 11.2398C1.45992 10.3959 1.45064 10.1426 1.45064 8.00782C1.45064 5.87299 1.45992 5.61671 1.49753 4.77597C1.53185 3.99457 1.66312 3.57261 1.77254 3.2913C1.90076 2.94431 2.10397 2.6287 2.37287 2.3723C2.63225 2.10662 2.94487 1.90345 3.29193 1.77538C3.57329 1.66598 3.9985 1.53473 4.77688 1.5003C5.62096 1.46281 5.87423 1.45341 8.00934 1.45341C10.1477 1.45341 10.4009 1.46281 11.2419 1.5003C12.0235 1.53473 12.4455 1.66598 12.7269 1.77538C13.0738 1.90345 13.3896 2.10662 13.6459 2.3723C13.9117 2.63175 14.1149 2.94431 14.2431 3.2913C14.3525 3.57261 14.4838 3.99762 14.5182 4.77597C14.5557 5.61989 14.5651 5.87299 14.5651 8.00782C14.5651 10.1426 14.5557 10.3927 14.5182 11.2366Z" fill="#F2F2F2"/>
                            <path d="M8.00329 3.89111C5.73374 3.89111 3.89233 5.73206 3.89233 8.00131C3.89233 10.2706 5.73374 12.1115 8.00329 12.1115C10.273 12.1115 12.1143 10.2706 12.1143 8.00131C12.1143 5.73206 10.273 3.89111 8.00329 3.89111ZM8.00329 10.6675C6.53093 10.6675 5.33661 9.47353 5.33661 8.00131C5.33661 6.52909 6.53093 5.33513 8.00329 5.33513C9.4758 5.33513 10.67 6.52909 10.67 8.00131C10.67 9.47353 9.4758 10.6675 8.00329 10.6675Z" fill="#F2F2F2"/>
                            <path d="M13.2362 3.72908C13.2362 4.25897 12.8065 4.68861 12.2764 4.68861C11.7464 4.68861 11.3167 4.25897 11.3167 3.72908C11.3167 3.19907 11.7464 2.76953 12.2764 2.76953C12.8065 2.76953 13.2362 3.19907 13.2362 3.72908Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="LinkedIn">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9961 16L16.0001 15.9993V10.1313C16.0001 7.26066 15.3821 5.04932 12.0261 5.04932C10.4128 5.04932 9.3301 5.93465 8.8881 6.77399H8.84143V5.31732H5.65942V15.9993H8.97277V10.71C8.97277 9.31733 9.23677 7.97066 10.9614 7.97066C12.6608 7.97066 12.6861 9.56 12.6861 10.7993V16L15.9961 16Z" fill="#F2F2F2"/>
                            <path d="M0.263672 5.31812H3.58101V16.0001H0.263672L0.263672 5.31812Z" fill="#F2F2F2"/>
                            <path d="M1.92134 0C0.860669 0 0 0.860669 0 1.92134C0 2.98201 0.860669 3.86068 1.92134 3.86068C2.98201 3.86068 3.84268 2.98201 3.84268 1.92134C3.84201 0.860669 2.98134 0 1.92134 0Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener" class="footerSocialMedia__icon" aria-label="YouTube">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6703 1.87771C15.486 1.14347 14.9455 0.564673 14.2602 0.366965C13.0081 0 7.99982 0 7.99982 0C7.99982 0 2.9917 0 1.73965 0.353052C1.06748 0.550551 0.513868 1.14357 0.329493 1.87771C0 3.21879 0 6 0 6C0 6 0 8.79523 0.329493 10.1223C0.514063 10.8564 1.0543 11.4352 1.73975 11.6329C3.00489 12 8.00001 12 8.00001 12C8.00001 12 13.0081 12 14.2602 11.6469C14.9456 11.4493 15.486 10.8705 15.6705 10.1364C15.9999 8.79523 15.9999 6.01412 15.9999 6.01412C15.9999 6.01412 16.0131 3.21879 15.6703 1.87771ZM6.40529 8.56938V3.43062L10.5699 6L6.40529 8.56938Z" fill="#F2F2F2"/>
                        </svg>
                    </a>
                </div>
                <span class="text-xs" style="color: rgba(255,255,255,0.45);">Prime View Real Estate - Prime View Real Estate W.L.L. All Rights Reserved. Licensed Luxury Real Estate Brokerage in Qatar.</span>
            </div>

            <div class="footer__bottom" style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <div class="footer__copyright">
                    <span style="color: rgba(255,255,255,0.5); font-size: 0.8rem;">© 2026 Prime View Real Estate W.L.L. All Rights Reserved.</span>
                </div>
                <div class="footerBoottomLinks" style="display: flex; align-items: center; gap: 14px;">
                    <a href="/en/privacy-policy.html" style="color: rgba(255,255,255,0.55); font-size: 0.8rem; text-decoration: none;">Privacy Policy</a>
                    <div style="width: 1px; height: 12px; background: rgba(255,255,255,0.2);"></div>
                    <a href="/en/terms-and-conditions.html" style="color: rgba(255,255,255,0.55); font-size: 0.8rem; text-decoration: none;">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    </div>`;

// Generate the 24 Project Cards HTML
const projectCardsHtml = all24Projects.map((p, idx) => {
  const badgeClass = p.badge === 'Ready' ? 'badge--ready' : 'badge--offplan';
  const badgeText = p.badge === 'Ready' ? 'Ready to Move' : 'Off-Plan';
  const encodedWhatsapp = encodeURIComponent(`Hello Prime View Real Estate, I would like to receive the brochure, payment plan, and available inventory for ${p.name} in ${p.district}, ${p.city}.`);

  return `
    <article class="p-card" data-category="${p.category}" data-status="${p.badge.toLowerCase()}" data-district="${p.district.toLowerCase()}" data-city="${p.city.toLowerCase()}" data-price="${p.priceNum}">
        <div class="p-card__image-wrapper">
            <img src="${p.heroImg}" alt="${p.name}" class="p-card__img" loading="lazy" decoding="async" />
            <div class="p-card__overlay"></div>
            
            <div class="p-card__tags-top">
                <span class="p-card__badge ${badgeClass}">${badgeText}</span>
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
                <h2 class="p-card__title"><a href="/en/development/${p.file}">${p.name}</a></h2>
                <span class="p-card__type-beds">${p.type} • <strong>${p.beds}</strong></span>
            </div>

            <p class="p-card__desc">${p.desc}</p>

            <div class="p-card__footer">
                <div class="p-card__price-box">
                    <span class="p-card__price-label">Starting Price</span>
                    <span class="p-card__price-val">${p.priceFull}</span>
                </div>

                <div class="p-card__actions">
                    <a href="https://wa.me/97430451451?text=${encodedWhatsapp}" target="_blank" rel="noopener" class="p-card__btn-wa" aria-label="WhatsApp Inquiry for ${p.name}">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="/en/development/${p.file}" class="p-card__btn-explore">
                        Explore <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </article>
  `;
}).join('\n');

const fullDevelopmentsPageHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>24 Flagship Luxury Developments in Qatar | Prime View Real Estate</title>
    <meta name="description" content="Discover our complete curated portfolio of 24 flagship luxury real estate developments in Qatar. Waterfront villas, iconic towers, and freehold residences across Lusail, The Pearl, and Doha.">
    <link rel="canonical" href="/en/developments.html">
    <link rel="alternate" hreflang="en" href="/en/developments.html">
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#b89c4c" />

    <link rel="preload" as="style" href="/build/assets/core-BJlXrooN.css" />
    <link rel="stylesheet" href="/build/assets/core-BJlXrooN.css" />
    <link rel="stylesheet" href="/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --gold: #B8902A;
            --gold-light: #D4A843;
            --gold-dark: #8A6A1A;
            --gold-glow: rgba(184, 144, 42, 0.22);
            --bg-page: #F7F5F0;
            --bg-card: #FFFFFF;
            --border-subtle: #E8E4DC;
            --border-gold: rgba(184, 144, 42, 0.28);
            --text-primary: #1C1A16;
            --text-secondary: #5C5648;
            --text-muted: #8A8278;
            --radius-md: 14px;
            --radius-lg: 20px;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: var(--bg-page);
            color: var(--text-primary);
            overflow-x: hidden;
            line-height: 1.7;
        }

        /* Hero with Architectural Video Background */
        .dev-hero {
            position: relative;
            padding: 165px 5% 95px;
            text-align: center;
            color: #FFFFFF;
            overflow: hidden;
            min-height: 520px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #0d0c0a;
        }
        .dev-hero__video-wrap {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            overflow: hidden;
        }
        .dev-hero__video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            position: absolute;
            top: 0;
            left: 0;
            filter: brightness(0.82) contrast(1.05);
            transform: scale(1.02);
        }
        .dev-hero__overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(10, 9, 7, 0.75) 0%, rgba(15, 13, 10, 0.55) 45%, rgba(12, 10, 8, 0.95) 100%);
            z-index: 2;
        }
        .dev-hero__content {
            position: relative;
            z-index: 3;
            max-width: 1100px;
            margin: 0 auto;
        }
        .dev-hero__badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 20px;
            background: rgba(184, 144, 42, 0.22);
            border: 1px solid rgba(212, 168, 67, 0.55);
            border-radius: 50px;
            font-size: 0.8rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #E2C068;
            margin-bottom: 20px;
            font-weight: 700;
            backdrop-filter: blur(10px);
        }
        .dev-hero__title {
            font-family: 'Cinzel', serif;
            font-size: clamp(2.1rem, 4.5vw, 3.5rem);
            font-weight: 700;
            letter-spacing: 1.5px;
            margin-bottom: 16px;
            color: #FFFFFF;
            text-shadow: 0 4px 24px rgba(0,0,0,0.6);
        }
        .dev-hero__subtitle {
            font-size: clamp(0.95rem, 1.5vw, 1.15rem);
            color: #E5E0D5;
            max-width: 820px;
            margin: 0 auto 36px;
            font-weight: 400;
            text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        /* Stats Strip */
        .dev-stats-strip {
            display: inline-flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 50px;
            padding: 12px 32px;
            margin-bottom: 10px;
        }
        .dev-stat-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.9rem;
            color: #FFFFFF;
        }
        .dev-stat-item strong {
            color: #E2C068;
            font-size: 1.15rem;
            font-family: 'Cinzel', serif;
        }

        /* Controls & Filter Bar */
        .dev-controls-wrapper {
            position: sticky;
            top: 76px;
            z-index: 100;
            background: rgba(247, 245, 240, 0.96);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid var(--border-subtle);
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
            padding: 18px 0;
            transition: all 0.3s ease;
        }
        .dev-controls-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        /* Filter Tabs */
        .dev-tabs {
            display: flex;
            align-items: center;
            gap: 10px;
            overflow-x: auto;
            scrollbar-width: none;
            padding-bottom: 4px;
        }
        .dev-tabs::-webkit-scrollbar { display: none; }
        .dev-tab-btn {
            background: #FFFFFF;
            border: 1px solid var(--border-subtle);
            padding: 9px 20px;
            border-radius: 30px;
            font-size: 0.86rem;
            font-weight: 600;
            color: var(--text-secondary);
            cursor: pointer;
            white-space: nowrap;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.25s ease;
        }
        .dev-tab-btn:hover {
            border-color: var(--gold);
            color: var(--gold-dark);
        }
        .dev-tab-btn.active {
            background: linear-gradient(135deg, #1f1c16 0%, #111111 100%);
            border-color: #111111;
            color: #FFFFFF;
            box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }
        .dev-tab-btn .count-badge {
            background: rgba(184, 144, 42, 0.2);
            color: var(--gold);
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 700;
        }
        .dev-tab-btn.active .count-badge {
            background: var(--gold);
            color: #FFFFFF;
        }

        /* Search & Dropdown Bar */
        .dev-search-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            align-items: center;
            justify-content: space-between;
        }
        .dev-search-input-wrap {
            flex: 1 1 300px;
            position: relative;
        }
        .dev-search-input-wrap i {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--text-muted);
            font-size: 0.95rem;
        }
        .dev-search-input {
            width: 100%;
            padding: 12px 16px 12px 44px;
            background: #FFFFFF;
            border: 1px solid var(--border-subtle);
            border-radius: 12px;
            font-size: 0.9rem;
            font-family: inherit;
            color: var(--text-primary);
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .dev-search-input:focus {
            border-color: var(--gold);
            box-shadow: 0 0 0 3px rgba(184, 144, 42, 0.15);
        }
        .dev-filters-right {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .dev-select {
            padding: 11px 18px;
            background: #FFFFFF;
            border: 1px solid var(--border-subtle);
            border-radius: 12px;
            font-size: 0.86rem;
            font-weight: 600;
            color: var(--text-primary);
            font-family: inherit;
            outline: none;
            cursor: pointer;
            transition: border-color 0.2s ease;
        }
        .dev-select:focus { border-color: var(--gold); }

        /* Projects Grid */
        .dev-grid-section {
            max-width: 1400px;
            margin: 0 auto;
            padding: 40px 24px 100px;
        }
        .dev-grid-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 28px;
            padding-bottom: 16px;
            border-bottom: 1px solid var(--border-subtle);
        }
        .dev-grid-count {
            font-size: 1.05rem;
            color: var(--text-secondary);
            font-weight: 500;
        }
        .dev-grid-count strong {
            color: var(--text-primary);
            font-weight: 700;
        }

        .dev-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
            gap: 30px;
        }

        /* Project Card */
        .p-card {
            background: var(--bg-card);
            border-radius: var(--radius-lg);
            border: 1px solid var(--border-subtle);
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
            border-color: var(--border-gold);
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
            background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%);
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
            background: rgba(0, 0, 0, 0.65);
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
            color: var(--gold-light);
        }

        .p-card__body {
            padding: 24px 22px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
        .p-card__location {
            color: var(--gold);
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.5px;
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
            margin-bottom: 6px;
        }
        .p-card__title a {
            color: var(--text-primary);
            text-decoration: none;
            transition: color 0.2s ease;
        }
        .p-card__title a:hover {
            color: var(--gold);
        }
        .p-card__type-beds {
            font-size: 0.84rem;
            color: var(--text-secondary);
            display: block;
            margin-bottom: 14px;
        }
        .p-card__desc {
            font-size: 0.86rem;
            color: var(--text-secondary);
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
            border-top: 1px solid var(--border-subtle);
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
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: var(--text-muted);
            font-weight: 600;
        }
        .p-card__price-val {
            font-size: 1.15rem;
            font-weight: 800;
            color: var(--gold-dark);
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
            transform: scale(1.05);
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
            background: var(--gold);
            color: #FFFFFF;
            transform: translateX(2px);
        }

        /* Empty State */
        .dev-empty-state {
            grid-column: 1 / -1;
            text-align: center;
            padding: 80px 20px;
            background: #FFFFFF;
            border-radius: var(--radius-lg);
            border: 1px dashed var(--border-subtle);
            display: none;
        }
        .dev-empty-state i {
            font-size: 3rem;
            color: var(--gold);
            margin-bottom: 16px;
        }
        .dev-empty-state h3 {
            font-family: 'Cinzel', serif;
            font-size: 1.4rem;
            margin-bottom: 8px;
        }

        /* Navbar floating styles */
        .navigationMobile {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            z-index: 9999 !important;
            background: rgba(255, 255, 255, 0.94) !important;
            backdrop-filter: blur(20px) !important;
            border-bottom: 1px solid rgba(232, 228, 220, 0.9) !important;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06) !important;
            padding: 0 2.5rem !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            height: 76px !important;
        }
        .headerNavLinks .headerNavLink a {
            color: #1C1A16 !important;
            font-weight: 500 !important;
            font-size: 0.92rem !important;
            letter-spacing: 0.3px !important;
            transition: color 0.2s !important;
        }
        .headerNavLinks .headerNavLink a:hover {
            color: var(--gold) !important;
        }
        .headerNavLinks .chevron {
            stroke: #1C1A16 !important;
            fill: #1C1A16 !important;
        }

        @media (max-width: 1024px) {
            .navigationMobile__left-hamburger { display: flex !important; }
            .navigationMobile__right { display: none !important; }
            .navigationMobile__left-mobileLogo { display: flex !important; align-items: center !important; }
            .navigationMobile__left-desktopLogo { display: none !important; }
            .navigationMobile { padding: 0 1.25rem !important; }
            .dev-controls-wrapper { top: 76px; }
            .dev-grid { grid-template-columns: 1fr; }
        }
    </style>
    <script src="/build/assets/core-BJlXrooN.js" defer></script>
</head>
<body>
    ${navbarHtml}

    <main>
        <!-- Hero Section with Architectural Walkthrough Video Background -->
        <section class="dev-hero">
            <div class="dev-hero__video-wrap">
                <video class="dev-hero__video" autoplay muted loop playsinline poster="/images/DohaSkyline.jpg">
                    <source src="/videos/developments-hero.mp4" type="video/mp4">
                </video>
                <div class="dev-hero__overlay"></div>
            </div>

            <div class="dev-hero__content">
                <div class="dev-hero__badge">
                    <i class="fa-solid fa-crown"></i> Prime View Curated Portfolio
                </div>
                <h1 class="dev-hero__title">24 Flagship Luxury Developments</h1>
                <p class="dev-hero__subtitle">Explore Qatar's most iconic architectural achievements, beachfront estates, and high-yield investment towers across Lusail City, The Pearl Island, Qetaifan Island, and Doha.</p>
                
                <div class="dev-stats-strip">
                    <div class="dev-stat-item">
                        <i class="fa-solid fa-gem"></i>
                        <span><strong>24</strong> Flagship Developments</span>
                    </div>
                    <div class="dev-stat-item">
                        <i class="fa-solid fa-map-location-dot"></i>
                        <span><strong>4</strong> Premier Districts</span>
                    </div>
                    <div class="dev-stat-item">
                        <i class="fa-solid fa-passport"></i>
                        <span><strong>100%</strong> Freehold & Expat Residency</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sticky Filter & Search Bar -->
        <section class="dev-controls-wrapper">
            <div class="dev-controls-container">
                <!-- Category Tabs -->
                <div class="dev-tabs" role="tablist">
                    <button class="dev-tab-btn active" data-category="all" role="tab">
                        <i class="fa-solid fa-layer-group"></i> All Projects <span class="count-badge">24</span>
                    </button>
                    <button class="dev-tab-btn" data-category="waterfront" role="tab">
                        <i class="fa-solid fa-water"></i> Waterfront Estates <span class="count-badge">6</span>
                    </button>
                    <button class="dev-tab-btn" data-category="lusail" role="tab">
                        <i class="fa-solid fa-city"></i> Lusail Heights <span class="count-badge">6</span>
                    </button>
                    <button class="dev-tab-btn" data-category="pearl" role="tab">
                        <i class="fa-solid fa-gem"></i> The Pearl Island <span class="count-badge">6</span>
                    </button>
                    <button class="dev-tab-btn" data-category="villas" role="tab">
                        <i class="fa-solid fa-tree-city"></i> Villa Estates & Towers <span class="count-badge">6</span>
                    </button>
                </div>

                <!-- Search & Filters -->
                <div class="dev-search-bar">
                    <div class="dev-search-input-wrap">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" id="devSearchInput" class="dev-search-input" placeholder="Search by development name, district (e.g. Lusail, Pearl, Qetaifan), or villa type..." />
                    </div>

                    <div class="dev-filters-right">
                        <select id="statusFilter" class="dev-select" aria-label="Filter by project status">
                            <option value="all">All Project Statuses</option>
                            <option value="off-plan">Off-Plan Developments</option>
                            <option value="ready">Ready to Move In</option>
                        </select>

                        <select id="priceSort" class="dev-select" aria-label="Sort developments by price">
                            <option value="featured">Featured Order</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>

        <!-- 24 Projects Grid -->
        <section class="dev-grid-section">
            <div class="dev-grid-header">
                <div class="dev-grid-count">
                    Showing <strong id="visibleCount">24</strong> of 24 Flagship Projects
                </div>
                <div style="font-size: 0.85rem; color: var(--gold-dark); font-weight: 600;">
                    <i class="fa-solid fa-shield-halved"></i> Verified Qatar Ministry of Justice Portfolio
                </div>
            </div>

            <div class="dev-grid" id="devGridContainer">
                ${projectCardsHtml}

                <div class="dev-empty-state" id="emptyState">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <h3>No Matching Developments Found</h3>
                    <p style="color: var(--text-muted); margin-bottom: 20px;">Try adjusting your search terms, category filters, or status selection.</p>
                    <button class="dev-tab-btn active" onclick="resetFilters()">Reset All Filters</button>
                </div>
            </div>
        </section>
    </main>

    ${unifiedEnglishFooter}

    <script>
        // Interactive Client-side Filtering & Instant Search
        const searchInput = document.getElementById('devSearchInput');
        const statusFilter = document.getElementById('statusFilter');
        const priceSort = document.getElementById('priceSort');
        const tabBtns = document.querySelectorAll('.dev-tab-btn');
        const gridContainer = document.getElementById('devGridContainer');
        const cards = Array.from(document.querySelectorAll('.p-card'));
        const visibleCountEl = document.getElementById('visibleCount');
        const emptyStateEl = document.getElementById('emptyState');

        let activeCategory = 'all';

        // Tab click
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeCategory = btn.getAttribute('data-category');
                filterProjects();
            });
        });

        // Search input
        searchInput.addEventListener('input', filterProjects);
        statusFilter.addEventListener('change', filterProjects);
        priceSort.addEventListener('change', filterProjects);

        function filterProjects() {
            const query = searchInput.value.toLowerCase().trim();
            const status = statusFilter.value;
            const sort = priceSort.value;

            let visibleCards = [];

            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                const cardStatus = card.getAttribute('data-status');
                const cardDistrict = card.getAttribute('data-district');
                const cardCity = card.getAttribute('data-city');
                const cardText = card.textContent.toLowerCase();

                const matchesCat = (activeCategory === 'all' || cardCategory === activeCategory);
                const matchesStatus = (status === 'all' || cardStatus === status);
                const matchesQuery = (!query || cardText.includes(query) || cardDistrict.includes(query) || cardCity.includes(query));

                if (matchesCat && matchesStatus && matchesQuery) {
                    card.style.display = 'flex';
                    visibleCards.push(card);
                } else {
                    card.style.display = 'none';
                }
            });

            // Sorting
            if (sort === 'price-asc') {
                visibleCards.sort((a, b) => Number(a.getAttribute('data-price')) - Number(b.getAttribute('data-price')));
                visibleCards.forEach(c => gridContainer.appendChild(c));
            } else if (sort === 'price-desc') {
                visibleCards.sort((a, b) => Number(b.getAttribute('data-price')) - Number(a.getAttribute('data-price')));
                visibleCards.forEach(c => gridContainer.appendChild(c));
            }

            visibleCountEl.textContent = visibleCards.length;

            if (visibleCards.length === 0) {
                emptyStateEl.style.display = 'block';
            } else {
                emptyStateEl.style.display = 'none';
            }
        }

        function resetFilters() {
            searchInput.value = '';
            statusFilter.value = 'all';
            priceSort.value = 'featured';
            activeCategory = 'all';
            tabBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-category') === 'all'));
            filterProjects();
        }
    </script>
</body>
</html>`;

// Write to both en/developments.html and developments.html
fs.writeFileSync(path.join(publicDir, 'en/developments.html'), fullDevelopmentsPageHtml, 'utf8');
fs.writeFileSync(path.join(publicDir, 'developments.html'), fullDevelopmentsPageHtml, 'utf8');

console.log('🎉 SUCCESSFULLY GENERATED COMPLETE 24 LUXURY DEVELOPMENTS SHOWCASE PAGE AT /en/developments.html & /developments.html!');
