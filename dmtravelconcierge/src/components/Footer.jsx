import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Journal", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <p className="eyebrow eyebrow-light">DM Travel Concierge</p>

          <h2 className="footer-title">
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

          <nav className="footer-links" aria-label="Footer">
            {links.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-column">
          <p className="footer-label">Contact</p>

          <div className="footer-contact">
            <a href="mailto:desigan@dmtravelconcierge.co.za">
              <Mail size={17} />
              <span>desigan@dmtravelconcierge.co.za</span>
            </a>

            <a href="tel:+27814475990">
              <Phone size={17} />
              <span>+27 81 447 5990</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} DM Travel Concierge. All rights reserved.</p>

        <p>CIPC Registration No: 2026/464704/07</p>
      </div>
    </footer>
  );
}

export default Footer;