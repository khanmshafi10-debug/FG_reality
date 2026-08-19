const fs = require('fs');
const path = require('path');

const devDir = path.join(__dirname, 'src/www.fgrealty.qa/en/development');

// Read index.html to extract shared SVG sprites
const indexFile = fs.readFileSync(path.join(__dirname, 'src/www.fgrealty.qa/index.html'), 'utf8');
const seefFile = fs.readFileSync(path.join(devDir, 'the-seef.html'), 'utf8');

// 1. Extract SVG sprite block
const svgSpriteMatch = indexFile.match(/<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" style="display:\s*none;">[\s\S]*?<\/svg>/);
const svgSprite = svgSpriteMatch ? svgSpriteMatch[0] : '';

// 2. Extract Header block from index.html (which contains both Desktop & Mobile Navigation)
const headerMatch = indexFile.match(/<header class="[^"]*"[\s\S]*?<\/header>/);
const headerHtml = headerMatch ? headerMatch[0] : '';
const navMobileHtml = '';

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

// 5. Extract Agent CTA Banner + Funding Banner from the-seef.html
const popularLinksStart = seefFile.indexOf('<section class="bannerWrapper">');
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
            { title: 'Exclusive 4-Bedroom Beachfront Villa with Private Pool', loc: 'Qetaifan Island North, Lusail', price: '3,575,000', img: '/images/developments/skala-villas/sk-feature-1.jpg', photos: '16', tag: 'Beachfront', beds: '4 Beds', baths: '5 Baths', area: '450 m²' },
            { title: 'Signature 5BR Oceanfront Mansion with Private Beach Access', loc: 'Qetaifan Island North, Lusail', price: '5,850,000', img: '/images/developments/skala-villas/sk-feature-2.jpg', photos: '22', tag: 'Luxury Mansion', beds: '5 Beds', baths: '6.5 Baths', area: '620 m²' },
            { title: 'Modern 4BR Duplex Villa near Qetaifan Waterpark', loc: 'Qetaifan Island North, Lusail', price: '3,950,000', img: '/images/developments/skala-villas/sk-feature-4.jpg', photos: '14', tag: 'Off-Plan', beds: '4 Beds', baths: '4.5 Baths', area: '480 m²' },
            { title: 'Grand 6-Bedroom Beach Palace with Private Dock Access', loc: 'Qetaifan Island North, Lusail', price: '7,200,000', img: '/images/developments/skala-villas/sk-feature-5.jpg', photos: '28', tag: 'Beach Palace', beds: '6 Beds', baths: '7.5 Baths', area: '750 m²' },
            { title: '3-Bedroom Waterfront Villa with Private Garden & Maid Room', loc: 'Qetaifan Island North, Lusail', price: '3,200,000', img: '/images/developments/skala-villas/sk-feature-6.jpg', photos: '18', tag: 'Family Villa', beds: '3 Beds', baths: '3.5 Baths', area: '390 m²' },
            { title: '5-Bedroom Presidential Waterfront Estate', loc: 'Qetaifan Island North, Lusail', price: '6,400,000', img: '/images/developments/skala-villas/hero.jpg', photos: '25', tag: 'Presidential', beds: '5 Beds', baths: '6 Baths', area: '650 m²' }
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
            { title: 'Fully Furnished 1BR Hotel Apartment | Iris Hospitality', loc: 'Al Erkyah City, Lusail', price: '1,100,000', img: '/images/developments/city-avenue/city_feature_1.jpg', photos: '14', tag: 'Serviced Suite', beds: '1 Bed', baths: '1.5 Baths', area: '85 m²' },
            { title: 'Spacious 2-Bedroom Apartment with Park View Balcony', loc: 'Al Erkyah City, Lusail', price: '1,450,000', img: '/images/developments/city-avenue/city_feature_2.jpg', photos: '18', tag: 'Wellness Living', beds: '2 Beds', baths: '2.5 Baths', area: '128 m²' },
            { title: 'Luxury 3-Bedroom Corner Residence | 7-Year Plan', loc: 'Al Erkyah City, Lusail', price: '1,850,000', img: '/images/developments/city-avenue/city_feature_3.jpg', photos: '20', tag: 'Flexible Plan', beds: '3 Beds', baths: '3.5 Baths', area: '185 m²' },
            { title: 'Executive Avenue Boulevard Suite & Sky Balcony', loc: 'Al Erkyah City, Lusail', price: '2,100,000', img: '/images/developments/city-avenue/city_hero_new.jpg', photos: '24', tag: 'Executive Suite', beds: '3 Beds', baths: '3.5 Baths', area: '195 m²' },
            { title: 'Modern Studio Apartment ideal for High Investment Yield', loc: 'Al Erkyah City, Lusail', price: '850,000', img: '/images/developments/milos/milos_real_1.jpg', photos: '10', tag: 'High ROI', beds: 'Studio', baths: '1 Bath', area: '58 m²' },
            { title: '2-Bedroom Luxury Suite facing Al Erkyah Central Park', loc: 'Al Erkyah City, Lusail', price: '1,520,000', img: '/images/developments/milos/milos_real_3.jpg', photos: '16', tag: 'Park View', beds: '2 Beds', baths: '2.5 Baths', area: '135 m²' }
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
            { title: 'Ready 1-Bedroom Boutique Apartment | High-End Finishes', loc: 'Legtaifiya, Doha', price: '950,000', img: '/images/developments/milos/milos_real_1.jpg', photos: '12', tag: 'Ready Move-In', beds: '1 Bed', baths: '1.5 Baths', area: '95 m²' },
            { title: 'Stunning 2-Bedroom Residence with Katara Sea View Balcony', loc: 'Legtaifiya, Doha', price: '1,450,000', img: '/images/developments/milos/milos_real_3.jpg', photos: '16', tag: 'Prime Location', beds: '2 Beds', baths: '2.5 Baths', area: '142 m²' },
            { title: '3-Bedroom Luxury Apartment + Maid\'s Room | 20% Down Payment', loc: 'Legtaifiya, Doha', price: '2,250,000', img: '/images/developments/milos/milos_real_5.jpg', photos: '18', tag: 'Family Home', beds: '3 Beds', baths: '3.5 Baths', area: '215 m²' },
            { title: 'Executive 2BR Residence near West Bay Lagoon & Diplomats Area', loc: 'Legtaifiya, Doha', price: '1,580,000', img: '/images/developments/milos/milos_real_7.jpg', photos: '15', tag: 'High ROI', beds: '2 Beds', baths: '2.5 Baths', area: '150 m²' },
            { title: 'Exclusive Penthouse Suite with Panoramic Coastal Views', loc: 'Legtaifiya, Doha', price: '3,100,000', img: '/images/developments/milos/milos_real_9.jpg', photos: '22', tag: 'Penthouse', beds: '4 Beds', baths: '4.5 Baths', area: '310 m²' },
            { title: 'Master Coastal Residence with Diplomatic Bay View', loc: 'Legtaifiya, Doha', price: '2,400,000', img: '/images/developments/milos/hero.jpg', photos: '20', tag: 'Bay View', beds: '3 Beds', baths: '3.5 Baths', area: '225 m²' }
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
            { title: 'Premium 3-Bedroom Family Suite with Double Glazed Glass', loc: 'Al Erkyah City, Lusail', price: '1,590,000', img: '/images/developments/city-avenue/city_feature_1.jpg', photos: '18', tag: '5-Year Plan', beds: '3 Beds', baths: '3.5 Baths', area: '190 m²' },
            { title: 'Modern 1-Bedroom Corner Suite near Place Vendôme Mall', loc: 'Al Erkyah City, Lusail', price: '780,000', img: '/images/developments/city-avenue/city_feature_2.jpg', photos: '12', tag: 'Prime Location', beds: '1 Bed', baths: '1.5 Baths', area: '92 m²' },
            { title: 'Corner 2-Bedroom Apartment | Park & Boulevard View', loc: 'Al Erkyah City, Lusail', price: '1,150,000', img: '/images/developments/city-avenue/city_feature_3.jpg', photos: '16', tag: 'Corner Unit', beds: '2 Beds', baths: '2.5 Baths', area: '140 m²' },
            { title: 'Sky Suite Penthouse with Skyline Terrace', loc: 'Al Erkyah City, Lusail', price: '2,200,000', img: '/images/developments/city-avenue/city_hero_new.jpg', photos: '25', tag: 'Sky Suite', beds: '4 Beds', baths: '4.5 Baths', area: '260 m²' }
        ]
    },
    'valencia-residence': {
        title: 'Valencia Residence',
        pageTitle: 'Valencia Residence Fox Hills Lusail | Luxury Apartments Qatar | FGREALTY',
        metaDesc: 'Off-plan studio, 1 & 2-bedroom luxury apartments for sale in Valencia Residence by TAAMEER, Fox Hills South Lusail Qatar. 6-year payment plan with 2% down payment.',
        slug: 'valencia-residence',
        location: 'Fox Hills South, Lusail',
        developer: 'TAAMEER Development Group',
        propType: 'Semi-Furnished Studio, 1 & 2 Bedroom Apartments',
        bedrooms: 'Studio, 1 & 2 Bedrooms',
        status: 'Off-Plan / Freehold',
        handover: 'Handover Q1 2029',
        price: '650K',
        heroImage: '/images/developments/valencia-residence/hero.jpg',
        description: 'Valencia Residence is a modern off-plan residential landmark developed by TAAMEER Development Group, situated in Fox Hills South, Lusail City. Designed around quiet luxury and integrated community living, Valencia Residence features semi-furnished studio, 1-bedroom, and 2-bedroom luxury apartments with floor-to-ceiling glass, private balconies, and refined contemporary interiors. Located steps away from Lusail Boulevard, Crescent Park, and Lusail Plaza Towers, residents enjoy access to a rooftop pool, state-of-the-art gym, children\'s play lounge, and 24/7 security concierge with a flexible 6-year payment plan.',
        paymentPlanText: 'Highly flexible 6-year installment plan starting with a 2% down payment upon booking, with interest-free multi-stage installments through 2031.',
        whatsappText: 'Hello%20FGREALTY%2C%20I%20am%20interested%20in%20Valencia%20Residence%20Fox%20Hills%20Lusail',
        amenities: [
            { icon: 'Shared-Swimming-Pool', label: 'Rooftop Swimming Pool' },
            { icon: 'Gymnasium', label: 'Fitness & Wellness Gym' },
            { icon: 'Security-Access', label: '24/7 Security & Concierge' },
            { icon: 'Basement-Parking', label: 'Private Basement Parking' },
            { icon: 'Central-Air-conditioning', label: 'Smart Central AC' },
            { icon: 'Children-Play-Area', label: 'Children\'s Play Lounge' },
            { icon: 'Open-Kitchen', label: 'Semi-Furnished Kitchen' },
            { icon: 'Metro-Station', label: 'Near Lusail Tram' }
        ],
        exploreCards: [
            { title: 'Flora Villas', slug: 'flora-villas', loc: 'Huzoom, North Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '4.2M QAR', img: '/images/developments/flora-villas/hero.jpg' },
            { title: 'Skala Villas', slug: 'skala-villas', loc: 'Qetaifan Island, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '3.5M QAR', img: '/images/developments/skala-villas/hero.jpg' },
            { title: 'City Avenue', slug: 'city-avenue', loc: 'Al Erkyah City, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '1.1M QAR', img: '/images/developments/city-avenue/hero.jpg' }
        ],
        units: [
            { title: 'Semi-Furnished 1-Bedroom Apartment | 2% Down Payment', loc: 'Fox Hills South, Lusail', price: '720,000', img: '/images/developments/valencia-residence/unit_1.jpg', photos: '14', tag: 'Hot Deal', beds: '1 Bed', baths: '1.5 Baths', area: '78 m²' },
            { title: 'Spacious 2-Bedroom Luxury Residence with Balcony', loc: 'Fox Hills South, Lusail', price: '1,150,000', img: '/images/developments/valencia-residence/unit_2.jpg', photos: '18', tag: '6-Year Plan', beds: '2 Beds', baths: '2.5 Baths', area: '118 m²' },
            { title: 'Modern Studio Apartment | High Investment Yield in Lusail', loc: 'Fox Hills South, Lusail', price: '650,000', img: '/images/developments/valencia-residence/unit_3.jpg', photos: '10', tag: 'High ROI', beds: 'Studio', baths: '1 Bath', area: '52 m²' },
            { title: '2-Bedroom Corner Residence facing Crescent Park View', loc: 'Fox Hills South, Lusail', price: '1,220,000', img: '/images/developments/valencia-residence/unit_4.jpg', photos: '16', tag: 'Park View', beds: '2 Beds', baths: '2.5 Baths', area: '125 m²' },
            { title: '3-Bedroom Family Residence + Maid\'s Room', loc: 'Fox Hills South, Lusail', price: '1,650,000', img: '/images/developments/valencia-residence/hero.jpg', photos: '20', tag: 'Family Suite', beds: '3 Beds', baths: '3.5 Baths', area: '168 m²' },
            { title: 'Executive Master Penthouse Suite with Roof Garden', loc: 'Fox Hills South, Lusail', price: '2,350,000', img: '/images/developments/flora-villas/unit_1.jpg', photos: '26', tag: 'Penthouse', beds: '4 Beds', baths: '4.5 Baths', area: '250 m²' }
        ]
    },
    'flora-villas': {
        title: 'Flora Villas',
        pageTitle: 'Flora Villas Huzoom North Lusail | Luxury 5 & 6 Bedroom Standalone Villas | FGREALTY',
        metaDesc: 'Exclusive 5 & 6-bedroom standalone freehold villas for sale in Flora Villas by TAAMEER, Huzoom District North Lusail Qatar. Private gardens, optional pool, 5% down payment.',
        slug: 'flora-villas',
        location: 'Huzoom District, North Lusail',
        developer: 'TAAMEER Development Group',
        propType: 'Luxury Standalone Freehold Villas',
        bedrooms: '5 & 6 Bedrooms',
        status: 'Off-Plan Exclusive Villa Collection',
        handover: 'Handover Q1 2029',
        price: '4.2M',
        heroImage: '/images/developments/flora-villas/hero.jpg',
        description: 'Flora Villas is a private sanctuary of 40 standalone luxury villas located in the peaceful Huzoom District of North Lusail. Developed by TAAMEER Development Group, Flora Villas offers grand 5-bedroom and 6-bedroom architectural villas across three expansive levels (Ground, 1st Floor, and Penthouse). Designed with floor-to-ceiling glass, reversed layouts for 100% neighbor privacy, private landscaped gardens, optional swimming pools, and dedicated maid and driver quarters, Flora Villas represents the pinnacle of private family living in North Lusail.',
        paymentPlanText: 'Multi-stage flexible payment plan with 5% Down Payment on booking, interest-free construction installments through handover in Q1 2029.',
        whatsappText: 'Hello%20FGREALTY%2C%20I%20am%20interested%20in%20Flora%20Villas%20North%20Lusail',
        amenities: [
            { icon: 'Shared-Swimming-Pool', label: 'Private Swimming Pool' },
            { icon: 'Concierge-Assistance', label: 'Private Landscaping & Garden' },
            { icon: 'Security-Access', label: '24/7 Gated Community' },
            { icon: 'Basement-Parking', label: 'Multi-Car Covered Parking' },
            { icon: 'Open-Kitchen', label: 'Maid & Driver Quarters' },
            { icon: 'Central-Air-conditioning', label: 'Smart Villa HVAC' },
            { icon: 'Mall', label: 'Three-Level Penthouse Design' },
            { icon: 'Metro-Station', label: 'Near North Lusail District' }
        ],
        exploreCards: [
            { title: 'Valencia Residence', slug: 'valencia-residence', loc: 'Fox Hills, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '650K QAR', img: '/images/developments/valencia-residence/hero.jpg' },
            { title: 'Skala Villas', slug: 'skala-villas', loc: 'Qetaifan Island, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '3.5M QAR', img: '/images/developments/skala-villas/hero.jpg' },
            { title: 'City Avenue', slug: 'city-avenue', loc: 'Al Erkyah City, Lusail', badge: 'Off-Plan', badgeClass: 'offplan', price: '1.1M QAR', img: '/images/developments/city-avenue/hero.jpg' }
        ],
        units: [
            { title: 'Signature 5-Bedroom Standalone Villa with Private Garden', loc: 'Huzoom District, North Lusail', price: '4,200,000', img: '/images/developments/flora-villas/unit_1.jpg', photos: '20', tag: 'Exclusive Villa', beds: '5 Beds', baths: '6 Baths', area: '520 m²' },
            { title: 'Grand 6-Bedroom Villa + Penthouse & Private Swimming Pool', loc: 'Huzoom District, North Lusail', price: '5,600,000', img: '/images/developments/flora-villas/unit_2.jpg', photos: '24', tag: 'Luxury Mansion', beds: '6 Beds', baths: '7.5 Baths', area: '680 m²' },
            { title: '5-Bedroom Modern Architecture Villa | 5% Down Payment', loc: 'Huzoom District, North Lusail', price: '4,450,000', img: '/images/developments/flora-villas/unit_3.jpg', photos: '18', tag: 'Hot Deal', beds: '5 Beds', baths: '5.5 Baths', area: '540 m²' },
            { title: '6-Bedroom Corner Villa with Driver & Maid Quarters', loc: 'Huzoom District, North Lusail', price: '5,850,000', img: '/images/developments/flora-villas/unit_4.jpg', photos: '22', tag: 'Corner Estate', beds: '6 Beds', baths: '7.5 Baths', area: '710 m²' },
            { title: 'Executive 4-Bedroom Villa with Elevator & Maid Suite', loc: 'Huzoom District, North Lusail', price: '3,950,000', img: '/images/developments/flora-villas/hero.jpg', photos: '16', tag: 'Off-Plan', beds: '4 Beds', baths: '5 Baths', area: '480 m²' },
            { title: 'Royal Waterfront Estate with Private Swimming Pool', loc: 'Huzoom District, North Lusail', price: '6,200,000', img: '/images/developments/skala-villas/sk-feature-4.jpg', photos: '30', tag: 'Royal Estate', beds: '6 Beds', baths: '8 Baths', area: '780 m²' }
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
    <a href="/en/development/${c.slug}" class="explore-dev-card" data-aos="fade-up" data-aos-duration="1000">
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
    <article class="modern-unit-card" data-aos="fade-up" data-aos-duration="1000">
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

      .modern-listings-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 24px; }
      @media (min-width: 768px) { .modern-listings-grid { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; } }
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

      
      /* Fix layout container alignment so content NEVER touches the viewport edge */
      .developmentDetailsContent,
      .developmentDetailsTop,
      .container {
        max-width: 1320px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        padding-left: 28px !important;
        padding-right: 28px !important;
        box-sizing: border-box !important;
      }

      @media (min-width: 1280px) {
        .developmentDetailsContent {
          display: flex !important;
          flex-direction: row !important;
          align-items: flex-start !important;
          gap: 3.5rem !important;
          padding-left: 28px !important;
          padding-right: 28px !important;
          padding-top: 3.5rem !important;
          padding-bottom: 3.5rem !important;
          margin-left: auto !important;
          margin-right: auto !important;
          max-width: 1320px !important;
          width: 100% !important;
        }
      }

      @media (max-width: 768px) {
        .developmentDetailsContent,
        .developmentDetailsTop,
        .container {
          padding-left: 16px !important;
          padding-right: 16px !important;
        }
      }

      .developmentDetailsContent__firstSection {
        flex: 1 1 0% !important;
        min-width: 0 !important;
        padding-left: 0 !important;
      }

      .developmentDetailsContent__secondSection {
        width: 380px !important;
        min-width: 380px !important;
        flex-shrink: 0 !important;
      }

      @media (max-width: 1024px) {
        .developmentDetailsContent__secondSection {
          width: 100% !important;
          min-width: 100% !important;
        }
      }

      /* Clean luxury typography & borders for section headers */
      .developmentDetailsContent__firstSection h2 {
        font-family: optimaltstd-medium, sans-serif !important;
        font-size: 1.35rem !important;
        font-weight: 700 !important;
        color: #111111 !important;
        letter-spacing: 0.5px !important;
        position: relative !important;
        padding-bottom: 8px !important;
        margin-bottom: 16px !important;
      }

      .developmentDetailsContent__firstSection h2::after {
        content: "" !important;
        position: absolute !important;
        left: 0 !important;
        bottom: 0 !important;
        width: 40px !important;
        height: 3px !important;
        background: #b89c4c !important;
        border-radius: 2px !important;
      }

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
            <div class="developmentDetailsTop__gallery" data-aos="fade-in" data-aos-duration="1200">
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
                        <li><a href="javascript:void(0);">Developments</a></li>
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
                    <article class="detailsTable" data-aos="fade-up" data-aos-duration="800">
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
                    <article class="detailsTable" data-aos="fade-up" data-aos-duration="800">
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

                <div class="developmentDescriptionArea" data-aos="fade-up" data-aos-duration="800" mt-4xl font-primary text-sm text-dark-grey-300 richContent">
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
                    <div class="qatar-consultancy-card" data-aos="fade-left" data-aos-duration="1000">
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
