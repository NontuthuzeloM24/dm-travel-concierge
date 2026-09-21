import { Link } from "react-router-dom";

import { ArrowUpRight, Instagram, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              DM
            </Link>

            <p>
              Bespoke journeys.
              <br />
              Considered details.
              <br />
              Extraordinary experiences.
            </p>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Explore</span>

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/blog">Journal</Link>

            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Connect</span>

            <a href="mailto:info@dmtravelconcierge.co.za">
              <Mail size={15} />
              Email
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={15} />
              Instagram
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DM Travel Concierge</span>

          <span>Cape Town · South Africa</span>

          <a href="#top" className="back-to-top">
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
