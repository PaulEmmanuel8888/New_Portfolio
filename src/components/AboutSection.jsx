const capabilities = [
  {
    title: "Frontend Development",
    description:
      "Responsive, intuitive interfaces built with React and JavaScript, with attention to usability and detail.",
  },
  {
    title: "Backend Development",
    description:
      "APIs, application logic, and database integration built with Node.js, Express, and PostgreSQL.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Complete web applications that bring the frontend, backend, and data layer together into one working product.",
  },
];

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-intro">
          <div className="about-heading">
            <p className="about-eyebrow">ABOUT ME</p>

            <h2>
              I BUILD WITH
              <br />
              THE PROBLEM
              <br />
              IN <span>MIND.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I'm Emmanuel Paul, a full-stack developer who enjoys turning ideas
              and real-world problems into useful web applications.
            </p>

            <p className="about-description">
              I work across the frontend and backend, from building intuitive
              interfaces with React to developing APIs and working with
              databases. I care about understanding what we're building, who
              it's for, and how the pieces fit together.
            </p>

            <p className="about-description">
              For me, writing code is a means to an end: creating software that
              works well, solves a genuine problem, and can grow with its needs.
            </p>

            <a href="#contact" className="about-contact-link">
              Let's work together <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="about-facts">
          <div className="about-fact">
            <span className="about-fact-label">MY FOCUS</span>
            <p>Problem-solving through software</p>
          </div>

          <div className="about-fact">
            <span className="about-fact-label">CORE STACK</span>
            <p>React · Node.js · Express · PostgreSQL</p>
          </div>

          <div className="about-fact">
            <span className="about-fact-label">OPEN TO</span>
            <p>Remote internships &amp; freelance work</p>
          </div>
        </div>

        <div className="about-capabilities">
          <div className="about-capabilities-heading">
            <p className="about-eyebrow">WHAT I BRING</p>
            <h3>FROM INTERFACE TO INFRASTRUCTURE.</h3>
          </div>

          <div className="about-capabilities-grid">
            {capabilities.map((capability) => (
              <article className="about-capability" key={capability.title}>
                <h4>{capability.title}</h4>
                <p>{capability.description}</p>
                <span className="about-capability-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
