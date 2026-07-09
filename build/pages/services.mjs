import { pageHeader, sectionHead, ctaPanel } from '../components.mjs';

const services = [
  ['bi-window-stack', 'Website Design & Development', 'We design and build fast, secure, SEO-friendly websites — from corporate sites to complex web applications — using modern frameworks and Australian UX standards.'],
  ['bi-code-slash', 'Custom Software Development', 'From internal management systems to customer-facing platforms, our engineering team builds reliable, scalable software mapped to your business processes.'],
  ['bi-cloud-arrow-up', 'SaaS Application Development', 'We architect and build SaaS products end-to-end — data model, billing, multi-tenancy, security and infrastructure — with our flagship build being CIMA Biz AI.'],
  ['bi-cpu', 'AI Business Automation', 'We identify manual, time-consuming workflows and replace them with AI-driven automation across operations, reporting, customer service and internal processes.'],
  ['bi-diagram-3', 'AI Integration for Existing Businesses', 'We integrate AI models and analytics into your existing software, CRMs and internal tools to improve decision-making without disrupting current operations.'],
  ['bi-palette', 'UI/UX Design', 'Our design team creates intuitive product experiences — wireframes, prototypes and design systems — that reduce friction and improve customer engagement.'],
  ['bi-layers', 'Full Stack Development', 'A single accountable team handles your entire technology stack, reducing coordination overhead and keeping delivery consistent from planning to deployment.'],
  ['bi-phone', 'Mobile App Development', 'We build mobile applications that connect to your existing systems, with a focus on performance, usability and long-term maintainability.'],
  ['bi-megaphone', 'Digital Marketing', 'We plan and execute digital marketing campaigns built around measurable outcomes, combining content, paid media and analytics into one coordinated strategy.'],
  ['bi-graph-up-arrow', 'Google Ads & Analytics-Based Marketing', 'Our campaigns are structured around analytics-based optimisation — tracking, testing and refining based on real performance data, not assumptions.'],
  ['bi-search', 'SEO', 'We improve site structure, technical performance and content quality to help your business rank for the search terms your customers actually use.'],
  ['bi-people', 'IT Department Outsourcing', 'Hand over your entire technology function — development, support, infrastructure and reporting — to a dedicated Sri Lanka-based team under Australian oversight.'],
  ['bi-person-workspace', 'Freelance Developer Support', 'Bring in vetted developers for short-term projects, overflow work or specialist skills, without the overhead of a permanent hire.'],
  ['bi-gear-wide-connected', 'Business Process Automation', 'We map your existing workflows and implement automation across approvals, reporting, data entry and cross-system processes to reduce operational overhead.'],
  ['bi-box-seam', 'Ready-Made Websites & Software Solutions', 'For businesses that need to move fast, we offer proven website and software foundations that can be tailored to your brand and requirements in a fraction of the time.'],
];

const process = [
  ['01', 'Discovery & Scoping', 'We understand your business goals, requirements and constraints before writing a proposal.'],
  ['02', 'Planning & Design', 'Clear project plans, UI/UX design and technical architecture, agreed before development starts.'],
  ['03', 'Development & QA', 'Sri Lankan engineering teams build and test against Australian quality standards.'],
  ['04', 'Launch & Support', 'We deploy, monitor and provide ongoing support as your business scales.'],
];

const body = `
${pageHeader('Our Services', 'Services')}

<section class="section">
  <div class="container-site">
    ${sectionHead({ eyebrow: '15 Core Service Lines', heading: 'Everything Your Business Needs From One Technology Partner', sub: 'We support Australian businesses across the full technology and digital marketing lifecycle — from a first website through to AI-integrated SaaS platforms.' })}
    <div class="grid-3">
      ${services.map(([icon, title, desc]) => `<div class="card reveal"><div class="card-icon"><i class="bi ${icon}"></i></div><h3>${title}</h3><p>${desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'Our Process', heading: 'A Structured, Transparent Delivery Process', sub: 'Every engagement follows the same disciplined process, regardless of project size.' })}
    <div class="grid-4">
      ${process.map(([num, title, desc]) => `<div class="card card-compact reveal"><div class="why-num text-2xl mb-2.5">${num}</div><h4>${title}</h4><p>${desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaPanel()}
`;

export default {
  file: 'services.html',
  active: 'services',
  title: 'Our Services | Web, Software, SaaS, AI & Marketing | KANGARO TECH',
  description: "Explore KANGARO TECH's full range of services: website and software development, SaaS, AI automation, UI/UX design, digital marketing, SEO and IT outsourcing.",
  body,
};
