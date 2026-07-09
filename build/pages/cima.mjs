import { pageHeader, sectionHead, ctaPanel } from '../components.mjs';

const capabilities = [
  ['bi-gear-wide-connected', 'Operations Automation', 'Automate repetitive operational tasks across departments, reducing manual workload.'],
  ['bi-graph-up-arrow', 'AI Analytics', 'Turn business data into clear, actionable insight using AI-driven analytics.'],
  ['bi-diagram-3', 'Workflow Management', 'Design, assign and track business workflows from a single control centre.'],
  ['bi-lightbulb', 'Decision Support', 'AI-assisted recommendations to support faster, more informed business decisions.'],
  ['bi-boxes', 'Modular by Design', 'Configurable modules so the platform adapts to different industries and team sizes.'],
  ['bi-shield-lock', 'Secure SaaS Architecture', 'Built on a scalable, secure multi-tenant architecture from the ground up.'],
];

const roadmap = [
  ['Phase 1', 'Core Platform & Workflow Engine', 'In Development'],
  ['Phase 2', 'AI Analytics & Decision Support Engine', 'In Development'],
  ['Phase 3', 'Industry-Specific Modules', 'Planned'],
  ['Phase 4', 'Public Availability', 'Planned'],
];

const body = `
${pageHeader('CIMA Biz AI', 'CIMA Biz AI')}

<section class="section">
  <div class="container-site">
    <div class="cima-panel reveal">
      <span class="cima-badge"><i class="bi bi-stars"></i> Flagship Product &mdash; Currently Under Development</span>
      <h2 class="text-2xl md:text-[34px] text-white mb-4">The Business Operating System We Are Building for Our Clients</h2>
      <p class="text-white/80 text-base max-w-2xl">CIMA Biz AI is our flagship SaaS masterpiece, designed to help businesses automate operations, improve decision-making, manage workflows, use AI analytics and integrate AI into daily business systems. It is being engineered by the same team that delivers KANGARO TECH client projects, using the same Australian-standard quality process.</p>
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'Platform Capabilities', heading: 'What CIMA Biz AI Is Being Built to Do', sub: 'A single platform to bring automation, analytics and AI-assisted decision-making into everyday business operations.' })}
    <div class="grid-3">
      ${capabilities.map(([icon, title, desc]) => `<div class="card reveal"><div class="card-icon"><i class="bi ${icon}"></i></div><h3>${title}</h3><p>${desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container-site">
    <div class="split reveal">
      <div>
        <span class="eyebrow"><span class="dot"></span>Development Roadmap</span>
        <h2 class="heading">Built in Stages, Tested at Every Step</h2>
        <p class="text-muted">CIMA Biz AI is under active development. We are building the platform in structured phases so that each capability is properly engineered and tested before moving to the next.</p>
      </div>
      <div>
        ${roadmap.map(([phase, title, status]) => `<div class="why-item"><span class="why-num">${phase}</span><div class="flex justify-between w-full items-center flex-wrap gap-2"><h4 class="m-0">${title}</h4><span class="tag-pill mb-0">${status}</span></div></div>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site text-center">
    <h2 class="heading">Interested in Early Access to CIMA Biz AI?</h2>
    <p class="subheading mx-auto mb-7">Register your interest and our team will keep you updated as CIMA Biz AI moves toward release, including opportunities to take part in early testing.</p>
    <a href="contact.html" class="btn btn-primary">Register Your Interest <i class="bi bi-arrow-right"></i></a>
  </div>
</section>

${ctaPanel()}
`;

export default {
  file: 'cima-biz-ai.html',
  active: 'cima',
  title: 'CIMA Biz AI | Flagship AI-Powered SaaS Platform | KANGARO TECH',
  description: 'CIMA Biz AI is KANGARO TECH’s flagship SaaS platform, helping businesses automate operations, manage workflows and use AI analytics for better decision-making.',
  body,
};
