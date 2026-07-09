import { Link } from 'react-router-dom';
import Seo from '../Components/Common/Seo';
import PageHeader from '../Components/Common/PageHeader';
import CtaSection from '../Components/Common/CtaSection';

const teamFunctions = [
  { icon: 'bi-code-slash', title: 'Software Engineering', desc: 'Full-stack developers building websites, software and SaaS platforms.' },
  { icon: 'bi-cpu-fill', title: 'AI & Automation', desc: 'Engineers focused on AI integration, automation and the CIMA Biz AI platform.' },
  { icon: 'bi-palette2', title: 'UI/UX Design', desc: 'Designers responsible for product experience, branding and interface design.' },
  { icon: 'bi-bug', title: 'Quality Assurance', desc: 'Dedicated QA to test and validate every release against Australian standards.' },
  { icon: 'bi-megaphone-fill', title: 'Digital Marketing', desc: 'SEO, Google Ads and campaign specialists driving measurable results.' },
  { icon: 'bi-kanban-fill', title: 'Project Coordination', desc: 'Coordinators keeping delivery on schedule and communication clear.' },
];

const values = [
  {
    icon: 'bi-bullseye',
    title: 'Quality Without Compromise',
    desc: 'We apply Australian business and quality standards to every project, regardless of team location.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Genuine Partnership',
    desc: 'We work as an extension of your business, not a distant vendor.',
  },
  {
    icon: 'bi-cpu-fill',
    title: 'AI-First Thinking',
    desc: 'We look for opportunities to automate and improve, not just build what is asked.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Transparent Delivery',
    desc: 'Clear scope, timelines and reporting, with no hidden surprises.',
  },
];

const About = () => {
  return (
    <>
      <Seo
        title="About KANGARO TECH | Australian Standards, Sri Lankan Expertise"
        description="KANGARO TECH is an IT, software and AI solutions company under CIMA Group Pty Ltd, operating from Adelaide, Australia and Sri Lanka."
      />
      <PageHeader title="About KANGARO TECH" current="About" />

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-split">
            <div>
              <span className="kt-eyebrow"><span className="dot"></span>Our Story</span>
              <h2 className="kt-heading">An Australian Technology Company, Built on Sri Lankan Engineering Talent</h2>
              <p style={{ color: 'var(--kt-grey-600)', marginBottom: 18 }}>
                KANGARO TECH operates under CIMA Group Pty Ltd, Australia, with teams based in
                Adelaide, Australia and Sri Lanka. We help Australian businesses build websites,
                software, SaaS platforms, AI-integrated systems, UI/UX designs, digital marketing
                campaigns and full outsourced IT departments.
              </p>
              <p style={{ color: 'var(--kt-grey-600)' }}>
                Our model is simple: combine Australian business standards with Sri Lankan
                technical expertise to deliver high-quality projects at a lower development cost —
                without reducing quality, communication or accountability.
              </p>
            </div>
            <div className="kt-media-frame">
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-building"></i></div>
                  <div><h5>Parent Company</h5><p>CIMA Group Pty Ltd, Australia</p></div>
                </div>
              </div>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-geo-alt"></i></div>
                  <div><h5>Australian Base</h5><p>Adelaide, South Australia</p></div>
                </div>
              </div>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-geo-alt-fill"></i></div>
                  <div><h5>Delivery Base</h5><p>Sri Lanka</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kt-section kt-bg-grey">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>Our Values</span>
            <h2 className="kt-heading">What Guides Our Work</h2>
            <p className="kt-subheading">
              These principles shape how we plan, build and support every project we deliver.
            </p>
          </div>
          <div className="kt-grid-4">
            {values.map((v) => (
              <div className="kt-card" key={v.title}>
                <div className="kt-card-icon"><i className={`bi ${v.icon}`}></i></div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-split reverse">
            <div>
              <span className="kt-eyebrow"><span className="dot"></span>How We Work</span>
              <h2 className="kt-heading">One Business, Two Locations, One Standard</h2>
              <p style={{ color: 'var(--kt-grey-600)', marginBottom: 20 }}>
                Our Australian base in Adelaide leads client relationships, project governance and
                business alignment, while our Sri Lanka-based technical team handles development,
                design, AI engineering and delivery. The result is a business that speaks the
                language of Australian clients while operating with the technical depth of a
                specialist offshore team.
              </p>
              <ul className="kt-list-check">
                <li><i className="bi bi-check-circle-fill"></i>Australian-based client management and communication</li>
                <li><i className="bi bi-check-circle-fill"></i>Sri Lanka-based development, design and engineering</li>
                <li><i className="bi bi-check-circle-fill"></i>Shared project tools, reporting and quality standards</li>
                <li><i className="bi bi-check-circle-fill"></i>Flexible engagement models for projects of any size</li>
              </ul>
            </div>
            <div className="kt-media-frame dark">
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-diagram-3"></i></div>
                  <div><h5>Governance</h5><p>Australian business oversight</p></div>
                </div>
              </div>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-terminal"></i></div>
                  <div><h5>Engineering</h5><p>Sri Lankan technical delivery</p></div>
                </div>
              </div>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-graph-up"></i></div>
                  <div><h5>Outcome</h5><p>Cost-effective, high-quality delivery</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="kt-section kt-bg-grey">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>Our Team</span>
            <h2 className="kt-heading">A Growing Team Across Two Countries</h2>
            <p className="kt-subheading">
              KANGARO TECH is a growing company. Rather than a single office, we operate as
              functional teams spanning Australia and Sri Lanka, each responsible for a specific
              part of delivery.
            </p>
          </div>

          <div className="kt-split" style={{ marginBottom: 48 }}>
            <div className="kt-media-frame dark">
              <span className="kt-tag-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Australia</span>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-person-badge"></i></div>
                  <div><h5>Client Partnership &amp; Governance</h5><p>Business alignment and account management</p></div>
                </div>
              </div>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-clipboard-check"></i></div>
                  <div><h5>Project Oversight</h5><p>Quality standards and reporting</p></div>
                </div>
              </div>
            </div>
            <div className="kt-media-frame">
              <span className="kt-tag-pill">Sri Lanka</span>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-terminal"></i></div>
                  <div><h5>Engineering &amp; Delivery</h5><p>Development, AI, design and QA teams</p></div>
                </div>
              </div>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-graph-up-arrow"></i></div>
                  <div><h5>Marketing &amp; Support</h5><p>Campaign execution and ongoing support</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="kt-grid-3">
            {teamFunctions.map((t) => (
              <div className="kt-card" key={t.title}>
                <div className="kt-card-icon"><i className={`bi ${t.icon}`}></i></div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 36 }}>
            <p style={{ marginBottom: 18 }}>Interested in joining our Sri Lanka-based delivery team?</p>
            <Link to="/careers" className="kt-btn kt-btn-navy">
              View Freelance &amp; Career Opportunities <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Work with a Team That Understands Both Sides of the Partnership"
        text="Talk to us about your project and see how the KANGARO TECH delivery model can work for your business."
      />
    </>
  );
};

export default About;
