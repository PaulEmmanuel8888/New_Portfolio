import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/PaulEmmanuel8888",
    icon: faGithub,
  },
  {
    label: "LinkedIn",
    href: "YOUR_LINKEDIN_URL",
    icon: faLinkedinIn,
  },
];

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <p className="contact-eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p>

        <h2 className="contact-heading">
          LET'S BUILD
          <br />
          SOMETHING <span>USEFUL.</span>
        </h2>

        <p className="contact-description">
          Have an idea, a project, or an opportunity to work together? I'd love
          to hear about it. Let's talk about what you're building.
        </p>

        <a href="mailto:YOUR_EMAIL_ADDRESS" className="contact-email-button">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Get in touch</span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="contact-email-arrow"
          />
        </a>

        <div className="contact-bottom">
          <p className="contact-bottom-label">FIND ME ELSEWHERE</p>

          <div className="contact-socials">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="contact-social-link"
              >
                <FontAwesomeIcon icon={link.icon} />
                <span>{link.label}</span>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="contact-social-arrow"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
