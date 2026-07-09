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
    initCimaParallax();
    initProjectCaseStudies();
    initContactForm();
    initApplicationForm();
  });
})();
