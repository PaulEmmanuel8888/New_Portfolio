import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwllrqzz";

const socialLinks = [
  {
    name: "",
    handle: "@Build_With_E",
    href: "https://x.com/Build_With_E",
    icon: faXTwitter,
  },
  {
    name: "GitHub",
    handle: "PaulEmmanuel8888",
    href: "https://github.com/PaulEmmanuel8888",
    icon: faGithub,
  },
  {
    name: "LinkedIn",
    handle: "Emmanuel Paul",
    href: "https://www.linkedin.com/in/emmanuelpaul8888/",
    icon: faLinkedin,
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("paulemmanuel8888@gmail.com");
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        form.reset();
        setStatus("Thanks for reaching out! Your message has been sent.");
      } else {
        setStatus(
          result.errors?.map((error) => error.message).join(", ") ||
            "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("Unable to send your message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Have something
            <br />
            worth building?
            <br />
            <span>Let's talk.</span>
          </h2>

          <p className="contact-description">
            Open to remote opportunities, freelance projects, and
            collaborations. If you have an idea, an opportunity, or just want to
            connect, my inbox is open.
          </p>

          <div className="contact-direct">
            <span className="contact-label">DIRECT</span>

            <div className="contact-email-row">
              <a href="mailto:paulemmanuel8888@gmail.com">
                paulemmanuel8888@gmail.com
              </a>

              <button
                type="button"
                className="contact-copy-button"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <div className="contact-socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <span className="contact-social-icon">
                  <FontAwesomeIcon icon={social.icon} />
                </span>

                <span className="contact-social-name">{social.name}</span>
                <span className="contact-social-handle">{social.handle}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-email">Your Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="A role, a project, a hello"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a bit about what you're working on."
                rows="6"
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit rounded-2xl"
              disabled={isSending}
            >
              <span>{isSending ? "Sending..." : "Send message"}</span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>

            {status && (
              <p className="contact-form-status" role="status">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="contact-bottom">
        <p>Let's build something.</p>
        <span>
          Have a good one. <span aria-hidden="true">✳</span>
        </span>
      </div>
    </section>
  );
}
