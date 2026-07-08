import { Link } from 'react-router-dom';

const points = [
  'Pre-built websites for common business categories',
  'Reusable software foundations for internal tools and portals',
  'Faster launch timelines than a full custom build',
  'Fully customisable branding, features and integrations',
];

const ReadyMadeSection = () => {
  return (
    <section className="kt-section">
      <div className="kt-container">
        <div className="kt-split reverse">
          <div>
            <span className="kt-eyebrow"><span className="dot"></span>Ready-Made Solutions</span>
            <h2 className="kt-heading">Launch Faster with Ready-Made Websites &amp; Software</h2>
            <p className="kt-subheading">
              KANGARO TECH maintains ready-made website and software foundations that can be
              customised quickly to your brand and requirements — ideal for businesses that need
              a professional solution without a full ground-up build.
            </p>
            <ul className="kt-list-check">
              {points.map((p) => (
                <li key={p}><i className="bi bi-check-circle-fill"></i>{p}</li>
              ))}
            </ul>
            <Link to="/ready-made-solutions" className="kt-btn kt-btn-navy">
              View Ready-Made Solutions <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="kt-media-frame dark">
            <div className="tile">
              <div className="tile-row">
                <div className="tile-icon"><i className="bi bi-globe2"></i></div>
                <div><h5>Business Website Templates</h5><p>Corporate, service &amp; e-commerce ready</p></div>
              </div>
            </div>
            <div className="tile">
              <div className="tile-row">
                <div className="tile-icon"><i className="bi bi-kanban"></i></div>
                <div><h5>Internal Software Foundations</h5><p>CRM, booking &amp; management systems</p></div>
              </div>
            </div>
            <div className="tile">
              <div className="tile-row">
                <div className="tile-icon"><i className="bi bi-lightning-charge"></i></div>
                <div><h5>Rapid Customisation</h5><p>Configured to your brand in days, not months</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyMadeSection;
