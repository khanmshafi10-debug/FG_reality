const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// The upgraded blog section HTML
const blogSectionHtml = `
<section class="latestBlogPosts latestBlogPosts--carousel" style="max-width: 1400px; margin: 60px auto 70px; padding: 0 24px;">
    <div class="latestBlogPosts__header" style="display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid #e8e4dc; padding-bottom: 16px;">
        <div>
            <span style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.76rem; font-weight: 700; color: #b8902a; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
                <span style="width: 7px; height: 7px; background: #b8902a; border-radius: 50%;"></span>
                Market Insights & Trends
            </span>
            <h2 style="font-family: 'Cinzel', serif; font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 700; color: #111827; margin: 0;">
                Latest From The Blog
            </h2>
        </div>
        <span class="arrowLink">
            <a href="/en/developments.html" class="latestBlogPosts__header-link" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.92rem; font-weight: 700; color: #b8902a; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s;" onmouseover="this.style.color='#111827'" onmouseout="this.style.color='#b8902a'">
                View all articles <i class="fa-solid fa-arrow-right" style="font-size: 0.85rem;"></i>
            </a>
        </span>
    </div>

    <div class="latestBlogPosts__grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
        
        <!-- Blog Card 1 -->
        <article class="latestBlogPosts__card" style="background: #ffffff; border: 1px solid #e8e4dc; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04); transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(0,0,0,0.08)'; this.style.borderColor='rgba(197, 168, 128, 0.6)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.04)'; this.style.borderColor='#e8e4dc'">
            <a href="/en/developments.html" class="latestBlogPosts__card-link" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%;">
                <div class="latestBlogPosts__card-image" style="position: relative; height: 210px; overflow: hidden; background: #1a1a1a;">
                    <img class="latestBlogPosts__card-image-img" src="/images/developments/city-avenue/city_hero_new.jpg" alt="Why Retail Space Demand Is Changing Across Qatar" width="768" height="432" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'" />
                    <span style="position: absolute; top: 12px; left: 12px; background: rgba(15, 13, 10, 0.75); backdrop-filter: blur(8px); color: #E2C068; border: 1px solid rgba(226, 192, 104, 0.35); font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 20px; text-transform: uppercase;">Retail & Commercial</span>
                </div>
                <div class="latestBlogPosts__card-body" style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                    <h3 class="latestBlogPosts__card-title" style="font-family: 'Cinzel', serif; font-size: 1.1rem; font-weight: 700; color: #1c1a16; margin: 0 0 10px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        Why Retail Space Demand Is Changing Across Qatar
                    </h3>
                    <p class="latestBlogPosts__card-excerpt" style="font-size: 0.85rem; color: #6b7280; line-height: 1.6; margin: 0 0 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; flex-grow: 1;">
                        Key Takeaways: Qatar’s retail market is shifting from traditional shopping centers to mixed-use lifestyle destinations, pedestrian boulevards, and vibrant commercial hubs.
                    </p>
                    <span class="latestBlogPosts__card-cta" style="font-size: 0.84rem; font-weight: 700; color: #b8902a; display: inline-flex; align-items: center; gap: 6px; margin-top: auto;">
                        Read more <i class="fa-solid fa-arrow-right" style="font-size: 0.78rem;"></i>
                    </span>
                </div>
            </a>
        </article>

        <!-- Blog Card 2 -->
        <article class="latestBlogPosts__card" style="background: #ffffff; border: 1px solid #e8e4dc; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04); transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(0,0,0,0.08)'; this.style.borderColor='rgba(197, 168, 128, 0.6)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.04)'; this.style.borderColor='#e8e4dc'">
            <a href="/en/developments.html" class="latestBlogPosts__card-link" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%;">
                <div class="latestBlogPosts__card-image" style="position: relative; height: 210px; overflow: hidden; background: #1a1a1a;">
                    <img class="latestBlogPosts__card-image-img" src="/images/developments/skala-tower/hero.jpg" alt="Why Off Plan Properties in Qatar Continue to Attract Global Investors" width="768" height="432" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'" />
                    <span style="position: absolute; top: 12px; left: 12px; background: rgba(15, 13, 10, 0.75); backdrop-filter: blur(8px); color: #E2C068; border: 1px solid rgba(226, 192, 104, 0.35); font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 20px; text-transform: uppercase;">Investment Trends</span>
                </div>
                <div class="latestBlogPosts__card-body" style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                    <h3 class="latestBlogPosts__card-title" style="font-family: 'Cinzel', serif; font-size: 1.1rem; font-weight: 700; color: #1c1a16; margin: 0 0 10px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        Why Off Plan Properties in Qatar Continue to Attract Global Investors
                    </h3>
                    <p class="latestBlogPosts__card-excerpt" style="font-size: 0.85rem; color: #6b7280; line-height: 1.6; margin: 0 0 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; flex-grow: 1;">
                        Key Takeaway: Off-plan properties remain one of the highest yielding investment opportunities in Qatar, pairing low down payments with 6 to 8-year flexible installment terms.
                    </p>
                    <span class="latestBlogPosts__card-cta" style="font-size: 0.84rem; font-weight: 700; color: #b8902a; display: inline-flex; align-items: center; gap: 6px; margin-top: auto;">
                        Read more <i class="fa-solid fa-arrow-right" style="font-size: 0.78rem;"></i>
                    </span>
                </div>
            </a>
        </article>

        <!-- Blog Card 3 -->
        <article class="latestBlogPosts__card" style="background: #ffffff; border: 1px solid #e8e4dc; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04); transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(0,0,0,0.08)'; this.style.borderColor='rgba(197, 168, 128, 0.6)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.04)'; this.style.borderColor='#e8e4dc'">
            <a href="/en/developments.html" class="latestBlogPosts__card-link" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%;">
                <div class="latestBlogPosts__card-image" style="position: relative; height: 210px; overflow: hidden; background: #1a1a1a;">
                    <img class="latestBlogPosts__card-image-img" src="/images/developments/rivan/hero.jpg" alt="Why More International Businesses Are Leasing Office Space in Lusail" width="768" height="432" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'" />
                    <span style="position: absolute; top: 12px; left: 12px; background: rgba(15, 13, 10, 0.75); backdrop-filter: blur(8px); color: #E2C068; border: 1px solid rgba(226, 192, 104, 0.35); font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 20px; text-transform: uppercase;">Commercial Growth</span>
                </div>
                <div class="latestBlogPosts__card-body" style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                    <h3 class="latestBlogPosts__card-title" style="font-family: 'Cinzel', serif; font-size: 1.1rem; font-weight: 700; color: #1c1a16; margin: 0 0 10px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        Why More International Businesses Are Leasing Office Space in Lusail
                    </h3>
                    <p class="latestBlogPosts__card-excerpt" style="font-size: 0.85rem; color: #6b7280; line-height: 1.6; margin: 0 0 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; flex-grow: 1;">
                        Key Takeaway: Lusail has rapidly evolved into Qatar’s flagship business destination, attracting multinationals and regional corporate headquarters with smart infrastructure.
                    </p>
                    <span class="latestBlogPosts__card-cta" style="font-size: 0.84rem; font-weight: 700; color: #b8902a; display: inline-flex; align-items: center; gap: 6px; margin-top: auto;">
                        Read more <i class="fa-solid fa-arrow-right" style="font-size: 0.78rem;"></i>
                    </span>
                </div>
            </a>
        </article>

        <!-- Blog Card 4 -->
        <article class="latestBlogPosts__card" style="background: #ffffff; border: 1px solid #e8e4dc; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04); transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(0,0,0,0.08)'; this.style.borderColor='rgba(197, 168, 128, 0.6)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.04)'; this.style.borderColor='#e8e4dc'">
            <a href="/en/developments.html" class="latestBlogPosts__card-link" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%;">
                <div class="latestBlogPosts__card-image" style="position: relative; height: 210px; overflow: hidden; background: #1a1a1a;">
                    <img class="latestBlogPosts__card-image-img" src="/images/developments/valencia-residence/hero.jpg" alt="Why Private Marinas and Waterfront Access Are Driving Luxury Property Demand" width="768" height="432" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'" />
                    <span style="position: absolute; top: 12px; left: 12px; background: rgba(15, 13, 10, 0.75); backdrop-filter: blur(8px); color: #E2C068; border: 1px solid rgba(226, 192, 104, 0.35); font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 20px; text-transform: uppercase;">Waterfront Living</span>
                </div>
                <div class="latestBlogPosts__card-body" style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                    <h3 class="latestBlogPosts__card-title" style="font-family: 'Cinzel', serif; font-size: 1.1rem; font-weight: 700; color: #1c1a16; margin: 0 0 10px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        Why Private Marinas and Waterfront Access Are Driving Luxury Demand
                    </h3>
                    <p class="latestBlogPosts__card-excerpt" style="font-size: 0.85rem; color: #6b7280; line-height: 1.6; margin: 0 0 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; flex-grow: 1;">
                        Key Takeaway: Private yacht berths and direct coastal beach access on Qetaifan and Pearl Island command the highest capital appreciation and prestige in the Gulf region.
                    </p>
                    <span class="latestBlogPosts__card-cta" style="font-size: 0.84rem; font-weight: 700; color: #b8902a; display: inline-flex; align-items: center; gap: 6px; margin-top: auto;">
                        Read more <i class="fa-solid fa-arrow-right" style="font-size: 0.78rem;"></i>
                    </span>
                </div>
            </a>
        </article>

        <!-- Blog Card 5 -->
        <article class="latestBlogPosts__card" style="background: #ffffff; border: 1px solid #e8e4dc; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.04); transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 32px rgba(0,0,0,0.08)'; this.style.borderColor='rgba(197, 168, 128, 0.6)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 20px rgba(0,0,0,0.04)'; this.style.borderColor='#e8e4dc'">
            <a href="/en/developments.html" class="latestBlogPosts__card-link" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%;">
                <div class="latestBlogPosts__card-image" style="position: relative; height: 210px; overflow: hidden; background: #1a1a1a;">
                    <img class="latestBlogPosts__card-image-img" src="/images/developments/milos/hero.jpg" alt="Why Architecture Is Becoming a Competitive Advantage in Qatar’s Luxury Property Market" width="768" height="432" loading="lazy" decoding="async" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'" />
                    <span style="position: absolute; top: 12px; left: 12px; background: rgba(15, 13, 10, 0.75); backdrop-filter: blur(8px); color: #E2C068; border: 1px solid rgba(226, 192, 104, 0.35); font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 20px; text-transform: uppercase;">Architecture & Design</span>
                </div>
                <div class="latestBlogPosts__card-body" style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                    <h3 class="latestBlogPosts__card-title" style="font-family: 'Cinzel', serif; font-size: 1.1rem; font-weight: 700; color: #1c1a16; margin: 0 0 10px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        Why Architecture Is Becoming a Competitive Advantage in Luxury Real Estate
                    </h3>
                    <p class="latestBlogPosts__card-excerpt" style="font-size: 0.85rem; color: #6b7280; line-height: 1.6; margin: 0 0 16px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; flex-grow: 1;">
                        Key Takeaway: Iconic curved glass facades, private plunge pools, and sustainable smart technologies have become the ultimate differentiator for luxury properties.
                    </p>
                    <span class="latestBlogPosts__card-cta" style="font-size: 0.84rem; font-weight: 700; color: #b8902a; display: inline-flex; align-items: center; gap: 6px; margin-top: auto;">
                        Read more <i class="fa-solid fa-arrow-right" style="font-size: 0.78rem;"></i>
                    </span>
                </div>
            </a>
        </article>

    </div>
</section>
`;

const sectionStart = html.indexOf('<section class="latestBlogPosts');
const sectionEnd = html.indexOf('</section>\n            </section>\n        </div>\n    </main>');

if (sectionStart > -1 && sectionEnd > -1) {
  html = html.slice(0, sectionStart) + blogSectionHtml + '\n            </section>\n        </div>\n    </main>' + html.slice(sectionEnd + '</section>\n            </section>\n        </div>\n    </main>'.length);
} else {
  // Try alternative marker
  const altEnd = html.indexOf('<div class="footerWrapper"');
  if (sectionStart > -1 && altEnd > -1) {
    const mainClose = '            </section>\n        </div>\n    </main>\n    ';
    html = html.slice(0, sectionStart) + blogSectionHtml + '\n' + mainClose + html.slice(altEnd);
  }
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Successfully fixed blog section images and design in index.html!');
