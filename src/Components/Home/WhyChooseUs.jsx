const items = [
  {
    title: 'Cost-Effective Development',
    desc: 'Sri Lankan delivery reduces development cost while maintaining Australian quality benchmarks.',
  },
  {
    title: 'Australian-Based Management',
    desc: 'Client communication and project oversight aligned with Australian business practices.',
  },
  {
    title: 'Sri Lankan Expert Delivery Team',
    desc: 'Experienced engineers, designers and marketers executing every project.',
  },
  {
    title: 'AI-First Approach',
    desc: 'We design systems with automation and AI integration in mind from day one.',
  },
  {
    title: 'Professional Project Handling',
    desc: 'Clear scoping, timelines and reporting across every engagement.',
  },
  {
    title: 'Scalable SaaS & Software Architecture',
    desc: 'Built to grow — from first release to enterprise scale.',
  },
  {
    title: 'End-to-End Delivery',
    desc: 'Strategy, design, development, deployment and support — one accountable partner.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="kt-section kt-bg-grey">
      <div className="kt-container">
        <div className="kt-split">
          <div>
            <span className="kt-eyebrow"><span className="dot"></span>Why Choose Us</span>
            <h2 className="kt-heading">The KANGARO TECH Advantage</h2>
            <p className="kt-subheading">
              A delivery model built specifically to give Australian businesses the confidence
              of local standards with the efficiency of an experienced offshore team.
            </p>
          </div>
          <div>
            {items.map((item, i) => (
              <div className="kt-why-item" key={item.title}>
                <span className="kt-why-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
