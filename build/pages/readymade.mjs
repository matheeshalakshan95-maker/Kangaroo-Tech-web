import { pageHeader, sectionHead, ctaPanel } from '../components.mjs';

const categories = [
  ['bi-shop', 'Business & Corporate Websites', 'Professional website foundations for service businesses, consultancies and corporate brands.'],
  ['bi-cart3', 'E-Commerce Foundations', 'Ready-built online store structures covering catalogue, cart and checkout functionality.'],
  ['bi-calendar-check', 'Booking & Scheduling Systems', 'Pre-built booking flows for service-based businesses that take appointments online.'],
  ['bi-kanban', 'CRM & Internal Management Tools', 'Foundations for customer, project and operations management systems.'],
  ['bi-window', 'Landing Pages & Campaign Sites', 'Fast-turnaround pages built for marketing campaigns and product launches.'],
  ['bi-cloud', 'SaaS Starter Architecture', 'A pre-engineered SaaS foundation — authentication, billing and multi-tenancy — ready to extend.'],
];

const steps = [
  ['01', 'Choose a Foundation', 'Select the closest-fit ready-made website or software base for your business.'],
  ['02', 'Brand & Content', 'We apply your branding, content and required pages or modules.'],
  ['03', 'Feature Customisation', 'We add or adjust functionality to match your specific requirements.'],
  ['04', 'Launch', 'Your customised solution goes live, backed by our support.'],
];

const body = `
${pageHeader('Ready-Made Solutions', 'Ready-Made Solutions')}

<section class="section">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'Faster Time to Launch', heading: 'Proven Foundations, Customised to Your Business', sub: 'Not every project needs to start from a blank page. KANGARO TECH maintains a range of ready-made website and software foundations that can be customised quickly and launched with confidence.' })}
    <div class="grid-3">
      ${categories.map(([icon, title, desc]) => `<div class="card reveal"><div class="card-icon"><i class="bi ${icon}"></i></div><h3>${title}</h3><p>${desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'How Customisation Works', heading: 'From Foundation to Finished Product' })}
    <div class="grid-4">
      ${steps.map(([num, title, desc]) => `<div class="card card-compact reveal"><div class="why-num text-2xl mb-2.5">${num}</div><h4>${title}</h4><p>${desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container-site">
    <div class="split reverse reveal">
      <div>
        <span class="eyebrow"><span class="dot"></span>Why Start Ready-Made</span>
        <h2 class="heading">A More Efficient Path to a Professional Result</h2>
        <ul class="list-check">
          <li><i class="bi bi-check-circle-fill"></i>Significantly shorter delivery timelines</li>
          <li><i class="bi bi-check-circle-fill"></i>Lower development cost than a full custom build</li>
          <li><i class="bi bi-check-circle-fill"></i>Built on the same quality standards as our custom projects</li>
          <li><i class="bi bi-check-circle-fill"></i>Fully customisable as your business grows</li>
        </ul>
      </div>
      <div class="media-slot media-frame dark">
        <div class="tile"><div class="tile-icon"><i class="bi bi-speedometer"></i></div><div><h5>Faster Launch</h5><p>Weeks, not months</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-sliders"></i></div><div><h5>Flexible Customisation</h5><p>Branding, content and features tailored to you</p></div></div>
      </div>
    </div>
  </div>
</section>

${ctaPanel({
  title: 'Need to Launch Quickly Without Cutting Corners?',
  text: 'Tell us about your business and we will recommend the right ready-made foundation to start from.',
})}
`;

export default {
  file: 'ready-made-solutions.html',
  active: 'ready-made',
  title: 'Ready-Made Websites & Software Solutions | KANGARO TECH',
  description: 'KANGARO TECH offers ready-made website and software foundations that can be customised quickly, giving Australian businesses a faster route to launch.',
  body,
};
