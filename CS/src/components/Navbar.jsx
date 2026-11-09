import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

// ─── Navigation link definitions ───────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home",         to: "/" },
  { label: "About",        to: "/about" },
  { label: "Faculty",      to: "/faculty" },
  { label: "Courses",      to: "/courses" },
  { label: "Events",       to: "/events" },
  { label: "Achievements", to: "/achievements" },
  { label: "Gallery",      to: "/gallery" },
  { label: "Notices",      to: "/notices" },
  { label: "Contact",      to: "/contact" },
];

// ─── Logo mark: a minimal geometric CS glyph ──────────────────────────────────
function LogoMark() {
  return (
    <div className="shrink-0">
      <img
        src={logo}
        alt="Kendrapara Autonomous College Logo"
        className="h-10 w-10 sm:h-12 sm:w-12 lg:h-13 lg:w-13 object-contain"
      />
    </div>
  );
}

// ─── Hamburger / Close toggle icon ────────────────────────────────────────────
function MenuIcon({ open }) {
  return (
    <div className="w-6 h-5 flex flex-col justify-between cursor-pointer" aria-hidden="true">
      <span
        className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
          open ? "rotate-45 translate-y-px" : ""
        }`}
      />
      <span
        className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
          open ? "opacity-0 translate-x-2" : ""
        }`}
      />
      <span
        className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
          open ? "-rotate-45 -translate-y-px" : ""
        }`}
      />
    </div>
  );
}

// ─── Main Navbar Component ─────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const desktopLinkClass = ({ isActive }) =>
    [
      "relative text-xs xl:text-sm tracking-wide transition-colors duration-200 pb-0.5 whitespace-nowrap",
      "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-amber-400",
      "after:transition-all after:duration-300",
      isActive
        ? "text-amber-400 after:w-full font-medium"
        : "text-slate-300 hover:text-white after:w-0 hover:after:w-full",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "block px-4 py-3 text-sm tracking-wide border-l-2 transition-all duration-200",
      isActive
        ? "border-amber-400 text-amber-400 bg-white/5 font-medium"
        : "border-transparent text-slate-300 hover:border-slate-500 hover:text-white hover:bg-white/5",
    ].join(" ");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.45)]" : "shadow-none"
        }`}
        style={{ background: "#0F172A" }}
      >
        <div className="h-0.5 w-full bg-amber-400" />

        <nav
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            <NavLink
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
              aria-label="Department of Computer Science — Home"
            >
              <LogoMark />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-white font-semibold text-xs sm:text-sm lg:text-[15px] tracking-tight group-hover:text-amber-300 transition-colors duration-200"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  Department of Computer Science
                </span>
                <span className="text-slate-400 text-[10px] sm:text-xs tracking-wide uppercase font-medium">
                  Kendrapara Autonomous College
                </span>
              </div>
            </NavLink>

            {/* Desktop link strip: tuned gap and font-size so 9 links never overflow */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={desktopLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <button
              className="lg:hidden p-2 -mr-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "#0c1322" }}
          aria-hidden={!menuOpen}
        >
          <div className="h-px w-full bg-slate-700" />
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={mobileLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </header>

      <div className="h-16 lg:h-[72px]" aria-hidden="true" />
    </>
  );
}
