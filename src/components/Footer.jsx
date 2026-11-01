import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "X",
    href: "https://x.com/Build_With_E",
    icon: faXTwitter,
  },
  {
    label: "GitHub",
    href: "https://github.com/PaulEmmanuel8888",
    icon: faGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emmanuelpaul8888/",
    icon: faLinkedin,
  },
  {
    label: "Email",
    href: "mailto:paulemmanuel8888@gmail.com",
    icon: faEnvelope,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              The Stack{" "}
            </a>

            <p>
              Emmanuel Paul
              <br />
              Full-Stack Developer
            </p>
          </div>

          <div className="footer-navigation">
            <span className="footer-label">EXPLORE</span>

            <nav aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-social">
            <span className="footer-label">CONNECT</span>

            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === "Email" ? undefined : "_blank"}
                  rel={
                    social.label === "Email" ? undefined : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  title={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="footer-social-links footer-back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} Emmanuel Paul. All rights reserved.</span>
          <span>Designed & built with intention.</span>
        </div>
      </div>
    </footer>
  );
}
