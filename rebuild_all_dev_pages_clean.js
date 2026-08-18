const fs = require('fs');
const path = require('path');

const devDir = path.join(__dirname, 'src/www.fgrealty.qa/en/development');

// Read index.html to extract shared Header & Mobile Nav components
const indexFile = fs.readFileSync(path.join(__dirname, 'src/www.fgrealty.qa/index.html'), 'utf8');
const seefFile = fs.readFileSync(path.join(devDir, 'the-seef.html'), 'utf8');

// 1. Extract SVG sprite block
const svgSpriteMatch = indexFile.match(/<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" style="display:\s*none;">[\s\S]*?<\/svg>/);
const svgSprite = svgSpriteMatch ? svgSpriteMatch[0] : '';

// 2. Extract Header block (containing Developments dropdown menu)
const headerMatch = indexFile.match(/<header class="header"[\s\S]*?<\/header>/);
const headerHtml = headerMatch ? headerMatch[0] : '';

// 3. Extract Navigation Mobile block (containing Developments sub-panel)
const navMobileMatch = indexFile.match(/<nav class="navigationMobile"[\s\S]*?<\/nav>/);
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
        pageTitle: 'Skala Villas Qetaifan Island North | Luxury Beachfront Villas Lusail Qatar | FGREALTY',
        metaDesc: 'Exclusive beachfront villas for sale in Skala Villas, Qetaifan Island North Lusail. Private pool, beach access, and panoramic sea views. Contact FGREALTY Qatar.',
        slug: 'skala-villas',
        location: 'Qetaifan Island North, Lusail',
        developer: 'Qetaifan Projects / Les Vagues',
        propType: 'Luxury Beachfront Villas & Townhouses',
        bedrooms: '4 - 6 Bedrooms',
        status: 'Off-Plan / Under Construction',
        handover: 'Handover from Q4 2026',
        price: '3.5M',
        heroImage: '/images/developments/skala-villas/hero.jpg',
        description: 'Skala Villas (Skala Villa North) is a premier beachfront residential enclave situated on Qetaifan Island North in Lusail, Qatar. Offering an elite collection of modern villas and townhouses, each home boasts direct private beach access, custom infinity pools, floor-to-ceiling panoramic glass, natural wood and quartz finishes, and expansive private rooftop terraces with unobstructed Arabian Gulf views. Located in immediate proximity to the world-famous Qetaifan Island Water Park (featuring the 85m Icon Tower), Rixos Resort, and Lusail Marina, Skala Villas represents Qatar\'s ultimate resort-style luxury living.',
        paymentPlanText: 'Low 2% to 10% Down Payment on Booking, 40% during Construction, and remaining balance over flexible multi-year payment plans up to 2029 with 0% interest.',
        whatsappText: 'Hello%20FGREALTY%2C%20I%20am%20interested%20in%20Skala%20Villas%20Qetaifan%20Island',
        amenities: [
            { icon: 'Shared-Swimming-Pool', label: 'Private Infinity Pool' },
            { icon: 'Concierge-Assistance', label: 'Direct Beach Access' },
            { icon: 'Gymnasium', label: 'Private Fitness Suite' },
            { icon: 'Security-Access', label: '24/7 Gated Security' },
            { icon: 'Central-Air-conditioning', label: 'Smart Home AC' },
            { icon: 'Basement-Parking', label: 'Private Covered Garage' },
            { icon: 'Open-Kitchen', label: 'Designer Quartz Kitchen' },
            { icon: 'Mall', label: 'Marina & Waterpark Access' }
        ],
        exploreCards: [
            { title: 'City Avenue', slug: 'city-avenue', loc: 'Al Erkyah City, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '1.1M QAR', img: '/images/developments/city-avenue/hero.jpg' },
            { title: 'Milos', slug: 'milos', loc: 'Legtaifiya, Doha', badge: 'Ready', badgeClass: 'ready', price: '950K QAR', img: '/images/developments/milos/hero.jpg' },
            { title: 'Rivan', slug: 'rivan', loc: 'Al Erkyah City, Lusail', badge: 'Ready', badgeClass: 'ready', price: '700K QAR', img: '/images/developments/rivan/hero.jpg' }
        ],
        units: [
            { title: 'Exclusive 4-Bedroom Beachfront Villa with Private Pool', loc: 'Qetaifan Island North, Lusail', price: '3,575,000', img: '/images/developments/skala-villas/unit.jpg', photos: '16', tag: 'Beachfront', beds: '4 Beds', baths: '5 Baths', area: '450 m²' },
            { title: 'Signature 5BR Oceanfront Mansion with Private Beach Access', loc: 'Qetaifan Island North, Lusail', price: '5,850,000', img: '/images/developments/skala-villas/hero.jpg', photos: '22', tag: 'Luxury Mansion', beds: '5 Beds', baths: '6.5 Baths', area: '620 m²' },
            { title: 'Modern 4BR Duplex Villa near Qetaifan Waterpark', loc: 'Qetaifan Island North, Lusail', price: '3,950,000', img: '/images/developments/skala-villas/unit.jpg', photos: '14', tag: 'Off-Plan', beds: '4 Beds', baths: '4.5 Baths', area: '480 m²' },
            { title: 'Grand 6-Bedroom Beach Palace with Private Dock Access', loc: 'Qetaifan Island North, Lusail', price: '7,200,000', img: '/images/developments/skala-villas/hero.jpg', photos: '25', tag: 'Exclusive', beds: '6 Beds', baths: '7.5 Baths', area: '850 m²' },
            { title: 'Semi-Detached 4BR Beachfront Villa | 2% Down Payment', loc: 'Qetaifan Island North, Lusail', price: '3,700,000', img: '/images/developments/skala-villas/unit.jpg', photos: '12', tag: 'Hot Deal', beds: '4 Beds', baths: '4.5 Baths', area: '420 m²' },
            { title: '5BR Waterfront Residence with Panoramic Rooftop Lounge', loc: 'Qetaifan Island North, Lusail', price: '6,100,000', img: '/images/developments/skala-villas/hero.jpg', photos: '18', tag: 'Sea View', beds: '5 Beds', baths: '6 Baths', area: '680 m²' }
        ]
    },
    'city-avenue': {
        title: 'City Avenue',
        pageTitle: 'City Avenue Al Erkyah City | Serviced Hotel Apartments Lusail | FGREALTY',
        metaDesc: 'Modern serviced hotel apartments for sale in City Avenue by Ariane Real Estate, Al Erkyah City Lusail. Flexible 7-year payment plans. Contact FGREALTY Qatar.',
        slug: 'city-avenue',
        location: 'Al Erkyah City, Lusail',
        developer: 'Ariane Real Estate',
        propType: 'Mixed-Use & Serviced Hotel Apartments',
        bedrooms: 'Studio, 1, 2 & 3 Bedrooms',
        status: 'Off-Plan / Handover Soon',
        handover: 'Handover Q3 2026',
        price: '1.1M',
        heroImage: '/images/developments/city-avenue/hero.jpg',
        description: 'City Avenue is an innovative master-planned mixed-use development by Ariane Real Estate, situated in the heart of Al Erkyah City, Lusail. Designed around wellness, sustainability, and smart city infrastructure, City Avenue features fully furnished hotel apartments operated by Iris Hospitality. Spread across 5 interconnected buildings, residents enjoy rooftop swimming pools, state-of-the-art fitness centers, lush landscaped garden walkways, organic markets, and ground-floor retail promenades. Located walking distance from Lusail Iconic Stadium, Crescent Park, and Al Erkyah Tram Station.',
        paymentPlanText: '10% Down Payment on Booking, 40% during construction, remaining 50% spread over flexible interest-free installment plans up to 7 years (until 2032).',
        whatsappText: 'Hello%20FGREALTY%2C%20I%20am%20interested%20in%20City%20Avenue%20Al%20Erkyah%20City',
        amenities: [
            { icon: 'Concierge-Assistance', label: 'Iris Hotel Management' },
            { icon: 'Shared-Swimming-Pool', label: 'Rooftop Swimming Pools' },
            { icon: 'Gymnasium', label: 'Fitness & Wellness Gym' },
            { icon: 'Mall', label: 'Ground Floor Retail' },
            { icon: 'Central-Air-conditioning', label: 'Smart Central AC' },
            { icon: 'Security-Access', label: '24/7 Security Concierge' },
            { icon: 'Basement-Parking', label: 'Underground Parking' },
            { icon: 'Metro-Station', label: 'Lusail Tram Access' }
        ],
        exploreCards: [
            { title: 'Skala Villas', slug: 'skala-villas', loc: 'Qetaifan Island, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '3.5M QAR', img: '/images/developments/skala-villas/hero.jpg' },
            { title: 'Milos', slug: 'milos', loc: 'Legtaifiya, Doha', badge: 'Ready', badgeClass: 'ready', price: '950K QAR', img: '/images/developments/milos/hero.jpg' },
            { title: 'Rivan', slug: 'rivan', loc: 'Al Erkyah City, Lusail', badge: 'Ready', badgeClass: 'ready', price: '700K QAR', img: '/images/developments/rivan/hero.jpg' }
        ],
        units: [
            { title: 'Fully Furnished 1BR Hotel Apartment | Iris Hospitality', loc: 'Al Erkyah City, Lusail', price: '1,100,000', img: '/images/developments/city-avenue/unit.jpg', photos: '14', tag: 'Serviced Suite', beds: '1 Bed', baths: '1.5 Baths', area: '85 m²' },
            { title: 'Spacious 2-Bedroom Apartment with Park View Balcony', loc: 'Al Erkyah City, Lusail', price: '1,450,000', img: '/images/developments/city-avenue/hero.jpg', photos: '18', tag: 'Wellness Living', beds: '2 Beds', baths: '2.5 Baths', area: '128 m²' },
            { title: 'Luxury 3-Bedroom Corner Residence | 7-Year Plan', loc: 'Al Erkyah City, Lusail', price: '1,850,000', img: '/images/developments/city-avenue/unit.jpg', photos: '20', tag: 'Flexible Plan', beds: '3 Beds', baths: '3.5 Baths', area: '185 m²' },
            { title: 'Modern Studio Apartment ideal for High Investment Yield', loc: 'Al Erkyah City, Lusail', price: '850,000', img: '/images/developments/city-avenue/hero.jpg', photos: '10', tag: 'High ROI', beds: 'Studio', baths: '1 Bath', area: '58 m²' },
            { title: 'Prime Ground Floor Retail Outlet on City Avenue Promenade', loc: 'Al Erkyah City, Lusail', price: '2,200,000', img: '/images/developments/city-avenue/unit.jpg', photos: '12', tag: 'Commercial', beds: 'Retail', baths: '2 Baths', area: '140 m²' },
            { title: 'Premium 2BR Executive Residence near Lusail Metro', loc: 'Al Erkyah City, Lusail', price: '1,380,000', img: '/images/developments/city-avenue/hero.jpg', photos: '15', tag: 'Hot Deal', beds: '2 Beds', baths: '2 Baths', area: '135 m²' }
        ]
    },
    'milos': {
        title: 'Milos',
        pageTitle: 'Milos Residence Legtaifiya | Luxury Apartments Doha Qatar | FGREALTY',
        metaDesc: 'Luxury apartments for sale in Milos Residence by Ariane Real Estate, Legtaifiya Doha. High-end finishes, Katara views, and ready to move in. Contact FGREALTY Qatar.',
        slug: 'milos',
        location: 'Legtaifiya, Doha',
        developer: 'Ariane Real Estate',
        propType: 'Boutique Luxury Residential Apartments',
        bedrooms: '1 - 4 Bedrooms',
        status: 'Ready to Move In',
        handover: 'Immediate Handover Available',
        price: '950K',
        heroImage: '/images/developments/milos/hero.jpg',
        description: 'Milos Residence is a boutique residential landmark developed by Ariane Real Estate in the prestigious Legtaifiya (Al Qassar / West Bay Lagoon area) of Doha. Featuring elegant 1, 2, 3, and 4-bedroom luxury apartments, Milos combines contemporary architectural design with sophisticated interiors, acoustic soundproofing, floor-to-ceiling double glazing, and expansive private balconies with views toward Katara Cultural Village and the West Bay coastline. Residents enjoy an infinity pool, fully equipped fitness center, steam room, children\'s play lounge, and 24/7 security concierge.',
        paymentPlanText: 'Ready to Move In. 20% Down Payment upon contract signing, with remaining 80% structured across a 4-year interest-free installment plan.',
        whatsappText: 'Hello%20FGREALTY%2C%20I%20am%20interested%20in%20Milos%20Residence%20Legtaifiya',
        amenities: [
            { icon: 'Shared-Swimming-Pool', label: 'Infinity Swimming Pool' },
            { icon: 'Gymnasium', label: 'Fitness Center & Sauna' },
            { icon: 'Security-Access', label: '24/7 Security Concierge' },
            { icon: 'Basement-Parking', label: 'Covered Parking' },
            { icon: 'Concierge-Assistance', label: 'Concierge Services' },
            { icon: 'Central-Air-conditioning', label: 'Central Air Conditioning' },
            { icon: 'Open-Kitchen', label: 'Fitted Italian Kitchen' },
            { icon: 'Metro-Station', label: 'Katara & Metro Nearby' }
        ],
        exploreCards: [
            { title: 'Skala Villas', slug: 'skala-villas', loc: 'Qetaifan Island, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '3.5M QAR', img: '/images/developments/skala-villas/hero.jpg' },
            { title: 'City Avenue', slug: 'city-avenue', loc: 'Al Erkyah City, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '1.1M QAR', img: '/images/developments/city-avenue/hero.jpg' },
            { title: 'Rivan', slug: 'rivan', loc: 'Al Erkyah City, Lusail', badge: 'Ready', badgeClass: 'ready', price: '700K QAR', img: '/images/developments/rivan/hero.jpg' }
        ],
        units: [
            { title: 'Ready 1-Bedroom Boutique Apartment | High-End Finishes', loc: 'Legtaifiya, Doha', price: '950,000', img: '/images/developments/milos/unit.jpg', photos: '12', tag: 'Ready Move-In', beds: '1 Bed', baths: '1.5 Baths', area: '95 m²' },
            { title: 'Stunning 2-Bedroom Residence with Katara Sea View Balcony', loc: 'Legtaifiya, Doha', price: '1,450,000', img: '/images/developments/milos/hero.jpg', photos: '16', tag: 'Prime Location', beds: '2 Beds', baths: '2.5 Baths', area: '142 m²' },
            { title: '3-Bedroom Luxury Apartment + Maid\'s Room | 20% Down Payment', loc: 'Legtaifiya, Doha', price: '2,250,000', img: '/images/developments/milos/unit.jpg', photos: '18', tag: 'Family Home', beds: '3 Beds', baths: '3.5 Baths', area: '215 m²' },
            { title: 'Executive 2BR Residence near West Bay Lagoon & Diplomats Area', loc: 'Legtaifiya, Doha', price: '1,580,000', img: '/images/developments/milos/hero.jpg', photos: '15', tag: 'High ROI', beds: '2 Beds', baths: '2 Baths', area: '150 m²' },
            { title: 'Modern 1BR Apartment with Open Designer Kitchen', loc: 'Legtaifiya, Doha', price: '990,000', img: '/images/developments/milos/unit.jpg', photos: '11', tag: 'Featured', beds: '1 Bed', baths: '1.5 Baths', area: '102 m²' },
            { title: 'Penthouse 4-Bedroom Residence with Panoramic Coastline View', loc: 'Legtaifiya, Doha', price: '3,850,000', img: '/images/developments/milos/hero.jpg', photos: '24', tag: 'Luxury Penthouse', beds: '4 Beds', baths: '4.5 Baths', area: '340 m²' }
        ]
    },
    'rivan': {
        title: 'Rivan',
        pageTitle: 'Rivan Tower Al Erkyah | Luxury Residences Lusail | FGREALTY',
        metaDesc: 'Luxury apartments for sale in Rivan Tower by Ariane Real Estate, Al Erkyah City Lusail. Ready to move in with 5-year payment plan options. Contact FGREALTY Qatar.',
        slug: 'rivan',
        location: 'Al Erkyah City, Lusail',
        developer: 'Ariane Real Estate',
        propType: 'Modern Residential Apartments',
        bedrooms: '1 - 3 Bedrooms',
        status: 'Ready to Move In',
        handover: 'Immediate Handover Available',
        price: '700K',
        heroImage: '/images/developments/rivan/hero.jpg',
        description: 'Rivan Tower is a contemporary residential development crafted by Ariane Real Estate in Al Erkyah City, Lusail. Known for its elegant natural stone facade and floor-to-ceiling glass architecture, Rivan offers beautifully proportioned 1, 2, and 3-bedroom apartments. Managed by Ariane Properties, residents enjoy a double-height luxury lobby lounge, infinity swimming pool, fully equipped gymnasium, landscaped podium garden, and retail space. Located adjacent to the Lusail Stadium precinct, Crescent Park, and Place Vendôme Mall.',
        paymentPlanText: 'Immediate Handover available. 15% Down Payment on contract signing, 85% payable over 5 years in quarterly interest-free installments.',
        whatsappText: 'Hello%20FGREALTY%2C%20I%20am%20interested%20in%20Rivan%20Al%20Erkyah%20City',
        amenities: [
            { icon: 'Shared-Swimming-Pool', label: 'Infinity Pool & Sundeck' },
            { icon: 'Gymnasium', label: 'Fully Equipped Gym' },
            { icon: 'Security-Access', label: '24/7 Security Concierge' },
            { icon: 'Basement-Parking', label: 'Covered Parking' },
            { icon: 'Metro-Station', label: 'Metro Tram Nearby' },
            { icon: 'Mall', label: 'Podium Retail Promenade' },
            { icon: 'Central-Air-conditioning', label: 'Central AC' },
            { icon: 'Open-Kitchen', label: 'Modern Fitted Kitchen' }
        ],
        exploreCards: [
            { title: 'Skala Villas', slug: 'skala-villas', loc: 'Qetaifan Island, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '3.5M QAR', img: '/images/developments/skala-villas/hero.jpg' },
            { title: 'City Avenue', slug: 'city-avenue', loc: 'Al Erkyah City, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '1.1M QAR', img: '/images/developments/city-avenue/hero.jpg' },
            { title: 'Milos', slug: 'milos', loc: 'Legtaifiya, Doha', badge: 'Ready', badgeClass: 'ready', price: '950K QAR', img: '/images/developments/milos/hero.jpg' }
        ],
        units: [
            { title: 'Ready 1-Bedroom Residence in Rivan Tower | 15% Down Payment', loc: 'Al Erkyah City, Lusail', price: '720,000', img: '/images/developments/rivan/unit.jpg', photos: '10', tag: 'Immediate Handover', beds: '1 Bed', baths: '1.5 Baths', area: '88 m²' },
            { title: 'Spacious 2-Bedroom Apartment with Natural Stone Cladding', loc: 'Al Erkyah City, Lusail', price: '1,080,000', img: '/images/developments/rivan/hero.jpg', photos: '14', tag: 'Ready Move-In', beds: '2 Beds', baths: '2.5 Baths', area: '132 m²' },
            { title: 'Premium 3-Bedroom Family Suite with Double Glazed Glass', loc: 'Al Erkyah City, Lusail', price: '1,590,000', img: '/images/developments/rivan/unit.jpg', photos: '18', tag: '5-Year Plan', beds: '3 Beds', baths: '3.5 Baths', area: '190 m²' },
            { title: 'Modern 1-Bedroom Corner Suite near Place Vendôme Mall', loc: 'Al Erkyah City, Lusail', price: '780,000', img: '/images/developments/rivan/hero.jpg', photos: '12', tag: 'Hot Deal', beds: '1 Bed', baths: '1.5 Baths', area: '92 m²' },
            { title: 'Luxury 2BR Residence with Private Basement Parking', loc: 'Al Erkyah City, Lusail', price: '1,120,000', img: '/images/developments/rivan/unit.jpg', photos: '15', tag: 'Featured', beds: '2 Beds', baths: '2 Baths', area: '138 m²' },
            { title: '3-Bedroom Duplex Penthouse with Crescent Park Views', loc: 'Al Erkyah City, Lusail', price: '2,150,000', img: '/images/developments/rivan/hero.jpg', photos: '22', tag: 'Exclusive Penthouse', beds: '3 Beds', baths: '4 Baths', area: '240 m²' }
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
      .modern-unit-btn--call:hover { background: #d4b97a; color: #111; }
      
      .premium-section-header { text-align: center; max-width: 600px; margin: 0 auto 30px auto; }
      .premium-section-header h2 { font-size: 1.75rem; font-weight: 700; color: #111; font-family: optimaltstd-medium, sans-serif; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
      .premium-section-header p { font-size: 0.95rem; color: #666; margin: 0; }

      /* LUXURY QATAR CONSULTANCY SIDEBAR CARD */
      .qatar-consultancy-card {
        background: #141414 !important;
        color: #ffffff !important;
        border-radius: 16px !important;
        padding: 28px 24px !important;
        border: 1px solid rgba(212, 185, 122, 0.3) !important;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4) !important;
        box-sizing: border-box !important;
      }
      .qatar-consultancy-card .badge-exclusive {
        color: #d4b97a !important;
        background: rgba(212, 185, 122, 0.12) !important;
        border: 1px solid rgba(212, 185, 122, 0.3) !important;
        padding: 6px 14px !important;
        border-radius: 20px !important;
        font-size: 0.72rem !important;
        font-weight: 700 !important;
        letter-spacing: 1.5px !important;
        display: inline-block !important;
        margin-bottom: 14px !important;
        text-transform: uppercase !important;
      }
      .qatar-consultancy-card .card-title {
        color: #ffffff !important;
        font-size: 1.25rem !important;
        font-weight: 600 !important;
        margin: 0 0 12px 0 !important;
        line-height: 1.35 !important;
      }
      .qatar-consultancy-card .card-desc {
        color: rgba(255, 255, 255, 0.8) !important;
        font-size: 0.86rem !important;
        line-height: 1.6 !important;
        margin-bottom: 22px !important;
      }
      .qatar-consultancy-card .btn-whatsapp-consult {
        background: linear-gradient(135deg, #c5a85c 0%, #a38438 100%) !important;
        color: #ffffff !important;
        text-align: center !important;
        padding: 13px 18px !important;
        border-radius: 10px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 8px !important;
        font-weight: 700 !important;
        font-size: 0.92rem !important;
        text-decoration: none !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 4px 15px rgba(184, 156, 76, 0.25) !important;
        margin-bottom: 12px !important;
        border: none !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      .qatar-consultancy-card .btn-whatsapp-consult:hover {
        background: linear-gradient(135deg, #d4b97a 0%, #b89c4c 100%) !important;
        color: #ffffff !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(212, 185, 122, 0.4) !important;
      }
      .qatar-consultancy-card .btn-call-consult {
        background: rgba(255, 255, 255, 0.05) !important;
        color: #ffffff !important;
        border: 1.5px solid rgba(212, 185, 122, 0.4) !important;
        text-align: center !important;
        padding: 13px 18px !important;
        border-radius: 10px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 8px !important;
        font-weight: 600 !important;
        font-size: 0.92rem !important;
        text-decoration: none !important;
        transition: all 0.3s ease !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      .qatar-consultancy-card .btn-call-consult:hover {
        background: #d4b97a !important;
        color: #111111 !important;
        border-color: #d4b97a !important;
        font-weight: 700 !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(212, 185, 122, 0.35) !important;
      }
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
                    <div class="qatar-consultancy-card">
                        <span class="badge-exclusive">EXCLUSIVE CONSULTANCY</span>
                        <h3 class="card-title">Speak with a Qatar Real Estate Expert</h3>
                        <p class="card-desc">
                            Interested in unit availability, floor plans, or booking a site inspection for <strong>${p.title}</strong>?
                        </p>
                        <a href="https://wa.me/97450049120?text=${p.whatsappText}" target="_blank" class="btn-whatsapp-consult">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span>WhatsApp FGREALTY</span>
                        </a>
                        <a href="tel:+97430451451" class="btn-call-consult">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                            <span>Call +974 3045 1451</span>
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
