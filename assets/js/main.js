(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
   * Mobile navigation
   * ------------------------------------------------------------------- */
  function initMobileNav() {
    var toggle = document.getElementById('menuToggle');
    var nav = document.getElementById('mobileNav');
    var icon = document.getElementById('menuIcon');
    if (!toggle || !nav) return;

    function setIcon(open) {
      icon.innerHTML = open
        ? '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>'
        : '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
    }

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      setIcon(open);
    });

    Array.prototype.forEach.call(nav.querySelectorAll('a'), function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        setIcon(false);
      });
    });
  }

  /* ---------------------------------------------------------------------
   * Footer year
   * ------------------------------------------------------------------- */
  function initFooterYear() {
    var el = document.getElementById('footerYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------------------
   * Scroll reveal (with safety-net fallback so content is never
   * permanently hidden if the observer never fires — some automated
   * renderers/crawlers don't perform a real scroll).
   * ------------------------------------------------------------------- */
  function initScrollReveal() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (nodes.length === 0) return;

    if (prefersReduced) {
      nodes.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }

    nodes.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 6, 5) * 70) + 'ms';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    nodes.forEach(function (el) { io.observe(el); });

    window.setTimeout(function () {
      nodes.forEach(function (el) { el.classList.add('in-view'); });
      io.disconnect();
    }, 4000);
  }

  /* ---------------------------------------------------------------------
   * Animated counters
   * ------------------------------------------------------------------- */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    if (prefersReduced || isNaN(target)) { el.textContent = target + suffix; return; }
    var start = null;
    var duration = 1200;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
    if (nodes.length === 0) return;
    if (prefersReduced) { nodes.forEach(animateCounter); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    nodes.forEach(function (el) { io.observe(el); });

    window.setTimeout(function () {
      nodes.forEach(function (el) { if (!el.textContent || el.textContent === '0') animateCounter(el); });
    }, 4000);
  }

  /* ---------------------------------------------------------------------
   * Hero progress bar fill
   * ------------------------------------------------------------------- */
  function initHeroBar() {
    var bar = document.getElementById('heroBar');
    if (bar) requestAnimationFrame(function () { bar.classList.add('filled'); });
  }

  /* ---------------------------------------------------------------------
   * Hero cursor spotlight + tilt panel
   * ------------------------------------------------------------------- */
  function initHeroInteraction() {
    var hero = document.querySelector('.hero');
    var spotlight = document.getElementById('heroSpotlight');
    var tilt = document.getElementById('heroTilt');
    if (!hero || prefersReduced) return;

    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;
      if (spotlight) {
        spotlight.style.setProperty('--sx', (x * 100) + '%');
        spotlight.style.setProperty('--sy', (y * 100) + '%');
      }
      if (tilt) {
        var rx = (0.5 - y) * 14;
        var ry = (x - 0.5) * 14;
        tilt.style.transform = 'perspective(1000px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg)';
      }
    });
    hero.addEventListener('mouseleave', function () {
      if (tilt) tilt.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }

  /* ---------------------------------------------------------------------
   * Sticky header glassmorphism on scroll
   * ------------------------------------------------------------------- */
  function initHeaderScroll() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ---------------------------------------------------------------------
   * Generic accessible carousel
   * Markup contract: [data-carousel] > .carousel-viewport > [data-carousel-track] > [data-carousel-slide] (repeated)
   * Optional: [data-carousel-prev], [data-carousel-next], [data-carousel-dots]
   * Options via data attributes: data-autoplay="6000" (ms, omit to disable)
   * ------------------------------------------------------------------- */
  function initCarousel(root) {
    var track = root.querySelector('[data-carousel-track]');
    var slides = Array.prototype.slice.call(root.querySelectorAll('[data-carousel-slide]'));
    var viewport = root.querySelector('.carousel-viewport');
    var prevBtn = root.querySelector('[data-carousel-prev]');
    var nextBtn = root.querySelector('[data-carousel-next]');
    var dotsWrap = root.querySelector('[data-carousel-dots]');
    if (!track || slides.length === 0) return;

    var index = 0;
    var autoplayDelay = parseInt(root.getAttribute('data-autoplay') || '0', 10);
    var timer = null;
    var dots = [];

    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot';
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', function () { goTo(i, true); });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      });
    }

    function updateHeight() {
      if (!viewport || !slides[index]) return;
      viewport.style.height = slides[index].offsetHeight + 'px';
    }

    function render() {
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dots.forEach(function (d, i) { d.classList.toggle('active', i === index); });
      if (prevBtn) prevBtn.disabled = slides.length < 2 ? true : false;
      if (nextBtn) nextBtn.disabled = slides.length < 2 ? true : false;
      slides.forEach(function (s, i) { s.setAttribute('aria-hidden', i === index ? 'false' : 'true'); });
      updateHeight();
    }

    function goTo(i, userInitiated) {
      index = (i + slides.length) % slides.length;
      render();
      if (userInitiated) restartAutoplay();
    }

    function next(userInitiated) { goTo(index + 1, userInitiated); }
    function prev(userInitiated) { goTo(index - 1, userInitiated); }

    function startAutoplay() {
      if (!autoplayDelay || prefersReduced || slides.length < 2) return;
      timer = window.setInterval(function () { next(false); }, autoplayDelay);
    }
    function stopAutoplay() {
      if (timer) { window.clearInterval(timer); timer = null; }
    }
    function restartAutoplay() { stopAutoplay(); startAutoplay(); }

    if (nextBtn) nextBtn.addEventListener('click', function () { next(true); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(true); });

    root.addEventListener('mouseenter', stopAutoplay);
    root.addEventListener('mouseleave', startAutoplay);
    root.addEventListener('focusin', stopAutoplay);
    root.addEventListener('focusout', startAutoplay);

    root.setAttribute('tabindex', '0');
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { next(true); }
      else if (e.key === 'ArrowLeft') { prev(true); }
    });

    var touchStartX = null;
    if (viewport) {
      viewport.addEventListener('touchstart', function (e) {
        touchStartX = e.touches[0].clientX;
        stopAutoplay();
      }, { passive: true });
      viewport.addEventListener('touchend', function (e) {
        if (touchStartX === null) return;
        var dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) { dx < 0 ? next(true) : prev(true); }
        else { startAutoplay(); }
        touchStartX = null;
      });
    }

    window.addEventListener('resize', updateHeight);
    render();
    startAutoplay();
  }

  function initCarousels() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-carousel]'), initCarousel);
  }

  /* ---------------------------------------------------------------------
   * Contact / careers inquiry cards — pre-select the enquiry-type dropdown
   * ------------------------------------------------------------------- */
  function initInquiryCards() {
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-inquiry-service]'));
    if (cards.length === 0) return;
    var select = document.getElementById('c-service');

    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        cards.forEach(function (c) { c.classList.remove('is-selected'); });
        card.classList.add('is-selected');
        var value = card.getAttribute('data-inquiry-service');
        if (select) {
          Array.prototype.forEach.call(select.options, function (opt) {
            if (opt.value === value || opt.textContent.trim() === value) select.value = opt.value;
          });
        }
        var form = document.getElementById('contactForm');
        if (form) {
          form.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'center' });
          var nameField = document.getElementById('c-name');
          if (nameField) window.setTimeout(function () { nameField.focus(); }, prefersReduced ? 0 : 450);
        }
      });
    });
  }

  /* ---------------------------------------------------------------------
   * CIMA mock panel scroll parallax
   * ------------------------------------------------------------------- */
  function initCimaParallax() {
    var mock = document.querySelector('.cima-mock');
    if (!mock || prefersReduced) return;
    window.addEventListener('scroll', function () {
      var rect = mock.getBoundingClientRect();
      var progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      var y = (progress - 0.5) * 40;
      mock.style.transform = 'translateY(' + y + 'px)';
    }, { passive: true });
  }

  /* ---------------------------------------------------------------------
   * Project case-study expand/collapse
   * ------------------------------------------------------------------- */
  function initProjectCaseStudies() {
    Array.prototype.forEach.call(document.querySelectorAll('.project-overlay'), function (btn) {
      btn.addEventListener('click', function () {
        var card = btn.closest('.project-card');
        var detail = card.querySelector('.case-study');
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        btn.querySelector('span').textContent = open ? 'View Case Study' : 'Hide Case Study';
        btn.querySelector('i').className = open ? 'bi bi-plus-lg' : 'bi bi-dash-lg';
        if (detail) detail.classList.toggle('hidden', open);
      });
    });
  }

  /* ---------------------------------------------------------------------
   * Form handling (client-side only — see HANDBOOK.md Section 2.1 to
   * wire this up to a real backend before launch)
   * ------------------------------------------------------------------- */
  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function setFieldError(input, message) {
    var errorEl = document.getElementById(input.id + '-error');
    if (message) {
      input.classList.add('error');
      if (errorEl) errorEl.textContent = message;
    } else {
      input.classList.remove('error');
      if (errorEl) errorEl.textContent = '';
    }
    return !message;
  }

  function initForm(formId, requiredFields, successBuilder) {
    var form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      requiredFields.forEach(function (field) {
        var input = form.querySelector('[name="' + field.name + '"]');
        if (!input) return;
        var value = input.value.trim();
        var message = '';
        if (!value) {
          message = field.message;
        } else if (field.type === 'email' && !validateEmail(value)) {
          message = 'Please enter a valid email address.';
        }
        if (!setFieldError(input, message)) valid = false;
      });

      if (!valid) return;

      var data = {};
      Array.prototype.forEach.call(form.elements, function (el) {
        if (el.name) data[el.name] = el.value;
      });

      form.innerHTML = successBuilder(data);
    });
  }

  function initContactForm() {
    initForm('contactForm', [
      { name: 'name', message: 'Please enter your full name.' },
      { name: 'email', message: 'Please enter your email address.', type: 'email' },
      { name: 'message', message: 'Please tell us a little about your project.' },
    ], function (data) {
      var firstName = data.name.split(' ')[0];
      return '<div class="form-success"><i class="bi bi-check-circle-fill text-lg"></i>' +
        '<span>Thank you, ' + escapeHtml(firstName) + '. Your enquiry has been recorded. Our team will get back to you shortly at ' +
        escapeHtml(data.email) + '.</span></div>';
    });
  }

  function initApplicationForm() {
    initForm('applicationForm', [
      { name: 'name', message: 'Please enter your full name.' },
      { name: 'email', message: 'Please enter your email address.', type: 'email' },
      { name: 'message', message: 'Please tell us a little about your experience.' },
    ], function (data) {
      var firstName = data.name.split(' ')[0];
      return '<div class="form-success"><i class="bi bi-check-circle-fill text-lg"></i>' +
        '<span>Thank you, ' + escapeHtml(firstName) + '. Your application has been recorded. Our team will review it and get back to you at ' +
        escapeHtml(data.email) + ' if there is a suitable opportunity.</span></div>';
    });
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------------------------------------------------------------------
   * Init
   * ------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initFooterYear();
    initScrollReveal();
    initCounters();
    initHeroBar();
    initHeroInteraction();
    initHeaderScroll();
    initCarousels();
    initInquiryCards();
    initCimaParallax();
    initProjectCaseStudies();
    initContactForm();
    initApplicationForm();
  });
})();
