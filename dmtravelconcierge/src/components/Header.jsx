import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  const navigation = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Journal",
      path: "/blog",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  return (
    <header className={`site-header ${menuOpen ? "header-open" : ""}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="DM Travel Concierge home">
          <span className="brand-mark">DM</span>

          <span className="brand-name">TRAVEL CONCIERGE</span>
        </Link>

        <nav
          className={`main-navigation ${menuOpen ? "navigation-open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="navigation-links">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `navigation-link ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <Link to="/contact" className="header-cta">
            Plan Your Journey
          </Link>
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
