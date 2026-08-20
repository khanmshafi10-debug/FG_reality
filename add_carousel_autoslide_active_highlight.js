const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'src/www.fgrealty.qa/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace the old script block inside index.html with the enhanced auto-slide & dynamic center highlight script
const oldScriptPattern = /<script>\s*function scrollReelsTrack\(direction\)[^]*?<\/script>/s;

const newScriptAndStyle = `
<style id="pvCarouselActiveHighlightCSS">
/* Active Card Highlight & Top Accent Bar */
.pvReelFrame {
  position: relative;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

/* Red/Gold top accent bar on camera notch */
.pvReelNotch::after {
  content: '';
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 3px;
  background: linear-gradient(90deg, #e11d48, #c5a880);
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.pvReelCard--active .pvReelNotch::after,
.pvReelCard:hover .pvReelNotch::after {
  opacity: 1;
}

/* Active middle pop-up state */
.pvReelCard--active .pvReelFrame {
  border-color: #c5a880 !important;
  transform: scale(1.08) translateY(-12px) !important;
  box-shadow: 0 25px 60px rgba(197, 168, 128, 0.4), 0 0 20px rgba(225, 29, 72, 0.2) !important;
}

.pvReelCard--active .pvReelImg {
  transform: scale(1.08);
}
</style>

<script>
(function() {
  let autoSlideTimer = null;

  window.scrollReelsTrack = function(direction) {
    const track = document.getElementById('fgReelsTrack');
    if (track) {
      const cardWidth = 294; // card width + gap
      track.scrollBy({ left: cardWidth * direction, behavior: 'smooth' });
    }
  };

  function updateActiveCenterCard() {
    const track = document.getElementById('fgReelsTrack');
    if (!track) return;

    const cards = track.querySelectorAll('.pvReelCard');
    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;

    let minDistance = Infinity;
    let closestCard = null;

    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(trackCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestCard = card;
      }
    });

    cards.forEach(card => card.classList.remove('pvReelCard--active'));
    if (closestCard) {
      closestCard.classList.add('pvReelCard--active');
    }
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(() => {
      const track = document.getElementById('fgReelsTrack');
      if (!track) return;

      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScrollLeft - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: 294, behavior: 'smooth' });
      }
    }, 3200);
  }

  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('fgReelsTrack');
    if (!track) return;

    // Listen to scroll to update active center card
    track.addEventListener('scroll', updateActiveCenterCard, { passive: true });
    
    // Initial center card calculation
    setTimeout(updateActiveCenterCard, 300);

    // Auto-slide controls
    startAutoSlide();

    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);
    track.addEventListener('touchstart', stopAutoSlide, { passive: true });
    track.addEventListener('touchend', startAutoSlide, { passive: true });

    // Drag to scroll functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      stopAutoSlide();
    });

    track.addEventListener('mouseleave', () => { isDown = false; });
    track.addEventListener('mouseup', () => { 
      isDown = false; 
      startAutoSlide();
    });

    track.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    });
  });
})();
</script>
`;

if (oldScriptPattern.test(html)) {
  html = html.replace(oldScriptPattern, newScriptAndStyle);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('✨ SUCCESS: Added Auto-Slide & Dynamic Center Active Highlight to Carousel!');
} else {
  // Append right before closing </body> or before blog
  const insPoint = html.indexOf('</section>\n\n<!-- ════════════════════════════════════════════════════════════════\n     SECTION 1');
  if (insPoint > -1) {
    html = html.slice(0, insPoint) + newScriptAndStyle + html.slice(insPoint);
    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('✨ SUCCESS: Appended Auto-Slide script into index.html!');
  } else {
    console.error('❌ Could not locate script injection point');
  }
}
