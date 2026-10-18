import { useEffect, useState } from "react";

const phrases = [
  "solves real problems.",
  "generates revenue.",
  "helps businesses.",
];

const StatementSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % phrases.length);
        setIsVisible(true);
      }, 450);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="statement-section">
      <div className="statement-container">
        <p className="statement-label">01 / WHAT I DO</p>

        <h2 className="statement-heading">
          I BUILD SOFTWARE THAT
          <span className="statement-highlight">
            <span className="statement-sizer" aria-hidden="true">
              {phrases[0]}
            </span>
            <span
              className={`statement-phrase ${isVisible ? "is-visible" : ""}`}
            >
              {phrases[activeIndex]}
            </span>
          </span>
        </h2>

        <p className="statement-description">
          I build websites and custom applications for businesses with something
          to solve or room to grow. <br /> My focus is simple: build useful
          products that work well for the people and businesses behind them.
        </p>

        <div className="statement-actions">
          <a href="#work" className="statement-link">
            Explore My Work <span aria-hidden="true">↘</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="statement-resume-button"
          >
            <span>View My Resume</span>
            <span className="statement-resume-icon" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatementSection;
