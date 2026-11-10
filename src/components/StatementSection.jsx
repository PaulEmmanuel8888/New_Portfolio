import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const phrases = [
  "solves real problems.",
  "generates revenue.",
  "helps businesses.",
];

const StatementSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".statement-label", {
        y: 15,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".statement-heading",
          {
            x: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".statement-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .from(
          ".statement-actions a",
          {
            y: 15,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
          },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

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
    <section className="statement-section" ref={sectionRef}>
      {" "}
      <div className="statement-container">
        <p className="statement-label">WHAT I DO</p>

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
