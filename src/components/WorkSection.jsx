import projects from "../data/projects";

const WorkSection = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-container">
        <div className="work-header">
          <h2>
            My Best Work<span>.</span>
          </h2>
          <p>
            A few things I’ve built, from digital storefronts to full-stack
            applications.
          </p>
        </div>

        <div className="work-list">
          {projects.map((project, index) => (
            <article
              className={`project-card ${
                index % 2 !== 0 ? "project-reverse" : ""
              }`}
              key={project.title}
            >
              <a
                className="project-image-link"
                href={project.liveUrl || project.sourceUrl || "#work"}
                target={
                  project.liveUrl || project.sourceUrl ? "_blank" : undefined
                }
                rel={
                  project.liveUrl || project.sourceUrl
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={`View ${project.title}`}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                  />
                  <span className="project-image-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </a>

              <div className="project-details">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      className="project-button project-button-primary"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live Demo</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  {project.sourceUrl && (
                    <a
                      className="project-button project-button-secondary"
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Source Code</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
