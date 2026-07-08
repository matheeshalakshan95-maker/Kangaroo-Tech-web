import Seo from '../Components/Common/Seo';
import PageHeader from '../Components/Common/PageHeader';
import CtaSection from '../Components/Common/CtaSection';
import projects from '../Data/projects';

const Projects = () => {
  return (
    <>
      <Seo
        title="Projects & Portfolio | KANGARO TECH"
        description="Representative project concepts showing the type of websites, software, SaaS and AI automation work KANGARO TECH delivers for Australian businesses."
      />
      <PageHeader title="Projects & Portfolio" current="Projects" />

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-sample-note">
            <i className="bi bi-info-circle-fill"></i>
            <span>
              KANGARO TECH is a growing technology partner. The projects below are sample
              concepts illustrating the type of work we deliver, and do not represent named
              clients. Real client case studies will be added here as engagements are completed.
            </span>
          </div>

          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>Representative Work</span>
            <h2 className="kt-heading">The Kind of Projects We Build</h2>
            <p className="kt-subheading">
              From e-commerce and booking platforms to AI-driven dashboards, these concepts
              reflect the range of solutions our team is equipped to deliver.
            </p>
          </div>

          <div className="kt-grid-3">
            {projects.map((p) => (
              <div className="kt-project-card" key={p.title}>
                <div className="kt-project-thumb" style={{ background: p.color }}>
                  <span className="tag">Sample Concept</span>
                  <i className={`bi ${p.icon}`}></i>
                </div>
                <div className="kt-project-body">
                  <span className="kt-tag-pill">{p.category}</span>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <div className="kt-project-tags">
                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Have a Project in Mind?"
        text="Tell us what you are looking to build and we will show you how KANGARO TECH can deliver it."
        primaryLabel="Start a Project"
      />
    </>
  );
};

export default Projects;
