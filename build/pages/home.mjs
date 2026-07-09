import { sectionHead, ctaPanel, checkIcon } from '../components.mjs';

const capabilities = [
  ['bi-window-stack', 'Website Development'],
  ['bi-cpu', 'AI Automation'],
  ['bi-cloud-arrow-up', 'SaaS Platforms'],
  ['bi-palette', 'UI/UX Design'],
  ['bi-phone', 'Mobile Apps'],
  ['bi-megaphone', 'Digital Marketing'],
  ['bi-people', 'IT Outsourcing'],
  ['bi-search', 'SEO'],
  ['bi-graph-up-arrow', 'Google Ads'],
  ['bi-gear-wide-connected', 'Process Automation'],
];
const marqueeChips = (list) => list.map(([icon, label]) =>
  `<span class="marquee-chip"><i class="bi ${icon}"></i>${label}</span>`).join('\n        ');

const trustItems = [
  ['bi-patch-check', 'Australian Business Standards', 'Every engagement follows Australian communication, reporting and quality expectations.'],
  ['bi-mortarboard', 'Sri Lankan Expert Talent', 'Experienced developers, designers and marketers delivering enterprise-grade work.'],
  ['bi-cash-coin', 'Lower Development Cost', 'Efficient delivery from Sri Lanka reduces cost without reducing quality.'],
  ['bi-award', 'High-Quality Delivery', 'Structured QA, code review and project governance on every build.'],
  ['bi-speedometer2', 'Fast Project Turnaround', 'Dedicated teams and clear processes keep projects moving on schedule.'],
  ['bi-stars', 'AI-Ready Solutions', 'Every platform we build is designed to support automation and AI from the start.'],
];

const featuredServices = [
  ['bi-window-stack', 'Website Design & Development', 'Professional, responsive websites built for performance, credibility and lead generation.'],
  ['bi-code-slash', 'Custom Software Development', 'Bespoke business software tailored to your exact operational requirements.'],
  ['bi-cloud-arrow-up', 'SaaS Application Development', 'Multi-tenant, subscription-ready platforms designed to scale with your customer base.'],
  ['bi-cpu', 'AI Business Automation', 'Automate repetitive operations and free your team to focus on higher-value work.'],
  ['bi-palette', 'UI/UX Design', 'Clean, conversion-focused interface design grounded in real user research.'],
  ['bi-megaphone', 'Digital Marketing', 'Data-driven marketing strategy across the channels that matter to your business.'],
  ['bi-people', 'IT Department Outsourcing', 'A full outsourced IT team, managed under Australian business standards.'],
];

const whyItems = [
  ['Cost-Effective Development', 'Sri Lankan delivery reduces development cost while maintaining Australian quality benchmarks.'],
  ['Australian-Based Management', 'Client communication and project oversight aligned with Australian business practices.'],
  ['Sri Lankan Expert Delivery Team', 'Experienced engineers, designers and marketers executing every project.'],
  ['AI-First Approach', 'We design systems with automation and AI integration in mind from day one.'],
  ['Professional Project Handling', 'Clear scoping, timelines and reporting across every engagement.'],
  ['Scalable SaaS & Software Architecture', 'Built to grow — from first release to enterprise scale.'],
  ['End-to-End Delivery', 'Strategy, design, development, deployment and support — one accountable partner.'],
];

const body = `
<section class="hero bg-navy-grad" id="top">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="hero-spotlight" id="heroSpotlight"></div>
  <div class="hero-blob b1"></div>
  <div class="hero-blob b2"></div>
  <div class="hero-blob b3"></div>
  <div class="container-site relative z-[1]">
    <div class="split">
      <div>
        <span class="hero-eyebrow"><span class="w-1.5 h-1.5 rounded-full bg-green inline-block"></span>&nbsp;Australia &bull; Sri Lanka Technology Partnership</span>
        <h1>Build Smarter Digital Solutions with <span class="shimmer">KANGARO TECH</span></h1>
        <p class="lead">Australian-standard software, AI, SaaS, web development and digital marketing powered by expert Sri Lankan technology teams.</p>
        <div class="hero-actions">
          <a href="contact.html" class="btn btn-primary">Get a Free Consultation <i class="bi bi-arrow-right"></i></a>
          <a href="services.html" class="btn btn-outline">Explore Our Services</a>
        </div>
        <div class="hero-stats">
          <div class="stat"><h3 data-count="2">0</h3><span>Countries, one delivery standard</span></div>
          <div class="stat"><h3 data-count="15" data-suffix="+">0</h3><span>Core service lines</span></div>
          <div class="stat"><h3>AI-Ready</h3><span>Built for automation from day one</span></div>
        </div>
      </div>
      <div class="hero-panel-tilt" id="heroTilt">
        <div class="hero-panel">
          <div class="row-line"><span class="label">Project Delivery Standard</span><span class="value">Australian Business Grade</span></div>
          <div class="row-line"><span class="label">Engineering Team</span><span class="value">Sri Lankan Technology Experts</span></div>
          <div class="row-line"><span class="label">Flagship Product</span><span class="value">CIMA Biz AI (In Development)</span></div>
          <div class="mt-4">
            <div class="row-line tight"><span class="label">Development Cost Efficiency</span><span class="value">High</span></div>
            <div class="bar" id="heroBar"><span></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="marquee">
  <div class="marquee-track">
        ${marqueeChips(capabilities)}
        ${marqueeChips(capabilities)}
  </div>
</div>

<section class="section">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'Why Businesses Choose Us', heading: 'A Trusted Australia&ndash;Sri Lanka Delivery Model', sub: 'We combine Australian business governance with Sri Lankan technical depth to give you dependable, high-quality outcomes at a more efficient cost.' })}
    <div class="grid-3">
      ${trustItems.map(([icon, title, desc]) => `<div class="trust-item reveal"><div class="trust-icon"><i class="bi ${icon}"></i></div><div><h4 class="text-base mb-1.5">${title}</h4><p class="text-sm text-muted m-0">${desc}</p></div></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'What We Do', heading: 'Full-Spectrum Technology &amp; Marketing Services', sub: 'From web and software to AI automation and digital marketing, KANGARO TECH covers every capability an Australian business needs to grow.' })}
    <div class="grid-3">
      ${featuredServices.map(([icon, title, desc]) => `<div class="card reveal"><div class="card-icon"><i class="bi ${icon}"></i></div><h3>${title}</h3><p>${desc}</p></div>`).join('\n      ')}
    </div>
    <div class="text-center mt-10">
      <a href="services.html" class="btn btn-navy">View All 15 Services <i class="bi bi-arrow-right"></i></a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container-site">
    <div class="cima-panel reveal">
      <div class="split relative z-[1]">
        <div>
          <span class="cima-badge"><i class="bi bi-stars"></i> Flagship Product &mdash; In Development</span>
          <h2 class="text-2xl md:text-[34px] text-white mb-4">CIMA Biz AI: Our Flagship SaaS Platform</h2>
          <p class="text-white/80 text-base">CIMA Biz AI is the flagship SaaS product being built by KANGARO TECH. It is designed to help businesses automate operations, improve decision-making, manage workflows and bring AI analytics into everyday business systems.</p>
          <ul class="cima-features">
            <li>${checkIcon()}AI-powered operations automation</li>
            <li>${checkIcon()}Real-time business analytics dashboards</li>
            <li>${checkIcon()}Intelligent workflow management</li>
            <li>${checkIcon()}Data-driven decision support</li>
            <li>${checkIcon()}Configurable modules for different industries</li>
            <li>${checkIcon()}Built on a scalable, secure SaaS architecture</li>
          </ul>
          <a href="cima-biz-ai.html" class="btn btn-green">Learn More About CIMA Biz AI <i class="bi bi-arrow-right"></i></a>
        </div>
        <div class="cima-mock">
          <div class="head"><span></span><span></span><span></span></div>
          <div class="row"><span>Workflow Automation</span><b>Active</b></div>
          <div class="row"><span>AI Decision Engine</span><b>Processing</b></div>
          <div class="row"><span>Operational Efficiency</span><b>+32%</b></div>
          <div class="chart">
            <span style="height:40%;"></span><span style="height:65%;"></span><span style="height:50%;"></span>
            <span style="height:85%;"></span><span style="height:60%;"></span><span style="height:95%;"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    <div class="split reveal">
      <div>
        <span class="eyebrow"><span class="dot"></span>IT &amp; Team Outsourcing</span>
        <h2 class="heading">Outsource Your IT Department to KANGARO TECH</h2>
        <p class="subheading">Businesses can outsource their entire IT department, development team, design team or marketing support to KANGARO TECH &mdash; managed under Australian business standards and delivered by our Sri Lankan expert teams.</p>
        <ul class="list-check">
          <li><i class="bi bi-check-circle-fill"></i>Outsource your entire IT department or a single function</li>
          <li><i class="bi bi-check-circle-fill"></i>Dedicated development, design or marketing teams</li>
          <li><i class="bi bi-check-circle-fill"></i>Australian-based coordination with Sri Lankan delivery teams</li>
          <li><i class="bi bi-check-circle-fill"></i>Flexible engagement &mdash; project-based or ongoing support</li>
        </ul>
        <a href="outsourcing.html" class="btn btn-navy mt-2">Explore Outsourcing Options <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="media-slot media-frame">
        <div class="tile"><div class="tile-icon"><i class="bi bi-code-slash"></i></div><div><h5>Development Team</h5><p>Full-stack engineers on demand</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-palette"></i></div><div><h5>Design Team</h5><p>UI/UX &amp; brand design support</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-megaphone"></i></div><div><h5>Marketing Team</h5><p>Campaigns, SEO &amp; analytics</p></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container-site">
    <div class="split reverse reveal">
      <div>
        <span class="eyebrow"><span class="dot"></span>Ready-Made Solutions</span>
        <h2 class="heading">Launch Faster with Ready-Made Websites &amp; Software</h2>
        <p class="subheading">KANGARO TECH maintains ready-made website and software foundations that can be customised quickly to your brand and requirements &mdash; ideal for businesses that need a professional solution without a full ground-up build.</p>
        <ul class="list-check">
          <li><i class="bi bi-check-circle-fill"></i>Pre-built websites for common business categories</li>
          <li><i class="bi bi-check-circle-fill"></i>Reusable software foundations for internal tools and portals</li>
          <li><i class="bi bi-check-circle-fill"></i>Faster launch timelines than a full custom build</li>
          <li><i class="bi bi-check-circle-fill"></i>Fully customisable branding, features and integrations</li>
        </ul>
        <a href="ready-made-solutions.html" class="btn btn-navy mt-2">View Ready-Made Solutions <i class="bi bi-arrow-right"></i></a>
      </div>
      <div class="media-slot media-frame dark">
        <div class="tile"><div class="tile-icon"><i class="bi bi-globe2"></i></div><div><h5>Business Website Templates</h5><p>Corporate, service &amp; e-commerce ready</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-kanban"></i></div><div><h5>Internal Software Foundations</h5><p>CRM, booking &amp; management systems</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-lightning-charge"></i></div><div><h5>Rapid Customisation</h5><p>Configured to your brand in days, not months</p></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    <div class="split reveal">
      <div>
        <span class="eyebrow"><span class="dot"></span>Why Choose Us</span>
        <h2 class="heading">The KANGARO TECH Advantage</h2>
        <p class="subheading">A delivery model built specifically to give Australian businesses the confidence of local standards with the efficiency of an experienced offshore team.</p>
      </div>
      <div>
        ${whyItems.map(([title, desc], i) => `<div class="why-item"><span class="why-num">${String(i + 1).padStart(2, '0')}</span><div><h4>${title}</h4><p>${desc}</p></div></div>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>

${ctaPanel()}
`;

export default {
  file: 'index.html',
  active: 'home',
  title: 'KANGARO TECH | Australian-Standard Software, AI & SaaS Development',
  description: 'KANGARO TECH builds websites, software, SaaS platforms and AI-integrated systems for Australian businesses, combining Australian standards with expert Sri Lankan technology teams.',
  body,
};
