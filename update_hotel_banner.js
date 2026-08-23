const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(filePath, 'utf8');

const bannerClassIdx = html.indexOf('class="fgHotelsBanner"');
if (bannerClassIdx === -1) {
    console.error('Could not find fgHotelsBanner in index.html');
    process.exit(1);
}

// Find the enclosing <section class="pageBlock"> start before bannerClassIdx
const pageBlockStart = html.lastIndexOf('<section class="pageBlock">', bannerClassIdx);
// Find the closing </section> of this block (there are two </section> tags after the banner: </section> and </section>)
const bannerEndDiv = html.indexOf('</div>', html.indexOf('fgHotelsBanner__cta-button'));
const firstSectionClose = html.indexOf('</section>', bannerEndDiv);
const pageBlockEnd = html.indexOf('</section>', firstSectionClose + 10) + '</section>'.length;

console.log('Old section slice:');
console.log(html.substring(pageBlockStart, pageBlockEnd));

const newBannerSection = `<section class="pageBlock fgHotelsSectionWrapper">
                <style id="fgHotelsBannerRedesignCSS">
                    /* ── Premium Cinematic Hotel Banner ── */
                    .fgHotelsBanner {
                        position: relative;
                        width: 100%;
                        min-height: 320px;
                        margin: 0 auto 1.5rem;
                        border-radius: 16px;
                        overflow: hidden;
                        background: linear-gradient(135deg, #070d1e 0%, #0c142b 45%, #141026 80%, #080b16 100%);
                        border: 1px solid rgba(197, 168, 128, 0.22);
                        box-shadow: 0 16px 45px rgba(5, 9, 20, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    /* Ambient Glow & Subtle Texture Overlay */
                    .fgHotelsBanner::before {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: 
                            radial-gradient(ellipse 70% 50% at 50% 25%, rgba(197, 168, 128, 0.18) 0%, transparent 70%),
                            radial-gradient(circle 350px at 15% 85%, rgba(35, 61, 110, 0.35) 0%, transparent 80%),
                            radial-gradient(circle 350px at 85% 85%, rgba(197, 168, 128, 0.12) 0%, transparent 80%),
                            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E");
                        pointer-events: none;
                        z-index: 1;
                    }

                    /* Soft Vignette Overlay */
                    .fgHotelsBanner::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        background: radial-gradient(circle at center, transparent 40%, rgba(5, 8, 18, 0.6) 100%);
                        pointer-events: none;
                        z-index: 1;
                    }

                    .fgHotelsBanner__content {
                        position: relative;
                        z-index: 3;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        padding: 3rem 1.5rem 2.75rem;
                        text-align: center;
                    }

                    /* Logo Badge with Glass Backdrop & Subtle Drop Shadow */
                    .fgHotelsBanner__logo {
                        position: static;
                        transform: none;
                        margin-bottom: 1.25rem;
                        padding: 8px 22px;
                        background: rgba(15, 23, 42, 0.6);
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                        border: 1px solid rgba(197, 168, 128, 0.28);
                        border-radius: 9999px;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35), 0 0 15px rgba(197, 168, 128, 0.12);
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.4s ease;
                    }

                    .fgHotelsBanner__logo:hover {
                        transform: translateY(-2px);
                        border-color: rgba(197, 168, 128, 0.55);
                        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.45), 0 0 20px rgba(197, 168, 128, 0.25);
                    }

                    .fgHotelsBanner__logo-image {
                        height: 26px;
                        width: auto;
                        display: block;
                        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
                    }

                    /* Heading Typography with Serif & Tight Letter Spacing */
                    .fgHotelsBanner__main-text {
                        font-family: var(--font-heading, "Cinzel", "Playfair Display", "Optima", "Georgia", serif);
                        font-size: 2.35rem;
                        font-weight: 600;
                        line-height: 1.2;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        color: #ffffff;
                        margin: 0 0 0.85rem 0;
                        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), 0 0 30px rgba(197, 168, 128, 0.2);
                        background: linear-gradient(180deg, #ffffff 30%, #e2d7c5 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    /* Refined Decorative Gold Divider */
                    .fgHotelsBanner__divider {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 12px;
                        width: 140px;
                        margin: 0.2rem auto 1.5rem auto;
                    }

                    .fgHotelsBanner__divider-line {
                        flex: 1;
                        height: 1px;
                        background: linear-gradient(90deg, transparent, rgba(197, 168, 128, 0.8), transparent);
                    }

                    .fgHotelsBanner__divider-gem {
                        width: 5px;
                        height: 5px;
                        background: #c5a880;
                        transform: rotate(45deg);
                        box-shadow: 0 0 8px #c5a880;
                    }

                    /* Tactile, Minimal & Refined CTA Button */
                    .fgHotelsBanner__cta-button {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        background: rgba(13, 20, 38, 0.75);
                        backdrop-filter: blur(8px);
                        -webkit-backdrop-filter: blur(8px);
                        border: 1px solid rgba(197, 168, 128, 0.5);
                        color: #f8fafc !important;
                        padding: 13px 36px !important;
                        font-family: var(--font-primary, "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif);
                        font-size: 0.95rem !important;
                        font-weight: 600;
                        letter-spacing: 0.5px;
                        border-radius: 8px;
                        cursor: pointer;
                        text-decoration: none;
                        box-shadow: 0 4px 18px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                        transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease, background 0.3s ease;
                    }

                    .fgHotelsBanner__cta-button:hover {
                        transform: translateY(-2px) scale(1.02);
                        background: rgba(22, 33, 62, 0.9);
                        border-color: #c5a880;
                        color: #ffffff !important;
                        box-shadow: 0 8px 25px rgba(197, 168, 128, 0.28), 0 0 15px rgba(197, 168, 128, 0.2);
                    }

                    .fgHotelsBanner__cta-button:active {
                        transform: translateY(0) scale(0.99);
                    }

                    /* Scroll / Load Animated Entrance (Power2 Easing) */
                    .fgHotelsBanner [data-banner-animate] {
                        opacity: 0;
                        transform: translateY(18px);
                        transition: opacity 0.75s cubic-bezier(0.25, 1, 0.5, 1), transform 0.75s cubic-bezier(0.25, 1, 0.5, 1);
                        will-change: opacity, transform;
                    }

                    .fgHotelsBanner.is-animated [data-banner-animate="1"] {
                        opacity: 1;
                        transform: translateY(0);
                        transition-delay: 0.05s;
                    }

                    .fgHotelsBanner.is-animated [data-banner-animate="2"] {
                        opacity: 1;
                        transform: translateY(0);
                        transition-delay: 0.18s;
                    }

                    .fgHotelsBanner.is-animated [data-banner-animate="3"] {
                        opacity: 1;
                        transform: translateY(0);
                        transition-delay: 0.3s;
                    }

                    .fgHotelsBanner.is-animated [data-banner-animate="4"] {
                        opacity: 1;
                        transform: translateY(0);
                        transition-delay: 0.42s;
                    }

                    /* Responsive Breakpoints */
                    @media (max-width: 768px) {
                        .fgHotelsBanner {
                            min-height: 280px;
                            margin-bottom: 1.25rem;
                            border-radius: 12px;
                        }
                        .fgHotelsBanner__content {
                            padding: 2.25rem 1rem 2rem;
                        }
                        .fgHotelsBanner__main-text {
                            font-size: 1.5rem;
                            letter-spacing: 1px;
                            line-height: 1.25;
                        }
                        .fgHotelsBanner__logo {
                            margin-bottom: 1rem;
                            padding: 6px 16px;
                        }
                        .fgHotelsBanner__logo-image {
                            height: 22px;
                        }
                        .fgHotelsBanner__divider {
                            width: 100px;
                            margin-bottom: 1.25rem;
                        }
                        .fgHotelsBanner__cta-button {
                            width: 100%;
                            max-width: 260px;
                            padding: 12px 24px !important;
                            font-size: 0.9rem !important;
                        }
                    }

                    @media (min-width: 1024px) {
                        .fgHotelsBanner__main-text {
                            font-size: 2.65rem;
                        }
                    }
                </style>

                <section class="px-2">
                    <div class="fgHotelsBanner">
                        <div class="fgHotelsBanner__content">
                            <div class="fgHotelsBanner__logo" data-banner-animate="1">
                                <img loading="lazy" decoding="async" width="225.71" height="40" src="../yourstay.qa/build/images/svg/yourstay_qa_logo.svg?v=3" alt="Yourstay Logo" class="fgHotelsBanner__logo-image">
                            </div>

                            <div class="fgHotelsBanner__main-text" data-banner-animate="2">
                                EXCEPTIONAL STAYS<br> EFFORTLESS BOOKING
                            </div>

                            <div class="fgHotelsBanner__divider" data-banner-animate="3">
                                <div class="fgHotelsBanner__divider-line"></div>
                                <div class="fgHotelsBanner__divider-gem"></div>
                                <div class="fgHotelsBanner__divider-line"></div>
                            </div>

                            <div data-banner-animate="4" style="display: flex; justify-content: center; width: 100%;">
                                <a href="/en/developments.html" class="fgHotelsBanner__cta-button">Explore Hotels</a>
                            </div>
                        </div>
                    </div>
                </section>

                <script>
                (function() {
                    function initHotelsBannerAnim() {
                        var banner = document.querySelector('.fgHotelsBanner');
                        if (!banner) return;
                        if ('IntersectionObserver' in window) {
                            var observer = new IntersectionObserver(function(entries) {
                                entries.forEach(function(entry) {
                                    if (entry.isIntersecting) {
                                        banner.classList.add('is-animated');
                                        observer.unobserve(banner);
                                    }
                                });
                            }, { threshold: 0.15 });
                            observer.observe(banner);
                        } else {
                            banner.classList.add('is-animated');
                        }
                    }
                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', initHotelsBannerAnim);
                    } else {
                        initHotelsBannerAnim();
                    }
                })();
                </script>
            </section>`;

html = html.substring(0, pageBlockStart) + newBannerSection + html.substring(pageBlockEnd);
fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully updated hotel banner in index.html!');
