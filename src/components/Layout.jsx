import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { profile } from "../data.js";

const links = [
  ["/", "Home"],
  ["/about", "About me"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/resume", "Resume"],
  ["/contact", "Contact"],
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <NavLink to="/" className="brand">Varsha Jadhav</NavLink>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={open ? "open" : ""} aria-label="Main">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"}>{label}</NavLink>
          ))}
        </nav>
      </header>
      <main id="main"><Outlet /></main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>{" "}
          <a href={`mailto:${profile.email}`}>Email</a>
        </p>
      </footer>
    </>
  );
}
