import { pageHeader, sectionHead, ctaPanel } from '../components.mjs';

const models = [
  {
    title: 'Fixed-Price Project', note: 'Best for clearly defined websites, software or app builds',
    features: ['Agreed scope, timeline and deliverables', 'Single, predictable project cost', 'Ideal for websites, apps and defined features', 'Structured milestones and sign-off'],
  },
  {
    title: 'Dedicated Team / Staff Augmentation', note: 'Best for ongoing product or platform development', featured: true,
    features: ['Developers, designers or QA working exclusively for you', 'Scales up or down as your roadmap changes', 'Direct communication with your dedicated team', 'Ideal for SaaS products and long-term platforms'],
  },
  {
    title: 'Outsourced IT Department', note: 'Best for businesses replacing or extending an internal IT function',
    features: ['End-to-end technology support under one team', 'Development, support, infrastructure and reporting', 'Australian-based account management', 'Predictable monthly engagement'],
  },
  {
    title: 'Hourly / Freelance Support', note: 'Best for short-term tasks or specialist skill gaps',
    features: ['Pay only for the hours you need', 'Quick access to specific technical skills', 'No long-term commitment required', 'Ideal for fixes, enhancements and overflow work'],
  },
];

const factors = [
  ['bi-rulers', 'Project Scope', 'The size and complexity of the features you need built.'],
  ['bi-clock-history', 'Timeline', 'Standard delivery versus accelerated timelines.'],
  ['bi-people', 'Team Size', 'Number of developers, designers or specialists required.'],
  ['bi-arrow-repeat', 'Ongoing Support', 'Whether the engagement includes long-term maintenance.'],
];

const priceCard = (m) => `
<div class="price-card reveal${m.featured ? ' featured' : ''}">
  ${m.featured ? '<span class="badge-pop">Most Flexible</span>' : ''}
  <h3>${m.title}</h3>
  <p class="price-note">${m.note}</p>
  <ul class="list-check">${m.features.map((f) => `<li><i class="bi bi-check-circle-fill"></i>${f}</li>`).join('')}</ul>
  <a href="contact.html" class="btn btn-navy btn-block mt-5">Request a Quote</a>
</div>`;

const body = `
${pageHeader('Pricing & Engagement Models', 'Pricing')}

<section class="section">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'Flexible Engagement', heading: 'An Engagement Model to Fit Your Project', sub: 'Every business has different needs. We structure engagements around your project rather than forcing a single pricing template — all delivered at a lower development cost through our Sri Lanka-based team.' })}
    <div class="grid-4">
      ${models.map(priceCard).join('\n      ')}
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'How Cost Is Determined', heading: 'What Affects Your Project Cost', sub: 'We provide a detailed, transparent quote after understanding your requirements — no generic price lists, no hidden fees.' })}
    <div class="grid-4">
      ${factors.map(([icon, title, desc]) => `<div class="card card-compact reveal"><div class="card-icon"><i class="bi ${icon}"></i></div><h4>${title}</h4><p>${desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaPanel({
  title: 'Get a Transparent, Obligation-Free Quote',
  text: 'Tell us about your project and we will recommend the right engagement model and a clear cost estimate.',
  primaryLabel: 'Request a Quote',
})}
`;

export default {
  file: 'pricing.html',
  active: 'pricing',
  title: 'Pricing & Engagement Models | KANGARO TECH',
  description: "Explore KANGARO TECH's engagement models — fixed-price projects, dedicated teams, outsourced IT departments and freelance support — with cost-effective delivery from Sri Lanka.",
  body,
};
