import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedinIn,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/PaulEmmanuel8888",
    icon: faGithub,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/Build_With_E",
    icon: faXTwitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuelpaul8888/",
    icon: faLinkedinIn,
  },
  {
    label: "Medium",
    href: "https://medium.com/@paulemmanuel8888",
    icon: faMedium,
  },
  {
    label: "Email me",
    href: "mailto:paulemmanuel8888@gmail.com",
    icon: faEnvelope,
  },
];

const FloatingConnect = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="floating-connect">
      <div
        className={`floating-connect__links ${isOpen ? "is-open" : ""}`}
        id="social-links"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        {socialLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            className="floating-connect__link"
            style={{ "--index": index }}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
          >
            <FontAwesomeIcon
              icon={link.icon}
              className="floating-connect__icon"
            />
            <span>{link.label}</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="floating-connect__external"
            />
          </a>
        ))}
      </div>

      <button
        type="button"
        className="floating-connect__trigger"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="social-links"
      >
        <span>{isOpen ? "Close" : "Let's connect"}</span>
        <FontAwesomeIcon
          icon={isOpen ? faXmark : faEnvelope}
          className="floating-connect__trigger-icon"
        />
      </button>
    </div>
  );
};

export default FloatingConnect;
