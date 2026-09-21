import { ArrowUpRight, Mail } from "lucide-react";

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.7"
    />

    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />

    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <p className="eyebrow">DM Travel Concierge</p>

          <h2>
            Travel, thoughtfully
            <br />
            arranged.
          </h2>

          <p className="footer-description">
            Bespoke travel planning and concierge services for meaningful
            journeys across South Africa and beyond.
          </p>
        </div>

        <div className="footer-column">
          <p className="footer-label">Explore</p>

          <nav className="footer-links">
            <a href="/">
              Home
              <ArrowUpRight size={15} />
            </a>

            <a href="/about">
              About
              <ArrowUpRight size={15} />
            </a>

            <a href="/blog">
              Journal
              <ArrowUpRight size={15} />
            </a>

            <a href="/contact">
              Contact
              <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>

        <div className="footer-column">
          <p className="footer-label">Contact</p>

          <div className="footer-contact">
            <a href="mailto:desigan@dmtravelconcierge.co.za">
              <Mail size={17} />
              <span>desigan@dmtravelconcierge.co.za</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} DM Travel Concierge.</p>

        <p>Curated journeys. Considered details.</p>
      </div>
    </footer>
  );
}

export default Footer;
