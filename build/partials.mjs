const NAV_ITEMS = [
  { href: 'index.html', key: 'home', label: 'Home' },
  { href: 'about.html', key: 'about', label: 'About' },
  { href: 'services.html', key: 'services', label: 'Services' },
  { href: 'cima-biz-ai.html', key: 'cima', label: 'CIMA Biz AI' },
  { href: 'outsourcing.html', key: 'outsourcing', label: 'Outsourcing' },
  { href: 'ready-made-solutions.html', key: 'ready-made', label: 'Ready-Made Solutions' },
  { href: 'projects.html', key: 'projects', label: 'Projects' },
  { href: 'pricing.html', key: 'pricing', label: 'Pricing' },
  { href: 'contact.html', key: 'contact', label: 'Contact' },
];

const logoMark = (size) => `<svg class="logomark" width="${size}" height="${size}" viewBox="0 0 100 100" aria-hidden="true">
  <defs>
    <linearGradient id="kt-grad" gradientUnits="userSpaceOnUse" x1="30" y1="0" x2="70" y2="100">
      <stop offset="0%" stop-color="#9b3ffb"/><stop offset="45%" stop-color="#6d4bf5"/><stop offset="100%" stop-color="#1470ff"/>
    </linearGradient>
  </defs>
  <g stroke="url(#kt-grad)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M30 12 L30 88"/><path d="M30 51 L76 12"/><path d="M30 51 L76 90"/>
  </g>
  <path d="M12 70 C 38 79, 52 44, 90 22" stroke="#2c46d6" stroke-opacity=".35" stroke-width="3" stroke-linecap="round" fill="none"/>
  <path class="swoosh" d="M10 64 C 38 73, 52 38, 92 16" stroke="#ffffff" stroke-opacity=".96" stroke-width="5.5" stroke-linecap="round" fill="none"/>
</svg>`;

export const header = (activeKey) => `
<header class="site-header">
  <div class="container-site header-inner">
    <a class="logo" href="index.html">
      ${logoMark(38)}
      <span class="logo-word flex flex-col leading-tight">
        <span>Kangaro<span class="accent">Tech</span></span>
        <span class="logo-sub">Under CIMA Group Pty Ltd</span>
      </span>
    </a>
    <nav class="nav-desktop">
      ${NAV_ITEMS.map((item) => `<a href="${item.href}"${item.key === activeKey ? ' class="active"' : ''}>${item.label}</a>`).join('\n      ')}
    </nav>
    <div class="flex items-center gap-3.5">
      <a href="contact.html" class="btn btn-primary btn-sm hidden lg:inline-flex">Get a Free Consultation</a>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobileNav">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" id="menuIcon">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </div>
  </div>
</header>

<div class="mobile-nav" id="mobileNav">
  ${NAV_ITEMS.map((item) => `<a href="${item.href}"${item.key === activeKey ? ' class="active"' : ''}>${item.label}</a>`).join('\n  ')}
  <a href="contact.html" class="btn btn-primary btn-block mt-3">Get a Free Consultation</a>
</div>`;

export const footer = () => `
<footer class="site-footer">
  <div class="container-site">
    <div class="footer-grid">
      <div>
        <a class="logo mb-4" href="index.html" style="color:#fff;">
          ${logoMark(34)}
          <span class="logo-word flex flex-col leading-tight"><span>Kangaro<span class="accent">Tech</span></span></span>
        </a>
        <p>Australian-standard websites, software, SaaS platforms and AI-integrated systems, delivered by expert Sri Lankan technology teams under CIMA Group Pty Ltd.</p>
        <div class="social-icons">
          <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
          <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
      <div>
        <h5>Company</h5>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="cima-biz-ai.html">CIMA Biz AI</a></li>
          <li><a href="projects.html">Projects &amp; Case Studies</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="careers.html">Freelance &amp; Careers</a></li>
        </ul>
      </div>
      <div>
        <h5>Solutions</h5>
        <ul class="footer-links">
          <li><a href="outsourcing.html">IT Outsourcing</a></li>
          <li><a href="ready-made-solutions.html">Ready-Made Solutions</a></li>
          <li><a href="services.html">AI Business Automation</a></li>
          <li><a href="services.html">UI/UX Design</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h5>Get in Touch</h5>
        <ul class="footer-contact">
          <li><i class="bi bi-envelope"></i><a href="mailto:hello@kangarotech.com.au">hello@kangarotech.com.au</a></li>
          <li><i class="bi bi-telephone"></i><a href="tel:+61XXXXXXXXX">+61 XXX XXX XXX</a></li>
          <li><i class="bi bi-geo-alt"></i><span>Adelaide, South Australia, Australia</span></li>
          <li><i class="bi bi-geo-alt"></i><span>Colombo, Sri Lanka</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; <span id="footerYear">2026</span> KANGARO TECH &mdash; Under CIMA Group Pty Ltd. All rights reserved.</span>
      <span>Adelaide, Australia &bull; Sri Lanka</span>
    </div>
  </div>
</footer>`;
