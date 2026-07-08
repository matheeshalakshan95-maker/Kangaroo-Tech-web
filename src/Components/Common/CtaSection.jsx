import { Link } from 'react-router-dom';

const CtaSection = ({
  title = 'No Need to Worry About Your Web, Software or AI Solution',
  text = 'KANGARO TECH can handle everything professionally — from strategy and design through to development, AI integration and ongoing support.',
  primaryLabel = 'Get a Free Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'View Our Services',
  secondaryTo = '/services',
}) => {
  return (
    <section className="kt-section">
      <div className="kt-container">
        <div className="kt-cta">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="kt-cta-actions">
            <Link to={primaryTo} className="kt-btn kt-btn-green">{primaryLabel}</Link>
            <Link to={secondaryTo} className="kt-btn kt-btn-outline">{secondaryLabel}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
