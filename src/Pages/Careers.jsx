import Seo from '../Components/Common/Seo';
import PageHeader from '../Components/Common/PageHeader';
import ApplicationForm from '../Components/Careers/ApplicationForm';

const opportunities = [
  {
    icon: 'bi-person-workspace',
    title: 'Freelance / Contract Projects',
    desc: 'Short-term and project-based work across web, software, design and marketing, alongside our core delivery team.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Dedicated Team Placement',
    desc: 'Ongoing placement on a dedicated client team, working under the same Australian-standard process as our staff.',
  },
  {
    icon: 'bi-stars',
    title: 'Specialist Engagements',
    desc: 'Focused engagements for niche skills — AI/ML, complex integrations, performance or security work.',
  },
];

const skills = [
  'React / Next.js',
  'Node.js',
  'UI/UX Design',
  'AI & Machine Learning',
  'Mobile Development',
  'Quality Assurance',
  'DevOps / Cloud',
  'SEO & Content',
  'Google Ads & Analytics',
  'Project Coordination',
];

const benefits = [
  'Exposure to real Australian business projects',
  'Professional processes, tools and code review standards',
  'Flexible engagement — freelance, contract or ongoing',
  'A pathway to longer-term placement as we grow',
];

const Careers = () => {
  return (
    <>
      <Seo
        title="Freelance & Career Opportunities | KANGARO TECH"
        description="Join the KANGARO TECH delivery network. Freelance, contract and dedicated-team opportunities for Sri Lanka-based developers, designers and marketers working on Australian projects."
      />
      <PageHeader title="Freelance & Career Opportunities" current="Careers" />

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>Join Our Network</span>
            <h2 className="kt-heading">Build Your Career on Australian-Standard Projects</h2>
            <p className="kt-subheading">
              KANGARO TECH gives Sri Lanka-based developers, designers and marketers the
              opportunity to work on real Australian business projects, under a professional,
              well-managed delivery process.
            </p>
          </div>

          <div className="kt-grid-3">
            {opportunities.map((o) => (
              <div className="kt-card" key={o.title}>
                <div className="kt-card-icon"><i className={`bi ${o.icon}`}></i></div>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kt-section kt-bg-grey">
        <div className="kt-container">
          <div className="kt-split reverse">
            <div>
              <span className="kt-eyebrow"><span className="dot"></span>Why Join Us</span>
              <h2 className="kt-heading">What You Get Working With KANGARO TECH</h2>
              <ul className="kt-list-check">
                {benefits.map((b) => (
                  <li key={b}><i className="bi bi-check-circle-fill"></i>{b}</li>
                ))}
              </ul>
            </div>
            <div className="kt-media-frame dark">
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-globe-asia-australia"></i></div>
                  <div><h5>Australian Clients</h5><p>Work on projects for real Australian businesses</p></div>
                </div>
              </div>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-clipboard-check"></i></div>
                  <div><h5>Professional Process</h5><p>Structured briefs, code review and QA</p></div>
                </div>
              </div>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-arrow-up-right-circle"></i></div>
                  <div><h5>Growth Pathway</h5><p>From freelance work to ongoing placement</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>Skills We Look For</span>
            <h2 className="kt-heading">Areas We&rsquo;re Actively Building Our Network In</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {skills.map((s) => (
              <span key={s} className="kt-tag-pill" style={{ fontSize: 13.5, padding: '9px 18px', marginBottom: 0 }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="kt-section kt-bg-grey">
        <div className="kt-container">
          <div className="kt-split">
            <div>
              <span className="kt-eyebrow"><span className="dot"></span>Apply Now</span>
              <h2 className="kt-heading">Tell Us About Yourself</h2>
              <p style={{ color: 'var(--kt-grey-600)' }}>
                Submit your details below and our team will review your application. If your
                skills match a current or upcoming opportunity, we will be in touch.
              </p>
            </div>
            <div className="kt-card" style={{ padding: '36px 32px' }}>
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
