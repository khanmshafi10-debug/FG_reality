const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace old media queries inside pvLightThemeProjectsCSS with ultra-responsive mobile styling
const mobileCSSReplacement = `
/* ════════════════════════════════════════════════════════════════
   ULTRA-RESPONSIVE MOBILE STYLING & COMPATIBILITY FIXES
   ════════════════════════════════════════════════════════════════ */

.pvGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 1100px) {
  .pvGrid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .pvSecLight {
    padding: 48px 0;
  }

  .pvContainer {
    padding: 0 16px;
  }

  .pvSecHeader {
    margin-bottom: 30px;
    padding: 0 8px;
  }

  .pvPill {
    font-size: 0.7rem;
    padding: 6px 16px;
    letter-spacing: 1.2px;
  }

  .pvSecTitle {
    font-size: 1.65rem;
    line-height: 1.25;
    margin-bottom: 8px;
  }

  .pvSecSub {
    font-size: 0.92rem;
    line-height: 1.55;
  }

  /* Carousel Reel Mobile Optimization */
  .pvReelsSec {
    padding: 48px 0;
  }

  .pvReelsTrack {
    padding: 16px 20px 24px;
    gap: 16px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .pvReelCard {
    flex: 0 0 82vw;
    max-width: 280px;
    scroll-snap-align: center;
  }

  .pvReelFrame {
    height: 440px;
    border-radius: 28px;
    border-width: 3px;
  }

  .pvReelTitle {
    font-size: 1.15rem;
  }

  .pvReelBody {
    padding: 16px 14px 18px;
  }

  .pvReelCta {
    padding: 9px;
    font-size: 0.78rem;
  }

  /* Grid Cards Mobile Optimization */
  .pvGrid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .pvLightCard {
    border-radius: 16px;
  }

  .pvLightCard__media {
    height: 200px;
  }

  .pvLightCard__content {
    padding: 18px 16px;
  }

  .pvLightCard__title {
    font-size: 1.18rem;
    margin-bottom: 2px;
  }

  .pvLightCard__sub {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }

  .pvLightCard__desc {
    font-size: 0.82rem;
    line-height: 1.5;
    margin-bottom: 14px;
  }

  .pvLightCard__specs {
    gap: 8px;
    padding: 10px 12px;
    margin-bottom: 16px;
  }

  .pvSpec__label {
    font-size: 0.6rem;
  }

  .pvSpec__val {
    font-size: 0.8rem;
  }

  .pvSpec--price .pvSpec__val {
    font-size: 0.9rem;
  }

  .pvLightCard__actions {
    gap: 8px;
  }

  .pvLightBtn {
    padding: 11px 12px;
    font-size: 0.8rem;
  }

  .pvReelNav {
    display: none;
  }
}

@media (max-width: 480px) {
  .pvSecTitle {
    font-size: 1.45rem;
  }

  .pvReelCard {
    flex: 0 0 85vw;
    max-width: 270px;
  }

  .pvReelFrame {
    height: 420px;
  }

  .pvLightCard__media {
    height: 185px;
  }

  .pvLightCard__actions {
    flex-direction: row;
  }

  .pvLightBtn--wa {
    padding: 11px 14px;
  }
}
`;

const mediaTargetPattern = /\/\* ── GRID LIGHT CARDS \(STRICT 3 COLUMNS FOR PERFECT BALANCED ROWS\) ── \*\/\s*\.pvGrid\s*\{[^]*?\}\s*@media\s*\([^\)]+\)\s*\{[^]*?\}\s*@media\s*\([^\)]+\)\s*\{[^]*?\}/s;

if (mediaTargetPattern.test(html)) {
  html = html.replace(mediaTargetPattern, mobileCSSReplacement);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('✨ SUCCESS: Applied ultra-responsive mobile CSS rules to index.html!');
} else {
  // Replace the old media block directly
  const oldMediaPattern = /@media \s*\(max-width: 1024px\)[^]*?@media \s*\(max-width: 768px\)[^]*?\}/s;
  if (oldMediaPattern.test(html)) {
    html = html.replace(oldMediaPattern, mobileCSSReplacement);
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('✨ SUCCESS: Replaced mobile media query block in index.html!');
  } else {
    console.error('❌ Target media query block not found');
  }
}
