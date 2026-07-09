import { pageHeader, sectionHead } from '../components.mjs';

const opportunities = [
  ['bi-person-workspace', 'Freelance / Contract Projects', 'Short-term and project-based work across web, software, design and marketing, alongside our core delivery team.'],
  ['bi-people-fill', 'Dedicated Team Placement', 'Ongoing placement on a dedicated client team, working under the same Australian-standard process as our staff.'],
  ['bi-stars', 'Specialist Engagements', 'Focused engagements for niche skills — AI/ML, complex integrations, performance or security work.'],
];

const benefits = [
  'Exposure to real Australian business projects',
  'Professional processes, tools and code review standards',
  'Flexible engagement — freelance, contract or ongoing',
  'A pathway to longer-term placement as we grow',
];

const skills = ['React / Next.js', 'Node.js', 'UI/UX Design', 'AI & Machine Learning', 'Mobile Development', 'Quality Assurance', 'DevOps / Cloud', 'SEO & Content', 'Google Ads & Analytics', 'Project Coordination'];

const skillAreas = ['Software Development', 'Front-End / UI Development', 'AI & Automation Engineering', 'UI/UX Design', 'Mobile App Development', 'Quality Assurance', 'Digital Marketing / SEO', 'Project Coordination', 'Other'];

const body = `
${pageHeader('Freelance & Career Opportunities', 'Careers')}

<section class="section">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'Join Our Network', heading: 'Build Your Career on Australian-Standard Projects', sub: 'KANGARO TECH gives Sri Lanka-based developers, designers and marketers the opportunity to work on real Australian business projects, under a professional, well-managed delivery process.' })}
    <div class="grid-3">
      ${opportunities.map(([icon, title, desc]) => `<div class="card reveal"><div class="card-icon"><i class="bi ${icon}"></i></div><h3>${title}</h3><p>${desc}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    <div class="split reverse reveal">
      <div>
        <span class="eyebrow"><span class="dot"></span>Why Join Us</span>
        <h2 class="heading">What You Get Working With KANGARO TECH</h2>
        <ul class="list-check">
          ${benefits.map((b) => `<li><i class="bi bi-check-circle-fill"></i>${b}</li>`).join('\n          ')}
        </ul>
      </div>
      <div class="media-slot media-frame dark">
        <div class="tile"><div class="tile-icon"><i class="bi bi-globe-asia-australia"></i></div><div><h5>Australian Clients</h5><p>Work on projects for real Australian businesses</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-clipboard-check"></i></div><div><h5>Professional Process</h5><p>Structured briefs, code review and QA</p></div></div>
        <div class="tile"><div class="tile-icon"><i class="bi bi-arrow-up-right-circle"></i></div><div><h5>Growth Pathway</h5><p>From freelance work to ongoing placement</p></div></div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container-site">
    ${sectionHead({ eyebrow: 'Skills We Look For', heading: 'Areas We&rsquo;re Actively Building Our Network In' })}
    <div class="flex flex-wrap gap-3 justify-center">
      ${skills.map((s) => `<span class="tag-pill" style="font-size:13.5px;padding:9px 18px;margin-bottom:0;">${s}</span>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section bg-surface-50">
  <div class="container-site">
    <div class="split reveal">
      <div>
        <span class="eyebrow"><span class="dot"></span>Apply Now</span>
        <h2 class="heading">Tell Us About Yourself</h2>
        <p class="text-muted">Submit your details below and our team will review your application. If your skills match a current or upcoming opportunity, we will be in touch.</p>
      </div>
      <div class="card" style="padding:36px 32px;">
        <form id="applicationForm" novalidate>
          <div class="form-group">
            <label for="app-name">Full Name *</label>
            <input id="app-name" name="name" type="text" class="form-control" placeholder="Your full name" />
            <div class="error-text" id="app-name-error"></div>
          </div>
          <div class="form-group">
            <label for="app-email">Email Address *</label>
            <input id="app-email" name="email" type="email" class="form-control" placeholder="you@example.com" />
            <div class="error-text" id="app-email-error"></div>
          </div>
          <div class="form-group">
            <label for="app-phone">Phone Number</label>
            <input id="app-phone" name="phone" type="tel" class="form-control" placeholder="Your phone number (optional)" />
          </div>
          <div class="form-group">
            <label for="app-skill">Area of Expertise</label>
            <select id="app-skill" name="skillArea" class="form-control">
              ${skillAreas.map((s) => `<option value="${s}">${s}</option>`).join('\n              ')}
            </select>
          </div>
          <div class="form-group">
            <label for="app-portfolio">Portfolio / LinkedIn / GitHub Link</label>
            <input id="app-portfolio" name="portfolio" type="url" class="form-control" placeholder="https://... (optional)" />
          </div>
          <div class="form-group">
            <label for="app-message">Tell Us About Your Experience *</label>
            <textarea id="app-message" name="message" class="form-control" rows="4" placeholder="Briefly describe your skills, experience and availability"></textarea>
            <div class="error-text" id="app-message-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Submit Application <i class="bi bi-send"></i></button>
        </form>
      </div>
    </div>
  </div>
</section>
`;

export default {
  file: 'careers.html',
  active: 'careers',
  title: 'Freelance & Career Opportunities | KANGARO TECH',
  description: 'Join the KANGARO TECH delivery network. Freelance, contract and dedicated-team opportunities for Sri Lanka-based developers, designers and marketers working on Australian projects.',
  body,
};
