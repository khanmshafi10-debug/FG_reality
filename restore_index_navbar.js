const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let content = fs.readFileSync(filePath, 'utf8');

const heroOpening = `        <section class="hero-section">
            <article class="hero">
                <section class="hero__splash" data-hero-splash data-video-webm="/video/hero-video.webm?v=6" data-video-mp4="/video/hero-video.mp4?v=6" data-video-poster="/video/poster.jpg?v=6">
                    <picture class="hero__splash-image">
                        <source media="(max-width: 767px)" type="image/avif" srcset="/images/hero/hero-mobile.avif?v=1787000000" />
                        <source media="(max-width: 767px)" type="image/webp" srcset="/images/hero/hero-mobile.webp?v=1787000000" />
                        <source media="(max-width: 1279px)" type="image/avif" srcset="/images/hero/hero-tablet.avif?v=1787000000" />
                        <source media="(max-width: 1279px)" type="image/webp" srcset="/images/hero/hero-tablet.webp?v=1787000000" />
                        <source media="(min-width: 1280px)" type="image/avif" srcset="/images/hero/hero-desktop.avif?v=1787000000" />
                        <source media="(min-width: 1280px)" type="image/webp" srcset="/images/hero/hero-desktop.webp?v=1787000000" />
                        <img src="/images/hero/hero-desktop.jpg?v=1787000000" alt="Prime View Real Estate Hero" fetchpriority="high" decoding="async" width="1920" height="1080" />
                    </picture>
                    <video class="hero__splash-video" autoplay muted loop playsinline preload="auto" poster="/video/poster.jpg?v=6">
                        <source src="/video/hero-video.webm?v=6" type="video/webm" />
                        <source src="/video/hero-video.mp4?v=6" type="video/mp4" />
                    </video>
                </section>
                <section class="hero__content">
                    <header class="hero__content-top">
                        <nav class="navigationMobile">
                            <section class="navigationMobile__left">
                                <button class="navigationMobile__left-hamburger" aria-label="Open menu">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><use href="#svgIcon-menu"/></svg>
                                </button>
                                <div class="navigationMobile__left-mobileLogo">
                                    <a href="/" aria-label="Prime View Real Estate Home" class="flex align-center">
                                        <img src="/images/prime-view-logo.png" alt="Prime View Real Estate" style="height: 38px; width: auto; max-width: 200px; display: block;">
                                    </a>
                                </div>
                                <div class="navigationMobile__left-desktopLogo">
                                    <a href="/" aria-label="Prime View Real Estate Home">
                                        <img src="/images/prime-view-logo.png" alt="Prime View Real Estate" style="height: 48px; width: auto; max-width: 260px; display: block; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));">
                                    </a>
                                </div>
                            </section>
                            <section class="navigationMobile__right">
                                <ul class="headerNavLinks" role="menubar">
                                    <li class="headerNavLink headerNavLink--withSubmenu" role="none" data-menu-item="0">
                                        <a href="/en/rent/properties-for-rent" role="menuitem" aria-haspopup="true" aria-expanded="false">Rent</a>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><use href="#svgIcon-chevron-down-menu"/></svg>
                                        <div class="navMegaMenu devMegaMenuCustom" role="menu" aria-label="Rent submenu" data-submenu="0" style="width: 820px; max-width: calc(100vw - 32px); left: 0; transform: none; background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-radius: 14px; box-shadow: 0 20px 50px rgba(0,0,0,0.18), 0 0 20px rgba(201,168,76,0.12); border: 1px solid rgba(201,168,76,0.3); padding: 24px 22px; box-sizing: border-box;">
                                            <div class="navMegaMenu__body" style="display: flex; gap: 20px; width: 100%; box-sizing: border-box; justify-content: space-between;">
                <div class="navMegaMenu__column" style="flex: 1; min-width: 170px;">
                    <span class="navMegaMenu__column-heading" style="color: #c9a84c; font-weight: 700; font-size: 0.72rem; letter-spacing: 1.2px; text-transform: uppercase; border-bottom: 1.5px solid rgba(201,168,76,0.35); padding-bottom: 6px; margin-bottom: 12px; display: block;">LUXURY RENTAL VILLAS</span>
                    <ul class="navMegaMenu__column-list" style="list-style: none; padding: 0; margin: 0;">
                        <li class="navMegaMenu__column-item" role="none" style="margin-bottom: 8px;">
                            <a href="/en/development/flora-villas.html" class="navMegaMenu__column-link" role="menuitem" style="font-size: 0.84rem; font-weight: 500; color: #1e1e24; text-decoration: none; transition: all 0.2s ease; display: inline-block; white-space: nowrap;">Flora Villas</a>
                        </li>
                        <li class="navMegaMenu__column-item" role="none" style="margin-bottom: 8px;">
                            <a href="/en/development/skala-villas.html" class="navMegaMenu__column-link" role="menuitem" style="font-size: 0.84rem; font-weight: 500; color: #1e1e24; text-decoration: none; transition: all 0.2s ease; display: inline-block; white-space: nowrap;">Skala Villas</a>
                        </li>
                        <li class="navMegaMenu__column-item" role="none" style="margin-bottom: 8px;">
                            <a href="/en/development/via-doro.html" class="navMegaMenu__column-link" role="menuitem" style="font-size: 0.84rem; font-weight: 500; color: #1e1e24; text-decoration: none; transition: all 0.2s ease; display: inline-block; white-space: nowrap;">Via D'Oro Villas</a>
                        </li>`;

const startIdx = content.indexOf('<section class="hero-section">');
const endMarker = '<a href="/en/development/bliss-gardens.html"';
const endIdx = content.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + heroOpening + '\n                        <li class="navMegaMenu__column-item" role="none" style="margin-bottom: 8px;">\n                            ' + content.substring(endIdx);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✓ index.html hero section and previous transparent navbar restored successfully!');
} else {
  console.error('Error: markers not found', startIdx, endIdx);
}
