import { pageHeader, sectionHead, ctaPanel } from '../components.mjs';

const options = [
  ['bi-diagram-3-fill', 'Full IT Department Outsourcing', 'Hand over your entire technology function — development, support, infrastructure and reporting — to a dedicated team managed under Australian oversight.'],
  ['bi-code-slash', 'Dedicated Development Team', 'A ring-fenced team of developers working exclusively on your product or platform, functioning as an extension of your business.'],
  ['bi-palette2', 'Dedicated Design Team', 'Ongoing UI/UX and brand design support for businesses that need consistent design output across products and campaigns.'],
  ['bi-megaphone-fill', 'Marketing Team Support', 'Outsource campaign planning, SEO and analytics-based marketing execution to a team that works to your targets.'],
  ['bi-person-workspace', 'Freelance Developer Support', 'Bring in vetted individual developers for short-term projects, overflow work or specialist skill gaps.'],
  ['bi-clipboard-data', 'Business Process Automation Support', 'A dedicated resource to continuously identify and automate manual processes as your business evolves.'],
];

const benefits = [
  'Lower operating cost than hiring locally in Australia',
  'Access to a full range of technical and creative skill sets',
  'Australian-based communication and account management',
  'Flexible scaling up or down based on project demand',
  'No recruitment, onboarding or HR overhead',
  'Consistent quality control across every engagement',
];

const steps = [
  ['01', 'Requirement Review', 'We assess your current IT setup, team structure or gaps.'],
  ['02', 'Team Proposal', 'We recommend the right outsourcing model and team composition.'],
  ['03', 'Onboarding', 'Your dedicated team is onboarded to your tools, systems and processes.'],
  ['04', 'Ongoing Delivery', 'The team operates as part of your business, with regular reporting.'],
];

const body = `
${pageHeader('IT & Team Outsourcing', 'Outsourcing')}

<section class="section">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'Outsourcing Solutions', heading: 'Outsource as Much or as Little as You Need', sub: 'Whether you need a single developer or a complete IT department, KANGARO TECH provides Sri Lankan expert teams managed to Australian business standards.' })}
    <div class="grid-3">
      ${options.map(([icon, title, desc]) => `<div class="card reveal"><div class="card-icon"><i class="bi ${icon}"></i></div><h3>${title}</h3><p>${desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    <div class="split reverse reveal">
      <div>
        <span class="eyebrow"><span class="dot"></span>Why Outsource to Us</span>
        <h2 class="heading">A Lower-Cost Alternative to Local Hiring</h2>
        <p class="text-muted mb-4">Building an internal team in Australia is expensive and slow. Outsourcing to KANGARO TECH gives you the same accountability and quality with a more cost-effective delivery structure.</p>
        <ul class="list-check">
          ${benefits.map((b) => `<li><i class="bi bi-check-circle-fill"></i>${b}</li>`).join('\n          ')}
        </ul>
      </div>
      <div class="media-slot media-frame">
        <div class="tile"><div class="tile-icon"><i class="bi bi-cash-stack"></i></div><div><h5>Lower Cost Base</h5><p>Efficient delivery from Sri Lanka</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-chat-dots"></i></div><div><h5>Australian Communication</h5><p>Clear reporting, familiar business hours overlap</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-arrow-repeat"></i></div><div><h5>Flexible Scaling</h5><p>Grow or reduce your team as needs change</p></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'How It Works', heading: 'Getting Started Is Straightforward' })}
    <div class="grid-4">
      ${steps.map(([num, title, desc]) => `<div class="card card-compact reveal"><div class="why-num text-2xl mb-2.5">${num}</div><h4>${title}</h4><p>${desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section-sm">
  <div class="container-site">
    <div class="sample-note mb-0">
      <i class="bi bi-person-workspace"></i>
      <span>Are you a Sri Lanka-based developer, designer or marketer? See our <a href="careers.html" class="font-bold text-blue">freelance and career opportunities</a> to join our delivery network.</span>
    </div>
  </div>
</section>

${ctaPanel({
  title: 'Ready to Reduce Your IT Overheads Without Reducing Quality?',
  text: 'Talk to us about outsourcing your development, design or marketing team to KANGARO TECH.',
})}
`;

export default {
  file: 'outsourcing.html',
  active: 'outsourcing',
  title: 'IT Outsourcing to Sri Lanka | KANGARO TECH',
  description: 'Outsource your IT department, development team, design team or marketing support to KANGARO TECH — Australian business standards, Sri Lankan expert delivery.',
  body,
};
