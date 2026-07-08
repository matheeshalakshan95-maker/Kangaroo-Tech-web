const items = [
  {
    icon: 'bi-patch-check',
    title: 'Australian Business Standards',
    desc: 'Every engagement follows Australian communication, reporting and quality expectations.',
  },
  {
    icon: 'bi-mortarboard',
    title: 'Sri Lankan Expert Talent',
    desc: 'Experienced developers, designers and marketers delivering enterprise-grade work.',
  },
  {
    icon: 'bi-cash-coin',
    title: 'Lower Development Cost',
    desc: 'Efficient delivery from Sri Lanka reduces cost without reducing quality.',
  },
  {
    icon: 'bi-award',
    title: 'High-Quality Delivery',
    desc: 'Structured QA, code review and project governance on every build.',
  },
  {
    icon: 'bi-speedometer2',
    title: 'Fast Project Turnaround',
    desc: 'Dedicated teams and clear processes keep projects moving on schedule.',
  },
  {
    icon: 'bi-stars',
    title: 'AI-Ready Solutions',
    desc: 'Every platform we build is designed to support automation and AI from the start.',
  },
];

const TrustSection = () => {
  return (
    <section className="kt-section">
      <div className="kt-container">
        <div className="kt-section-head text-center">
          <span className="kt-eyebrow"><span className="dot"></span>Why Businesses Choose Us</span>
          <h2 className="kt-heading">A Trusted Australia–Sri Lanka Delivery Model</h2>
          <p className="kt-subheading">
            We combine Australian business governance with Sri Lankan technical depth to give
            you dependable, high-quality outcomes at a more efficient cost.
          </p>
        </div>
        <div className="kt-trust-grid">
          {items.map((item) => (
            <div className="kt-trust-item" key={item.title}>
              <div className="kt-trust-icon"><i className={`bi ${item.icon}`}></i></div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
