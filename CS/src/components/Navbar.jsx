import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

// ─── Navigation link definitions ───────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Faculty",  to: "/faculty" },
  { label: "Courses",  to: "/courses" },
  { label: "Research", to: "/research" },
  { label: "Gallery",  to: "/gallery" },
  { label: "Notices",  to: "/notices" },
  { label: "Contact",  to: "/contact" },
];

// ─── Logo mark: a minimal geometric CS glyph ──────────────────────────────────
// Deliberately minimal — a < > pair evoking code, rendered in gold on navy.
// Chosen over a generic shield/book crest to feel modern-academic, not clip-art.
function LogoMark() {
  return (
    <div className="shrink-0">
  <img
    src={logo}
    alt="Kendrapara Autonomous College Logo"
    className="h-12 w-12 lg:h-14 lg:w-14 object-contain"
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

  // Add shadow and slight background shift on scroll to signal "fixed" depth
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // ── Shared NavLink class generator ──────────────────────────────────────────
  // Design decision: active state uses a gold underline rule (not background fill).
  // This reads as "selected chapter" rather than "active tab" — more academic.
  const desktopLinkClass = ({ isActive }) =>
    [
      "relative text-sm tracking-wide transition-colors duration-200 pb-0.5 whitespace-nowrap",
      "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-amber-400",
      "after:transition-all after:duration-300",
      isActive
        ? "text-amber-400 after:w-full font-medium"
        : "text-slate-300 hover:text-white after:w-0 hover:after:w-full",
    ].join(" ");

  // Mobile links have a left-border treatment for the active state
  const mobileLinkClass = ({ isActive }) =>
    [
      "block px-4 py-3 text-sm tracking-wide border-l-2 transition-all duration-200",
      isActive
        ? "border-amber-400 text-amber-400 bg-white/5 font-medium"
        : "border-transparent text-slate-300 hover:border-slate-500 hover:text-white hover:bg-white/5",
    ].join(" ");

  return (
    <>
      {/* ── Sticky wrapper ─────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.45)]" : "shadow-none"
        }`}
        // Navy #0F172A — slate-900 is close; we use inline style for pixel-perfect brand colour
        style={{ background: "#0F172A" }}
      >
        {/* ── Thin gold top-bar accent ────────────────────────────────────────
            A 2px rule at the very top signals "premium institution" without
            competing with any hero image below. Borrowed from MIT, Penn, etc. */}
        <div className="h-0.5 w-full bg-amber-400" />

        {/* ── Inner layout container ──────────────────────────────────────── */}
        <nav
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* ── LEFT: Brand identity block ────────────────────────────── */}
            <NavLink
              to="/"
              className="flex items-center gap-3 group shrink-0"
              aria-label="Department of Computer Science — Home"
            >
              <LogoMark />

              {/* Text stack: two-level hierarchy — dept first, college second */}
              <div className="flex flex-col leading-tight">
                {/* Department name — the "title" of this page context */}
                <span
                  className="text-white font-semibold text-sm sm:text-[15px] tracking-tight group-hover:text-amber-300 transition-colors duration-200"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  Department of Computer Science
                </span>
                {/* College name — subdued, institutional context */}
                <span className="text-slate-400 text-[11px] sm:text-xs tracking-wide uppercase font-medium">
                  Kendrapara Autonomous College
                </span>
              </div>
            </NavLink>

            {/* ── CENTER–RIGHT: Desktop navigation ──────────────────────── */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-8">
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

            {/* ── Mobile hamburger ──────────────────────────────────────── */}
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

        {/* ── MOBILE MENU ─────────────────────────────────────────────────────
            Drops from the navbar downward (not a side drawer) — feels more
            like an unfolding section of a document than an app sidebar.
            Smooth height animation via max-height transition. */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ background: "#0c1322" }} // 5% darker than navbar for clear depth
          aria-hidden={!menuOpen}
        >
          {/* Hairline separator at top of drawer */}
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

      {/* ── Spacer pushes page content below fixed navbar ─────────────────── */}
      <div className="h-16 lg:h-[72px]" aria-hidden="true" />
    </>
  );
}
