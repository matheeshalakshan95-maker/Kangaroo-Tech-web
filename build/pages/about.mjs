import { pageHeader, sectionHead, ctaPanel } from '../components.mjs';

const values = [
  ['bi-bullseye', 'Quality Without Compromise', 'We apply Australian business and quality standards to every project, regardless of team location.'],
  ['bi-people-fill', 'Genuine Partnership', 'We work as an extension of your business, not a distant vendor.'],
  ['bi-cpu-fill', 'AI-First Thinking', 'We look for opportunities to automate and improve, not just build what is asked.'],
  ['bi-shield-check', 'Transparent Delivery', 'Clear scope, timelines and reporting, with no hidden surprises.'],
];

const teamFunctions = [
  ['bi-code-slash', 'Software Engineering', 'Full-stack developers building websites, software and SaaS platforms.'],
  ['bi-cpu-fill', 'AI & Automation', 'Engineers focused on AI integration, automation and the CIMA Biz AI platform.'],
  ['bi-palette2', 'UI/UX Design', 'Designers responsible for product experience, branding and interface design.'],
  ['bi-bug', 'Quality Assurance', 'Dedicated QA to test and validate every release against Australian standards.'],
  ['bi-megaphone-fill', 'Digital Marketing', 'SEO, Google Ads and campaign specialists driving measurable results.'],
  ['bi-kanban-fill', 'Project Coordination', 'Coordinators keeping delivery on schedule and communication clear.'],
];

const body = `
${pageHeader('About KANGARO TECH', 'About')}

<section class="section">
  <div class="container-site">
    <div class="split">
      <div>
        <span class="eyebrow"><span class="dot"></span>Our Story</span>
        <h2 class="heading">An Australian Technology Company, Built on Sri Lankan Engineering Talent</h2>
        <p class="text-muted mb-4">KANGARO TECH operates under CIMA Group Pty Ltd, Australia, with teams based in Adelaide, Australia and Sri Lanka. We help Australian businesses build websites, software, SaaS platforms, AI-integrated systems, UI/UX designs, digital marketing campaigns and full outsourced IT departments.</p>
        <p class="text-muted">Our model is simple: combine Australian business standards with Sri Lankan technical expertise to deliver high-quality projects at a lower development cost &mdash; without reducing quality, communication or accountability.</p>
      </div>
      <div class="media-frame">
        <div class="tile"><div class="tile-icon"><i class="bi bi-building"></i></div><div><h5>Parent Company</h5><p>CIMA Group Pty Ltd, Australia</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-geo-alt"></i></div><div><h5>Australian Base</h5><p>Adelaide, South Australia</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-geo-alt-fill"></i></div><div><h5>Delivery Base</h5><p>Sri Lanka</p></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'Our Values', heading: 'What Guides Our Work', sub: 'These principles shape how we plan, build and support every project we deliver.' })}
    <div class="grid-4">
      ${values.map(([icon, title, desc]) => `<div class="card reveal"><div class="card-icon"><i class="bi ${icon}"></i></div><h4>${title}</h4><p>${desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container-site">
    <div class="split reverse reveal">
      <div>
        <span class="eyebrow"><span class="dot"></span>How We Work</span>
        <h2 class="heading">One Business, Two Locations, One Standard</h2>
        <p class="text-muted mb-5">Our Australian base in Adelaide leads client relationships, project governance and business alignment, while our Sri Lanka-based technical team handles development, design, AI engineering and delivery. The result is a business that speaks the language of Australian clients while operating with the technical depth of a specialist offshore team.</p>
        <ul class="list-check">
          <li><i class="bi bi-check-circle-fill"></i>Australian-based client management and communication</li>
          <li><i class="bi bi-check-circle-fill"></i>Sri Lanka-based development, design and engineering</li>
          <li><i class="bi bi-check-circle-fill"></i>Shared project tools, reporting and quality standards</li>
          <li><i class="bi bi-check-circle-fill"></i>Flexible engagement models for projects of any size</li>
        </ul>
      </div>
      <div class="media-slot media-frame dark">
        <div class="tile"><div class="tile-icon"><i class="bi bi-diagram-3"></i></div><div><h5>Governance</h5><p>Australian business oversight</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-terminal"></i></div><div><h5>Engineering</h5><p>Sri Lankan technical delivery</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-graph-up"></i></div><div><h5>Outcome</h5><p>Cost-effective, high-quality delivery</p></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'Our Team', heading: 'A Growing Team Across Two Countries', sub: 'KANGARO TECH is a growing company. Rather than a single office, we operate as functional teams spanning Australia and Sri Lanka, each responsible for a specific part of delivery.' })}

    <div class="split mb-12 reveal">
      <div class="media-frame dark">
        <span class="tag-pill" style="background:rgba(255,255,255,0.1);color:#fff;">Australia</span>
        <div class="tile"><div class="tile-icon"><i class="bi bi-person-badge"></i></div><div><h5>Client Partnership &amp; Governance</h5><p>Business alignment and account management</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-clipboard-check"></i></div><div><h5>Project Oversight</h5><p>Quality standards and reporting</p></div></div>
      </div>
      <div class="media-frame">
        <span class="tag-pill">Sri Lanka</span>
        <div class="tile"><div class="tile-icon"><i class="bi bi-terminal"></i></div><div><h5>Engineering &amp; Delivery</h5><p>Development, AI, design and QA teams</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-graph-up-arrow"></i></div><div><h5>Marketing &amp; Support</h5><p>Campaign execution and ongoing support</p></div></div>
      </div>
    </div>

    <div class="grid-3">
      ${teamFunctions.map(([icon, title, desc]) => `<div class="card reveal"><div class="card-icon"><i class="bi ${icon}"></i></div><h4>${title}</h4><p>${desc}</p></div>`).join('\n      ')}
    </div>

    <div class="text-center mt-9">
      <p class="mb-4">Interested in joining our Sri Lanka-based delivery team?</p>
      <a href="careers.html" class="btn btn-navy">View Freelance &amp; Career Opportunities <i class="bi bi-arrow-right"></i></a>
    </div>
  </div>
</section>

${ctaPanel({
  title: 'Ready to Work with a Team That Understands Both Sides of the Partnership',
  text: 'Talk to us about your project and see how the KANGARO TECH delivery model can work for your business.',
})}
`;

export default {
  file: 'about.html',
  active: 'about',
  title: 'About KANGARO TECH | Australian Standards, Sri Lankan Expertise',
  description: 'KANGARO TECH is an IT, software and AI solutions company under CIMA Group Pty Ltd, operating from Adelaide, Australia and Sri Lanka.',
  body,
};
