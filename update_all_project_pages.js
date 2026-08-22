const fs = require('fs');
const path = require('path');

const devDir = path.join(__dirname, 'src/www.fgrealty.qa/en/development');

// 24 Flagship Projects Metadata
const projects = [
  // 1. Waterfront Estates
  {
    slug: 'skala-villas',
    file: 'skala-villas.html',
    name: 'Skala Villas & Waterfront Luxury',
    shortName: 'Skala Villas',
    district: 'Qetaifan Island North',
    city: 'Lusail',
    type: 'Waterfront Signature Villas',
    beds: '4 - 5 Bedroom Villas',
    price: '3.8M',
    priceFull: 'QAR 3,800,000',
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
    price: '4.25M',
    priceFull: 'QAR 4,250,000',
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
    price: '1.46M',
    priceFull: 'QAR 1,460,000',
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
    price: '2.0M',
    priceFull: 'QAR 2,000,000',
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
    price: '2.0M',
    priceFull: 'QAR 2,000,000',
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
    price: '1.0M',
    priceFull: 'QAR 1,000,000',
    handover: 'Q4 2027',
    dp: '2% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/skala-villas/sk-feature-6.jpg',
    desc: 'Sleek waterfront tower on Lusail Waterfront offering studios and 1-bedrooms with rooftop pool.'
  },

  // 2. Lusail Heights
  {
    slug: 'city-avenue',
    file: 'city-avenue.html',
    name: 'City Avenue Residences',
    shortName: 'City Avenue',
    district: 'Al Erkyah City',
    city: 'Lusail',
    type: 'Urban Luxury Apartments',
    beds: '1 - 3 Bedrooms',
    price: '1.2M',
    priceFull: 'QAR 1,200,000',
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
    price: '1.65M',
    priceFull: 'QAR 1,650,000',
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
    price: '825K',
    priceFull: 'QAR 825,000',
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
    price: '1.0M',
    priceFull: 'QAR 1,000,000',
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
    price: '1.1M',
    priceFull: 'QAR 1,100,000',
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
    price: '1.54M',
    priceFull: 'QAR 1,540,000',
    handover: 'Ready Move-In',
    dp: '35% Down Payment',
    badge: 'Ready',
    heroImg: '/images/developments/milos/milos_real_12.jpg',
    desc: 'Ready-to-move-in luxury residences in Fox Hills with 5-year post-handover payment plan.'
  },

  // 3. The Pearl Island
  {
    slug: 'milos',
    file: 'milos.html',
    name: 'Milos Residence & Coastal Living',
    shortName: 'Milos Residence',
    district: 'Legtaifiya / Pearl Gateway',
    city: 'Doha',
    type: 'Coastal High-Rise Tower',
    beds: '1 - 3 Bedrooms',
    price: '1.85M',
    priceFull: 'QAR 1,850,000',
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
    price: '1.77M',
    priceFull: 'QAR 1,770,000',
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
    price: '2.11M',
    priceFull: 'QAR 2,110,000',
    handover: 'Q4 2026',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_3.jpg',
    desc: 'Boutique luxury tower in The Pearl with floor-to-ceiling windows and sea vistas.'
  },
  {
    slug: 'coralia-villas',
    file: 'coralia-villas.html',
    name: 'Coralia Compound Villas',
    shortName: 'Coralia Villas',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    type: 'Exclusive Gated Villas',
    beds: '4 - 5 Bedrooms',
    price: '5.5M',
    priceFull: 'QAR 5,500,000',
    handover: 'Immediate / Ready',
    dp: 'Ready Move-In',
    badge: 'Ready',
    heroImg: '/images/developments/flora-villas/img_1.jpg',
    desc: 'Gated compound villas located within The Pearl-Qatar with private pools and landscaped gardens.'
  },
  {
    slug: 'corallia',
    file: 'corallia.html',
    name: 'Corallia Lease to Own',
    shortName: 'Corallia Lease-to-Own',
    district: 'The Pearl-Qatar',
    city: 'The Pearl',
    type: 'Lease to Own Residences',
    beds: '1 - 3 Bedrooms',
    price: '1.95M',
    priceFull: 'QAR 1,950,000',
    handover: 'Immediate Handover',
    dp: 'Flexible Lease-to-Own',
    badge: 'Ready',
    heroImg: '/images/developments/milos/milos_real_8.jpg',
    desc: 'Exclusive lease-to-own opportunity on The Pearl Island.'
  },
  {
    slug: 'marbella',
    file: 'marbella.html',
    name: 'Marbella Residence',
    shortName: 'Marbella Residence',
    district: 'Entertainment City',
    city: 'Lusail',
    type: 'Resort-Style Living',
    beds: '1 - 3 Bedrooms',
    price: '1.35M',
    priceFull: 'QAR 1,350,000',
    handover: 'Q4 2027',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/city-avenue/city_feature_1.jpg',
    desc: 'Resort-style luxury living in Lusail Entertainment City.'
  },

  // 4. Villa Estates & Towers
  {
    slug: 'flora-villas',
    file: 'flora-villas.html',
    name: 'Flora Standalone Villas',
    shortName: 'Flora Villas',
    district: 'Huzoom District',
    city: 'North Lusail',
    type: 'Private Sanctuary Villas',
    beds: '5 BR + Private Pool',
    price: '4.1M',
    priceFull: 'QAR 4,100,000',
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
    price: '4.29M',
    priceFull: 'QAR 4,290,000',
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
    price: '4.08M',
    priceFull: 'QAR 4,080,000',
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
    price: '1.458M',
    priceFull: 'QAR 1,458,000',
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
    price: '1.52M',
    priceFull: 'QAR 1,520,000',
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
    price: '1.59M',
    priceFull: 'QAR 1,590,000',
    handover: 'March 2028',
    dp: '10% Down Payment',
    badge: 'Off-Plan',
    heroImg: '/images/developments/milos/milos_real_18.jpg',
    desc: 'Mazaya Real Estate development in Seef Lusail featuring fully furnished smart units.'
  }
];

// Clean Luxury Project Top Bar (replaces the broken header)
const cleanProjectTopBar = `
        <!-- Sleek Prime View Luxury Top Bar -->
        <header class="project-top-nav" style="background: #ffffff; border-bottom: 1px solid rgba(232, 228, 220, 0.9); position: sticky; top: 0; z-index: 1000; box-shadow: 0 4px 20px rgba(0,0,0,0.04); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);">
            <div style="max-width: 1320px; margin: 0 auto; padding: 12px 28px; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box;">
                <a href="/" class="brand-logo-badge" aria-label="Prime View Real Estate Home" style="display: inline-flex; align-items: center; background: #0e0d11; padding: 6px 16px; border-radius: 10px; border: 1px solid rgba(201, 168, 76, 0.45); box-shadow: 0 4px 14px rgba(0, 0, 0, 0.14); text-decoration: none;">
                    <img src="/images/prime-view-logo.png" alt="Prime View Real Estate" style="height: 38px; width: auto; max-width: 220px; display: block;" />
                </a>
                <div style="display: flex; align-items: center; gap: 16px;">
                    <a href="/en/developments.html" style="color: #111; font-weight: 600; font-size: 0.86rem; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 8px; background: #f8f6f0; border: 1px solid #e8e4dc; transition: all 0.2s;" onmouseover="this.style.borderColor='#c9a84c'; this.style.color='#c9a84c';" onmouseout="this.style.borderColor='#e8e4dc'; this.style.color='#111';">
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                        All 24 Projects
                    </a>
                    <a href="/en/contact.html" style="background: linear-gradient(135deg, #c5a85c 0%, #a38438 100%); color: #ffffff; padding: 8px 18px; border-radius: 8px; font-size: 0.84rem; font-weight: 700; text-decoration: none; box-shadow: 0 4px 12px rgba(184, 156, 76, 0.28); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform='translateY(0)'">
                        Inquire Now
                    </a>
                </div>
            </div>
        </header>
`;

// Unified 5-column 24-projects footer
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

// Template base from milos.html
const milosTemplate = fs.readFileSync(path.join(devDir, 'milos.html'), 'utf8');

// Build each of the 24 project detail pages
projects.forEach((proj, idx) => {
  const filePath = path.join(devDir, proj.file);
  let html = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : milosTemplate;

  // 1. Remove all stray >> in head
  html = html.replace(/">>/g, '">');
  html = html.replace(/\/>>/g, '/>');

  // 2. Remove broken top header / listing page menu
  // Match <header class="hero__content-top">...</header>
  html = html.replace(/<header class="hero__content-top"[\s\S]*?<\/header>/i, '');
  // Match <header class="project-top-nav"[\s\S]*?<\/header>/i if already present
  html = html.replace(/<header class="project-top-nav"[\s\S]*?<\/header>/i, '');
  // Match <section class="listingPageMenuWrapper"[\s\S]*?<\/section>/i
  html = html.replace(/<section class="listingPageMenuWrapper"[\s\S]*?<\/section>/i, '');

  // 3. Inject clean project top bar right after <body...> and <div class="siteLayout"> or start of main
  if (html.includes('<div class="siteLayout">')) {
    html = html.replace('<div class="siteLayout">', `<div class="siteLayout">\n${cleanProjectTopBar}`);
  } else if (html.includes('<body')) {
    html = html.replace(/(<body[^>]*>)/i, `$1\n${cleanProjectTopBar}`);
  }

  // 4. Update Title and Meta Tags
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${proj.name} | ${proj.district} ${proj.city} | Prime View Real Estate Qatar</title>`);
  html = html.replace(/<meta name="description" content="[^"]*"/i, `<meta name="description" content="${proj.desc} Contact Prime View Real Estate Qatar for private viewings and payment plans."`);
  html = html.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="/en/development/${proj.file}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/i, `<meta property="og:title" content="${proj.name} | Prime View Real Estate Qatar"`);
  html = html.replace(/<meta property="og:description" content="[^"]*"/i, `<meta property="og:description" content="${proj.desc}"`);
  html = html.replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="/en/development/${proj.slug}"`);
  html = html.replace(/<meta property="og:image" content="[^"]*"/i, `<meta property="og:image" content="${proj.heroImg}"`);

  // 5. Update Gallery Hero Image & Title
  html = html.replace(/style="background-image:\s*url\([^)]+\);"/i, `style="background-image: url('${proj.heroImg}');"`);
  html = html.replace(/<h1 class="heading-22-tablet-28 text-white">[^<]*<\/h1>/i, `<h1 class="heading-22-tablet-28 text-white">${proj.name}</h1>`);
  html = html.replace(/<a href="[^"]*" class="pill pill--white glightbox"/i, `<a href="${proj.heroImg}" class="pill pill--white glightbox"`);

  // 6. Update Breadcrumbs (last item)
  html = html.replace(/(<ul class="breadcrumbs">[\s\S]*?<li class="separator">\/<\/li>\s*<li><a href="#">)[^<]*(<\/a><\/li>)/i, `$1${proj.shortName}$2`);

  // 7. Update Summary Heading & Badge
  html = html.replace(/<span class="developmentDetailsTop__summary-top-heading heading-xl text-caps text-dark-grey-300">[^<]*<\/span>/i, `<span class="developmentDetailsTop__summary-top-heading heading-xl text-caps text-dark-grey-300">${proj.name}</span>`);
  
  if (proj.badge === 'Ready') {
    html = html.replace(/<div class="offPlanBadge">[\s\S]*?<\/div>/i, `<div class="offPlanBadge" style="background:#10b981;color:#fff;"><span>Ready to Move In</span></div>`);
    html = html.replace(/<span class="text-xs text-grey-950">[^<]*<\/span>/i, `<span class="text-xs text-grey-950">Immediate Handover Available</span>`);
  } else {
    html = html.replace(/<div class="offPlanBadge">[\s\S]*?<\/div>/i, `<div class="offPlanBadge" style="background:#b89c4c;color:#fff;"><span>Off-Plan Development</span></div>`);
    html = html.replace(/<span class="text-xs text-grey-950">[^<]*<\/span>/i, `<span class="text-xs text-grey-950">Handover: ${proj.handover}</span>`);
  }

  // 8. Update Price
  html = html.replace(/<span class="paymentBox__item-value paymentBox__item-value--large">\s*[^<]*<span class="paymentBox__currency">QAR<\/span>\s*<\/span>/i, `<span class="paymentBox__item-value paymentBox__item-value--large">${proj.price} <span class="paymentBox__currency">QAR</span></span>`);

  // 9. Update WhatsApp Enquiry Link
  const encodedWhatsapp = encodeURIComponent(`Hello Prime View Real Estate, I am interested in ${proj.name} in ${proj.district}, ${proj.city}.`);
  html = html.replace(/href="https:\/\/wa\.me\/[^"]*"/i, `href="https://wa.me/97430451451?text=${encodedWhatsapp}"`);

  // 10. Update Location Table
  html = html.replace(/(<div class="detailsTable__section-row-label">Location<\/div>\s*<div class="detailsTable__section-row-value">)[^<]*(<\/div>)/i, `$1${proj.district}, ${proj.city}$2`);

  // 11. Update Footer to Unified 24-projects footer
  const footerIdx = html.indexOf('<div class="footerWrapper"');
  if (footerIdx !== -1) {
    const endBodyIdx = html.indexOf('</body>', footerIdx);
    if (endBodyIdx !== -1) {
      html = html.substring(0, footerIdx) + unifiedEnglishFooter + '\n' + html.substring(endBodyIdx);
    }
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✓ Processed & Cleaned [${idx + 1}/24]: ${proj.file}`);
});

// Also process any other extra development pages
const otherDevFiles = fs.readdirSync(devDir).filter(f => f.endsWith('.html') && !projects.find(p => p.file === f));
otherDevFiles.forEach(file => {
  const filePath = path.join(devDir, file);
  let html = fs.readFileSync(filePath, 'utf8');
  html = html.replace(/">>/g, '">').replace(/\/>>/g, '/>');
  html = html.replace(/<header class="hero__content-top"[\s\S]*?<\/header>/i, '');
  html = html.replace(/<section class="listingPageMenuWrapper"[\s\S]*?<\/section>/i, '');
  
  if (!html.includes('class="project-top-nav"')) {
    if (html.includes('<div class="siteLayout">')) {
      html = html.replace('<div class="siteLayout">', `<div class="siteLayout">\n${cleanProjectTopBar}`);
    } else if (html.includes('<body')) {
      html = html.replace(/(<body[^>]*>)/i, `$1\n${cleanProjectTopBar}`);
    }
  }

  const footerIdx = html.indexOf('<div class="footerWrapper"');
  if (footerIdx !== -1) {
    const endBodyIdx = html.indexOf('</body>', footerIdx);
    if (endBodyIdx !== -1) {
      html = html.substring(0, footerIdx) + unifiedEnglishFooter + '\n' + html.substring(endBodyIdx);
    }
  }
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✓ Processed extra dev page: ${file}`);
});

console.log('🎉 ALL PROJECT PAGES CLEANED: Glitched header removed, clean luxury top bar applied, metadata aligned, and 24-projects footer verified!');
