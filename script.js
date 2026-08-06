(function () {
    'use strict';

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    function toggleMenu() {
        const isOpen = navLinks.classList.toggle('is-open');
        hamburger.classList.toggle('is-open');
        hamburger.setAttribute('aria-expanded', isOpen);
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (navLinks.classList.contains('is-open')) {
                navLinks.classList.remove('is-open');
                hamburger.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (navLinks.classList.contains('is-open')) {
            var nav = document.querySelector('.navbar');
            if (!nav.contains(e.target)) {
                navLinks.classList.remove('is-open');
                hamburger.classList.remove('is-open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        }
    });

    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            portfolioItems.forEach(function (item) {
                if (filter === 'all' || item.getAttribute('data-category').indexOf(filter) !== -1) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeUp 0.5s ease forwards';
                    item.style.opacity = '0';
                    setTimeout(function () { item.style.opacity = '1'; }, 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    const revealElements = document.querySelectorAll('.section-heading, .skill-card, .portfolio-item, .contact-card, .about-grid, .philosophy-card');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight - 80 && rect.bottom >= 0;
    }

    function checkReveal() {
        revealElements.forEach(function (el) {
            el.classList.add('reveal');
            if (isElementInViewport(el)) {
                el.classList.add('visible');
            }
        });
    }

    checkReveal();

    var ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                checkReveal();
                ticking = false;
            });
            ticking = true;
        }
    });

    window.addEventListener('resize', checkReveal);

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var navHeight = 90;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
})();
