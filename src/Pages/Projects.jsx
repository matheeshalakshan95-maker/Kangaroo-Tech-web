import { useState } from 'react';
import Seo from '../Components/Common/Seo';
import PageHeader from '../Components/Common/PageHeader';
import CtaSection from '../Components/Common/CtaSection';
import projects from '../Data/projects';

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((current) => (current === i ? null : i));

  return (
    <>
      <Seo
        title="Projects & Case Studies | KANGARO TECH"
        description="Representative project concepts and case-study breakdowns showing how KANGARO TECH approaches websites, software, SaaS and AI automation work for Australian businesses."
      />
      <PageHeader title="Projects & Case Studies" current="Projects" />

      <section className="kt-section">
        <div className="kt-container">
          <div className="kt-sample-note">
            <i className="bi bi-info-circle-fill"></i>
            <span>
              KANGARO TECH is a growing technology partner. The case studies below are sample
              concepts illustrating how we approach real problems, and do not represent named
              clients. Real client case studies will be added here as engagements are completed.
            </span>
          </div>

          <div className="kt-section-head text-center">
            <span className="kt-eyebrow"><span className="dot"></span>Representative Work</span>
            <h2 className="kt-heading">The Kind of Projects We Build</h2>
            <p className="kt-subheading">
              From e-commerce and booking platforms to AI-driven dashboards, these concepts
              reflect the range of solutions our team is equipped to deliver. Select a project to
              see the challenge, our approach and the outcome.
            </p>
          </div>

          <div className="kt-grid-3">
            {projects.map((p, i) => {
              const open = openIndex === i;
              return (
                <div className="kt-project-card kt-project-card-interactive" key={p.title}>
                  <div className="kt-project-thumb" style={{ background: p.color }}>
                    <span className="tag">Sample Concept</span>
                    <i className={`bi ${p.icon}`}></i>
                    <button
                      type="button"
                      className="kt-project-overlay"
                      onClick={() => toggle(i)}
                      aria-expanded={open}
                    >
                      <span>{open ? 'Hide Case Study' : 'View Case Study'}</span>
                      <i className={`bi ${open ? 'bi-dash-lg' : 'bi-plus-lg'}`}></i>
                    </button>
                  </div>
                  <div className="kt-project-body">
                    <span className="kt-tag-pill">{p.category}</span>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    <div className="kt-project-tags">
                      {p.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>

                    {open && (
                      <div className="kt-case-study">
                        <div>
                          <span className="kt-case-label">Challenge</span>
                          <p>{p.challenge}</p>
                        </div>
                        <div>
                          <span className="kt-case-label">Approach</span>
                          <p>{p.approach}</p>
                        </div>
                        <div>
                          <span className="kt-case-label">Outcome</span>
                          <p>{p.outcome}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
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
