import { Link } from 'react-router-dom';

const points = [
  'Outsource your entire IT department or a single function',
  'Dedicated development, design or marketing teams',
  'Australian-based coordination with Sri Lankan delivery teams',
  'Flexible engagement — project-based or ongoing support',
];

const OutsourcingSection = () => {
  return (
    <section className="kt-section kt-bg-grey">
      <div className="kt-container">
        <div className="kt-split">
          <div>
            <span className="kt-eyebrow"><span className="dot"></span>IT &amp; Team Outsourcing</span>
            <h2 className="kt-heading">Outsource Your IT Department to KANGARO TECH</h2>
            <p className="kt-subheading">
              Businesses can outsource their entire IT department, development team, design team
              or marketing support to KANGARO TECH — managed under Australian business standards
              and delivered by our Sri Lankan expert teams.
            </p>
            <ul className="kt-list-check">
              {points.map((p) => (
                <li key={p}><i className="bi bi-check-circle-fill"></i>{p}</li>
              ))}
            </ul>
            <Link to="/outsourcing" className="kt-btn kt-btn-navy">
              Explore Outsourcing Options <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="kt-media-frame">
            <div className="tile">
              <div className="tile-row">
                <div className="tile-icon"><i className="bi bi-code-slash"></i></div>
                <div><h5>Development Team</h5><p>Full-stack engineers on demand</p></div>
              </div>
            </div>
            <div className="tile">
              <div className="tile-row">
                <div className="tile-icon"><i className="bi bi-palette"></i></div>
                <div><h5>Design Team</h5><p>UI/UX &amp; brand design support</p></div>
              </div>
            </div>
            <div className="tile">
              <div className="tile-row">
                <div className="tile-icon"><i className="bi bi-megaphone"></i></div>
                <div><h5>Marketing Team</h5><p>Campaigns, SEO &amp; analytics</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcingSection;
