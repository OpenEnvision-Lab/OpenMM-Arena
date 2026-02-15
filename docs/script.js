/* ═══════════════════════════════════════════════════
   OpenMM-Arena — Premium Interactive Features v4
   Cursor Glow · Parallax · Smooth Animations · Search
   ═══════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ── Utility: RAF-based scroll listener ── */
    let ticking = false;
    const scrollCallbacks = [];
    function onScroll(cb) { scrollCallbacks.push(cb); }
    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                var scrollY = window.scrollY;
                for (var i = 0; i < scrollCallbacks.length; i++) scrollCallbacks[i](scrollY);
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    /* ── Progress Bar (RAF-optimized) ── */
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        onScroll(function (scrollY) {
            var h = document.documentElement.scrollHeight - window.innerHeight;
            progressBar.style.width = h > 0 ? (scrollY / h * 100) + '%' : '0%';
        });
    }

    /* ── Navbar Scroll Effect (RAF-optimized) ── */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        onScroll(function (scrollY) {
            navbar.classList.toggle('scrolled', scrollY > 50);
        });
    }

    /* ── Mobile Navigation ── */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        document.querySelectorAll('.nav-links a').forEach(l =>
            l.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            })
        );
    }

    /* ── Back to Top ── */
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => backToTop.classList.toggle('visible', window.scrollY > 500), { passive: true });
        backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    /* ── Smooth Scroll for Same-Page Anchors ── */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const t = document.querySelector(href);
            if (t) {
                e.preventDefault();
                window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
            }
        });
    });

    /* ── Fade-in on Scroll (staggered with grid-aware delays) ── */
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
    const fadeTargets = '.section-header, .taxonomy-card, .domain-card, .crossmodal-card, .theory-card, .table-wrapper, .section-intro, .spotlight-card, .stats-banner, .stats-banner-item, .metric-card, .subsection-title, .news-card, .feature-card, .featured-card, .cta-content, .cta-stat, .section-divider';

    /* Smart stagger: reset delay counter per parent grid */
    var lastParent = null;
    var parentIdx = 0;
    document.querySelectorAll(fadeTargets).forEach(function (el) {
        el.classList.add('fade-in');
        var parent = el.parentElement;
        if (parent !== lastParent) { parentIdx = 0; lastParent = parent; }
        el.style.transitionDelay = parentIdx * 70 + 'ms';
        parentIdx++;
        fadeObserver.observe(el);
    });

    /* ── Dark Mode Toggle ── */
    const darkToggle = document.getElementById('darkToggle');
    if (darkToggle) {
        const savedTheme = localStorage.getItem('omm-theme');
        if (savedTheme === 'dark') { document.body.classList.add('dark'); }
        darkToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('omm-theme', isDark ? 'dark' : 'light');
        });
    }

    /* ── Global Search (enhanced with highlighting) ── */
    const searchInput = document.getElementById('globalSearch');
    const searchCount = document.getElementById('searchResultsCount');
    if (searchInput && searchCount) {
        let searchTimeout;
        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => performSearch(this.value.trim().toLowerCase()), 150);
        });

        function performSearch(query) {
            const rows = document.querySelectorAll('.data-table tbody tr');
            const listItems = document.querySelectorAll('.paper-list li');
            let matchCount = 0;
            /* Remove existing highlights */
            document.querySelectorAll('mark.search-highlight').forEach(m => { m.outerHTML = m.textContent; });
            if (!query) {
                rows.forEach(r => r.classList.remove('search-hidden'));
                listItems.forEach(l => l.classList.remove('search-hidden'));
                searchCount.classList.remove('active');
                return;
            }
            rows.forEach(row => {
                if (row.textContent.toLowerCase().includes(query)) {
                    row.classList.remove('search-hidden');
                    matchCount++;
                    /* Add highlights to matching cells */
                    highlightMatches(row, query);
                } else {
                    row.classList.add('search-hidden');
                }
            });
            listItems.forEach(li => {
                if (li.textContent.toLowerCase().includes(query)) {
                    li.classList.remove('search-hidden');
                    matchCount++;
                    highlightMatches(li, query);
                } else {
                    li.classList.add('search-hidden');
                }
            });
            searchCount.textContent = matchCount + ' result' + (matchCount !== 1 ? 's' : '') + ' found for "' + query + '"';
            searchCount.classList.add('active');
        }

        function highlightMatches(element, query) {
            /* Only highlight text nodes in td and li elements */
            var cells = element.querySelectorAll('td, span, strong');
            if (cells.length === 0) cells = [element];
            cells.forEach(function (cell) {
                var walker = document.createTreeWalker(cell, NodeFilter.SHOW_TEXT, null, false);
                var textNodes = [];
                while (walker.nextNode()) textNodes.push(walker.currentNode);
                textNodes.forEach(function (node) {
                    var text = node.textContent;
                    var lowerText = text.toLowerCase();
                    var idx = lowerText.indexOf(query);
                    if (idx === -1) return;
                    var span = document.createElement('span');
                    span.innerHTML = text.substring(0, idx) +
                        '<mark class="search-highlight">' + text.substring(idx, idx + query.length) + '</mark>' +
                        text.substring(idx + query.length);
                    node.parentNode.replaceChild(span, node);
                });
            });
        }

        /* Keyboard Shortcuts */
        document.addEventListener('keydown', function (e) {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); searchInput.focus(); searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
            if (e.key === 'Escape' && document.activeElement === searchInput) { searchInput.value = ''; performSearch(''); searchInput.blur(); }
        });
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const kbdEl = document.getElementById('searchKbd');
        if (kbdEl) kbdEl.textContent = isMac ? '⌘K' : 'Ctrl+K';
    }

    /* ── D key for dark mode, [ key for sidebar toggle (when not in input) ── */
    document.addEventListener('keydown', function (e) {
        if (!document.activeElement || document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
        if (e.key === 'd') { if (darkToggle) darkToggle.click(); }
        if (e.key === '[' && sidebar && sidebarCollapseBtn && window.innerWidth > 1024) {
            e.preventDefault(); sidebarCollapseBtn.click();
        }
    });

    /* ── Animated Stat Counters (eased) ── */
    function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
    function animateCounter(el) {
        var text = el.textContent.trim();
        var match = text.match(/^(\d+)/);
        if (!match) return;
        var target = parseInt(match[1]);
        var suffix = text.replace(/^\d+/, '');
        var duration = 1800;
        var start = null;
        function step(ts) {
            if (!start) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            var eased = easeOutExpo(progress);
            el.textContent = Math.round(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }
    function animateCounters() {
        document.querySelectorAll('.stat-number').forEach(function (el) { animateCounter(el); });
    }
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { animateCounters(); statsObserver.unobserve(e.target); } });
        }, { threshold: 0.4 });
        statsObserver.observe(heroStats);
    }

    /* ── Active Nav Link Highlight ── */
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a[href]').forEach(a => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('http')) return;
        if (href === currentPage) { a.classList.add('nav-active'); return; }
        if (currentPath.includes('/t2i/') && (href === 't2i.html' || href === '../t2i.html')) { a.classList.add('nav-active'); }
        if (currentPath.includes('/t2v/') && (href === 't2v.html' || href === '../t2v.html')) { a.classList.add('nav-active'); }
        if (currentPath.includes('/i2v/') && (href === 'i2v.html' || href === '../i2v.html')) { a.classList.add('nav-active'); }
        if (currentPath.includes('/3d/') && (href === '3d.html' || href === '../3d.html')) { a.classList.add('nav-active'); }
        if (currentPath.includes('/4d/') && (href === '4d.html' || href === '../4d.html')) { a.classList.add('nav-active'); }
        if (currentPath.includes('/unified/') && (href === 'unified.html' || href === '../unified.html')) { a.classList.add('nav-active'); }
        if (currentPath.includes('/world/') && (href === 'world.html' || href === '../world.html')) { a.classList.add('nav-active'); }
    });

    /* ════════════════════════════════════════════════
       TABLE SORTING — Click-to-sort column headers
       ════════════════════════════════════════════════ */
    document.querySelectorAll('.data-table').forEach(function (table) {
        var headers = table.querySelectorAll('thead th');
        headers.forEach(function (th, colIndex) {
            /* Make Year and Elo columns sortable by default */
            var text = th.textContent.trim().toLowerCase();
            if (text === 'year' || text === 'elo score' || text === '#' || text === 'date') {
                th.classList.add('sortable');
            }
            if (!th.classList.contains('sortable')) return;

            th.addEventListener('click', function () {
                var tbody = table.querySelector('tbody');
                if (!tbody) return;
                var rows = Array.from(tbody.querySelectorAll('tr'));
                var isAsc = th.classList.contains('sort-asc');

                /* Reset all other headers */
                headers.forEach(function (h) { h.classList.remove('sort-asc', 'sort-desc'); });

                if (isAsc) {
                    th.classList.add('sort-desc');
                } else {
                    th.classList.add('sort-asc');
                }

                var direction = th.classList.contains('sort-asc') ? 1 : -1;

                rows.sort(function (a, b) {
                    var aText = a.cells[colIndex] ? a.cells[colIndex].textContent.trim() : '';
                    var bText = b.cells[colIndex] ? b.cells[colIndex].textContent.trim() : '';
                    /* Try numeric sort */
                    var aNum = parseFloat(aText.replace(/[^0-9.-]/g, ''));
                    var bNum = parseFloat(bText.replace(/[^0-9.-]/g, ''));
                    if (!isNaN(aNum) && !isNaN(bNum)) {
                        return (aNum - bNum) * direction;
                    }
                    return aText.localeCompare(bText) * direction;
                });

                rows.forEach(function (row) { tbody.appendChild(row); });
            });
        });
    });

    /* ════════════════════════════════════════════════
       TABLE SCROLL INDICATOR
       ════════════════════════════════════════════════ */
    document.querySelectorAll('.table-wrapper').forEach(function (wrapper) {
        function checkScroll() {
            if (wrapper.scrollWidth > wrapper.clientWidth + 2) {
                wrapper.classList.add('has-scroll');
            } else {
                wrapper.classList.remove('has-scroll');
            }
        }
        checkScroll();
        window.addEventListener('resize', checkScroll);
        wrapper.addEventListener('scroll', function () {
            if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 10) {
                wrapper.classList.remove('has-scroll');
            } else if (wrapper.scrollWidth > wrapper.clientWidth + 2) {
                wrapper.classList.add('has-scroll');
            }
        });
    });

    /* ════════════════════════════════════════════════
       PAPER COUNT ANIMATION (eased)
       ════════════════════════════════════════════════ */
    var paperCountObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var badge = entry.target;
                var text = badge.textContent.trim();
                var match = text.match(/^(\d+)(\+?\s*papers?)/i);
                if (match) {
                    var target = parseInt(match[1]);
                    var suffix = match[2];
                    var duration = 1400;
                    var start = null;
                    function step(ts) {
                        if (!start) start = ts;
                        var progress = Math.min((ts - start) / duration, 1);
                        var eased = easeOutExpo(progress);
                        badge.textContent = Math.round(target * eased) + suffix;
                        if (progress < 1) requestAnimationFrame(step);
                    }
                    requestAnimationFrame(step);
                }
                paperCountObserver.unobserve(badge);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.paper-count-badge').forEach(function (el) {
        paperCountObserver.observe(el);
    });

    /* ════════════════════════════════════════════════
       SIDEBAR — Collapsible left navigation + TOC
       Desktop: collapse to icon strip / expand to full
       Mobile:  slide-in overlay
       ════════════════════════════════════════════════ */
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarCollapseBtn = document.getElementById('sidebarCollapseBtn');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    const sidebarToc = document.getElementById('sidebarToc');

    if (sidebar) {
        const isDesktop = () => window.innerWidth > 1024;

        /* Restore saved desktop collapse state */
        const savedCollapsed = localStorage.getItem('omm-sidebar-collapsed');
        if (isDesktop()) {
            sidebar.classList.remove('collapsed');
            if (savedCollapsed === 'true') {
                sidebar.classList.add('desktop-collapsed');
            }
        }

        if (sidebarToggle && !isDesktop()) sidebarToggle.classList.add('visible');

        /* Desktop collapse/expand toggle */
        function toggleDesktopCollapse() {
            if (!isDesktop()) return;
            sidebar.classList.toggle('desktop-collapsed');
            var isCollapsed = sidebar.classList.contains('desktop-collapsed');
            localStorage.setItem('omm-sidebar-collapsed', isCollapsed ? 'true' : 'false');
        }
        if (sidebarCollapseBtn) sidebarCollapseBtn.addEventListener('click', toggleDesktopCollapse);

        /* Mobile open/close */
        function openSidebar() {
            if (!isDesktop()) {
                sidebar.classList.add('open');
                sidebar.classList.remove('collapsed');
                if (sidebarBackdrop) sidebarBackdrop.classList.add('visible');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeSidebar() {
            if (!isDesktop()) {
                sidebar.classList.remove('open');
                if (sidebarBackdrop) sidebarBackdrop.classList.remove('visible');
                document.body.style.overflow = '';
            }
        }

        function toggleSidebar() {
            if (!isDesktop()) {
                if (sidebar.classList.contains('open')) closeSidebar();
                else openSidebar();
            }
        }

        if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);
        if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
        if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeSidebar);

        /* Expand sidebar on hover when collapsed (desktop) */
        var hoverExpandTimer;
        sidebar.addEventListener('mouseenter', function () {
            if (isDesktop() && sidebar.classList.contains('desktop-collapsed')) {
                hoverExpandTimer = setTimeout(function () {
                    sidebar.classList.remove('desktop-collapsed');
                    sidebar.dataset.hoverExpanded = 'true';
                }, 300);
            }
        });
        sidebar.addEventListener('mouseleave', function () {
            clearTimeout(hoverExpandTimer);
            if (isDesktop() && sidebar.dataset.hoverExpanded === 'true') {
                sidebar.classList.add('desktop-collapsed');
                delete sidebar.dataset.hoverExpanded;
            }
        });

        window.addEventListener('resize', () => {
            if (isDesktop()) {
                sidebar.classList.remove('open');
                sidebar.classList.remove('collapsed');
                if (sidebarBackdrop) sidebarBackdrop.classList.remove('visible');
                document.body.style.overflow = '';
                if (sidebarToggle) sidebarToggle.classList.remove('visible');
                /* Restore saved state on resize to desktop */
                var currentSaved = localStorage.getItem('omm-sidebar-collapsed');
                if (currentSaved === 'true') sidebar.classList.add('desktop-collapsed');
            } else {
                sidebar.classList.remove('desktop-collapsed');
                if (sidebarToggle) sidebarToggle.classList.add('visible');
            }
        });

        /* ── Active sidebar page link ── */
        const sidebarLinks = sidebar.querySelectorAll('.sidebar-link');
        sidebarLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && currentPage === href) {
                link.classList.add('active');
            }
        });

        /* ── Auto-generate on-page TOC ── */
        if (sidebarToc) {
            const subsections = document.querySelectorAll('.subsection-title');
            if (subsections.length > 0) {
                const usedIds = new Set();
                subsections.forEach(function (el, i) {
                    if (!el.id) {
                        var clone = el.cloneNode(true);
                        clone.querySelectorAll('.paper-count-badge').forEach(function (b) { b.remove(); });
                        var slug = clone.textContent.trim().toLowerCase()
                            .replace(/[^a-z0-9\s-]/g, '')
                            .replace(/\s+/g, '-')
                            .substring(0, 60);
                        if (!slug || usedIds.has(slug)) slug = slug + '-' + i;
                        usedIds.add(slug);
                        el.id = slug;
                    }
                });

                var titleEl = document.createElement('div');
                titleEl.className = 'sidebar-toc-title';
                titleEl.textContent = 'On This Page';
                sidebarToc.appendChild(titleEl);

                var tocList = document.createElement('ul');
                tocList.className = 'sidebar-toc-list';

                subsections.forEach(function (el, idx) {
                    var clone = el.cloneNode(true);
                    clone.querySelectorAll('.paper-count-badge').forEach(function (b) { b.remove(); });
                    var text = clone.textContent.trim();

                    var li = document.createElement('li');
                    var a = document.createElement('a');
                    a.href = '#' + el.id;
                    a.className = 'sidebar-toc-link';
                    a.textContent = text;
                    a.title = text;
                    /* Staggered entrance animation */
                    a.style.opacity = '0';
                    a.style.transform = 'translateX(-8px)';
                    setTimeout(function () {
                        a.style.transition = 'opacity .3s ease, transform .3s ease';
                        a.style.opacity = '1';
                        a.style.transform = 'translateX(0)';
                    }, 80 + idx * 40);
                    a.addEventListener('click', function (e) {
                        e.preventDefault();
                        var target = document.getElementById(el.id);
                        if (target) {
                            window.scrollTo({
                                top: target.getBoundingClientRect().top + window.pageYOffset - 80,
                                behavior: 'smooth'
                            });
                        }
                        if (!isDesktop()) closeSidebar();
                    });
                    li.appendChild(a);
                    tocList.appendChild(li);
                });

                sidebarToc.appendChild(tocList);

                /* Scroll spy — improved with debounce */
                var tocLinks = tocList.querySelectorAll('.sidebar-toc-link');
                var lastActiveId = null;
                var tocSpy = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting && entry.target.id !== lastActiveId) {
                            lastActiveId = entry.target.id;
                            tocLinks.forEach(function (l) { l.classList.remove('active'); });
                            var active = tocList.querySelector('a[href="#' + entry.target.id + '"]');
                            if (active) {
                                active.classList.add('active');
                                /* Smooth scroll TOC into view when active link is offscreen */
                                if (active.offsetParent) {
                                    var tocRect = sidebarToc.getBoundingClientRect();
                                    var linkRect = active.getBoundingClientRect();
                                    if (linkRect.bottom > tocRect.bottom || linkRect.top < tocRect.top) {
                                        active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                                    }
                                }
                            }
                        }
                    });
                }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });

                subsections.forEach(function (el) { tocSpy.observe(el); });
            }
        }
    }

    /* ════════════════════════════════════════════════
       KEYBOARD SHORTCUTS HELP
       ════════════════════════════════════════════════ */
    document.addEventListener('keydown', function (e) {
        /* ? key to show shortcuts */
        if (e.key === '?' && document.activeElement && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            var existing = document.getElementById('shortcutsModal');
            if (existing) { existing.remove(); return; }

            var modal = document.createElement('div');
            modal.id = 'shortcutsModal';
            modal.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.4);backdrop-filter:blur(4px);';
            modal.innerHTML = '<div style="background:var(--white);border-radius:16px;padding:32px;max-width:400px;width:90%;box-shadow:0 24px 48px rgba(0,0,0,.15);border:1px solid var(--gray-200);">' +
                '<h3 style="font-size:1.1rem;font-weight:740;color:var(--blue-900);margin-bottom:20px;display:flex;align-items:center;gap:8px;">⌨️ Keyboard Shortcuts</h3>' +
                '<div style="display:grid;gap:10px;font-size:.85rem;">' +
                '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--gray-100);"><span style="color:var(--gray-600);">Search papers</span><kbd style="padding:3px 10px;background:var(--gray-100);border:1px solid var(--gray-200);border-radius:4px;font-size:.72rem;font-family:var(--font-mono);color:var(--gray-600);">⌘K</kbd></div>' +
                '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--gray-100);"><span style="color:var(--gray-600);">Toggle dark mode</span><kbd style="padding:3px 10px;background:var(--gray-100);border:1px solid var(--gray-200);border-radius:4px;font-size:.72rem;font-family:var(--font-mono);color:var(--gray-600);">D</kbd></div>' +
                '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--gray-100);"><span style="color:var(--gray-600);">Toggle sidebar</span><kbd style="padding:3px 10px;background:var(--gray-100);border:1px solid var(--gray-200);border-radius:4px;font-size:.72rem;font-family:var(--font-mono);color:var(--gray-600);">[</kbd></div>' +
                '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--gray-100);"><span style="color:var(--gray-600);">Show this help</span><kbd style="padding:3px 10px;background:var(--gray-100);border:1px solid var(--gray-200);border-radius:4px;font-size:.72rem;font-family:var(--font-mono);color:var(--gray-600);">?</kbd></div>' +
                '<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;"><span style="color:var(--gray-600);">Close / Clear</span><kbd style="padding:3px 10px;background:var(--gray-100);border:1px solid var(--gray-200);border-radius:4px;font-size:.72rem;font-family:var(--font-mono);color:var(--gray-600);">Esc</kbd></div>' +
                '</div>' +
                '<p style="margin-top:16px;font-size:.72rem;color:var(--gray-400);text-align:center;">Click anywhere outside to close</p>' +
                '</div>';
            modal.addEventListener('click', function (ev) { if (ev.target === modal) modal.remove(); });
            document.body.appendChild(modal);
        }
        if (e.key === 'Escape') {
            var m = document.getElementById('shortcutsModal');
            if (m) m.remove();
        }
    });

    /* ════════════════════════════════════════════════
       STATS BANNER COUNTER ANIMATION (eased)
       ════════════════════════════════════════════════ */
    var statsBannerObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var numbers = entry.target.querySelectorAll('.stats-banner-number');
                numbers.forEach(function (el) { animateCounter(el); });
                statsBannerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    var statsBanner = document.querySelector('.stats-banner');
    if (statsBanner) statsBannerObserver.observe(statsBanner);

    /* ════════════════════════════════════════════════
       YEAR FILTER TABS — Auto-generated for sub-pages
       ════════════════════════════════════════════════ */
    (function initYearFilters() {
        var tables = document.querySelectorAll('.data-table');
        tables.forEach(function (table) {
            var yearColIdx = -1;
            var headers = table.querySelectorAll('thead th');
            headers.forEach(function (th, idx) {
                if (th.textContent.trim().toLowerCase() === 'year') yearColIdx = idx;
            });
            if (yearColIdx === -1) return;

            /* Collect all unique years */
            var years = new Set();
            var rows = table.querySelectorAll('tbody tr');
            rows.forEach(function (row) {
                var cell = row.cells[yearColIdx];
                if (cell) {
                    var year = cell.textContent.trim();
                    if (/^\d{4}$/.test(year)) years.add(year);
                }
            });
            if (years.size <= 1) return;

            var sortedYears = Array.from(years).sort(function (a, b) { return b - a; });

            /* Create filter container */
            var filterDiv = document.createElement('div');
            filterDiv.className = 'table-filters';

            var allBtn = document.createElement('button');
            allBtn.className = 'table-filter-btn active';
            allBtn.textContent = 'All Years';
            allBtn.setAttribute('data-year', 'all');
            filterDiv.appendChild(allBtn);

            sortedYears.forEach(function (year) {
                var btn = document.createElement('button');
                btn.className = 'table-filter-btn';
                btn.textContent = year;
                btn.setAttribute('data-year', year);
                /* Add year-specific style */
                if (year === '2026') btn.classList.add('filter-2026');
                if (year === '2025') btn.classList.add('filter-2025');
                filterDiv.appendChild(btn);
            });

            /* Insert before the table wrapper */
            var wrapper = table.closest('.table-wrapper');
            if (wrapper && wrapper.parentNode) {
                wrapper.parentNode.insertBefore(filterDiv, wrapper);
            }

            /* Filter logic */
            filterDiv.addEventListener('click', function (e) {
                var btn = e.target.closest('.table-filter-btn');
                if (!btn) return;
                filterDiv.querySelectorAll('.table-filter-btn').forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                var selectedYear = btn.getAttribute('data-year');
                rows.forEach(function (row) {
                    if (selectedYear === 'all') {
                        row.classList.remove('search-hidden');
                    } else {
                        var cell = row.cells[yearColIdx];
                        if (cell && cell.textContent.trim() === selectedYear) {
                            row.classList.remove('search-hidden');
                        } else {
                            row.classList.add('search-hidden');
                        }
                    }
                });
            });
        });
    })();

    /* ════════════════════════════════════════════════
       AUTO YEAR BADGES — Enhance year cells in tables
       ════════════════════════════════════════════════ */
    (function addYearBadges() {
        var tables = document.querySelectorAll('.data-table');
        tables.forEach(function (table) {
            var yearColIdx = -1;
            var headers = table.querySelectorAll('thead th');
            headers.forEach(function (th, idx) {
                if (th.textContent.trim().toLowerCase() === 'year') yearColIdx = idx;
            });
            if (yearColIdx === -1) return;

            table.querySelectorAll('tbody tr').forEach(function (row) {
                var cell = row.cells[yearColIdx];
                if (!cell) return;
                var year = cell.textContent.trim();
                if (!/^\d{4}$/.test(year)) return;
                var badge = document.createElement('span');
                badge.className = 'year-badge';
                if (year === '2026') badge.classList.add('y2026');
                else if (year === '2025') badge.classList.add('y2025');
                else if (year === '2024') badge.classList.add('y2024');
                badge.textContent = year;
                cell.textContent = '';
                cell.appendChild(badge);
            });
        });
    })();

    /* ════════════════════════════════════════════════
       CTA STAT COUNTER ANIMATION (eased)
       ════════════════════════════════════════════════ */
    var ctaObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var numbers = entry.target.querySelectorAll('.cta-stat-number');
                numbers.forEach(function (el) { animateCounter(el); });
                ctaObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    var ctaContent = document.querySelector('.cta-content');
    if (ctaContent) ctaObserver.observe(ctaContent);

    /* ════════════════════════════════════════════════
       CURSOR GLOW — Mouse-following gradient on cards
       Inspired by Linear/Stripe card interactions
       ════════════════════════════════════════════════ */
    (function initCursorGlow() {
        var grids = document.querySelectorAll('.domain-grid, .features-grid, .news-grid, .featured-grid, .subpage-grid');
        grids.forEach(function (grid) {
            grid.classList.add('card-glow-container');
            grid.addEventListener('mousemove', function (e) {
                var cards = grid.querySelectorAll('.domain-card, .feature-card, .news-card, .featured-card');
                cards.forEach(function (card) {
                    var rect = card.getBoundingClientRect();
                    var x = e.clientX - rect.left;
                    var y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', x + 'px');
                    card.style.setProperty('--mouse-y', y + 'px');
                });
            });
        });
    })();

    /* ════════════════════════════════════════════════
       HERO PARALLAX — Subtle depth effect on orbs
       ════════════════════════════════════════════════ */
    (function initHeroParallax() {
        var hero = document.querySelector('.hero');
        if (!hero) return;
        var orbs = hero.querySelectorAll('.hero-orb');
        if (orbs.length === 0) return;

        var rafId = null;
        var mouseX = 0.5, mouseY = 0.5;
        var currentX = 0.5, currentY = 0.5;

        hero.addEventListener('mousemove', function (e) {
            var rect = hero.getBoundingClientRect();
            mouseX = (e.clientX - rect.left) / rect.width;
            mouseY = (e.clientY - rect.top) / rect.height;
        });

        function animate() {
            currentX += (mouseX - currentX) * 0.04;
            currentY += (mouseY - currentY) * 0.04;

            var dx = (currentX - 0.5) * 2;
            var dy = (currentY - 0.5) * 2;

            orbs.forEach(function (orb, i) {
                var factor = (i + 1) * 12;
                orb.style.transform = 'translate(' + (dx * factor) + 'px, ' + (dy * factor) + 'px)';
            });
            rafId = requestAnimationFrame(animate);
        }

        /* Only run when hero is visible */
        var parallaxObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    if (!rafId) rafId = requestAnimationFrame(animate);
                } else {
                    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
                }
            });
        }, { threshold: 0 });
        parallaxObserver.observe(hero);
    })();

    /* ════════════════════════════════════════════════
       SMOOTH SCROLL INDICATOR — Navbar border glow
       ════════════════════════════════════════════════ */
    (function initNavGlow() {
        if (!navbar || !progressBar) return;
        onScroll(function (scrollY) {
            var h = document.documentElement.scrollHeight - window.innerHeight;
            var pct = h > 0 ? scrollY / h : 0;
            var glow = Math.min(pct * 3, 1) * 0.06;
            navbar.style.borderBottomColor = 'rgba(29,94,222,' + glow.toFixed(3) + ')';
        });
    })();

    /* ════════════════════════════════════════════════
       ENHANCED LINK HOVER — Smooth arrow animation
       ════════════════════════════════════════════════ */
    document.querySelectorAll('.news-link, .domain-card-arrow').forEach(function (el) {
        el.addEventListener('mouseenter', function () {
            var svg = el.querySelector('svg');
            if (svg) svg.style.transform = 'translateX(3px)';
        });
        el.addEventListener('mouseleave', function () {
            var svg = el.querySelector('svg');
            if (svg) svg.style.transform = 'translateX(0)';
        });
    });

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: Hero Aurora Effect
       Creates dynamic aurora-like beams in the hero
       ════════════════════════════════════════════════ */
    (function initHeroAurora() {
        var hero = document.querySelector('.hero');
        if (!hero) return;

        /* Create aurora container */
        var aurora = document.createElement('div');
        aurora.className = 'hero-aurora';
        for (var i = 0; i < 3; i++) {
            var beam = document.createElement('div');
            beam.className = 'hero-aurora-beam';
            aurora.appendChild(beam);
        }
        hero.insertBefore(aurora, hero.firstChild);
    })();

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: Floating Particles
       Decorative particles in the hero section
       ════════════════════════════════════════════════ */
    (function initHeroParticles() {
        var hero = document.querySelector('.hero');
        if (!hero) return;
        /* Skip on mobile for performance */
        if (window.innerWidth < 768) return;

        var container = document.createElement('div');
        container.className = 'hero-particles';
        var particleCount = 18;

        for (var i = 0; i < particleCount; i++) {
            var p = document.createElement('div');
            p.className = 'hero-particle';
            var size = 2 + Math.random() * 4;
            var duration = 12 + Math.random() * 20;
            var delay = Math.random() * 15;
            var x = Math.random() * 100;
            var y = Math.random() * 100;
            var dx = -40 + Math.random() * 80;
            var dy = -60 + Math.random() * -40;
            var scale = 0.6 + Math.random() * 1.2;
            var maxOpacity = 0.2 + Math.random() * 0.5;

            p.style.cssText =
                'width:' + size + 'px;height:' + size + 'px;' +
                'left:' + x + '%;top:' + y + '%;' +
                '--duration:' + duration + 's;' +
                '--delay:-' + delay + 's;' +
                '--dx:' + dx + 'px;' +
                '--dy:' + dy + 'px;' +
                '--scale:' + scale + ';' +
                '--max-opacity:' + maxOpacity + ';';

            container.appendChild(p);
        }
        hero.insertBefore(container, hero.querySelector('.hero-content'));
    })();

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: 3D Card Tilt Effect
       Inspired by Stripe's card interactions
       ════════════════════════════════════════════════ */
    (function initCardTilt() {
        if (window.innerWidth < 768) return;

        var tiltCards = document.querySelectorAll('.domain-card, .feature-card, .spotlight-card, .featured-card');
        tiltCards.forEach(function (card) {
            card.classList.add('tilt-card');
            var shine = document.createElement('div');
            shine.className = 'card-shine';
            card.appendChild(shine);

            var rect, raf;
            card.addEventListener('mouseenter', function () {
                rect = card.getBoundingClientRect();
            });

            card.addEventListener('mousemove', function (e) {
                if (!rect) rect = card.getBoundingClientRect();
                if (raf) cancelAnimationFrame(raf);

                raf = requestAnimationFrame(function () {
                    var x = e.clientX - rect.left;
                    var y = e.clientY - rect.top;
                    var px = x / rect.width;
                    var py = y / rect.height;

                    /* Subtle 3D rotation */
                    var rotateX = (py - 0.5) * -6;
                    var rotateY = (px - 0.5) * 6;

                    card.style.transform =
                        'perspective(600px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px) scale(1.015)';

                    /* Move shine based on mouse position */
                    shine.style.left = (px * 150 - 25) + '%';
                    shine.style.opacity = '1';
                });
            });

            card.addEventListener('mouseleave', function () {
                if (raf) cancelAnimationFrame(raf);
                card.style.transform = '';
                shine.style.opacity = '0';
                shine.style.left = '-100%';
                rect = null;
            });
        });
    })();

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: Magnetic Buttons
       Buttons subtly follow the cursor
       ════════════════════════════════════════════════ */
    (function initMagneticButtons() {
        if (window.innerWidth < 768) return;

        var buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        buttons.forEach(function (btn) {
            var rect;
            btn.addEventListener('mouseenter', function () {
                rect = btn.getBoundingClientRect();
                btn.classList.add('magnetic-active');
            });

            btn.addEventListener('mousemove', function (e) {
                if (!rect) return;
                var x = e.clientX - rect.left - rect.width / 2;
                var y = e.clientY - rect.top - rect.height / 2;
                var strength = 0.25;
                btn.style.transform =
                    'translate(' + (x * strength) + 'px, ' + (y * strength) + 'px) translateY(-2px) scale(1.02)';
            });

            btn.addEventListener('mouseleave', function () {
                btn.style.transform = '';
                btn.classList.remove('magnetic-active');
                rect = null;
            });
        });
    })();

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: Button Ripple Effect
       Material-inspired ripple on click
       ════════════════════════════════════════════════ */
    (function initRippleEffect() {
        document.querySelectorAll('.btn').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                var rect = btn.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var size = Math.max(rect.width, rect.height) * 0.5;

                var ripple = document.createElement('span');
                ripple.className = 'btn-ripple';
                ripple.style.cssText =
                    'width:' + size + 'px;height:' + size + 'px;' +
                    'left:' + (x - size / 2) + 'px;top:' + (y - size / 2) + 'px;';

                btn.appendChild(ripple);
                setTimeout(function () { ripple.remove(); }, 600);
            });
        });
    })();

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: Enhanced Scroll Animations
       More animation variants on scroll
       ════════════════════════════════════════════════ */
    (function initEnhancedScrollAnimations() {
        var blurObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    blurObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

        /* Apply blur-in to section intros */
        document.querySelectorAll('.section-intro, .cta-content').forEach(function (el) {
            el.classList.add('fade-in-blur');
            blurObserver.observe(el);
        });

        /* Apply scale-in to stat items */
        document.querySelectorAll('.stats-banner-item, .cta-stat').forEach(function (el, i) {
            el.classList.add('fade-in-scale');
            el.style.transitionDelay = (i * 80) + 'ms';
            blurObserver.observe(el);
        });
    })();

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: Smooth Number Morphing
       Enhanced counter animation with digit morphing
       ════════════════════════════════════════════════ */
    (function initNumberMorphing() {
        function morphNumber(el) {
            if (el.dataset.morphed) return; /* prevent double animation */
            el.dataset.morphed = '1';
            var text = el.textContent.trim();
            var match = text.match(/^(\d+)(.*)$/);
            if (!match) return;
            var target = parseInt(match[1]);
            var suffix = match[2];
            var duration = 2200;
            var start = null;
            var lastVal = 0;

            function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -12 * t); }

            function step(ts) {
                if (!start) start = ts;
                var progress = Math.min((ts - start) / duration, 1);
                var eased = easeOutExpo(progress);
                var currentVal = Math.round(target * eased);

                if (currentVal !== lastVal) {
                    el.textContent = currentVal + suffix;
                    /* Add a subtle scale pop effect on each digit change */
                    el.style.transform = 'scale(1.02)';
                    setTimeout(function () { el.style.transform = 'scale(1)'; }, 80);
                    lastVal = currentVal;
                }

                if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        }

        /* Observe stats banner numbers for morphing */
        var morphObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var nums = entry.target.querySelectorAll('.stats-banner-number, .cta-stat-number');
                    nums.forEach(function (n) { morphNumber(n); });
                    morphObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('.stats-banner, .cta-stats').forEach(function (el) {
            morphObserver.observe(el);
        });
    })();

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: Navbar Scroll Progress Glow
       Dynamic glow intensity based on scroll
       ════════════════════════════════════════════════ */
    (function initNavScrollGlow() {
        if (!navbar || !progressBar) return;
        onScroll(function (scrollY) {
            var h = document.documentElement.scrollHeight - window.innerHeight;
            var pct = h > 0 ? scrollY / h : 0;
            /* Update progress bar glow intensity */
            var glowIntensity = Math.min(pct * 4, 1);
            progressBar.style.boxShadow =
                '0 0 ' + (12 + glowIntensity * 12) + 'px rgba(29,94,222,' + (0.2 + glowIntensity * 0.2).toFixed(2) + '),' +
                '0 0 ' + (4 + glowIntensity * 8) + 'px rgba(139,92,246,' + (glowIntensity * 0.15).toFixed(2) + ')';
        });
    })();

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: Parallax Scroll Sections
       Subtle depth parallax on scroll for sections
       ════════════════════════════════════════════════ */
    (function initSectionParallax() {
        if (window.innerWidth < 768) return;

        var sections = document.querySelectorAll('.section-header, .spotlight-header');
        if (sections.length === 0) return;

        onScroll(function (scrollY) {
            sections.forEach(function (section) {
                var rect = section.getBoundingClientRect();
                var windowH = window.innerHeight;
                if (rect.top < windowH && rect.bottom > 0) {
                    var progress = (windowH - rect.top) / (windowH + rect.height);
                    var offset = (progress - 0.5) * -15;
                    section.style.transform = 'translateY(' + offset + 'px)';
                }
            });
        });
    })();

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: Enhanced Card Focus Ring
       Smooth animated focus rings for accessibility
       ════════════════════════════════════════════════ */
    document.querySelectorAll('.domain-card, .feature-card, .btn').forEach(function (el) {
        el.addEventListener('focus', function () {
            el.style.outline = '2px solid var(--blue-400)';
            el.style.outlineOffset = '3px';
        });
        el.addEventListener('blur', function () {
            el.style.outline = '';
            el.style.outlineOffset = '';
        });
    });

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: Staggered Grid Animations
       Cards cascade in with staggered timing
       ════════════════════════════════════════════════ */
    (function initStaggeredGrids() {
        var gridObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var cards = entry.target.querySelectorAll('.domain-card, .feature-card, .news-card, .featured-card, .spotlight-card');
                    cards.forEach(function (card, i) {
                        /* Skip cards already animated by IntersectionObserver fade-in */
                        if (card.classList.contains('visible')) return;
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(30px) scale(0.96)';
                        setTimeout(function () {
                            card.style.transition = 'opacity .6s var(--ease-expo), transform .6s var(--ease-expo)';
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0) scale(1)';
                        }, 80 + i * 90);
                    });
                    gridObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.domain-grid, .features-grid, .news-grid, .featured-grid, .spotlight-grid').forEach(function (grid) {
            gridObserver.observe(grid);
        });
    })();

    /* ════════════════════════════════════════════════
       PREMIUM FEATURE v5: Smooth Text Scramble
       Hero title text scramble entrance effect
       ════════════════════════════════════════════════ */
    (function initTextScramble() {
        var accentEl = document.querySelector('.hero-title .accent');
        if (!accentEl) return;

        var originalText = accentEl.textContent;
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%';
        var iterations = 0;
        var maxIterations = originalText.length;

        /* Delay to sync with hero entrance animation */
        setTimeout(function () {
            var interval = setInterval(function () {
                accentEl.textContent = originalText.split('').map(function (char, idx) {
                    if (idx < iterations) return originalText[idx];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join('');

                iterations += 1 / 3;
                if (iterations >= maxIterations) {
                    accentEl.textContent = originalText;
                    clearInterval(interval);
                }
            }, 40);
        }, 600);
    })();

})();
