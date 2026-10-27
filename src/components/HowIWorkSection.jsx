const steps = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "Before writing code, I clarify what we're building, who it's for, and what it needs to achieve. A clear understanding of the problem leads to better decisions throughout development.",
  },
  {
    number: "02",
    title: "Plan and build",
    description:
      "I break the solution into manageable parts, choose the right tools for the requirements, and build incrementally. I focus on getting the core functionality right before refining the details.",
  },
  {
    number: "03",
    title: "Test, ship, improve",
    description:
      "I test the application, work through issues, and prepare it for deployment. Once it's live, feedback and real-world use help reveal what needs to improve next.",
  },
];

const HowIWorkSection = () => {
  return (
    <section className="how-i-work-section">
      <div className="how-i-work-container">
        <div className="how-i-work-intro">
          <p className="how-i-work-eyebrow">HOW I WORK</p>

          <h2>
            GOOD SOFTWARE
            <br />
            STARTS WITH
            <br />
            THE RIGHT <span>QUESTIONS.</span>
          </h2>

          <p className="how-i-work-description">
            Every project starts with a problem to solve. I believe good
            development means understanding that problem first, making
            thoughtful technical decisions, and building a solution that works
            beyond the first release.
          </p>

          <div className="how-i-work-principle">
            <span className="how-i-work-principle-dot" />
            <span>Understand. Build. Improve.</span>
          </div>
        </div>

        <div className="how-i-work-steps">
          {steps.map((step) => (
            <article className="how-i-work-step" key={step.number}>
              <span className="how-i-work-step-number">{step.number}</span>

              <div className="how-i-work-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <span className="how-i-work-step-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
