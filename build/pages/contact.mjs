import { pageHeader } from '../components.mjs';

const contactCard = (icon, title, valueHtml) => `
<div class="card card-compact mb-4">
  <div class="flex gap-3.5 items-center">
    <div class="card-icon mb-0"><i class="bi ${icon}"></i></div>
    <div><h4 class="mb-0.5">${title}</h4><p class="m-0">${valueHtml}</p></div>
  </div>
</div>`;

const body = `
${pageHeader('Contact Us', 'Contact')}

<section class="section">
  <div class="container-site">
    <div class="split">
      <div>
        <span class="eyebrow"><span class="dot"></span>Get In Touch</span>
        <h2 class="heading">Let&rsquo;s Talk About Your Project</h2>
        <p class="text-muted mb-8">Tell us about your business and what you are looking to build. A member of our team will respond with next steps and, where useful, a free initial consultation.</p>

        ${contactCard('bi-envelope', 'Email', '<a href="mailto:hello@kangarotech.com.au" class="text-inherit">hello@kangarotech.com.au</a>')}
        ${contactCard('bi-telephone', 'Phone', '<a href="tel:+61XXXXXXXXX" class="text-inherit">+61 XXX XXX XXX</a>')}
        ${contactCard('bi-geo-alt', 'Australia', 'Adelaide, South Australia &mdash; Under CIMA Group Pty Ltd')}
        ${contactCard('bi-geo-alt-fill', 'Sri Lanka', 'Delivery &amp; engineering team')}
      </div>

      <div class="card" style="padding:36px 32px;">
        <h3 class="mb-5">Send Us an Enquiry</h3>
        <form id="contactForm" novalidate>
          <div class="form-group">
            <label for="c-name">Full Name *</label>
            <input id="c-name" name="name" type="text" class="form-control" placeholder="Your full name" />
            <div class="error-text" id="c-name-error"></div>
          </div>
          <div class="form-group">
            <label for="c-email">Email Address *</label>
            <input id="c-email" name="email" type="email" class="form-control" placeholder="you@company.com" />
            <div class="error-text" id="c-email-error"></div>
          </div>
          <div class="form-group">
            <label for="c-company">Company Name</label>
            <input id="c-company" name="company" type="text" class="form-control" placeholder="Your company (optional)" />
          </div>
          <div class="form-group">
            <label for="c-phone">Phone Number</label>
            <input id="c-phone" name="phone" type="tel" class="form-control" placeholder="Your phone number (optional)" />
          </div>
          <div class="form-group">
            <label for="c-service">Service You&rsquo;re Interested In</label>
            <select id="c-service" name="service" class="form-control">
              <option>Website Design &amp; Development</option>
              <option>Custom Software Development</option>
              <option>SaaS Application Development</option>
              <option>AI Business Automation</option>
              <option>AI Integration for Existing Businesses</option>
              <option>UI/UX Design</option>
              <option>Full Stack Development</option>
              <option>Mobile App Development</option>
              <option>Digital Marketing</option>
              <option>Google Ads &amp; Analytics-Based Marketing</option>
              <option>SEO</option>
              <option>IT Department Outsourcing</option>
              <option>Freelance Developer Support</option>
              <option>Business Process Automation</option>
              <option>Ready-Made Websites &amp; Software Solutions</option>
              <option>Other / Not Sure Yet</option>
            </select>
          </div>
          <div class="form-group">
            <label for="c-message">Tell Us About Your Project *</label>
            <textarea id="c-message" name="message" class="form-control" rows="4" placeholder="Briefly describe your business, project or requirement"></textarea>
            <div class="error-text" id="c-message-error"></div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Send Enquiry <i class="bi bi-send"></i></button>
        </form>
      </div>
    </div>
  </div>
</section>
`;

export default {
  file: 'contact.html',
  active: 'contact',
  title: 'Contact KANGARO TECH | Get a Free Consultation',
  description: 'Contact KANGARO TECH, under CIMA Group Pty Ltd, based in Adelaide, Australia and Sri Lanka, for a free consultation on your website, software or AI project.',
  body,
};
