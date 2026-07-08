import Seo from '../Components/Common/Seo';
import PageHeader from '../Components/Common/PageHeader';
import CtaSection from '../Components/Common/CtaSection';

const categories = [
  { icon: 'bi-shop', title: 'Business & Corporate Websites', desc: 'Professional website foundations for service businesses, consultancies and corporate brands.' },
  { icon: 'bi-cart3', title: 'E-Commerce Foundations', desc: 'Ready-built online store structures covering catalogue, cart and checkout functionality.' },
  { icon: 'bi-calendar-check', title: 'Booking & Scheduling Systems', desc: 'Pre-built booking flows for service-based businesses that take appointments online.' },
  { icon: 'bi-kanban', title: 'CRM & Internal Management Tools', desc: 'Foundations for customer, project and operations management systems.' },
  { icon: 'bi-window', title: 'Landing Pages & Campaign Sites', desc: 'Fast-turnaround pages built for marketing campaigns and product launches.' },
  { icon: 'bi-cloud', title: 'SaaS Starter Architecture', desc: 'A pre-engineered SaaS foundation — authentication, billing and multi-tenancy — ready to extend.' },
];

const steps = [
  { step: '01', title: 'Choose a Foundation', desc: 'Select the closest-fit ready-made website or software base for your business.' },
  { step: '02', title: 'Brand & Content', desc: 'We apply your branding, content and required pages or modules.' },
  { step: '03', title: 'Feature Customisation', desc: 'We add or adjust functionality to match your specific requirements.' },
  { step: '04', title: 'Launch', desc: 'Your customised solution goes live, backed by our support.' },
];

const ReadyMadeSolutions = () => {
  return (
    <>
      <Seo
        title="Ready-Made Websites & Software Solutions | KANGARO TECH"
        description="KANGARO TECH offers ready-made website and software foundations that can be customised quickly, giving Australian businesses a faster route to launch."
      />
      <PageHeader title="Ready-Made Solutions" current="Ready-Made Solutions" />

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>Faster Time to Launch</span>
            <h2 className="kt-heading">Proven Foundations, Customised to Your Business</h2>
            <p className="kt-subheading">
              Not every project needs to start from a blank page. KANGARO TECH maintains a range
              of ready-made website and software foundations that can be customised quickly and
              launched with confidence.
            </p>
          </div>
          <div className="kt-grid-3">
            {categories.map((c) => (
              <div className="kt-card" key={c.title}>
                <div className="kt-card-icon"><i className={`bi ${c.icon}`}></i></div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kt-section kt-bg-grey">
        <div className="kt-container">
          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>How Customisation Works</span>
            <h2 className="kt-heading">From Foundation to Finished Product</h2>
          </div>
          <div className="kt-grid-4">
            {steps.map((s) => (
              <div className="kt-card kt-card-compact" key={s.step}>
                <div className="kt-why-num" style={{ fontSize: 24, marginBottom: 10 }}>{s.step}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-split reverse">
            <div>
              <span className="kt-eyebrow"><span className="dot"></span>Why Start Ready-Made</span>
              <h2 className="kt-heading">A More Efficient Path to a Professional Result</h2>
              <ul className="kt-list-check">
                <li><i className="bi bi-check-circle-fill"></i>Significantly shorter delivery timelines</li>
                <li><i className="bi bi-check-circle-fill"></i>Lower development cost than a full custom build</li>
                <li><i className="bi bi-check-circle-fill"></i>Built on the same quality standards as our custom projects</li>
                <li><i className="bi bi-check-circle-fill"></i>Fully customisable as your business grows</li>
              </ul>
            </div>
            <div className="kt-media-frame dark">
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-speedometer"></i></div>
                  <div><h5>Faster Launch</h5><p>Weeks, not months</p></div>
                </div>
              </div>
              <div className="tile">
                <div className="tile-row">
                  <div className="tile-icon"><i className="bi bi-sliders"></i></div>
                  <div><h5>Flexible Customisation</h5><p>Branding, content and features tailored to you</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Need to Launch Quickly Without Cutting Corners?"
        text="Tell us about your business and we will recommend the right ready-made foundation to start from."
      />
    </>
  );
};

export default ReadyMadeSolutions;
