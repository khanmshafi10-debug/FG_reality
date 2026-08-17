const fs = require('fs');
const path = require('path');

const devDir = path.join(__dirname, 'src/www.fgrealty.qa/en/development');

// Read the-seef.html to extract shared components
const seefFile = fs.readFileSync(path.join(devDir, 'the-seef.html'), 'utf8');

// 1. Extract SVG sprite block
const svgSpriteMatch = seefFile.match(/<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" style="display:\s*none;">[\s\S]*?<\/svg>/);
const svgSprite = svgSpriteMatch ? svgSpriteMatch[0] : '';

// 2. Extract Header block
const headerMatch = seefFile.match(/<header class="header"[\s\S]*?<\/header>/);
const headerHtml = headerMatch ? headerMatch[0] : '';

// 3. Extract Navigation Mobile block
const navMobileMatch = seefFile.match(/<nav class="navigationMobile"[\s\S]*?<\/nav>/);
const navMobileHtml = navMobileMatch ? navMobileMatch[0] : '';

// 4. Extract Search Box block
const searchBoxHtml = `
        <section class="listingSearchboxWrapper">
            <div class="listingSearchboxWrapper__content">
                <template id="backToSearchTpl">
                    <a class="fgBtn fgBtn--outline extraSearchCta">
                        <span class="fgBtn__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><use href="#svgIcon-chevron-left"/></svg>
                        </span>
                        <span>Back to search</span>
                    </a>
                </template>
                <span id="backToSearchBtn" style="display:none"></span>
                <search-box-container variant="searchVariant">
                    <div class="searchBoxWrapper">
                        <article class="searchBox searchBox--searchVariant">
                            <button class="searchBoxDropdown" type="button">
                                <span class="searchBoxDropdown__text">Rent</span>
                                <span class="searchBoxDropdown__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><use href="#svgIcon-chevron-down-menu"/></svg>
                                </span>
                            </button>
                            <input type="text" class="searchBox__input" placeholder="Search properties" readonly />
                            <button class="searchBox__searchBtn" type="button" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 21" fill="none"><use href="#svgIcon-search"/></svg>
                            </button>
                        </article>
                    </div>
                </search-box-container>
                <button class="fgBtn fgBtn--outline extraSearchCta">
                    <span class="fgBtn__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><use href="#svgIcon-share-icon"/></svg>
                    </span>
                    <span>Share</span>
                </button>
                <button class="fgBtn fgBtn--outline extraSearchCta">
                    <span class="fgBtn__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><use href="#svgIcon-bookmark-icon"/></svg>
                    </span>
                    <span>Bookmark</span>
                </button>
            </div>
        </section>
`;

// 5. Extract Popular Real Estate Links + Agent CTA Banner + Funding Banner from the-seef.html
const popularLinksStart = seefFile.indexOf('<section class="listingDetailsLinks">');
const popularLinksEnd = seefFile.indexOf('<div class="inquiryModal"');
const popularLinksAndCtasHtml = seefFile.substring(popularLinksStart, popularLinksEnd);

// 6. Extract Footer block
const footerIndex = seefFile.indexOf('<div class="footerWrapper">');
const footerHtml = seefFile.substring(footerIndex);

// Define property data for 4 projects
const projects = {
    'skala-villas': {
        title: 'Skala Villas',
        pageTitle: 'Skala Villas Qetaifan Island | Luxury Beachfront Villas Qatar | FGREALTY',
        metaDesc: 'Exclusive beachfront villas for sale in Skala Villas, Qetaifan Island Lusail. Private pool, beach access, and sea views. Contact FGREALTY Qatar.',
        slug: 'skala-villas',
        location: 'Qetaifan Island, Lusail',
        developer: 'Les Vagues / Qetaifan Projects',
        propType: 'Beachfront Villas & Mansions',
        bedrooms: '4 - 6 Bedrooms',
        status: 'Off-Plan',
        handover: 'Handover from December 2026',
        price: '3.5M',
        heroImage: '/images/developments/skala-villas/hero.jpg',
        description: 'Skala Villas offers exclusive beachfront living on Qetaifan Island North, Lusail. These luxury villas feature private pools, direct beach access, floor-to-ceiling glass, and panoramic views of the Arabian Gulf. Situated near the Qetaifan Waterpark and Lusail Marina, Skala Villas provides an unparalleled resort-style lifestyle in Qatar.',
        paymentPlanText: '20% Down Payment on Booking, 40% during Construction, 40% on Handover. Flexible 6-year payment plans available.',
        whatsappText: 'Hello%20FGREALTY%2C%20I%20am%20interested%20in%20Skala%20Villas%20Qetaifan%20Island',
        amenities: [
            { icon: 'Shared-Swimming-Pool', label: 'Private Pool' },
            { icon: 'Concierge-Assistance', label: 'Beach Access' },
            { icon: 'Gymnasium', label: 'Private Fitness Suite' },
            { icon: 'Security-Access', label: '24/7 Gated Security' },
            { icon: 'Central-Air-conditioning', label: 'Central AC' },
            { icon: 'Basement-Parking', label: 'Covered Garage' },
            { icon: 'Open-Kitchen', label: 'Designer Kitchen' },
            { icon: 'Mall', label: 'Marina Proximity' }
        ],
        exploreCards: [
            { title: 'City Avenue', slug: 'city-avenue', loc: 'Al Erkyah City, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '800K QAR', img: '/images/developments/city-avenue/hero.jpg' },
            { title: 'Milos', slug: 'milos', loc: 'Legtaifiya, Doha', badge: 'Ready', badgeClass: 'ready', price: '950K QAR', img: '/images/developments/milos/hero.jpg' },
            { title: 'Rivan', slug: 'rivan', loc: 'Al Erkyah City, Lusail', badge: 'Ready', badgeClass: 'ready', price: '700K QAR', img: '/images/developments/rivan/hero.jpg' }
        ],
        units: [
            { title: 'SUPER DUPLEX with EXCELLENT Payment Plan!', loc: 'Seef Lusail District, Lusail', price: '5,036,423', img: '/storage/2301/conversions/1717423934_1-thumb.avif', photos: '18', tag: 'Featured', beds: '3+ Beds', baths: '4.5 Baths', area: '310 m²' },
            { title: 'Premium 2BR with Breathtaking Sea Views & 6-Year Plan', loc: 'Seef Lusail District, Lusail', price: '2,662,487', img: '/storage/2495/conversions/1713874537_img-4098-thumb.avif', photos: '14', tag: 'Off-Plan', beds: '2 Beds', baths: '2.5 Baths', area: '173 m²' },
            { title: 'MOVE IN AT 35% DOWNPAYMENT | SPACIOUS 1 BEDROOM', loc: 'Al Erkyah City, Lusail', price: '1,728,680', img: '/storage/4531/conversions/1716988252_1-thumb.avif', photos: '8', tag: 'Ready', beds: '1 Bed', baths: '1.5 Baths', area: '131 m²' },
            { title: 'OWN YOUR VILLA WITH ONLY 20% DOWN PAYMENT', loc: 'Qetaifan Island, Lusail', price: '3,575,000', img: '/images/developments/skala-villas/hero.jpg', photos: '12', tag: 'Luxury Villa', beds: '4+ Beds', baths: '5.5 Baths', area: '450 m²' },
            { title: 'MOVE IN AT 35% | 4 YEARS PAYMENT-PLAN', loc: 'Seef Lusail District, Lusail', price: '1,922,000', img: '/storage/5558/conversions/1727943330_1717681285-fgr03030-thumb.avif', photos: '6', tag: 'Hot Deal', beds: '1 Bed', baths: '1.5 Baths', area: '125 m²' },
            { title: '20% DOWNPAYMENT READY-TO-MOVE | 3BR + MAID', loc: 'Legtaifiya, Doha', price: '3,250,000', img: '/images/developments/milos/hero.jpg', photos: '9', tag: 'Ready', beds: '3 Beds', baths: '3.5 Baths', area: '224 m²' }
        ]
    },
    'city-avenue': {
        title: 'City Avenue',
        pageTitle: 'City Avenue Al Erkyah City | Modern Luxury Apartments Lusail | FGREALTY',
        metaDesc: 'Modern apartments for sale in City Avenue, Al Erkyah City Lusail. Flexible payment plans, luxury amenities, and prime location. Contact FGREALTY Qatar.',
        slug: 'city-avenue',
        location: 'Al Erkyah City, Lusail',
        developer: 'Ariane Real Estate',
        propType: 'Mixed-Use & Hotel Apartments',
        bedrooms: '1 - 3 Bedrooms',
        status: 'Off-Plan',
        handover: 'Handover from June 2026',
        price: '800K',
        heroImage: '/images/developments/city-avenue/hero.jpg',
        description: 'City Avenue is an innovative mixed-use community in Al Erkyah City, Lusail, designed by Ariane Real Estate with a core focus on health, wellness, and integrated modern urban living. Featuring fully furnished hotel apartments managed by Iris Hospitality, City Avenue offers lush green spaces, rooftop pools, fitness centers, and ground-floor retail shops. Located minutes from Lusail Iconic Stadium, Crescent Park, and Place Vendôme Mall.',
        paymentPlanText: '10% Down Payment, 50% during construction, 40% on handover. Long-term 6-year payment plan with 0% interest.',
        whatsappText: 'Hello%20FGREALTY%2C%20I%20am%20interested%20in%20City%20Avenue%20Al%20Erkyah%20City',
        amenities: [
            { icon: 'Concierge-Assistance', label: 'Hotel Management' },
            { icon: 'Shared-Swimming-Pool', label: 'Shared Pool' },
            { icon: 'Gymnasium', label: 'Gym' },
            { icon: 'Mall', label: 'Retail Shops' },
            { icon: 'Central-Air-conditioning', label: 'Central AC' },
            { icon: 'Security-Access', label: 'Security' },
            { icon: 'Basement-Parking', label: 'Covered Parking' },
            { icon: 'Metro-Station', label: 'Metro Access' }
        ],
        exploreCards: [
            { title: 'Skala Villas', slug: 'skala-villas', loc: 'Qetaifan Island, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '3.5M QAR', img: '/images/developments/skala-villas/hero.jpg' },
            { title: 'Milos', slug: 'milos', loc: 'Legtaifiya, Doha', badge: 'Ready', badgeClass: 'ready', price: '950K QAR', img: '/images/developments/milos/hero.jpg' },
            { title: 'Rivan', slug: 'rivan', loc: 'Al Erkyah City, Lusail', badge: 'Ready', badgeClass: 'ready', price: '700K QAR', img: '/images/developments/rivan/hero.jpg' }
        ],
        units: [
            { title: 'SUPER DUPLEX with EXCELLENT Payment Plan!', loc: 'Seef Lusail District, Lusail', price: '5,036,423', img: '/storage/2301/conversions/1717423934_1-thumb.avif', photos: '18', tag: 'Featured', beds: '3+ Beds', baths: '4.5 Baths', area: '310 m²' },
            { title: 'Premium 2BR with Breathtaking Sea Views & 6-Year Plan', loc: 'Seef Lusail District, Lusail', price: '2,662,487', img: '/storage/2495/conversions/1713874537_img-4098-thumb.avif', photos: '14', tag: 'Off-Plan', beds: '2 Beds', baths: '2.5 Baths', area: '173 m²' },
            { title: 'MOVE IN AT 35% DOWNPAYMENT | SPACIOUS 1 BEDROOM', loc: 'Al Erkyah City, Lusail', price: '1,728,680', img: '/storage/4531/conversions/1716988252_1-thumb.avif', photos: '8', tag: 'Ready', beds: '1 Bed', baths: '1.5 Baths', area: '131 m²' },
            { title: 'OWN YOUR APARTMENT WITH ONLY 20% DOWN PAYMENT', loc: 'Seef Lusail District, Lusail', price: '3,575,000', img: '/images/developments/city-avenue/hero.jpg', photos: '12', tag: 'Hot Deal', beds: '3+ Beds', baths: '4.5 Baths', area: '230 m²' },
            { title: 'MOVE IN AT 35% | 4 YEARS PAYMENT-PLAN', loc: 'Seef Lusail District, Lusail', price: '1,922,000', img: '/storage/5558/conversions/1727943330_1717681285-fgr03030-thumb.avif', photos: '6', tag: 'Hot Deal', beds: '1 Bed', baths: '1.5 Baths', area: '125 m²' },
            { title: '20% DOWNPAYMENT READY-TO-MOVE | 3BR + MAID', loc: 'Legtaifiya, Doha', price: '3,250,000', img: '/images/developments/milos/hero.jpg', photos: '9', tag: 'Ready', beds: '3 Beds', baths: '3.5 Baths', area: '224 m²' }
        ]
    },
    'milos': {
        title: 'Milos',
        pageTitle: 'Milos Residence Legtaifiya | Luxury Apartments Doha Qatar | FGREALTY',
        metaDesc: 'Luxury apartments for sale in Milos Residence, Legtaifiya Doha. High-end finishes, scenic views, and strategic location. Contact FGREALTY Qatar.',
        slug: 'milos',
        location: 'Legtaifiya, Doha',
        developer: 'Milos Real Estate',
        propType: 'Luxury Residential Apartments',
        bedrooms: '1 - 3 Bedrooms',
        status: 'Ready to Move In',
        handover: 'Immediate Handover Available',
        price: '950K',
        heroImage: '/images/developments/milos/hero.jpg',
        description: 'Milos Residence is a boutique residential landmark in Legtaifiya (West Bay Lagoon area), offering elegant 1, 2, and 3-bedroom apartments with sophisticated finishes, high ceilings, and expansive private balconies. Perfectly located near Diplomats Area, Katara Cultural Village, and The Pearl Qatar.',
        paymentPlanText: 'Ready to Move In. 20% Down Payment upon contract signing, remaining balance structured across 4-year installment plan.',
        whatsappText: 'Hello%20FGREALTY%2C%20I%20am%20interested%20in%20Milos%20Residence%20Legtaifiya',
        amenities: [
            { icon: 'Shared-Swimming-Pool', label: 'Swimming Pool' },
            { icon: 'Gymnasium', label: 'Fitness Center' },
            { icon: 'Security-Access', label: '24/7 Security' },
            { icon: 'Basement-Parking', label: 'Covered Parking' },
            { icon: 'Concierge-Assistance', label: 'Concierge Service' },
            { icon: 'Central-Air-conditioning', label: 'Central AC' },
            { icon: 'Open-Kitchen', label: 'Fitted Kitchen' },
            { icon: 'Metro-Station', label: 'Katara Proximity' }
        ],
        exploreCards: [
            { title: 'Skala Villas', slug: 'skala-villas', loc: 'Qetaifan Island, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '3.5M QAR', img: '/images/developments/skala-villas/hero.jpg' },
            { title: 'City Avenue', slug: 'city-avenue', loc: 'Al Erkyah City, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '800K QAR', img: '/images/developments/city-avenue/hero.jpg' },
            { title: 'Rivan', slug: 'rivan', loc: 'Al Erkyah City, Lusail', badge: 'Ready', badgeClass: 'ready', price: '700K QAR', img: '/images/developments/rivan/hero.jpg' }
        ],
        units: [
            { title: 'SUPER DUPLEX with EXCELLENT Payment Plan!', loc: 'Seef Lusail District, Lusail', price: '5,036,423', img: '/storage/2301/conversions/1717423934_1-thumb.avif', photos: '18', tag: 'Featured', beds: '3+ Beds', baths: '4.5 Baths', area: '310 m²' },
            { title: 'Premium 2BR with Breathtaking Sea Views & 6-Year Plan', loc: 'Seef Lusail District, Lusail', price: '2,662,487', img: '/storage/2495/conversions/1713874537_img-4098-thumb.avif', photos: '14', tag: 'Off-Plan', beds: '2 Beds', baths: '2.5 Baths', area: '173 m²' },
            { title: 'MOVE IN AT 35% DOWNPAYMENT | SPACIOUS 1 BEDROOM', loc: 'Al Erkyah City, Lusail', price: '1,728,680', img: '/storage/4531/conversions/1716988252_1-thumb.avif', photos: '8', tag: 'Ready', beds: '1 Bed', baths: '1.5 Baths', area: '131 m²' },
            { title: 'OWN YOUR APARTMENT WITH ONLY 20% DOWN PAYMENT', loc: 'Seef Lusail District, Lusail', price: '3,575,000', img: '/images/developments/milos/hero.jpg', photos: '12', tag: 'Hot Deal', beds: '3+ Beds', baths: '4.5 Baths', area: '230 m²' },
            { title: 'MOVE IN AT 35% | 4 YEARS PAYMENT-PLAN', loc: 'Seef Lusail District, Lusail', price: '1,922,000', img: '/storage/5558/conversions/1727943330_1717681285-fgr03030-thumb.avif', photos: '6', tag: 'Hot Deal', beds: '1 Bed', baths: '1.5 Baths', area: '125 m²' },
            { title: '20% DOWNPAYMENT READY-TO-MOVE | 3BR + MAID', loc: 'Legtaifiya, Doha', price: '3,250,000', img: '/images/developments/milos/hero.jpg', photos: '9', tag: 'Ready', beds: '3 Beds', baths: '3.5 Baths', area: '224 m²' }
        ]
    },
    'rivan': {
        title: 'Rivan',
        pageTitle: 'Rivan Tower Al Erkyah | Premium Luxury Residences Lusail | FGREALTY',
        metaDesc: 'Luxury apartments for sale in Rivan Tower, Al Erkyah City Lusail. Ready to move in with easy installment payment options. Contact FGREALTY Qatar.',
        slug: 'rivan',
        location: 'Al Erkyah City, Lusail',
        developer: 'Ariane Real Estate',
        propType: 'Modern Residential Apartments',
        bedrooms: '1 - 3 Bedrooms',
        status: 'Ready to Move In',
        handover: 'Immediate Handover Available',
        price: '700K',
        heroImage: '/images/developments/rivan/hero.jpg',
        description: 'Rivan is a stylish contemporary residential development in the heart of Al Erkyah City, Lusail. Designed for modern living with open-plan layouts, premium kitchen appliances, floor-to-ceiling windows, and access to tranquil landscaped gardens, retail promenades, and world-class sports facilities.',
        paymentPlanText: 'Immediate Handover available. 15% Down Payment, 85% payable over 5 years in quarterly installments.',
        whatsappText: 'Hello%20FGREALTY%2C%20I%20am%20interested%20in%20Rivan%20Al%20Erkyah%20City',
        amenities: [
            { icon: 'Shared-Swimming-Pool', label: 'Infinity Pool' },
            { icon: 'Gymnasium', label: 'Fully Equipped Gym' },
            { icon: 'Security-Access', label: '24/7 Security' },
            { icon: 'Basement-Parking', label: 'Basement Parking' },
            { icon: 'Metro-Station', label: 'Metro Nearby' },
            { icon: 'Mall', label: 'Retail Promenade' },
            { icon: 'Central-Air-conditioning', label: 'Central AC' },
            { icon: 'Open-Kitchen', label: 'Modern Kitchen' }
        ],
        exploreCards: [
            { title: 'Skala Villas', slug: 'skala-villas', loc: 'Qetaifan Island, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '3.5M QAR', img: '/images/developments/skala-villas/hero.jpg' },
            { title: 'City Avenue', slug: 'city-avenue', loc: 'Al Erkyah City, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '800K QAR', img: '/images/developments/city-avenue/hero.jpg' },
            { title: 'Milos', slug: 'milos', loc: 'Legtaifiya, Doha', badge: 'Ready', badgeClass: 'ready', price: '950K QAR', img: '/images/developments/milos/hero.jpg' }
        ],
        units: [
            { title: 'SUPER DUPLEX with EXCELLENT Payment Plan!', loc: 'Seef Lusail District, Lusail', price: '5,036,423', img: '/storage/2301/conversions/1717423934_1-thumb.avif', photos: '18', tag: 'Featured', beds: '3+ Beds', baths: '4.5 Baths', area: '310 m²' },
            { title: 'Premium 2BR with Breathtaking Sea Views & 6-Year Plan', loc: 'Seef Lusail District, Lusail', price: '2,662,487', img: '/storage/2495/conversions/1713874537_img-4098-thumb.avif', photos: '14', tag: 'Off-Plan', beds: '2 Beds', baths: '2.5 Baths', area: '173 m²' },
            { title: 'MOVE IN AT 35% DOWNPAYMENT | SPACIOUS 1 BEDROOM', loc: 'Al Erkyah City, Lusail', price: '1,728,680', img: '/storage/4531/conversions/1716988252_1-thumb.avif', photos: '8', tag: 'Ready', beds: '1 Bed', baths: '1.5 Baths', area: '131 m²' },
            { title: 'OWN YOUR APARTMENT WITH ONLY 20% DOWN PAYMENT', loc: 'Seef Lusail District, Lusail', price: '3,575,000', img: '/images/developments/rivan/hero.jpg', photos: '12', tag: 'Hot Deal', beds: '3+ Beds', baths: '4.5 Baths', area: '230 m²' },
            { title: 'MOVE IN AT 35% | 4 YEARS PAYMENT-PLAN', loc: 'Seef Lusail District, Lusail', price: '1,922,000', img: '/storage/5558/conversions/1727943330_1717681285-fgr03030-thumb.avif', photos: '6', tag: 'Hot Deal', beds: '1 Bed', baths: '1.5 Baths', area: '125 m²' },
            { title: '20% DOWNPAYMENT READY-TO-MOVE | 3BR + MAID', loc: 'Legtaifiya, Doha', price: '3,250,000', img: '/images/developments/milos/hero.jpg', photos: '9', tag: 'Ready', beds: '3 Beds', baths: '3.5 Baths', area: '224 m²' }
        ]
    }
};

for (const [key, p] of Object.entries(projects)) {
    const amenitiesHtml = p.amenities.map(a => `
                    <div class="amenityIcon">
                        <span class="amenityIcon__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><use href="#svgIcon-amenities/${a.icon}"/></svg>
                        </span>
                        <span class="text-sm text-dark-grey-300 leading-none">${a.label}</span>
                    </div>`).join('\n');

    const exploreHtml = p.exploreCards.map(c => `
    <a href="/en/development/${c.slug}" class="explore-dev-card">
      <div class="explore-dev-card__image-wrap">
        <img src="${c.img}" alt="${c.title}" class="explore-dev-card__img" loading="lazy">
        <span class="explore-dev-card__badge explore-dev-card__badge--${c.badgeClass}">
          ${c.badge}
        </span>
      </div>
      <div class="explore-dev-card__body">
        <h3 class="explore-dev-card__title">${c.title}</h3>
        <div class="explore-dev-card__location">
          <span>📍</span> ${c.loc}
        </div>
        <div class="explore-dev-card__footer">
          <div>
            <div class="explore-dev-card__price-label">Starting from</div>
            <div class="explore-dev-card__price-val">${c.price}</div>
          </div>
          <span class="explore-dev-card__btn">Explore &rarr;</span>
        </div>
      </div>
    </a>`).join('\n');

    const unitsHtml = p.units.map(u => `
    <article class="modern-unit-card">
      <div class="modern-unit-card__img-wrap">
        <img src="${u.img}" alt="${u.title}" class="modern-unit-card__img" loading="lazy">
        <span class="modern-unit-card__tag">${u.tag}</span>
        <div class="modern-unit-card__photos-count">📷 ${u.photos} Photos</div>
      </div>
      <div class="modern-unit-card__content">
        <div class="modern-unit-card__price">${u.price} <span>QAR</span></div>
        <h3 class="modern-unit-card__title">${u.title}</h3>
        <div class="modern-unit-card__location">📍 ${u.loc}</div>
        <div class="modern-unit-card__specs">
          <div class="modern-unit-card__spec-item">🛏️ ${u.beds}</div>
          <div class="modern-unit-card__spec-item">🛁 ${u.baths}</div>
          <div class="modern-unit-card__spec-item">📐 ${u.area}</div>
        </div>
        <div class="modern-unit-card__actions">
          <a href="https://wa.me/97450049120?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(u.title)}" target="_blank" class="modern-unit-btn modern-unit-btn--whatsapp">
            <span>WhatsApp</span>
          </a>
          <a href="tel:+97430451451" class="modern-unit-btn modern-unit-btn--call">
            <span>Call Agent</span>
          </a>
        </div>
      </div>
    </article>`).join('\n');

    const fullHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p.pageTitle}</title>
    <meta name="description" content="${p.metaDesc}">
    <link rel="canonical" href="/en/development/${p.slug}">
    <link rel="alternate" hreflang="en" href="/en/development/${p.slug}">
    <meta name="robots" content="index, follow">
    <meta property="og:title" content="${p.pageTitle}">
    <meta property="og:description" content="${p.metaDesc}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="FGREALTY">
    <meta property="og:locale" content="en_US">
    <meta property="og:url" content="/en/development/${p.slug}">
    <meta property="og:image" content="${p.heroImage}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@fgrealty_qatar">
    <meta name="twitter:title" content="${p.pageTitle}">
    <meta name="twitter:description" content="${p.metaDesc}">
    <meta name="twitter:image" content="${p.heroImage}">

    <link rel="preload" href="/fonts/optima/optima.woff" as="font" type="font/woff" crossorigin>
    <link rel="preload" href="/fonts/noto-kufi-arabic/noto-kufi-arabic-latin.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#b89c4c" />

    <script>
        window.activeCurrency = "QAR";
        window.whatsappPhoneNumber = "97450049120";
    </script>
    <link rel="preload" as="style" href="/build/assets/core-BJlXrooN.css" /><link rel="stylesheet" href="/build/assets/core-BJlXrooN.css" />
    <link rel="preload" as="style" href="/build/assets/development-details-DRiS5KlY.css" /><link rel="stylesheet" href="/build/assets/development-details-DRiS5KlY.css" />
    <style>
      .explore-dev-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-top: 24px; }
      .explore-dev-card { border-radius: 16px; overflow: hidden; background: #fff; border: 1px solid #eaeaea; transition: all 0.3s ease; text-decoration: none; color: inherit; display: flex; flex-direction: column; }
      .explore-dev-card:hover { transform: translateY(-6px); box-shadow: 0 16px 32px rgba(0,0,0,0.08); border-color: #d4b97a; }
      .explore-dev-card__image-wrap { position: relative; height: 220px; overflow: hidden; }
      .explore-dev-card__img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
      .explore-dev-card:hover .explore-dev-card__img { transform: scale(1.06); }
      .explore-dev-card__badge { position: absolute; top: 12px; left: 12px; padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; z-index: 2; }
      .explore-dev-card__badge--offplan { background: #b89c4c; color: #fff; }
      .explore-dev-card__badge--ready { background: #10b981; color: #fff; }
      .explore-dev-card__body { padding: 20px; display: flex; flex-direction: column; flex-grow: 1; }
      .explore-dev-card__title { font-size: 1.25rem; font-weight: 700; margin: 0 0 6px 0; color: #111; font-family: optimaltstd-medium, sans-serif; }
      .explore-dev-card__location { font-size: 0.85rem; color: #666; display: flex; align-items: center; gap: 4px; margin-bottom: 16px; }
      .explore-dev-card__footer { margin-top: auto; display: flex; align-items: center; justify-content: space-between; padding-top: 12px; border-top: 1px solid #f0f0f0; }
      .explore-dev-card__price-label { font-size: 0.7rem; text-transform: uppercase; color: #888; letter-spacing: 0.5px; }
      .explore-dev-card__price-val { font-size: 1.1rem; font-weight: 700; color: #b89c4c; }
      .explore-dev-card__btn { font-size: 0.85rem; font-weight: 700; color: #111; }
      .explore-dev-card:hover .explore-dev-card__btn { color: #b89c4c; }

      .modern-listings-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-top: 24px; }
      .modern-unit-card { border-radius: 16px; background: #fff; border: 1px solid #e8e8e8; overflow: hidden; transition: all 0.3s ease; display: flex; flex-direction: column; }
      .modern-unit-card:hover { transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,0.08); border-color: #d4b97a; }
      .modern-unit-card__img-wrap { position: relative; height: 200px; overflow: hidden; }
      .modern-unit-card__img { width: 100%; height: 100%; object-fit: cover; }
      .modern-unit-card__tag { position: absolute; top: 12px; left: 12px; background: rgba(17,17,17,0.85); backdrop-filter: blur(4px); color: #d4b97a; padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700; border: 1px solid rgba(212,185,122,0.3); }
      .modern-unit-card__photos-count { position: absolute; bottom: 12px; right: 12px; background: rgba(0,0,0,0.65); color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; }
      .modern-unit-card__content { padding: 18px; display: flex; flex-direction: column; flex-grow: 1; }
      .modern-unit-card__price { font-size: 1.35rem; font-weight: 800; color: #111; font-family: optimaltstd-medium, sans-serif; }
      .modern-unit-card__price span { font-size: 0.85rem; color: #b89c4c; font-weight: 700; margin-left: 2px; }
      .modern-unit-card__title { font-size: 0.95rem; font-weight: 600; color: #333; margin: 6px 0; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      .modern-unit-card__location { font-size: 0.8rem; color: #777; margin-bottom: 12px; }
      .modern-unit-card__specs { display: flex; gap: 12px; padding: 10px 0; border-top: 1px solid #f0f0f0; border-bottom: 1px solid #f0f0f0; margin-bottom: 14px; font-size: 0.8rem; color: #555; }
      .modern-unit-card__actions { display: flex; gap: 8px; margin-top: auto; }
      .modern-unit-btn { flex: 1; text-align: center; padding: 10px 0; border-radius: 8px; font-size: 0.8rem; font-weight: 700; text-decoration: none; transition: background 0.2s ease; }
      .modern-unit-btn--whatsapp { background: #25d366; color: #fff; }
      .modern-unit-btn--whatsapp:hover { background: #1eb956; }
      .modern-unit-btn--call { background: #111; color: #fff; }
      .modern-unit-btn--call:hover { background: #333; }
      
      .premium-section-header { text-align: center; max-width: 600px; margin: 0 auto 30px auto; }
      .premium-section-header h2 { font-size: 1.75rem; font-weight: 700; color: #111; font-family: optimaltstd-medium, sans-serif; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
      .premium-section-header p { font-size: 0.95rem; color: #666; margin: 0; }
    </style>
</head>

<body class="font-primary text-grey-950 bg-white">
${svgSprite}

<div class="siteLayout">
${headerHtml}
${navMobileHtml}

    <main class="siteContent">
${searchBoxHtml}

        <section class="developmentDetailsTop">
            <div class="developmentDetailsTop__gallery">
                <div class="developmentDetailsTop__gallery-img" style="background-image: url('${p.heroImage}');"></div>
                <div class="developmentDetailsTop__gallery-topLayer">
                    <div class="developmentDetailsTop__gallery-topLayer-utilities">
                        <div></div>
                        <div>
                            <button type="button" class="glassCta" aria-label="Share development">
                                <span class="glassCta__icon" style="color: white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><use href="#svgIcon-share-icon"/></svg>
                                </span>
                            </button>
                            <button type="button" class="glassCta" aria-label="Bookmark development">
                                <span class="glassCta__icon" style="color: white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><use href="#svgIcon-bookmark-icon"/></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="developmentDetailsTop__gallery-topLayer-actions">
                        <div class="developmentDetailsTop__gallery-topLayer-actions-top">
                            <h1 class="heading-22-tablet-28 text-white">${p.title}</h1>
                        </div>
                        <div class="developmentDetailsTop__gallery-topLayer-actions-bottom">
                            <a href="${p.heroImage}" class="pill pill--white glightbox" data-gallery="dev-gallery">
                                <div class="pill__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><use href="#svgIcon-photo-gallery-icon"/></svg>
                                </div>
                                Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="developmentDetailsTop__breadcrumbs">
                <div class="breadcrumbsWrapper">
                    <ul class="breadcrumbs">
                        <li><a href="/">Home</a></li>
                        <li class="separator">/</li>
                        <li><a href="/en/developments">Developments</a></li>
                        <li class="separator">/</li>
                        <li><a href="#">${p.title}</a></li>
                    </ul>
                </div>
            </div>

            <div class="developmentDetailsTop__summary">
                <div class="developmentDetailsTop__summary-top">
                    <span class="developmentDetailsTop__summary-top-heading heading-xl text-caps text-dark-grey-300">${p.title}</span>
                    <div class="flex gap-xs align-center mt-xs">
                        <div class="offPlanBadge">
                            <span>${p.status}</span>
                        </div>
                        <div class="flex gap-xs align-center">
                            <span class="text-xs text-grey-950">${p.handover}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><use href="#svgIcon-circle-info-icon"/></svg>
                        </div>
                    </div>
                </div>

                <div class="developmentDetailsTop__summary-bottom">
                    <div class="paymentBox">
                        <div class="paymentBox__row">
                            <div class="paymentBox__item">
                                <span class="paymentBox__item-label">Starting at</span>
                                <span class="paymentBox__item-value paymentBox__item-value--large">
                                    ${p.price} <span class="paymentBox__currency">QAR</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col flex-tablet-row gap-md">
                        <a href="https://wa.me/97450049120?text=${p.whatsappText}" 
                           target="_blank" class="fgBtn fgBtn--dark w-full style-cta-whatsapp" style="display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;">
                            <span>WhatsApp Enquiry</span>
                        </a>
                        <a href="tel:+97430451451" class="fgBtn fgBtn--outline w-full" style="display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;">
                            <span class="fgBtn__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><use href="#svgIcon-phone-icon"/></svg>
                            </span>
                            <span>Call Agent</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section class="developmentDetailsContent">
            <div class="developmentDetailsContent__firstSection">
                <h2 class="heading-20-tablet-24 text-caps">Development information</h2>
                <section class="flex flex-col flex-tablet-row gap-tablet-4xl mt-xl">
                    <article class="detailsTable">
                        <div class="detailsTable__section">
                            <section class="detailsTable__section-row">
                                <div class="detailsTable__section-row-label">Developer</div>
                                <div class="detailsTable__section-row-value">${p.developer}</div>
                            </section>
                            <section class="detailsTable__section-row">
                                <div class="detailsTable__section-row-label">Location</div>
                                <div class="detailsTable__section-row-value">${p.location}</div>
                            </section>
                        </div>
                    </article>
                    <article class="detailsTable">
                        <div class="detailsTable__section">
                            <section class="detailsTable__section-row">
                                <div class="detailsTable__section-row-label">Property Type</div>
                                <div class="detailsTable__section-row-value">${p.propType}</div>
                            </section>
                            <section class="detailsTable__section-row">
                                <div class="detailsTable__section-row-label">Bedrooms</div>
                                <div class="detailsTable__section-row-value">${p.bedrooms}</div>
                            </section>
                        </div>
                    </article>
                </section>

                <div class="developmentDescriptionArea mt-4xl font-primary text-sm text-dark-grey-300 richContent">
                    <p>${p.description}</p>
                </div>

                <h2 class="heading-20-tablet-24 mt-4xl text-caps">Amenities & Services</h2>
                <div class="amenitiesList mt-xl">
${amenitiesHtml}
                </div>

                <h2 class="heading-20-tablet-24 mt-4xl text-caps">Payment Plan</h2>
                <div class="mt-xl p-lg style-payment-plan-box" style="background:#fdfcf7;border:1px solid #e5dbbe;border-radius:12px;padding:24px;">
                    <p class="text-md text-dark-grey-300 font-medium" style="line-height:1.7;">${p.paymentPlanText}</p>
                </div>
            </div>

            <div class="developmentDetailsContent__secondSection">
                <aside class="developmentSidebar" style="position:sticky;top:90px;">
                    <div class="card p-xl" style="background:#111;color:#fff;border-radius:16px;">
                        <span class="text-xs text-caps text-gold font-bold" style="color:#d4b97a;letter-spacing:1px;">EXCLUSIVE CONSULTANCY</span>
                        <h3 class="heading-18 text-white mt-xs mb-md">Speak with a Qatar Real Estate Expert</h3>
                        <p class="text-xs text-grey-300 mb-xl" style="line-height:1.6;opacity:0.85;">
                            Interested in unit availability, floor plans, or booking a site inspection for <strong>${p.title}</strong>?
                        </p>
                        <a href="https://wa.me/97450049120?text=${p.whatsappText}" target="_blank" 
                           class="fgBtn fgBtn--gold w-full mb-md" style="background:#b89c4c;color:#fff;text-align:center;padding:12px;border-radius:8px;display:block;font-weight:bold;text-decoration:none;">
                            WhatsApp FGREALTY
                        </a>
                        <a href="tel:+97430451451" class="fgBtn fgBtn--outline w-full" style="color:#fff;border:1px solid rgba(255,255,255,0.3);text-align:center;padding:12px;border-radius:8px;display:block;text-decoration:none;">
                            Call +974 3045 1451
                        </a>
                    </div>
                </aside>
            </div>
        </section>

        <!-- EXPLORE MORE DEVELOPMENTS SECTION -->
        <section class="container mt-5xl mb-4xl">
          <div class="premium-section-header">
            <h2>Explore Other Qatar Developments</h2>
            <p>Discover premier luxury residential & commercial projects across Qatar</p>
          </div>
          <div class="explore-dev-grid">
${exploreHtml}
          </div>
        </section>

        <!-- AVAILABLE UNITS & PROPERTIES IN QATAR SECTION -->
        <section class="container mt-4xl mb-5xl">
          <div class="premium-section-header">
            <h2>Available Units & Properties in Qatar</h2>
            <p>Explore handpicked luxury apartments, townhouses, and villas for sale</p>
          </div>
          <div class="modern-listings-grid">
${unitsHtml}
          </div>
        </section>

        <!-- POPULAR LINKS & SEARCHES + AGENT CTA & FUNDING BANNERS -->
${popularLinksAndCtasHtml}
    </main>

${footerHtml}
`;

    const filePath = path.join(devDir, `${key}.html`);
    fs.writeFileSync(filePath, fullHtml, 'utf8');
    console.log(`Successfully cleanly generated with Popular Links & Banners: ${key}.html`);
}
