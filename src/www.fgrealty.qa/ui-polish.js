/* =========================================================================
   Prime View Real Estate — motion & interaction layer
   -------------------------------------------------------------------------
   Progressive enhancement only. Every reveal state is gated behind the
   `pv-anim` class this file adds, so with JS disabled the page renders fully
   visible instead of stuck at opacity:0.
   ========================================================================= */
(function () {
  'use strict';

  var doc = document;
  var root = doc.documentElement;

  /* ---------------------------------------------------------------- *
   * 1. Scroll reveal
   * ---------------------------------------------------------------- */

  // Groups of elements to reveal, with a per-group stagger step (ms).
  var REVEAL_GROUPS = [
    { sel: '.p-card', stagger: 55 },
    { sel: '.galleryCard', stagger: 45 },
    { sel: '.developmentCard', stagger: 55 },
    { sel: '.areaCard', stagger: 55 },
    { sel: '.luxuryGallery__header', stagger: 0 },
    { sel: '.pvFooter__col', stagger: 40 },
    { sel: '.pvFooter__brand', stagger: 0 },
    { sel: '.sectionHeading, .pageBlock > h2, .pageBlock > header', stagger: 0 }
  ];

  function collectTargets() {
    var targets = [];
    REVEAL_GROUPS.forEach(function (group) {
      var nodes = doc.querySelectorAll(group.sel);
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        if (el.hasAttribute('data-pv-reveal')) continue;
        el.setAttribute('data-pv-reveal', '');
        // Cap the stagger so a long grid doesn't wait seconds for its tail.
        var delay = Math.min(i, 8) * group.stagger;
        if (delay) el.style.setProperty('--pv-delay', delay + 'ms');
        targets.push(el);
      }
    });
    return targets;
  }

  function show(el) {
    el.classList.add('is-pv-visible');
  }

  function initReveal() {
    var targets = collectTargets();
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(show);
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          show(entry.target);
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );

    targets.forEach(function (el) {
      io.observe(el);
    });

    // Safety net: never leave content hidden because an observer misfired
    // (print, restored scroll position, zero-height parent, etc.).
    window.setTimeout(function () {
      targets.forEach(show);
    }, 2600);
  }

  /* ---------------------------------------------------------------- *
   * 2. Scrolled-page state (drives the glass header treatment)
   * ---------------------------------------------------------------- */

  function initScrollState() {
    var ticking = false;
    function update() {
      root.classList.toggle('pv-scrolled', window.pageYOffset > 24);
      ticking = false;
    }
    window.addEventListener(
      'scroll',
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(update);
      },
      { passive: true }
    );
    update();
  }

  /* ---------------------------------------------------------------- *
   * 3. Pointer-tracked sheen on premium cards
   * ---------------------------------------------------------------- */

  function initCardSheen() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    doc.addEventListener(
      'pointermove',
      function (e) {
        var card = e.target.closest && e.target.closest('.p-card, .galleryCard');
        if (!card) return;
        var r = card.getBoundingClientRect();
        card.style.setProperty('--pv-mx', ((e.clientX - r.left) / r.width) * 100 + '%');
        card.style.setProperty('--pv-my', ((e.clientY - r.top) / r.height) * 100 + '%');
      },
      { passive: true }
    );
  }

  /* ---------------------------------------------------------------- *
   * Boot
   * ---------------------------------------------------------------- */

  function boot() {
    root.classList.add('pv-anim');
    initReveal();
    initScrollState();
    initCardSheen();
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
