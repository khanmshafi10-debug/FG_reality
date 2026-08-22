document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('mobileMenu');
    const panelsContainer = document.getElementById('mobileMenuPanels');
    const hamburger = document.querySelector('.navigationMobile__left-hamburger');
    if (!menu || !panelsContainer) return;
    const panelHistory = ['root'];
    // Open Mobile Drawer
    function openMenu() {
        menu.setAttribute('aria-hidden', 'false');
        menu.classList.add('mobileMenu--open');
        document.body.style.overflow = 'hidden';
    }
    // Close Mobile Drawer
    function closeMenu() {
        menu.classList.remove('mobileMenu--open');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        
        // Reset back to root panel after closing transition
        setTimeout(function() {
            showPanel('root', 'none');
            panelHistory.length = 0;
            panelHistory.push('root');
        }, 300);
    }
    // Slide Panel Transitions
    function showPanel(panelId, direction) {
        const panels = panelsContainer.querySelectorAll('.mobileMenu__panel');
        const target = panelsContainer.querySelector('[data-panel="' + panelId + '"]');
        if (!target) return;
        panels.forEach(function(p) {
            p.classList.remove('mobileMenuPanel--active', 'mobileMenuPanel--exitLeft', 'mobileMenuPanel--exitRight', 'mobileMenuPanel--enterLeft', 'mobileMenuPanel--enterRight');
        });
        if (direction === 'forward') {
            const current = panelsContainer.querySelector('[data-panel="' + panelHistory[panelHistory.length - 1] + '"]');
            if (current) current.classList.add('mobileMenuPanel--exitLeft');
            target.classList.add('mobileMenuPanel--enterRight', 'mobileMenuPanel--active');
        } else if (direction === 'back') {
            const current = panelsContainer.querySelector('[data-panel="' + panelHistory[panelHistory.length - 1] + '"]');
            if (current) current.classList.add('mobileMenuPanel--exitRight');
            target.classList.add('mobileMenuPanel--enterLeft', 'mobileMenuPanel--active');
        } else {
            target.classList.add('mobileMenuPanel--active');
        }
    }
    // 1. Hamburger Click
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            openMenu();
        });
    }
    // 2. Close Buttons & Overlay
    menu.querySelectorAll('[data-mobile-menu-close]').forEach(function(el) {
        el.addEventListener('click', closeMenu);
    });
    // 3. Drill-down navigation & Back navigation
    menu.querySelectorAll('[data-goto-panel]').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const targetPanel = this.getAttribute('data-goto-panel');
            const idx = panelHistory.indexOf(targetPanel);
            if (idx !== -1) {
                // Going back
                showPanel(targetPanel, 'back');
                panelHistory.length = idx + 1;
            } else {
                // Going forward
                showPanel(targetPanel, 'forward');
                panelHistory.push(targetPanel);
            }
        });
    });
    // 4. Close on Escape Key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && menu.classList.contains('mobileMenu--open')) {
            closeMenu();
        }
    });
});