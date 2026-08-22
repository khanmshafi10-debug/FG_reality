/**
 * Prime View Real Estate - Smooth Floating Consultancy Sidebar
 * Provides a buttery-smooth, physics-based lerp floating animation when scrolling down and up.
 */
(function() {
  'use strict';

  function initFloatingCard() {
    const card = document.querySelector('.qatar-consultancy-card');
    const firstSection = document.querySelector('.developmentDetailsContent__firstSection');
    const secondSection = document.querySelector('.developmentDetailsContent__secondSection');
    const content = document.querySelector('.developmentDetailsContent');

    if (!card || !firstSection || !content) return;

    // Ensure parents have correct layout constraints
    if (secondSection) {
      secondSection.style.overflow = 'visible';
      secondSection.style.position = 'relative';
      secondSection.style.alignSelf = 'stretch';
    }
    content.style.overflow = 'visible';

    // Remove any conflicting AOS attributes on the card
    card.removeAttribute('data-aos');
    card.removeAttribute('data-aos-duration');
    card.style.willChange = 'transform';
    card.style.transform = 'translate3d(0, 0, 0)';

    let currentY = 0;
    let targetY = 0;
    let isFloating = false;
    let rafId = null;

    function update() {
      // On mobile / tablet (< 1024px), keep standard static flow
      if (window.innerWidth < 1024) {
        if (currentY !== 0) {
          currentY = 0;
          targetY = 0;
          card.style.transform = 'none';
          card.classList.remove('is-floating');
        }
        rafId = requestAnimationFrame(update);
        return;
      }

      const contentRect = content.getBoundingClientRect();
      const firstSectionHeight = firstSection.offsetHeight;
      const cardHeight = card.offsetHeight;
      
      // Maximum travel distance within the content section
      const maxTravel = Math.max(0, firstSectionHeight - cardHeight);

      // Distance from top of viewport to maintain luxury floating clearance below navbar
      const navbarOffset = 100;

      // Calculate desired target position
      const rawTargetY = navbarOffset - contentRect.top;
      targetY = Math.max(0, Math.min(rawTargetY, maxTravel));

      // Smooth Lerp easing (0.12 gives smooth, silky momentum)
      const diff = targetY - currentY;
      if (Math.abs(diff) > 0.05) {
        currentY += diff * 0.12;
      } else {
        currentY = targetY;
      }

      card.style.transform = 'translate3d(0, ' + currentY.toFixed(2) + 'px, 0)';

      // Dynamic floating state & glowing shadow
      if (currentY > 15) {
        if (!isFloating) {
          card.classList.add('is-floating');
          isFloating = true;
        }
      } else {
        if (isFloating) {
          card.classList.remove('is-floating');
          isFloating = false;
        }
      }

      rafId = requestAnimationFrame(update);
    }

    // Start animation loop
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(update);

    window.addEventListener('resize', function() {
      if (window.innerWidth < 1024) {
        currentY = 0;
        targetY = 0;
        card.style.transform = 'none';
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingCard);
  } else {
    initFloatingCard();
  }
})();
