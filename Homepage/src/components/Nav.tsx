import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${open ? "is-open" : ""}`}>
      <Link className="nav-mark" to="/">
        <span className="nav-sigil" aria-hidden>
          <span className="nav-sigil-fill" />
          D
        </span>
        Draxion Studios
      </Link>
      <button
        type="button"
        className="nav-burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className="nav-links" onClick={() => setOpen(false)}>
        <NavLink to="/" end>
          Studio
        </NavLink>
        <a href="/#about">About</a>
        <a href="https://leadintel.draxionstudios.dev">LeadIntel</a>
        <NavLink to="/games/plane-simulator">Plane Simulator</NavLink>
      </nav>
    </header>
  );
}
