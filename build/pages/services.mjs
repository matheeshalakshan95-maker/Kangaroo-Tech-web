import { pageHeader, sectionHead, ctaPanel, serviceCard } from '../components.mjs';

const services = [
  { icon: 'bi-window-stack', title: 'Website Design & Development', desc: 'We design and build fast, secure, SEO-friendly websites — from corporate sites to complex web applications — using modern frameworks and Australian UX standards.', href: 'contact.html', label: 'Get in touch' },
  { icon: 'bi-code-slash', title: 'Custom Software Development', desc: 'From internal management systems to customer-facing platforms, our engineering team builds reliable, scalable software mapped to your business processes.', href: 'contact.html', label: 'Get in touch' },
  { icon: 'bi-cloud-arrow-up', title: 'SaaS Application Development', desc: 'We architect and build SaaS products end-to-end — data model, billing, multi-tenancy, security and infrastructure — with our flagship build being CIMA Biz AI.', href: 'cima-biz-ai.html', label: 'See our flagship SaaS' },
  { icon: 'bi-cpu', title: 'AI Business Automation', desc: 'We identify manual, time-consuming workflows and replace them with AI-driven automation across operations, reporting, customer service and internal processes.', href: 'cima-biz-ai.html', label: 'See AI in action' },
  { icon: 'bi-diagram-3', title: 'AI Integration for Existing Businesses', desc: 'We integrate AI models and analytics into your existing software, CRMs and internal tools to improve decision-making without disrupting current operations.', href: 'contact.html', label: 'Get in touch' },
  { icon: 'bi-palette', title: 'UI/UX Design', desc: 'Our design team creates intuitive product experiences — wireframes, prototypes and design systems — that reduce friction and improve customer engagement.', href: 'contact.html', label: 'Get in touch' },
  { icon: 'bi-layers', title: 'Full Stack Development', desc: 'A single accountable team handles your entire technology stack, reducing coordination overhead and keeping delivery consistent from planning to deployment.', href: 'contact.html', label: 'Get in touch' },
  { icon: 'bi-phone', title: 'Mobile App Development', desc: 'We build mobile applications that connect to your existing systems, with a focus on performance, usability and long-term maintainability.', href: 'contact.html', label: 'Get in touch' },
  { icon: 'bi-megaphone', title: 'Digital Marketing', desc: 'We plan and execute digital marketing campaigns built around measurable outcomes, combining content, paid media and analytics into one coordinated strategy.', href: 'contact.html', label: 'Get in touch' },
  { icon: 'bi-graph-up-arrow', title: 'Google Ads & Analytics-Based Marketing', desc: 'Our campaigns are structured around analytics-based optimisation — tracking, testing and refining based on real performance data, not assumptions.', href: 'contact.html', label: 'Get in touch' },
  { icon: 'bi-search', title: 'SEO', desc: 'We improve site structure, technical performance and content quality to help your business rank for the search terms your customers actually use.', href: 'contact.html', label: 'Get in touch' },
  { icon: 'bi-people', title: 'IT Department Outsourcing', desc: 'Hand over your entire technology function — development, support, infrastructure and reporting — to a dedicated Sri Lanka-based team under Australian oversight.', href: 'outsourcing.html', label: 'Explore outsourcing' },
  { icon: 'bi-person-workspace', title: 'Freelance Developer Support', desc: 'Bring in vetted developers for short-term projects, overflow work or specialist skills, without the overhead of a permanent hire.', href: 'outsourcing.html', label: 'Explore outsourcing' },
  { icon: 'bi-gear-wide-connected', title: 'Business Process Automation', desc: 'We map your existing workflows and implement automation across approvals, reporting, data entry and cross-system processes to reduce operational overhead.', href: 'contact.html', label: 'Get in touch' },
  { icon: 'bi-box-seam', title: 'Ready-Made Websites & Software Solutions', desc: 'For businesses that need to move fast, we offer proven website and software foundations that can be tailored to your brand and requirements in a fraction of the time.', href: 'ready-made-solutions.html', label: 'View ready-made solutions' },
  { icon: 'bi-stars', title: 'CIMA Biz AI', desc: 'Our flagship AI-powered SaaS platform, built to bring operations automation, analytics and intelligent workflows into everyday business systems.', href: 'cima-biz-ai.html', label: 'Explore the platform' },
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
    ${sectionHead({ eyebrow: '16 Core Service Lines', heading: 'Everything Your Business Needs From One Technology Partner', sub: 'We support Australian businesses across the full technology and digital marketing lifecycle — from a first website through to AI-integrated SaaS platforms.' })}
    <div class="grid-3">
      ${services.map((s) => serviceCard(s.icon, s.title, s.desc, { linkHref: s.href, linkLabel: s.label })).join('\n      ')}
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
  description: "Explore KANGARO TECH's full range of services: website and software development, SaaS, AI automation, UI/UX design, digital marketing, SEO, CIMA Biz AI and IT outsourcing.",
  body,
};
