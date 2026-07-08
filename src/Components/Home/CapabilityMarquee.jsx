const capabilities = [
  { icon: 'bi-window-stack', label: 'Website Development' },
  { icon: 'bi-cpu', label: 'AI Automation' },
  { icon: 'bi-cloud-arrow-up', label: 'SaaS Platforms' },
  { icon: 'bi-palette', label: 'UI/UX Design' },
  { icon: 'bi-phone', label: 'Mobile Apps' },
  { icon: 'bi-megaphone', label: 'Digital Marketing' },
  { icon: 'bi-people', label: 'IT Outsourcing' },
  { icon: 'bi-search', label: 'SEO' },
  { icon: 'bi-graph-up-arrow', label: 'Google Ads' },
  { icon: 'bi-gear-wide-connected', label: 'Process Automation' },
];

const CapabilityMarquee = () => {
  const track = [...capabilities, ...capabilities];

  return (
    <div className="kt-marquee">
      <div className="kt-marquee-track">
        {track.map((c, i) => (
          <span className="kt-marquee-chip" key={`${c.label}-${i}`}>
            <i className={`bi ${c.icon}`}></i>
            {c.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CapabilityMarquee;
