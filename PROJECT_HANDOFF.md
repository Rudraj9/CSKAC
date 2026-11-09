# CSKAC Project Technical Handoff Document

> **Purpose of this Document:** This document provides a complete, verbatim, copy-paste-ready technical handoff of the entire CSKAC codebase. It contains actual file contents in full, exact configuration details, dependency manifests, layout hierarchies, component sources, data layer schemas with sample records, styling architecture, and an operational customization roadmap.

---

## 1. Project Snapshot

### 1.1 Purpose, Audience, and Current State
- **Institutional Purpose:** The CSKAC platform is the official web application for the **Department of Computer Science at Kendrapara Autonomous College (KAC)**, Odisha, India. It serves as a unified digital repository showcasing departmental history, academic programs, faculty portfolios, student accomplishments, examination and seminar notices, and cultural event galleries.
- **Target Audience:** Prospective students and parents, currently enrolled undergraduate and postgraduate students, alumni, faculty members, institutional evaluators (NAAC/UGC), and corporate recruiters.
- **Current Functional State:**
  - **Active & Fully Functional:** Public pages including Homepage (`/`), About (`/about`), Faculty Directory (`/faculty`), Academic Programs (`/courses`), Bulletin Notices (`/notices`), Department Events (`/events`), Photographic Gallery (`/gallery`), Contact Hub (`/contact`), Research Facilities (``), and Student Achievements (`/achievements`).
  - **Placeholder Routes:** Sub-routes for future institutional features (`/syllabus`, `/question-papers`, `/labs`, `/projects`, `/alumni`, `/placement`, `/privacy`, `/terms`) are mapped to the graceful `Unavailable` fallback component.
  - **Backend / Authentication State:** Completely client-side rendered (CSR) with zero backend, server, or database requirements. All mock portals and mock authentication services were removed.

### 1.2 Exact Dependencies & Version Specifications
The project root delegates commands to the inner `CS/` application folder.

#### Root `package.json` (`c:/Users/ASUS/OneDrive/Desktop/CSKAC/package.json`):
```json
{
  "name": "cskac",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "npm --prefix CS run dev",
    "build": "npm --prefix CS run build",
    "lint": "npm --prefix CS run lint",
    "preview": "npm --prefix CS run preview"
  }
}

```

#### Application `CS/package.json` (`c:/Users/ASUS/OneDrive/Desktop/CSKAC/CS/package.json`):
```json
{
  "name": "cs",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --configLoader native",
    "build": "vite build --configLoader native",
    "lint": "eslint .",
    "preview": "vite preview --configLoader native"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.0",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-router-dom": "^7.17.0",
    "tailwindcss": "^4.3.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "vite": "^8.0.12"
  }
}

```

### 1.3 NPM Scripts & Execution Guide
| Script | Command | Purpose |
| :--- | :--- | :--- |
| `dev` | `npm --prefix CS run dev` (runs `vite --configLoader native`) | Starts local development server on port 5173 |
| `build` | `npm --prefix CS run build` (runs `vite build --configLoader native`) | Compiles production bundle into `CS/dist/` |
| `lint` | `npm --prefix CS run lint` (runs `eslint .`) | Runs ESLint 10 static code analysis across codebase |
| `preview` | `npm --prefix CS run preview` (runs `vite preview --configLoader native`) | Locally previews compiled production bundle |

**Execution Instructions:**
```powershell
# Install dependencies
npm --prefix CS install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 2. Full File Tree

```text
CSKAC/
├── .gitignore                       # Git ignore rules for root
├── package.json                     # Root orchestrator scripts (npm --prefix CS ...)
├── package-lock.json                # Lockfile for root orchestrator
├── PROJECT_OVERVIEW.md              # High-level architecture and executive overview
├── PROJECT_CODEBASE_ANALYSIS.md     # Granular codebase audit and file breakdown
├── PROJECT_ARCHITECTURE.md          # Architecture sequence diagrams and ER models
├── API_DOCUMENTATION.md             # Virtual API query contracts and future REST specs
├── PROJECT_HANDOFF.md               # Complete verbatim technical handoff (this file)
└── CS/                              # Frontend React application source root
    ├── .gitignore                   # Git ignore specifications for CS folder
    ├── eslint.config.js             # Flat ESLint configuration
    ├── index.html                   # Single-Page Application HTML entry point
    ├── package.json                 # Dependencies and build scripts for React app
    ├── package-lock.json            # Exact dependency lockfile
    ├── README.md                    # Project overview and local execution guide
    ├── vite.config.js               # Vite 8 config with React & Tailwind CSS 4 plugins
    ├── dist/                        # Compiled production build output [Generated]
    ├── public/                      # Static assets served at root path
    │   ├── favicon.svg              # Browser tab icon (SVG crest)
    │   ├── icons.svg                # Shared SVG icon symbol definitions
    │   └── logo.png                 # College crest logo asset (47.6 KB)
    └── src/                         # Application source code
        ├── App.css                  # [UNUSED / DEAD CODE] Default Vite starter template styles
        ├── App.jsx                  # Client-side router hierarchy & route definitions
        ├── index.css                # Global stylesheet declaring Tailwind CSS 4 import
        ├── main.jsx                 # React DOM root entry point mounting <App />
        ├── assets/                  # Bundled static media assets
        │   ├── hero.png             # Fallback branding image
        │   ├── logo.png             # Collegiate crest image
        │   ├── react.svg            # [UNUSED / DEAD CODE] Default Vite starter logo
        │   ├── vite.svg             # [UNUSED / DEAD CODE] Default Vite starter logo
        │   ├── achievements/        # Portrait photography for student toppers
        │   │   ├── topper.jpg       # Department rank 1 student photo
        │   │   ├── achiever1.jpg    # Student achiever portrait
        │   │   ├── achiever2.jpg    # Student achiever portrait
        │   │   └── achiever3.jpg    # Student achiever portrait
        │   ├── faculty/             # Faculty member portrait photography
        │   │   ├── hod.jpg          # Head of Department portrait
        │   │   ├── faculty1.jpg     # Faculty lecturer portrait
        │   │   ├── faculty2.jpg     # Faculty lecturer portrait
        │   │   └── faculty3.jpg     # Faculty lecturer portrait
        │   ├── gallery/             # Cultural and departmental event photography
        │   │   ├── farewell1.webp    # Annual farewell celebration photo
        │   │   ├── freshers1.webp    # Freshers welcome orientation photo
        │   │   ├── ganesh1.webp      # Ganesh Puja celebration photo
        │   │   ├── picnic1.webp      # Department excursion photo
        │   │   ├── saraswati1.webp   # Saraswati Puja celebration photo
        │   │   └── seminar1.jpg     # National AI workshop / seminar photo
        │   └── hero/                # Background banner imagery
        │       ├── building.webp     # Kendrapara College main academic building
        │       ├── Faculties.webp    # Department faculty group portrait
        │       └── lab.webp          # Computer laboratory workstation desks
        ├── components/              # Modular presentation components
        │   ├── AboutPreview.jsx     # Homepage teaser block for department history
        │   ├── AchievementsPreview.jsx # Homepage teaser block for toppers & qualifiers
        │   ├── FacultyCard.jsx      # [UNUSED / DEAD CODE] Stub component returning Home
        │   ├── FacultyPreview.jsx   # Homepage teaser block for faculty members
        │   ├── Footer.jsx           # Global sticky footer with links and contacts
        │   ├── GalleryPreview.jsx   # Homepage teaser grid for photo highlights
        │   ├── Hero.jsx             # Cross-fading background carousel on Homepage
        │   ├── Navbar.jsx           # Sticky navigation header with mobile drawer
        │   ├── NoticeCard.jsx       # [UNUSED / DEAD CODE] Stub component returning Home
        │   └── .jsx  # Homepage teaser block for lab research areas
        ├── data/                    # In-memory JavaScript data models
        │   ├── aboutData.js         # Department narrative, vision, mission, facilities
        │   ├── achievementsData.js  # Rank toppers, CGPAs, and competitive qualifiers
        │   ├── courseData.js        # B.Sc. & M.Sc. curricula, fees, eligibility
        │   ├── facultyData.js       # HOD message, faculty profiles, contact details
        │   ├── galleryData.js       # Photo gallery items, events, categories
        │   ├── noticeData.js        # Announcements, examination notices, seminars
        │   └── .js      # Research activity, lab equipment highlights
        ├── layouts/                 # Page layout wrappers
        │   └── PublicLayout.jsx     # Master layout embedding Navbar, Outlet, Footer
        └── pages/                   # Full route views
            ├── About.jsx            # 9-section deep institutional history and stats
            ├── Contact.jsx          # Departmental communication coordinates
            ├── Courses.jsx          # Degree program specs, curriculum tabs
            ├── Events.jsx           # Chronological department events feed
            ├── Faculty.jsx          # Faculty profiles, research areas, HOD message
            ├── Gallery.jsx          # Category-filtered gallery with image modal
            ├── Home.jsx             # Aggregated landing page with previews
            ├── Notices.jsx          # Filterable & searchable bulletin board
            └── Resources.jsx        # Research, Achievements, Unavailable, NotFound views
```

### Verified Unused, Duplicate, or Dead Code Files:
1. **`CS/src/components/FacultyCard.jsx`**: Contains stub code `function Home() { return <h1>Home Page</h1>; }`. Never imported. `Faculty.jsx` defines its own internal `FacultyCard` component.
2. **`CS/src/components/NoticeCard.jsx`**: Contains stub code `function Home() { return <h1>Home Page</h1>; }`. Never imported. `Notices.jsx` defines its own internal `NoticeCard` component.
3. **`CS/src/App.css`**: Boilerplate starter stylesheet from `create-vite`. Not imported in `main.jsx` or `App.jsx`. All styling is handled via Tailwind CSS in `index.css`.
4. **`CS/src/assets/react.svg` & `CS/src/assets/vite.svg`**: Unreferenced starter SVG icons from Vite scaffolding.

---

## 3. Configuration Files

### 3.1 `CS/vite.config.js`
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

### 3.2 `CS/index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSKAC</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

### 3.3 `CS/eslint.config.js`
```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
])

```

### 3.4 Tailwind CSS 4 Setup & Stylesheets
- **Tailwind CSS 4 Configuration:** This project uses Tailwind CSS v4 via `@tailwindcss/vite` plugin (configured in `vite.config.js`). It does NOT use a legacy `tailwind.config.js` or `postcss.config.js`.
- **Theme & Custom CSS:** Tailwind is imported via CSS-first syntax in `index.css`. No custom `@theme` blocks are configured; styles use Tailwind's built-in color palette (`amber`, `slate`, etc.) and arbitary values (`#0F172A`, `#0a1020`, etc.).

#### `CS/src/index.css` (Active & Imported in `main.jsx`):
```css
@import "tailwindcss";
```

#### `CS/src/App.css` (Dead Code - NOT Imported anywhere):
```css
.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}

```

---

## 4. Routing and Layout

### 4.1 `CS/src/main.jsx`
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

### 4.2 `CS/src/App.jsx`
```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import PublicLayout from "./layouts/PublicLayout";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Courses from "./pages/Courses";
import Notices from "./pages/Notices";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { Research, Achievements, Unavailable, NotFound } from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with Navbar/Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="" element={<Research />} />
          <Route path="/achievements" element={<Achievements />} />
          {['syllabus', 'question-papers', 'labs', 'projects', 'alumni', 'placement', 'privacy', 'terms'].map(path => (
            <Route key={path} path={`/${path}`} element={<Unavailable />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

### 4.3 `CS/src/layouts/PublicLayout.jsx`
```javascript
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

```

### 4.4 Route Mapping Table
| Path | Component | Layout | Params / Purpose |
| :--- | :--- | :--- | :--- |
| `/` | `Home` (`src/pages/Home.jsx`) | `PublicLayout` | Main aggregate landing page |
| `/about` | `About` (`src/pages/About.jsx`) | `PublicLayout` | Comprehensive 9-section institutional narrative |
| `/faculty` | `Faculty` (`src/pages/Faculty.jsx`) | `PublicLayout` | Faculty directory, HOD message, leadership metrics |
| `/courses` | `Courses` (`src/pages/Courses.jsx`) | `PublicLayout` | Undergraduate & postgraduate program details |
| `/notices` | `Notices` (`src/pages/Notices.jsx`) | `PublicLayout` | Filterable & searchable department bulletin board |
| `/events` | `Events` (`src/pages/Events.jsx`) | `PublicLayout` | Chronological departmental event articles |
| `/gallery` | `Gallery` (`src/pages/Gallery.jsx`) | `PublicLayout` | Category-filtered photo albums with modal view |
| `/contact` | `Contact` (`src/pages/Contact.jsx`) | `PublicLayout` | Official departmental coordinates and office hours |
| `` | `Research` (`src/pages/Resources.jsx`) | `PublicLayout` | Dedicated view of research labs |
| `/achievements` | `Achievements` (`src/pages/Resources.jsx`) | `PublicLayout` | Dedicated view of toppers & OJEE qualifiers |
| `/syllabus` | `Unavailable` (`src/pages/Resources.jsx`) | `PublicLayout` | Placeholder fallback for upcoming syllabus module |
| `/question-papers` | `Unavailable` (`src/pages/Resources.jsx`) | `PublicLayout` | Placeholder fallback for question paper archive |
| `/labs` | `Unavailable` (`src/pages/Resources.jsx`) | `PublicLayout` | Placeholder fallback for lab schedules |
| `/projects` | `Unavailable` (`src/pages/Resources.jsx`) | `PublicLayout` | Placeholder fallback for student projects |
| `/alumni` | `Unavailable` (`src/pages/Resources.jsx`) | `PublicLayout` | Placeholder fallback for alumni network |
| `/placement` | `Unavailable` (`src/pages/Resources.jsx`) | `PublicLayout` | Placeholder fallback for placement records |
| `/privacy` | `Unavailable` (`src/pages/Resources.jsx`) | `PublicLayout` | Placeholder fallback for privacy policy |
| `/terms` | `Unavailable` (`src/pages/Resources.jsx`) | `PublicLayout` | Placeholder fallback for terms of use |
| `*` | `NotFound` (`src/pages/Resources.jsx`) | `PublicLayout` | 404 error page |

### 4.5 `CS/src/components/Navbar.jsx`
```javascript
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

// ─── Navigation link definitions ───────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Faculty",  to: "/faculty" },
  { label: "Courses",  to: "/courses" },
  { label: "Research", to: "" },
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

```

### 4.6 `CS/src/components/Footer.jsx`
```javascript
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 py-16 border-t-[6px] border-[#F59E0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Department Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              {/* Placeholder for Logo */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-[#0F172A] font-extrabold text-xl">CS</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight uppercase tracking-wider">
                  Department of<br />Computer Science
                </h3>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Kendrapara Autonomous College is committed to academic excellence, 
              fostering innovation, and empowering students with cutting-edge 
              computer science education to meet global challenges.
            </p>
            {/* Social Icons Placeholders */}
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F59E0B] hover:text-white transition-colors duration-300 shadow-md">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F59E0B] hover:text-white transition-colors duration-300 shadow-md">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F59E0B] hover:text-white transition-colors duration-300 shadow-md">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#F59E0B] hover:text-white transition-colors duration-300 shadow-md">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM10 15l5-3-5-3v6z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center uppercase tracking-wide">
              <span className="w-8 h-1 bg-[#F59E0B] mr-3 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About Department', path: '/about' },
                { name: 'Faculty Members', path: '/faculty' },
                { name: 'Research & Publications', path: '' },
                { name: 'Student Achievements', path: '/achievements' },
                { name: 'Notice Board', path: '/notices' },
                { name: 'Photo Gallery', path: '/gallery' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2 text-slate-600 group-hover:text-[#F59E0B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Student Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center uppercase tracking-wide">
              <span className="w-8 h-1 bg-[#F59E0B] mr-3 rounded-full"></span>
              Student Resources
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Academic Syllabus', path: '/syllabus' },
                { name: 'Previous Year Papers', path: '/question-papers' },
                { name: 'Laboratory Manuals', path: '/labs' },
                { name: 'Project Guidelines', path: '/projects' },
                { name: 'Alumni Network', path: '/alumni' },
                { name: 'Placement Cell', path: '/placement' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
                  >
                    <svg className="w-4 h-4 mr-2 text-slate-600 group-hover:text-[#F59E0B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center uppercase tracking-wide">
              <span className="w-8 h-1 bg-[#F59E0B] mr-3 rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-slate-800 p-2 rounded-lg mr-4 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  <strong className="text-slate-300 font-medium block mb-1">Campus Address</strong>
                  Department of Computer Science,<br />
                  Kendrapara Autonomous College,<br />
                  Kendrapara, Odisha, India - 754211
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-slate-800 p-2 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                   <strong className="text-slate-300 font-medium text-xs block mb-0.5">Email Us</strong>
                   <a href="mailto:info@kac.edu.in" className="text-slate-400 hover:text-[#F59E0B] transition-colors duration-300 text-sm">
                     cs.dept@kac.edu.in
                   </a>
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-slate-800 p-2 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                   <strong className="text-slate-300 font-medium text-xs block mb-0.5">Call Us</strong>
                   <a href="tel:+910000000000" className="text-slate-400 hover:text-[#F59E0B] transition-colors duration-300 text-sm">
                     +91 (000) 000-0000
                   </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Area */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Department of Computer Science, Kendrapara Autonomous College.<br className="hidden sm:block md:hidden" /> All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-[#F59E0B] transition-colors duration-300">Privacy Policy</Link>
            <span className="text-slate-700">|</span>
            <Link to="/terms" className="text-slate-500 hover:text-[#F59E0B] transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## 5. Every Page and Component (Source Code & Analysis)

### 5.1 Components (`src/components/`)

#### Component: `Hero.jsx` (`CS/src/components/Hero.jsx`)
- **Props:** None
- **State:** `currentImageIndex` (integer, active slide index)
- **Data Imports:** None (imports images: `building.webp`, `lab.webp`, `Faculties.webp`)
- **Hooks / Effects / Timers:** Timer: `setInterval(..., 5000)` advances slide index; cleanup in `useEffect`. Transitions opacity with Tailwind `duration-1000`.

```javascript
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import buildingImg from '../assets/hero/building.webp';
import labImg from '../assets/hero/lab.webp';
import facultiesImg from '../assets/hero/Faculties.webp';

// ─── Department statistics ─────────────────────────────────────────────────────
const STATS = [
  { value: "24+", label: "Faculty Members" },
  { value: "800+", label: "Students Enrolled" },
  { value: "4",   label: "Laboratories" },
];

const BACKGROUND_IMAGES = [buildingImg, labImg, facultiesImg];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-900"
      aria-label="Department introduction"
    >
      {/* ─── Background Images with Fade Transition ────────────────────────── */}
      {BACKGROUND_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Hero background ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* ─── Dark Overlay ──────────────────────────────────────────────────── */}
      <div 
        className="absolute inset-0 bg-slate-900/65 sm:bg-slate-900/60 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" 
        aria-hidden="true" 
      />

      {/* ─── Main Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="w-full lg:w-3/5 xl:w-1/2 flex flex-col">
          
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
            <span className="text-amber-500 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase drop-shadow-md">
              Kendrapara Autonomous College
            </span>
          </div>

          <div className="flex gap-5 lg:gap-6">
            {/* Vertical gold rule */}
            <div className="w-0.5 shrink-0 self-stretch bg-amber-500 rounded-full drop-shadow-lg" aria-hidden="true" />
            
            <div className="flex flex-col">
              <h1 
                className="text-white font-bold leading-tight mb-4 drop-shadow-lg"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                }}
              >
                Department of <br />
                Computer Science
              </h1>

              <p className="text-amber-400 text-lg lg:text-xl font-medium tracking-wide mb-6 drop-shadow-md">
                Where Rigorous Theory Meets Applied Computing
              </p>

              <p className="text-slate-200 leading-relaxed text-base lg:text-lg max-w-lg mb-10 drop-shadow-sm">
                Established to foster computational thinking and research excellence,
                our department prepares graduates for careers in academia, industry,
                and public service — grounded in both foundational theory and
                hands-on engineering practice.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mb-14">
                <Link
                  to="/faculty"
                  className="px-8 py-3.5 bg-amber-500 text-slate-900 text-sm font-bold
                             tracking-wide hover:bg-amber-400 transition-colors duration-200 shadow-lg"
                >
                  Explore Faculty
                </Link>
                <Link
                  to="/courses"
                  className="px-8 py-3.5 border border-slate-300 text-white text-sm
                             font-bold tracking-wide hover:border-amber-400 hover:text-amber-400
                             transition-colors duration-200 backdrop-blur-sm bg-white/5 shadow-lg"
                >
                  View Courses
                </Link>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-wrap items-center gap-8 md:gap-16 border-t border-slate-400/30 pt-8 pl-5 lg:pl-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span 
                  className="text-white font-bold mb-1 drop-shadow-md"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-slate-300 text-xs font-semibold tracking-widest uppercase drop-shadow-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

```

#### Component: `AboutPreview.jsx` (`CS/src/components/AboutPreview.jsx`)
- **Props:** None
- **State:** None
- **Data Imports:** `CS/src/data/aboutData.js` (`aboutData`)
- **Hooks / Effects / Timers:** None (pure presentation).

```javascript
import { Link } from 'react-router-dom';
import buildingImg from '../assets/hero/building.webp';

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* ─── Left Side: Content ────────────────────────────────────────── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
              <span className="text-amber-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                About The Department
              </span>
            </div>

            {/* Heading */}
            <h2 
              className="text-slate-900 font-bold leading-tight mb-6"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Building the Future Through Computing Education and Innovation
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-8">
              The Department of Computer Science stands at the forefront of technological 
              advancement, dedicated to cultivating analytical minds and engineering excellence. 
              We offer a rigorous academic environment that bridges theoretical foundations 
              with cutting-edge practical applications, preparing our graduates to lead 
              in an increasingly digital world.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mb-10">
              {[
                "Experienced Faculty",
                "Modern Computing Laboratories",
                "Research & Innovation",
                "Industry-Oriented Learning"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div>
              <Link 
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 text-white text-sm font-bold tracking-wide hover:bg-amber-500 hover:text-slate-900 transition-colors duration-300 shadow-md group"
              >
                Read More
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ─── Right Side: Image ─────────────────────────────────────────── */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative group rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-slate-900/5 transition-opacity duration-300 group-hover:opacity-0 z-10" />
              <img 
                src={buildingImg} 
                alt="Department Building" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-amber-500 z-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

```

#### Component: `FacultyPreview.jsx` (`CS/src/components/FacultyPreview.jsx`)
- **Props:** None
- **State:** None
- **Data Imports:** `CS/src/data/facultyData.js` (`facultyMembers`)
- **Hooks / Effects / Timers:** None (renders preview grid of first faculty members).

```javascript
import { Link } from 'react-router-dom';
import { facultyData } from '../data/facultyData';

export default function FacultyPreview() {
  // Show only up to 4 faculty members for the preview
  const previewData = facultyData.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Section Header ──────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
            <span className="text-amber-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              Our Faculty
            </span>
            <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
          </div>
          
          <h2 
            className="text-slate-900 font-bold leading-tight mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            Meet Our Academic Leaders
          </h2>
          
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
            Our esteemed faculty members are dedicated educators, mentors, and 
            researchers committed to shaping the next generation of computing professionals.
          </p>
        </div>

        {/* ─── Faculty Grid ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewData.map((faculty) => (
            <div 
              key={faculty.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 z-10" />
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6 text-center">
                <h3 
                  className="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors duration-300"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {faculty.name}
                </h3>
                <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                  {faculty.designation}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {faculty.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── View All Button ─────────────────────────────────────────────── */}
        <div className="mt-16 text-center">
          <Link 
            to="/faculty"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 text-slate-900 text-sm font-bold tracking-wide hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-300 shadow-sm group"
          >
            View All Faculty
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}

```

#### Component: `.jsx` (`CS/src/components/.jsx`)
- **Props:** None
- **State:** None
- **Data Imports:** `CS/src/dataData.js` (``)
- **Hooks / Effects / Timers:** None (renders research laboratory facility cards).

```javascript
import {  } from '../dataData';

export default function () {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Section Header ──────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
            <span className="text-amber-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              Research & Laboratories
            </span>
            <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
          </div>
          
          <h2 
            className="text-slate-900 font-bold leading-tight mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            Advancing Learning Through Research, Innovation, and Practical Experience
          </h2>
          
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
            Our department is equipped with state-of-the-art facilities designed to bridge 
            the gap between theoretical computer science and applied engineering. We foster an 
            environment where analytical thinking meets hands-on problem solving.
          </p>
        </div>

        {/* ─── Research & Labs Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-500 flex flex-col"
            >
              {/* Image Placeholder Area 
                  Note: When real images are added to src/assets/, 
                  you can easily swap this block with an <img /> tag.
              */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/10 transition-colors duration-300 z-10" />
                <span className="text-slate-400 font-medium text-sm tracking-widest uppercase z-20 px-4 text-center">
                  {item.placeholderLabel}
                </span>
                {/* Decorative hover accent line to compensate for lack of image animation */}
                <div className="absolute bottom-0 left-0 w-full border-b-4 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col text-center sm:text-left">
                <h3 
                  className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

```

#### Component: `AchievementsPreview.jsx` (`CS/src/components/AchievementsPreview.jsx`)
- **Props:** None
- **State:** `activeTab` ("toppers" | "qualifiers")
- **Data Imports:** `CS/src/data/achievementsData.js` (`departmentToppers`, `qualifiers`)
- **Hooks / Effects / Timers:** Tab switching logic via `setActiveTab()`.

```javascript
import { Link } from 'react-router-dom';
import { departmentToppers, qualifiers } from '../data/achievementsData';

const AchievementsPreview = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold text-[#F59E0B] tracking-widest uppercase mb-3">
            ACHIEVEMENTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Our Achievers
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Celebrating the hard work, dedication, and academic excellence of our students.
          </p>
        </div>

        {/* Section 1: Department Toppers */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
              Department Toppers
            </h3>
            <Link 
              to="/achievements" 
              className="group flex items-center text-sm font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors duration-300"
            >
              View All 
              <span className="ml-1.5 inline-block transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#F59E0B]">
                &#8594;
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Rank 2 */}
            <div className="order-2 md:order-1 bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-md">
                <img src={departmentToppers[1].image} alt={departmentToppers[1].name} className="w-full h-full object-cover object-center" />
              </div>
              <h4 className="text-xl font-bold text-[#0F172A] mb-1">{departmentToppers[1].name}</h4>
              <p className="text-sm text-slate-500 mb-4">{departmentToppers[1].course} • {departmentToppers[1].batch}</p>
              <div className="bg-slate-50 w-full py-3 rounded-lg border border-slate-100 mt-auto">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">CGPA</p>
                <p className="text-2xl font-bold text-[#0F172A]">{departmentToppers[1].cgpa}</p>
              </div>
            </div>

            {/* Rank 1 (Topper) */}
            <div className="order-1 md:order-2 bg-[#0F172A] rounded-2xl p-10 shadow-2xl border border-[#F59E0B]/30 flex flex-col items-center text-center transform md:-translate-y-8 hover:-translate-y-10 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F59E0B] to-yellow-300"></div>
              
              <div className="absolute top-6 right-6 text-[#F59E0B]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                </svg>
              </div>

              <div className="relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 text-[#F59E0B]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
                  </svg>
                </div>
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.3)] relative z-10 bg-white">
                  <img src={departmentToppers[0].image} alt={departmentToppers[0].name} className="w-full h-full object-cover object-center" />
                </div>
              </div>
              
              <div className="bg-[#F59E0B] text-[#0F172A] text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full mb-4">
                Department Topper
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-1">{departmentToppers[0].name}</h4>
              <p className="text-sm text-slate-300 mb-6">{departmentToppers[0].course} • {departmentToppers[0].batch}</p>
              
              <div className="bg-white/10 w-full py-4 rounded-xl border border-white/10 mt-auto backdrop-blur-sm">
                <p className="text-xs font-medium text-[#F59E0B] uppercase tracking-widest mb-1">CGPA</p>
                <p className="text-4xl font-bold text-white">{departmentToppers[0].cgpa}</p>
              </div>
            </div>

            {/* Rank 3 */}
            <div className="order-3 md:order-3 bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-md">
                <img src={departmentToppers[2].image} alt={departmentToppers[2].name} className="w-full h-full object-cover object-center" />
              </div>
              <h4 className="text-xl font-bold text-[#0F172A] mb-1">{departmentToppers[2].name}</h4>
              <p className="text-sm text-slate-500 mb-4">{departmentToppers[2].course} • {departmentToppers[2].batch}</p>
              <div className="bg-slate-50 w-full py-3 rounded-lg border border-slate-100 mt-auto">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">CGPA</p>
                <p className="text-2xl font-bold text-[#0F172A]">{departmentToppers[2].cgpa}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: OJEE / CPET Qualifiers */}
        <div>
           <div className="flex items-center justify-between mb-10 max-w-5xl mx-auto">
             <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
               OJEE / CPET Qualifiers
             </h3>
             <Link 
               to="/achievements" 
               className="group flex items-center text-sm font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors duration-300"
             >
               View All 
               <span className="ml-1.5 inline-block transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#F59E0B]">
                 &#8594;
               </span>
             </Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {qualifiers.map((qualifier) => (
              <div 
                key={qualifier.id}
                className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 flex flex-col sm:flex-row items-center gap-6 group transform hover:-translate-y-1"
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-[#F59E0B]/30 transition-colors duration-300 shadow-sm">
                  <img 
                    src={qualifier.image} 
                    alt={qualifier.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-grow flex flex-col sm:flex-row sm:items-center sm:justify-between w-full text-center sm:text-left">
                  <div className="mb-4 sm:mb-0">
                    <h4 className="text-xl font-bold text-[#0F172A] mb-1">{qualifier.name}</h4>
                    <p className="text-[#F59E0B] font-medium text-sm flex items-center justify-center sm:justify-start gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {qualifier.qualification} {qualifier.year}
                    </p>
                  </div>
                  {qualifier.rank && (
                    <div className="bg-slate-50 px-5 py-2.5 rounded-lg border border-slate-100 min-w-[90px]">
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">Rank</p>
                      <p className="text-xl font-bold text-[#0F172A] leading-none">{qualifier.rank}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link 
            to="/achievements" 
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-white bg-[#0F172A] hover:bg-[#1E293B] transition-all duration-300 shadow-lg shadow-[#0F172A]/20 hover:shadow-[#0F172A]/40 transform hover:-translate-y-0.5"
          >
            Explore All Achievements
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2.5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementsPreview;

```

#### Component: `GalleryPreview.jsx` (`CS/src/components/GalleryPreview.jsx`)
- **Props:** None
- **State:** None
- **Data Imports:** `CS/src/data/galleryData.js` (`galleryData`)
- **Hooks / Effects / Timers:** None (renders first 4 gallery items).

```javascript
import { Link } from 'react-router-dom';
import { galleryData } from '../data/galleryData';

const GalleryPreview = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 right-10 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-10 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200/60 pb-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#F59E0B] tracking-widest uppercase mb-3">
              GALLERY
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Moments Beyond the Classroom
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Showcase the academic, cultural, and extracurricular experiences that define student life within the Department of Computer Science.
            </p>
          </div>
          
          <Link 
            to="/gallery" 
            className="group mt-6 md:mt-0 flex items-center text-sm font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors duration-300"
          >
            View Full Gallery 
            <span className="ml-1.5 inline-block transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#F59E0B]">
              &#8594;
            </span>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[260px]">
          {galleryData.items.map((item) => (
            <div 
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-300 ${item.span} h-64 sm:h-72 md:h-full`}
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              
              {/* Content on Hover */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;

```

#### Component: `FacultyCard.jsx` (`CS/src/components/FacultyCard.jsx`)
- **Props:** None
- **State:** None
- **Data Imports:** None
- **Hooks / Effects / Timers:** [DEAD CODE] Contains stub returning `<h1>Home Page</h1>`. Unused.

```javascript
function Home() {
  return <h1>Home Page</h1>;
}

export default Home;
```

#### Component: `NoticeCard.jsx` (`CS/src/components/NoticeCard.jsx`)
- **Props:** None
- **State:** None
- **Data Imports:** None
- **Hooks / Effects / Timers:** [DEAD CODE] Contains stub returning `<h1>Home Page</h1>`. Unused.

```javascript
function Home() {
  return <h1>Home Page</h1>;
}

export default Home;
```

### 5.2 Pages (`src/pages/`)

#### Page: `Home.jsx` (`CS/src/pages/Home.jsx`)
- **Props:** None
- **State:** None
- **Data Imports:** None (assembles preview components)
- **Hooks / Effects / Timers:** None (pure composition).

```javascript
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import FacultyPreview from "../components/FacultyPreview";
import  from "../components/";
import AchievementsPreview from "../components/AchievementsPreview";
import GalleryPreview from "../components/GalleryPreview";

function Home() {
  return (
    <>
      <Hero />
       <AboutPreview />
       <FacultyPreview />
       < />
       <AchievementsPreview />
       <GalleryPreview />
    </>
  );
}

export default Home;
```

#### Page: `About.jsx` (`CS/src/pages/About.jsx`)
- **Props:** None
- **State:** None
- **Data Imports:** `CS/src/data/aboutData.js` (`aboutData`), images: `building.webp`, `lab.webp`
- **Hooks / Effects / Timers:** Renders 9 distinct modular sections (`HeroSection`, `StorySection`, `VisionMissionSection`, `StatsSection`, `ProgramsSection`, `FacilitiesSection`, `WhyChooseSection`, `HighlightsSection`, `CTASection`).

```javascript
// src/pages/About.jsx
import { aboutData } from "../data/aboutData";
import building from "../assets/hero/building.webp";
import lab from "../assets/hero/lab.webp";

/* ─── tiny helper ─── */
const Tag = ({ text }) => (
  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30">
    {text}
  </span>
);

/* ═══════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════ */
const HeroSection = () => {
  const { hero } = aboutData;
  return (
    <section className="relative h-[92vh] min-h-[600px] flex items-end overflow-hidden">
      {/* background */}
      <img
        src={building}
        alt="College Building"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: "brightness(0.35) saturate(0.9)" }}
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />

      {/* content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-20 lg:pb-28">
        {/* badge */}
        <div className="mb-6">
          <Tag text={hero.badge} />
        </div>

        {/* dept name */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-4xl">
          {hero.departmentName}
        </h1>

        {/* college name */}
        <p className="mt-3 text-amber-400 text-base sm:text-lg font-medium tracking-widest uppercase">
          {hero.college}
        </p>

        {/* divider */}
        <div className="mt-6 mb-6 w-20 h-px bg-amber-400" />

        {/* tagline */}
        <p className="text-white/70 text-xl sm:text-2xl font-light italic max-w-2xl leading-relaxed">
          "{hero.tagline}"
        </p>

        {/* established */}
        <p className="mt-8 text-white/40 text-sm tracking-[0.25em] uppercase">
          {hero.established}
        </p>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 2 — OUR STORY
═══════════════════════════════════════════════ */
const StorySection = () => {
  const { story } = aboutData;
  return (
    <section className="bg-[#0F172A] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* eyebrow */}
        <div className="mb-12">
          <Tag text="Our Story" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* image side */}
          <div className="relative">
            <img
              src={building}
              alt="Department Building"
              className="rounded-2xl w-full h-[480px] object-cover object-center shadow-2xl"
              style={{ filter: "brightness(0.85) saturate(1.1)" }}
            />
            {/* floating card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-amber-400 text-[#0F172A] rounded-xl px-6 py-4 shadow-2xl">
              <p className="text-3xl font-bold font-serif leading-none">29+</p>
              <p className="text-xs font-semibold tracking-wider uppercase mt-1">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* text side */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {story.heading}
            </h2>
            <p className="text-amber-400/80 text-lg italic">{story.subheading}</p>
            <div className="space-y-5">
              {story.paragraphs.map((p, i) => (
                <p key={i} className="text-white/65 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 3 — VISION & MISSION
═══════════════════════════════════════════════ */
const VisionMissionSection = () => {
  const { vision, mission } = aboutData;
  return (
    <section className="bg-[#0a1020] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-16 text-center">
          <Tag text="Purpose" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Vision &amp; Mission
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Vision — larger card */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-amber-400/5 p-8 sm:p-10 flex flex-col justify-between min-h-64">
            {/* decorative */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-amber-400/10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-amber-400/10" />

            <div>
              <div className="w-12 h-1 bg-amber-400 mb-6" />
              <h3 className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                {vision.heading}
              </h3>
              <p className="font-serif text-white text-xl sm:text-2xl leading-relaxed font-light italic">
                "{vision.text}"
              </p>
            </div>
          </div>

          {/* Mission — list */}
          <div className="lg:col-span-3 rounded-2xl border border-white/8 bg-white/3 p-8 sm:p-10">
            <div className="w-12 h-1 bg-white/20 mb-6" />
            <h3 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">
              {mission.heading}
            </h3>
            <ul className="space-y-5">
              {mission.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-white/70 text-base leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 4 — AT A GLANCE (Stats)
═══════════════════════════════════════════════ */
const StatsSection = () => {
  const { stats } = aboutData;
  return (
    <section className="bg-amber-400 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-5xl sm:text-6xl font-bold text-[#0F172A] leading-none">
                {s.value}
              </p>
              <p className="mt-3 text-[#0F172A]/70 text-sm font-semibold tracking-widest uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 5 — PROGRAMS
═══════════════════════════════════════════════ */
const ProgramsSection = () => {
  const { programs } = aboutData;
  return (
    <section className="bg-[#0F172A] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <Tag text="Academic Programs" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Programs Offered
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Structured pathways designed to take you from foundational knowledge to industry-ready
            expertise.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-stretch ${
            programs.length === 2 
              ? "max-w-4xl mx-auto" 
              : programs.length === 3 
                ? "lg:grid-cols-3" 
                : "lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {programs.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300"
            >
              {/* Top row: icon and duration */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl block transform group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 border border-amber-400/30 rounded-full px-3 py-1 bg-amber-400/10">
                  {p.duration}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-white font-serif font-bold text-xl leading-tight mb-4">
                {p.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                {p.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[10px] px-2.5 py-1 rounded-md bg-[#0F172A]/50 text-white/70 font-medium border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 6 — FACILITIES
═══════════════════════════════════════════════ */
const FacilitiesSection = () => {
  const { facilities } = aboutData;
  return (
    <section className="bg-[#0a1020] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* header + background image row */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <Tag text="Infrastructure" />
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Facilities &amp; Infrastructure
            </h2>
            <p className="mt-5 text-white/55 leading-relaxed">
              Modern infrastructure designed for deep learning, hands-on practice, and
              cutting-edge research — all under one roof.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80">
            <img
              src={lab}
              alt="Computer Laboratory"
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.7) saturate(1.15)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1020]/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-semibold text-lg">State-of-the-art Labs</p>
              <p className="text-white/60 text-sm">200+ workstations across 5 labs</p>
            </div>
          </div>
        </div>

        {/* facility cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/8 bg-white/3 p-6 hover:border-amber-400/25 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-3xl block mb-4">{f.icon}</span>
              <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 7 — WHY CHOOSE US
═══════════════════════════════════════════════ */
const WhyChooseSection = () => {
  const { whyChooseUs } = aboutData;
  return (
    <section className="bg-[#0F172A] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* section header */}
        <div className="max-w-2xl mb-16">
          <Tag text="Why Us" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            Why Choose Our Department
          </h2>
          <p className="mt-5 text-white/55">
            More than a degree — we offer an environment where curious minds are challenged,
            supported, and prepared for what comes next.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/8 bg-white/3 p-8 hover:border-amber-400/30 transition-all duration-300"
            >
              <span className="text-3xl mb-5 block group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 8 — HIGHLIGHTS
═══════════════════════════════════════════════ */
const HighlightsSection = () => {
  const { highlights } = aboutData;
  const tagColors = {
    Research: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    Events: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    Achievement: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    Innovation: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  };

  return (
    <section className="bg-[#0a1020] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <Tag text="Highlights" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Department Highlights
          </h2>
        </div>

        {/* highlight grid with alternating image blocks */}
        <div className="grid lg:grid-cols-2 gap-6">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/8 overflow-hidden hover:border-amber-400/20 transition-all duration-300"
            >
              {/* subtle background image for first and last */}
              {(i === 0 || i === 3) && (
                <img
                  src={i === 0 ? lab : building}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover opacity-10 scale-105"
                />
              )}
              <div className="relative p-8 bg-gradient-to-br from-white/5 to-transparent">
                <span
                  className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border mb-5 ${
                    tagColors[h.tag] || "text-white/50 border-white/20 bg-white/5"
                  }`}
                >
                  {h.tag}
                </span>
                <h3 className="text-white font-serif text-xl font-bold mb-3">{h.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 9 — CTA
═══════════════════════════════════════════════ */
const CTASection = () => {
  const { cta } = aboutData;
  return (
    <section className="relative py-32 overflow-hidden">
      {/* background */}
      <img
        src={lab}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.2) saturate(0.8)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 via-[#0F172A]/80 to-amber-900/30" />

      {/* decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber-400/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-amber-400/8 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
        <div className="w-16 h-px bg-amber-400 mx-auto mb-10" />
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {cta.heading}
        </h2>
        <p className="mt-6 text-white/60 text-lg leading-relaxed">{cta.subheading}</p>
        <div className="mt-12">
          <a
            href={cta.buttonLink}
            className="inline-block bg-amber-400 text-[#0F172A] font-bold text-sm tracking-wider uppercase px-10 py-4 rounded-full hover:bg-amber-300 transition-colors duration-200 shadow-lg shadow-amber-400/20"
          >
            {cta.buttonText}
          </a>
        </div>
        <div className="w-16 h-px bg-amber-400/30 mx-auto mt-10" />
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════ */
const About = () => (
  <main className="bg-[#0F172A] min-h-screen overflow-x-hidden">
    <HeroSection />
    <StorySection />
    <VisionMissionSection />
    <StatsSection />
    <ProgramsSection />
    <FacilitiesSection />
    <WhyChooseSection />
    <HighlightsSection />
    <CTASection />
  </main>
);

export default About;
```

#### Page: `Faculty.jsx` (`CS/src/pages/Faculty.jsx`)
- **Props:** None
- **State:** None
- **Data Imports:** `CS/src/data/facultyData.js` (multiple exports)
- **Hooks / Effects / Timers:** Renders faculty leadership message, faculty card grid with email links and expertise tags, and departmental stats.

```javascript
// src/pages/Faculty.jsx
import {
  hero,
  hod,
  leadershipStats,
  facultyMembers,
  expertiseAreas,
  researchContributions,
  facultyExcellence,
  contact,
  cta,
} from "../data/facultyData";

/* ─── Shared helpers ─── */
const Tag = ({ text, color = "amber" }) => {
  const palette = {
    amber: "bg-amber-400/15 text-amber-400 border-amber-400/30",
    blue: "bg-blue-400/15 text-blue-400 border-blue-400/30",
    purple: "bg-purple-400/15 text-purple-400 border-purple-400/30",
    emerald: "bg-emerald-400/15 text-emerald-400 border-emerald-400/30",
  };
  return (
    <span
      className={`inline-block px-3 py-1 text-[10px] font-bold tracking-[0.25em] uppercase rounded-full border ${palette[color] || palette.amber}`}
    >
      {text}
    </span>
  );
};

const tagColorMap = {
  Award: "amber",
  Research: "blue",
  Mentorship: "emerald",
  Innovation: "purple",
};

/* ═══════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════ */
const HeroSection = () => (
  <section className="relative bg-[#0F172A] pt-28 pb-24 overflow-hidden">
    {/* decorative rings */}
    <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-amber-400/5 pointer-events-none" />
    <div className="absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full border border-amber-400/8 pointer-events-none" />
    {/* horizontal rule accent */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

    <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
      <Tag text="Academic Faculty" />

      <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
        {hero.heading}
      </h1>

      <div className="mt-6 w-20 h-px bg-amber-400" />

      <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-3xl">
        {hero.subheading}
      </p>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 2 — HOD MESSAGE
═══════════════════════════════════════════════ */
const HODSection = () => (
  <section className="bg-[#0a1020] py-24 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="mb-14">
        <Tag text="Leadership" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white">
          Message from the Head of Department
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* portrait side */}
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
          <div className="relative w-full max-w-xs mx-auto lg:mx-0">
            {/* gold border frame */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-transparent" />
            <img
              src={hod.image}
              alt={hod.name}
              className="relative rounded-2xl w-full aspect-[3/4] object-cover object-top shadow-2xl"
            />
            {/* experience badge */}
            <div className="absolute -bottom-4 -right-4 bg-amber-400 text-[#0F172A] rounded-xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-bold font-serif leading-none">{hod.experience}</p>
              <p className="text-[10px] font-bold tracking-wider uppercase mt-1">Experience</p>
            </div>
          </div>

          {/* identity block */}
          <div className="text-center lg:text-left pt-6">
            <p className="text-white font-serif text-xl font-bold">{hod.name}</p>
            <p className="text-amber-400 text-sm mt-1 font-medium">{hod.designation}</p>
            <p className="text-white/50 text-xs mt-1">{hod.qualification}</p>
            <p className="text-white/40 text-xs mt-2 italic">{hod.specialization}</p>
            <a
              href={`mailto:${hod.email}`}
              className="mt-3 inline-block text-xs text-amber-400/70 hover:text-amber-400 transition-colors"
            >
              {hod.email}
            </a>
          </div>
        </div>

        {/* message side */}
        <div className="lg:col-span-3 flex flex-col justify-center">
          {/* large decorative quote mark */}
          <div
            className="text-amber-400/15 font-serif select-none leading-none mb-4"
            style={{ fontSize: "8rem", lineHeight: 1 }}
            aria-hidden
          >
            "
          </div>
          <blockquote className="font-serif text-white/80 text-xl sm:text-2xl leading-relaxed font-light italic -mt-10">
            {hod.message}
          </blockquote>
          <div className="mt-8 w-16 h-px bg-amber-400/40" />
          <p className="mt-4 text-white/40 text-sm tracking-widest uppercase">
            — {hod.name}, {hod.designation}
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 3 — LEADERSHIP STATS
═══════════════════════════════════════════════ */
const StatsSection = () => (
  <section className="bg-amber-400 py-20">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        {leadershipStats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="font-serif text-5xl sm:text-6xl font-bold text-[#0F172A] leading-none">
              {s.value}
            </p>
            <p className="mt-3 text-[#0F172A]/70 text-xs font-bold tracking-widest uppercase">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 4 — FACULTY MEMBERS
═══════════════════════════════════════════════ */
const FacultyCard = ({ member }) => (
  <div className="group rounded-2xl border border-white/8 bg-white/3 overflow-hidden hover:border-amber-400/30 hover:bg-white/5 transition-all duration-300">
    {/* image */}
    <div className="relative overflow-hidden h-64">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        style={{ filter: "brightness(0.88) saturate(1.05)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />
      {/* experience pill */}
      <div className="absolute top-4 right-4 bg-amber-400 text-[#0F172A] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow">
        {member.experience}
      </div>
    </div>

    {/* content */}
    <div className="p-6">
      <h3 className="text-white font-serif text-lg font-bold leading-tight">{member.name}</h3>
      <p className="text-amber-400 text-xs font-semibold mt-1">{member.designation}</p>
      <p className="text-white/45 text-xs mt-1">{member.qualification}</p>

      <div className="my-4 w-10 h-px bg-white/15" />

      <p className="text-white/60 text-xs font-medium mb-3 italic">{member.specialization}</p>

      {/* research area tags */}
      <div className="flex flex-wrap gap-1.5">
        {member.researchAreas.map((area, j) => (
          <span
            key={j}
            className="text-[10px] px-2 py-0.5 rounded-md bg-white/8 text-white/50 font-medium"
          >
            {area}
          </span>
        ))}
      </div>

      {/* email */}
      <a
        href={`mailto:${member.email}`}
        className="mt-4 block text-[10px] text-amber-400/60 hover:text-amber-400 transition-colors truncate"
      >
        {member.email}
      </a>
    </div>
  </div>
);

const FacultySection = () => (
  <section className="bg-[#0F172A] py-24 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="text-center mb-16">
        <Tag text="Our Faculty" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white">
          Meet Our Faculty
        </h2>
        <p className="mt-4 text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
          Qualified educators and active researchers dedicated to academic excellence and student
          success.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {facultyMembers.map((member) => (
          <FacultyCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 5 — AREAS OF EXPERTISE
═══════════════════════════════════════════════ */
const ExpertiseSection = () => (
  <section className="bg-[#0a1020] py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="text-center mb-16">
        <Tag text="Expertise" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white">
          Areas of Expertise
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {expertiseAreas.map((area, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/3 hover:border-amber-400/40 hover:bg-amber-400/5 transition-all duration-200 cursor-default"
          >
            <span className="text-xl">{area.icon}</span>
            <span className="text-white/75 text-sm font-medium">{area.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 6 — RESEARCH & CONTRIBUTIONS
═══════════════════════════════════════════════ */
const ResearchSection = () => (
  <section className="bg-[#0F172A] py-24 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="mb-16">
        <Tag text="Research" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white max-w-xl leading-tight">
          Research &amp; Academic Contributions
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {researchContributions.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/8 bg-white/3 p-7 hover:border-amber-400/25 hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-3xl block mb-4">{item.icon}</span>
            <p className="font-serif text-4xl font-bold text-amber-400 leading-none mb-2">
              {item.value}
            </p>
            <h3 className="text-white font-semibold text-sm mb-3">{item.title}</h3>
            <p className="text-white/50 text-xs leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 7 — FACULTY EXCELLENCE
═══════════════════════════════════════════════ */
const ExcellenceSection = () => (
  <section className="bg-[#0a1020] py-24 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="text-center mb-16">
        <Tag text="Excellence" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white">
          Faculty Excellence
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {facultyExcellence.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/8 bg-white/3 p-8 hover:border-amber-400/20 transition-all duration-300"
          >
            <div className="mb-5">
              <Tag text={item.tag} color={tagColorMap[item.tag] || "amber"} />
            </div>
            <h3 className="text-white font-serif text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 8 — CONTACT FACULTY
═══════════════════════════════════════════════ */
const ContactSection = () => (
  <section className="bg-[#0F172A] py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="mb-14">
        <Tag text="Contact" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white">
          Contact the Faculty
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Department Email */}
        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-7">
          <span className="text-3xl block mb-4">📧</span>
          <h3 className="text-amber-400 font-semibold text-sm tracking-wider uppercase mb-2">
            Department Email
          </h3>
          <a
            href={`mailto:${contact.departmentEmail}`}
            className="text-white text-base hover:text-amber-400 transition-colors"
          >
            {contact.departmentEmail}
          </a>
        </div>

        {/* Phone */}
        <div className="rounded-2xl border border-white/8 bg-white/3 p-7">
          <span className="text-3xl block mb-4">📞</span>
          <h3 className="text-white/50 font-semibold text-sm tracking-wider uppercase mb-2">
            Phone
          </h3>
          <p className="text-white text-base">{contact.phone}</p>
          <p className="text-white/40 text-xs mt-2">{contact.officeHours}</p>
        </div>

        {/* Office Location */}
        <div className="rounded-2xl border border-white/8 bg-white/3 p-7 sm:col-span-2 lg:col-span-1">
          <span className="text-3xl block mb-4">📍</span>
          <h3 className="text-white/50 font-semibold text-sm tracking-wider uppercase mb-2">
            Office Location
          </h3>
          <p className="text-white text-sm leading-relaxed">{contact.officeLocation}</p>
          <p className="text-white/45 text-xs mt-2 leading-relaxed">{contact.college}</p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 9 — CTA
═══════════════════════════════════════════════ */
const CTASection = () => (
  <section className="relative bg-[#0a1020] py-32 overflow-hidden">
    {/* decorative rings */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber-400/5 pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-amber-400/8 pointer-events-none" />

    <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
      <div className="w-16 h-px bg-amber-400 mx-auto mb-10" />
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {cta.heading}
      </h2>
      <p className="mt-6 text-white/55 text-lg leading-relaxed">{cta.subheading}</p>
      <div className="mt-12">
        <a
          href={cta.buttonLink}
          className="inline-block bg-amber-400 text-[#0F172A] font-bold text-sm tracking-wider uppercase px-10 py-4 rounded-full hover:bg-amber-300 transition-colors duration-200 shadow-lg shadow-amber-400/20"
        >
          {cta.buttonText}
        </a>
      </div>
      <div className="w-16 h-px bg-amber-400/30 mx-auto mt-10" />
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════ */
const Faculty = () => (
  <main className="bg-[#0F172A] min-h-screen overflow-x-hidden">
    <HeroSection />
    <HODSection />
    <StatsSection />
    <FacultySection />
    <ExpertiseSection />
    <ResearchSection />
    <ExcellenceSection />
    <ContactSection />
    <CTASection />
  </main>
);

export default Faculty;
```

#### Page: `Courses.jsx` (`CS/src/pages/Courses.jsx`)
- **Props:** None
- **State:** `activeTab` ("bsc" | "msc")
- **Data Imports:** `CS/src/data/courseData.js` (`courseData`), images: `building.webp`, `lab.webp`
- **Hooks / Effects / Timers:** Tab switcher toggling between Undergraduate and Postgraduate curriculum breakdowns.

```javascript
// src/pages/Courses.jsx
import { courseData } from '../data/courseData';
import building from '../assets/hero/building.webp';
import lab from '../assets/hero/lab.webp';

/* ─── tiny helper ─── */
const Tag = ({ text }) => (
  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30">
    {text}
  </span>
);

/* ═══════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════ */
const HeroSection = () => {
  const { hero } = courseData;
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* background */}
      <img
        src={building}
        alt="College Building"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: "brightness(0.3) saturate(1.1)" }}
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />

      {/* content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center mt-20">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          {hero.title}
        </h1>
        <div className="mt-8 w-24 h-1 bg-amber-400 mx-auto rounded-full" />
        <p className="mt-8 text-white/80 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
          {hero.subtitle}
        </p>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 2 — PROGRAMS OVERVIEW
═══════════════════════════════════════════════ */
const ProgramsOverviewSection = () => {
  const { programsOverview } = courseData;
  return (
    <section className="bg-[#0F172A] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <Tag text="Overview" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Our Degree Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {programsOverview.map((prog, idx) => (
            <div
              key={idx}
              className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-500 shadow-xl"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl block transform group-hover:scale-110 transition-transform duration-300">
                  {prog.icon}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-amber-400 border border-amber-400/30 rounded-full px-3 py-1 bg-amber-400/10">
                  {prog.duration}
                </span>
              </div>
              <h3 className="text-white font-serif font-bold text-2xl mb-2">{prog.name}</h3>
              <p className="text-amber-400 text-sm font-medium tracking-wide uppercase mb-6">
                {prog.degreeType} • {prog.intake}
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8 flex-grow">
                {prog.shortDescription}
              </p>
              
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Key Highlights</h4>
                <ul className="space-y-3">
                  {prog.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start text-white/60 text-sm">
                      <span className="text-amber-400 mr-3 text-lg leading-none">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 3 — PROGRAM DETAILS
═══════════════════════════════════════════════ */
const ProgramDetailsSection = () => {
  const { programDetails } = courseData;
  return (
    <section className="bg-[#0a1020] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-20">
          <Tag text="Curriculum" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Program Details
          </h2>
        </div>

        <div className="space-y-24">
          {programDetails.map((detail, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Left/Right Text Content */}
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <h3 className="text-3xl font-serif font-bold text-white mb-6">
                  {detail.name}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {detail.overview}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-white font-semibold text-lg">Eligibility</h4>
                      <p className="text-white/60 mt-1">{detail.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-white font-semibold text-lg">Duration</h4>
                      <p className="text-white/60 mt-1">{detail.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right/Left Cards Content */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                {/* Key Subjects Card */}
                <div className="bg-[#0F172A] rounded-2xl p-8 border border-white/5 shadow-xl hover:border-white/15 transition-colors">
                  <h4 className="text-amber-400 font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    Key Subjects
                  </h4>
                  <ul className="space-y-3">
                    {detail.keySubjects.map((subject, sIdx) => (
                      <li key={sIdx} className="text-white/70 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Career Card */}
                <div className="bg-[#0F172A] rounded-2xl p-8 border border-white/5 shadow-xl hover:border-white/15 transition-colors">
                  <h4 className="text-amber-400 font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Career Paths
                  </h4>
                  <ul className="space-y-3">
                    {detail.careerOpportunities.map((career, cIdx) => (
                      <li key={cIdx} className="text-white/70 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 4 — WHY STUDY WITH US
═══════════════════════════════════════════════ */
const WhyStudySection = () => {
  const { whyStudyWithUs } = courseData;
  return (
    <section className="bg-[#0F172A] py-20 lg:py-32 relative overflow-hidden">
      {/* subtle decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <Tag text="Why Choose Us" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            The Academic Experience
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {whyStudyWithUs.map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.35rem)] group flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-amber-400/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-3xl mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 5 — CTA
═══════════════════════════════════════════════ */
const CTASection = () => {
  const { cta } = courseData;
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0a1020]">
      {/* background */}
      <img
        src={lab}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        style={{ filter: "brightness(0.4) saturate(0.8)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0a1020]/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <div className="w-16 h-px bg-amber-400 mx-auto mb-10" />
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {cta.heading}
        </h2>
        <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
          {cta.subheading}
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          {cta.buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.link}
              className={`w-full sm:w-auto inline-block font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-lg ${
                btn.primary
                  ? "bg-amber-400 text-[#0F172A] hover:bg-amber-300 shadow-amber-400/20"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              {btn.text}
            </a>
          ))}
        </div>
        <div className="w-16 h-px bg-amber-400/30 mx-auto mt-12" />
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════ */
const Courses = () => {
  return (
    <main className="bg-[#0F172A] min-h-screen overflow-x-hidden font-sans">
      <HeroSection />
      <ProgramsOverviewSection />
      <ProgramDetailsSection />
      <WhyStudySection />
      <CTASection />
    </main>
  );
};

export default Courses;
```

#### Page: `Notices.jsx` (`CS/src/pages/Notices.jsx`)
- **Props:** None
- **State:** `activeCategory` (string), `searchQuery` (string), `selectedNotice` (object | null for modal), `isModalOpen` (boolean)
- **Data Imports:** `CS/src/data/noticeData.js` (`noticeData`), image: `building.webp`
- **Hooks / Effects / Timers:** `useMemo` computes filtered notices list matching active category and search text; modal dialog displays notice full body and handles ESC key / backdrop dismissal.

```javascript
// src/pages/Notices.jsx
import { useState, useMemo, useEffect } from 'react';
import { noticeData } from '../data/noticeData';
import building from '../assets/hero/building.webp';

/* ─── tiny helper ─── */
/* ═══════════════════════════════════════════════
   HERO & STATS SECTIONS
═══════════════════════════════════════════════ */
const HeroSection = () => {
  const { hero } = noticeData;
  return (
    <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img
        src={building}
        alt="Department Building"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: "brightness(0.25) saturate(1.1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/30" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center mt-12">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          {hero.title}
        </h1>
        <div className="mt-8 w-24 h-1 bg-amber-400 mx-auto rounded-full" />
        <p className="mt-8 text-white/80 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
          {hero.subtitle}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
};

const StatsSection = () => {
  const { stats } = noticeData;
  return (
    <section className="bg-[#0F172A] pb-12 pt-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center shadow-lg hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1">
              <p className="text-3xl font-serif font-bold text-amber-400 mb-1.5">{s.value}</p>
              <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   NOTICE CARDS
═══════════════════════════════════════════════ */
const NoticeCard = ({ notice, onOpenModal }) => {
  return (
    <div className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl overflow-hidden ${
      notice.isImportant 
        ? "bg-[#0a1020] border-l-4 border-l-amber-400 border-t border-r border-b border-white/10 hover:border-r-amber-400/30 hover:border-t-amber-400/30 hover:border-b-amber-400/30 hover:bg-white/5" 
        : "bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10"
    }`}>
      {/* Date & Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-400/10 text-amber-400 border border-amber-400/20 px-3 py-1 rounded-full">
          {notice.category}
        </span>
        <div className="flex items-center gap-3">
          {notice.isImportant && (
            <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-red-400 bg-red-400/10 px-2.5 py-1 rounded-md border border-red-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
              Important
            </span>
          )}
          <span className="text-white/40 text-xs font-medium tracking-wider flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            {notice.date}
          </span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-white font-serif text-xl sm:text-2xl font-bold mb-3 leading-tight group-hover:text-amber-400 transition-colors">
        {notice.title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2">
        {notice.description}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
        <button 
          onClick={() => onOpenModal(notice)}
          className="text-amber-400 hover:text-amber-300 text-sm font-semibold tracking-wider uppercase transition-colors flex items-center gap-2"
        >
          Read More
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
        {notice.pdfLink && (
          <a 
            href={notice.pdfLink}
            onClick={e => e.stopPropagation()}
            className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-white/50 hover:bg-amber-400/20 hover:text-amber-400 border border-white/10 hover:border-amber-400/30 transition-all"
            title="Download Attachment"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </a>
        )}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   SIDEBAR
═══════════════════════════════════════════════ */
const Sidebar = ({ notices, onOpenModal }) => {
  const latestNotices = [...notices].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
  const importantNotices = notices.filter(n => n.isImportant).slice(0, 3);

  return (
    <div className="space-y-8 sticky top-24">
      {/* Important Notice Box */}
      <div className="bg-gradient-to-br from-amber-400/10 to-amber-400/5 border border-amber-400/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2" />
        <h3 className="text-white font-serif text-xl font-bold mb-5 flex items-center gap-2">
          <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
          Important Alerts
        </h3>
        <ul className="space-y-4 relative z-10">
          {importantNotices.map((n) => (
            <li key={n.id} className="border-b border-amber-400/10 pb-4 last:border-0 last:pb-0">
              <button onClick={() => onOpenModal(n)} className="text-left group">
                <span className="text-amber-400 text-xs font-semibold block mb-1">{n.date}</span>
                <span className="text-white/80 text-sm group-hover:text-white transition-colors line-clamp-2">{n.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Announcements */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
        <h3 className="text-white font-serif text-xl font-bold mb-5 flex items-center gap-2">
          <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Recent Activity
        </h3>
        <ul className="space-y-4">
          {latestNotices.map((n) => (
            <li key={n.id} className="flex gap-4 group cursor-pointer" onClick={() => onOpenModal(n)}>
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-white/20 group-hover:bg-amber-400 transition-colors" />
              <div>
                <p className="text-white/70 text-sm group-hover:text-white transition-colors line-clamp-2 mb-1">{n.title}</p>
                <span className="text-white/40 text-xs font-medium uppercase tracking-wider">{n.category}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   NOTICE DETAIL MODAL
═══════════════════════════════════════════════ */
const NoticeModal = ({ isOpen, onClose, notice }) => {
  if (!isOpen || !notice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-md" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0a1020] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="absolute top-0 left-0 right-0 h-1 bg-amber-400" />
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-400/10 text-amber-400 px-2.5 py-1 rounded-md">
                {notice.category}
              </span>
              {notice.isImportant && (
                <span className="text-[10px] font-bold tracking-wider uppercase text-red-400 bg-red-400/10 px-2.5 py-1 rounded-md">
                  Important
                </span>
              )}
            </div>
            <h2 className="text-white font-serif text-2xl sm:text-3xl font-bold leading-tight">{notice.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-white/40 text-sm font-semibold tracking-wider uppercase mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Date: <span className="text-white/70">{notice.date}</span>
          </div>
          <p className="text-white/70 text-base leading-relaxed whitespace-pre-wrap">
            {notice.description}
          </p>
        </div>

        {/* Footer */}
        <div className="p-6 sm:p-8 bg-white/[0.02] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {notice.pdfLink ? (
            <a 
              href={notice.pdfLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 text-[#0F172A] font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download Attachment
            </a>
          ) : (
            <p className="text-white/40 text-sm italic">No attachments for this notice.</p>
          )}
          <button 
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 text-white font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   MAIN PAGE EXPORT
═══════════════════════════════════════════════ */
const Notices = () => {
  const { categories, notices } = noticeData;
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleOpenModal = (notice) => {
    setSelectedNotice(notice);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Filter notices based on search and category
  const filteredNotices = useMemo(() => {
    return notices.filter(notice => {
      const matchesCategory = activeCategory === "All" || notice.category === activeCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        notice.title.toLowerCase().includes(searchLower) ||
        notice.description.toLowerCase().includes(searchLower) ||
        notice.category.toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [notices, activeCategory, searchQuery]);

  return (
    <main className="bg-[#0F172A] min-h-screen font-sans pb-24">
      <HeroSection />
      <StatsSection />

      <section className="pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* MAIN CONTENT (Left side on desktop) */}
            <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-10">
              
              {/* Search & Filters */}
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-white/40 group-focus-within:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search notices by title, category, or keyword..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0a1020] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-all shadow-inner"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap items-center gap-2">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                        activeCategory === cat
                          ? "bg-amber-400 text-[#0F172A] shadow-md shadow-amber-400/20"
                          : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-white font-serif text-2xl font-bold">
                  {searchQuery ? "Search Results" : activeCategory === "All" ? "All Notices" : `${activeCategory} Notices`}
                </h2>
                <span className="text-amber-400 text-sm font-semibold bg-amber-400/10 px-3 py-1 rounded-full">
                  {filteredNotices.length} found
                </span>
              </div>

              {/* Notice Grid */}
              {filteredNotices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Map through all filtered notices */}
                  {filteredNotices.map((notice) => (
                    <NoticeCard key={notice.id} notice={notice} onOpenModal={handleOpenModal} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl">
                  <svg className="w-16 h-16 text-white/20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <p className="text-white/60 text-lg font-medium">No notices found matching your criteria.</p>
                  <button 
                    onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                    className="mt-4 text-amber-400 hover:text-amber-300 underline font-medium text-sm"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>

            {/* SIDEBAR (Right side on desktop, bottom on mobile) */}
            <div className="lg:col-span-4 xl:col-span-3 mt-10 lg:mt-0">
              <Sidebar notices={notices} onOpenModal={handleOpenModal} />
            </div>

          </div>
        </div>
      </section>

      {/* Notice Detail Modal */}
      <NoticeModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        notice={selectedNotice} 
      />
    </main>
  );
};

export default Notices;

```

#### Page: `Events.jsx` (`CS/src/pages/Events.jsx`)
- **Props:** None
- **State:** None
- **Data Imports:** `CS/src/data/galleryData.js` (`galleryData`)
- **Hooks / Effects / Timers:** Maps `galleryData.items` into article cards.

```javascript
import { galleryData } from '../data/galleryData';

function Events() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Department Events</h1>
      <p className="text-slate-600 mb-10">Explore past department activities and celebrations.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.items.map(event => (
          <article key={event.id} className="rounded-xl border border-slate-200 overflow-hidden bg-white">
            <img src={event.image} alt={event.title} loading="lazy" className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-amber-700 mb-2">{event.date} · {event.category}</p>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h2>
              <p className="text-slate-600">{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Events;

```

#### Page: `Gallery.jsx` (`CS/src/pages/Gallery.jsx`)
- **Props:** None
- **State:** `activeCategory` (string), `selectedImage` (object | null for modal)
- **Data Imports:** `CS/src/data/galleryData.js` (`galleryData`), image: `building.webp`
- **Hooks / Effects / Timers:** Category filtering with active highlight pill; full-screen lightbox modal with image zoom and metadata overlay.

```javascript
// src/pages/Gallery.jsx
import { useState } from 'react';
import { galleryData } from '../data/galleryData';
import building from '../assets/hero/building.webp';

/* ─── tiny helper ─── */
const Tag = ({ text }) => (
  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30">
    {text}
  </span>
);

/* ═══════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════ */
const HeroSection = () => {
  const { hero } = galleryData;
  return (
    <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      {/* background */}
      <img
        src={building}
        alt="Department Building"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: "brightness(0.3) saturate(1.1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />

      {/* content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center mt-20">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          {hero.title}
        </h1>
        <div className="mt-8 w-24 h-1 bg-amber-400 mx-auto rounded-full" />
        <p className="mt-8 text-white/80 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
          {hero.subtitle}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 2 — STATISTICS
═══════════════════════════════════════════════ */
const StatsSection = () => {
  const { stats } = galleryData;
  return (
    <section className="bg-[#0F172A] pb-16 pt-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg hover:border-amber-400/30 transition-colors">
              <p className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-2">{s.value}</p>
              <p className="text-white/60 text-xs md:text-sm font-semibold tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 3 & 4 — FILTER & GALLERY GRID
═══════════════════════════════════════════════ */
const MainGallerySection = ({ onOpenModal }) => {
  const { categories, items } = galleryData;
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section className="bg-[#0F172A] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12">
          <Tag text="Memories" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white mb-10">
            Event Highlights
          </h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-amber-400 text-[#0F172A] shadow-md shadow-amber-400/20"
                    : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenModal(item, filteredItems, idx)}
              className="group cursor-pointer rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-amber-400/40 transition-all duration-500 shadow-xl flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-400 text-[#0F172A] px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-white font-serif text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <span className="text-white/40 text-xs font-medium tracking-wider">
                    {item.date}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-400/20 group-hover:border-amber-400/50 transition-colors">
                    <svg className="w-4 h-4 text-white/50 group-hover:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/50 text-lg">No events found for this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 5 — FEATURED EVENTS
═══════════════════════════════════════════════ */
const FeaturedEventsSection = ({ onOpenModal }) => {
  const { featured } = galleryData;
  return (
    <section className="bg-[#0a1020] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Tag text="Spotlight" />
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
              Featured Events
            </h2>
          </div>
          <p className="text-white/50 max-w-md md:text-right">
            A glimpse into our most celebrated and impactful moments that define our department's legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenModal(item, featured, idx)}
              className={`group cursor-pointer relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-amber-400/40 transition-all duration-500 ${
                item.isLarge ? 'lg:col-span-2' : 'lg:col-span-1'
              } h-[400px] lg:h-[500px]`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-400 text-[#0F172A] px-3 py-1.5 rounded-md mb-4 inline-block">
                  {item.category}
                </span>
                <h3 className="text-white font-serif text-2xl lg:text-3xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm lg:text-base leading-relaxed max-w-xl mb-4">
                  {item.description}
                </p>
                <p className="text-white/40 text-xs font-semibold tracking-wider uppercase">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 7 — STUDENT LIFE
═══════════════════════════════════════════════ */
const StudentLifeSection = () => {
  const { studentLife } = galleryData;
  return (
    <section className="bg-[#0F172A] py-20 lg:py-32 relative overflow-hidden">
      {/* decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <Tag text="Culture" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Student Life & Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {studentLife.map((item, idx) => (
            <div key={idx} className="bg-[#0a1020] border border-white/5 rounded-2xl p-8 hover:bg-white/5 hover:border-amber-400/20 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-4">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   LIGHTBOX MODAL
═══════════════════════════════════════════════ */
const LightboxModal = ({ isOpen, onClose, currentItem, onNext, onPrev }) => {
  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/95 backdrop-blur-sm p-4 sm:p-8">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-[#0F172A] transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      {/* Navigation Buttons */}
      <button 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-[#0F172A] transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-[#0F172A] transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Modal Content */}
      <div 
        className="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-[#0a1020]">
          <img 
            src={currentItem.image} 
            alt={currentItem.title}
            className="w-full max-h-[70vh] object-contain bg-black"
          />
          <div className="p-6 sm:p-8 bg-gradient-to-t from-[#0F172A] to-[#0F172A]/90">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-400 text-[#0F172A] px-2.5 py-1 rounded-md mb-2 inline-block">
                  {currentItem.category}
                </span>
                <h3 className="text-white font-serif text-2xl font-bold">{currentItem.title}</h3>
              </div>
              <span className="text-white/40 text-sm font-semibold tracking-wider uppercase border border-white/10 px-4 py-2 rounded-full whitespace-nowrap">
                {currentItem.date}
              </span>
            </div>
            <p className="text-white/70 text-base leading-relaxed max-w-3xl">
              {currentItem.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════ */
const Gallery = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    currentItem: null,
    itemsList: [],
    currentIndex: 0
  });

  const handleOpenModal = (item, list, index) => {
    setModalState({
      isOpen: true,
      currentItem: item,
      itemsList: list,
      currentIndex: index
    });
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalState({ ...modalState, isOpen: false });
    document.body.style.overflow = 'auto';
  };

  const handleNext = () => {
    const { itemsList, currentIndex } = modalState;
    const nextIndex = (currentIndex + 1) % itemsList.length;
    setModalState({
      ...modalState,
      currentItem: itemsList[nextIndex],
      currentIndex: nextIndex
    });
  };

  const handlePrev = () => {
    const { itemsList, currentIndex } = modalState;
    const prevIndex = (currentIndex - 1 + itemsList.length) % itemsList.length;
    setModalState({
      ...modalState,
      currentItem: itemsList[prevIndex],
      currentIndex: prevIndex
    });
  };

  return (
    <main className="bg-[#0F172A] min-h-screen font-sans">
      <HeroSection />
      <StatsSection />
      <MainGallerySection onOpenModal={handleOpenModal} />
      <FeaturedEventsSection onOpenModal={handleOpenModal} />
      <StudentLifeSection />
      
      <LightboxModal 
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        currentItem={modalState.currentItem}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </main>
  );
};

export default Gallery;

```

#### Page: `Contact.jsx` (`CS/src/pages/Contact.jsx`)
- **Props:** None
- **State:** None
- **Data Imports:** `CS/src/data/facultyData.js` (`contact`)
- **Hooks / Effects / Timers:** None (renders department office coordinates).

```javascript
import { contact } from '../data/facultyData';

function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 min-h-[60vh]">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Contact the Department</h1>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 space-y-5 text-slate-700">
        <p><strong>Email: </strong><a className="text-amber-700 underline" href={`mailto:${contact.departmentEmail}`}>{contact.departmentEmail}</a></p>
        <p><strong>Office: </strong>{contact.officeLocation}</p>
        <p>{contact.college}</p>
        <p><strong>Office hours: </strong>{contact.officeHours}</p>
      </div>
    </section>
  );
}

export default Contact;

```

#### Page: `Resources.jsx` (`CS/src/pages/Resources.jsx`)
- **Props:** None
- **State:** `useLocation` (in `Unavailable`)
- **Data Imports:** None (imports ``, `AchievementsPreview`)
- **Hooks / Effects / Timers:** Exports `Research`, `Achievements`, `Unavailable`, and `NotFound`. Computes dynamic section title from current pathname in `Unavailable`.

```javascript
import { Link, useLocation } from 'react-router-dom';
import  from '../components/';
import AchievementsPreview from '../components/AchievementsPreview';

export function Research() {
  return <><h1 className="sr-only">Department Research</h1>< /></>;
}

export function Achievements() {
  return <><h1 className="sr-only">Student Achievements</h1><AchievementsPreview /></>;
}

export function Unavailable() {
  const { pathname } = useLocation();
  const title = pathname.split('/').filter(Boolean).at(-1)?.replaceAll('-', ' ') || 'Page';
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 min-h-[50vh]">
      <h1 className="text-3xl font-bold text-slate-900 capitalize mb-4">{title}</h1>
      <p className="text-slate-600 mb-6">This section is not available yet. No content or management tools have been added for it.</p>
      <Link to="/" className="text-amber-700 underline">Return to the department homepage</Link>
    </section>
  );
}

export function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 min-h-[50vh]">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Page not found</h1>
      <p className="text-slate-600 mb-6">The requested page does not exist.</p>
      <Link to="/" className="text-amber-700 underline">Return to the department homepage</Link>
    </section>
  );
}

```

---

## 6. Data Layer (Schemas, Sample Entries & Total Counts)

### 6.1 `CS/src/data/aboutData.js`
- **Consumers:** `CS/src/pages/About.jsx`, `CS/src/components/AboutPreview.jsx`
- **Schema:**
```typescript
interface AboutData {
  hero: { badge: string; departmentName: string; college: string; tagline: string; established: string; };
  story: { heading: string; subheading: string; paragraphs: string[]; };
  vision: { heading: string; text: string; };
  mission: { heading: string; points: string[]; };
  stats: Array<{ value: string; label: string; }>;
  programs: Array<{ icon: string; title: string; duration: string; description: string; tags: string[]; }>;
  facilities: Array<{ icon: string; title: string; description: string; }>;
  whyChooseUs: Array<{ icon: string; title: string; description: string; }>;
  highlights: Array<{ tag: "Research" | "Events" | "Achievement" | "Innovation"; title: string; description: string; }>;
  cta: { heading: string; subheading: string; buttonText: string; buttonLink: string; };
}
```
- **Total Counts:** `stats` (4 items), `programs` (2 items), `facilities` (6 items), `whyChooseUs` (6 items), `highlights` (4 items), `mission.points` (5 points).
- **First Entries Verbatim:**
```javascript
// Programs first 2 entries
programs: [
  {
    icon: "💻",
    title: "B.Sc. Computer Science (Honours)",
    duration: "4 Years / 8 Semesters",
    description: "A comprehensive undergraduate program blending core computing fundamentals with modern software engineering practices. Built for aspiring developers, analysts, and researchers.",
    tags: ["Core CS", "Data Structures", "Web & Cloud", "AI Basics"],
  },
  {
    icon: "🔬",
    title: "M.Sc. Computer Science",
    duration: "2 Years / 4 Semesters",
    description: "An advanced postgraduate degree focused on deep theoretical computing, artificial intelligence, research methodology, and production software systems.",
    tags: ["Advanced Algorithms", "Machine Learning", "Distributed Systems", "Thesis"],
  },
]
```

### 6.2 `CS/src/data/courseData.js`
- **Consumers:** `CS/src/pages/Courses.jsx`
- **Schema:**
```typescript
interface CourseData {
  hero: { title: string; subtitle: string; };
  programsOverview: Array<{
    id: string; name: string; degreeType: string; duration: string; intake: string;
    shortDescription: string; highlights: string[]; icon: string;
  }>;
  programDetails: Array<{
    id: string; name: string; overview: string; eligibility: string; duration: string;
    careerOpportunities: string[]; keySubjects: string[];
  }>;
}
```
- **Total Counts:** `programsOverview` (2 programs: B.Sc. & M.Sc.), `programDetails` (2 detailed breakdowns).
- **First Entries Verbatim:**
```javascript
programsOverview: [
  {
    id: "bsc",
    name: "B.Sc. Computer Science",
    degreeType: "Undergraduate Program",
    duration: "4 Years",
    intake: "64 Seats",
    shortDescription: "A comprehensive undergraduate program designed to build strong foundations in computing, software development, and modern technologies.",
    highlights: [
      "Strong programming foundation",
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Development Lifecycle",
    ],
    icon: "💻"
  },
  {
    id: "msc",
    name: "M.Sc. Computer Science",
    degreeType: "Postgraduate Program",
    duration: "2 Years",
    intake: "32 Seats",
    shortDescription: "An advanced postgraduate program focusing on cutting-edge research, artificial intelligence, and enterprise-level software engineering.",
    highlights: [
      "Advanced Computing Concepts",
      "Research Exposure",
      "AI & Data Science",
      "Emerging Technologies",
    ],
    icon: "🧠"
  }
]
```

### 6.3 `CS/src/data/facultyData.js`
- **Consumers:** `CS/src/pages/Faculty.jsx`, `CS/src/components/FacultyPreview.jsx`, `CS/src/pages/Contact.jsx`
- **Schema:**
```typescript
interface FacultyMember {
  id: string; name: string; designation: string; qualification: string; experience: string;
  specialization: string[]; email: string; image: string;
}
interface HODProfile extends FacultyMember {
  message: string[];
}
interface DepartmentContact {
  departmentEmail: string; officeLocation: string; college: string; officeHours: string;
}
```
- **Total Counts:** `facultyMembers` (3 members), `hod` (1 member), `leadershipStats` (4 stats), `expertiseAreas` (4 areas), `researchContributions` (4 metrics), `facultyExcellence` (4 highlights).
- **First Entries Verbatim:**
```javascript
export const hod = {
  name: "Dr. B. K. Mohanty",
  designation: "Head of Department & Professor",
  qualification: "Ph.D. in Computer Science, M.Tech",
  experience: "24+ Years",
  image: hod,
  message: [
    "Welcome to the Department of Computer Science at Kendrapara Autonomous College. Since our inception, we have been committed to creating an intellectual ecosystem that challenges students to think critically, innovate fearlessly, and ground their ambitions in solid academic rigor.",
    "The landscape of computing evolves with breathtaking velocity. Our curriculum bridges timeless theoretical principles with the modern skills demanded by global industry and advanced research.",
    "To our prospective students: you will find here not just classrooms, but mentors who invest in your potential. To our alumni: your achievements continue to illuminate our path forward."
  ],
};

export const facultyMembers = [
  {
    id: "f1",
    name: "Dr. S. K. Nayak",
    designation: "Associate Professor",
    qualification: "Ph.D., M.Tech (CSE)",
    experience: "16+ Years",
    specialization: ["Algorithms", "Machine Learning", "Data Mining"],
    email: "sknayak@kac.edu.in",
    image: faculty1,
  },
  {
    id: "f2",
    name: "Prof. A. R. Rath",
    designation: "Assistant Professor",
    qualification: "M.Tech (IT), Ph.D. (Pursuing)",
    experience: "11+ Years",
    specialization: ["Database Systems", "Cloud Computing", "Web Technologies"],
    email: "arrath@kac.edu.in",
    image: faculty2,
  }
];
```

### 6.4 `CS/src/data/noticeData.js`
- **Consumers:** `CS/src/pages/Notices.jsx`
- **Schema:**
```typescript
interface NoticeItem {
  id: number; title: string; category: string; description: string; date: string; isImportant: boolean; pdfLink: string | null;
}
interface NoticeDataStore {
  hero: { title: string; subtitle: string; };
  stats: Array<{ label: string; value: string; }>;
  categories: string[];
  notices: NoticeItem[];
}
```
- **Total Counts:** `notices` (6 entries), `categories` (9 categories: "All", "Examination", "Academic", "Seminar", "Workshop", "Placement", "Scholarship", "Event", "General"), `stats` (4 metrics).
- **First Entries Verbatim:**
```javascript
notices: [
  {
    id: 1,
    title: "Internal Examination Schedule for Even Semester",
    category: "Examination",
    description: "The detailed schedule for the upcoming Mid-Semester Internal Examinations for B.Sc and M.Sc Computer Science has been published. All students are requested to check their respective batch timings and seating arrangements. Hall tickets must be carried to the examination hall.",
    date: "2026-06-25",
    isImportant: true,
    pdfLink: null
  },
  {
    id: 2,
    title: "National Workshop on Artificial Intelligence",
    category: "Workshop",
    description: "A three-day hands-on workshop on AI and Machine Learning covering foundational models, neural networks, and prompt engineering. Registration is mandatory and seats are limited. Certificates will be provided to all participants upon successful completion.",
    date: "2026-06-20",
    isImportant: true,
    pdfLink: null
  },
  {
    id: 3,
    title: "TCS Campus Placement Drive Information",
    category: "Placement",
    description: "Tata Consultancy Services (TCS) will be conducting a campus placement drive for final-year students next week. Eligibility criteria include a minimum of 60% aggregate. The registration link is enclosed in the attached PDF document.",
    date: "2026-06-18",
    isImportant: true,
    pdfLink: null
  }
]
```

### 6.5 `CS/src/data/galleryData.js`
- **Consumers:** `CS/src/pages/Gallery.jsx`, `CS/src/pages/Events.jsx`, `CS/src/components/GalleryPreview.jsx`
- **Schema:**
```typescript
interface GalleryItem {
  id: number; title: string; category: string; description: string; image: string; date: string;
}
interface GalleryDataStore {
  hero: { title: string; subtitle: string; };
  stats: Array<{ label: string; value: string; }>;
  categories: string[];
  items: GalleryItem[];
}
```
- **Total Counts:** `items` (6 gallery events), `categories` (9 categories), `stats` (4 metrics).
- **First Entries Verbatim:**
```javascript
items: [
  {
    id: 1,
    title: "National Seminar on AI",
    category: "Seminars",
    description: "A two-day national seminar on Artificial Intelligence and its applications in modern enterprise.",
    image: seminar1,
    date: "October 2025"
  },
  {
    id: 2,
    title: "Freshers Welcome 2025",
    category: "Freshers",
    description: "Welcoming the new batch of students to the Department of Computer Science family.",
    image: freshers1,
    date: "August 2025"
  },
  {
    id: 3,
    title: "Annual Excursion & Picnic",
    category: "Picnic",
    description: "Department annual study tour and recreational picnic strengthening faculty-student bonds.",
    image: picnic1,
    date: "January 2026"
  }
]
```

### 6.6 `CS/src/data/achievementsData.js`
- **Consumers:** `CS/src/components/AchievementsPreview.jsx`, `CS/src/pages/Resources.jsx`
- **Schema:**
```typescript
interface DepartmentTopper {
  id: number; name: string; course: string; batch: string; cgpa: string; rank: number; image: string;
}
interface ExamQualifier {
  id: number; name: string; qualification: string; year: string; rank: string; image: string;
}
```
- **Total Counts:** `departmentToppers` (3 entries), `qualifiers` (3 entries).
- **First Entries Verbatim:**
```javascript
export const departmentToppers = [
  {
    id: 1,
    name: "Anjali Biswal",
    course: "B.Sc. Computer Science",
    batch: "2021-2024",
    cgpa: "9.85",
    rank: 1,
    image: topper
  },
  {
    id: 2,
    name: "Swagatika Sahoo",
    course: "B.Sc. Computer Science",
    batch: "2021-2024",
    cgpa: "9.60",
    rank: 2,
    image: achiever3
  },
  {
    id: 3,
    name: "Rudra Narayan Jena",
    course: "B.Sc. Computer Science",
    batch: "2021-2024",
    cgpa: "9.45",
    rank: 3,
    image: achiever2
  }
];
```

### 6.7 `CS/src/dataData.js`
- **Consumers:** `CS/src/components/.jsx`, `CS/src/pages/Resources.jsx`
- **Schema:**
```typescript
interface ResearchItem {
  id: number; title: string; description: string; placeholderLabel: string;
}
```
- **Total Counts:** `` (4 lab entries).
- **Entries Verbatim:**
```javascript
export const  = [
  {
    id: 1,
    title: "Programming Laboratory",
    description: "Hands-on software development, programming practice, and project-based learning.",
    placeholderLabel: "Programming Laboratory"
  },
  {
    id: 2,
    title: "Networking Laboratory",
    description: "Network design, communication technologies, and infrastructure learning.",
    placeholderLabel: "Networking Laboratory"
  }
];
```

---

## 7. Design System As Actually Implemented

### 7.1 Color Palette
| Color Name | Hex / Class | Primary Usage |
| :--- | :--- | :--- |
| **Primary Deep Navy** | `#0F172A` (`bg-slate-900` / inline style) | Main background for pages, header, cards |
| **Secondary Night Navy** | `#0a1020` / `#0c1322` | Alternating section background, mobile drawer |
| **Academic Gold / Accent** | `rgb(251 191 36)` (`amber-400` / `amber-300`) | Headings, active states, borders, highlight badges, CTA buttons |
| **Subtle Gold Background** | `bg-amber-400/10`, `bg-amber-400/20` | Pill badge background, border accents |
| **Muted Neutral Text** | `text-white/60`, `text-slate-300`, `text-slate-400` | Paragraph text, subheadings, metadata dates |
| **Border Dividers** | `border-white/10`, `border-white/8` | Card outlines and section dividers on dark backgrounds |

### 7.2 Typography & Fonts
- **Serif Font (Academic Headers):** Display headings frequently use `font-serif` or explicit inline style `fontFamily: "'Georgia', 'Times New Roman', serif"`. Applied across H1 hero titles, section headings, and academic awards.
- **Sans-Serif Font (Interface & Body):** Body text, navigation links, and pills inherit Tailwind's default sans-serif font stack (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`). No external Google Fonts CDN is loaded in `index.html`.

### 7.3 Spacing, Containers & Radius
- **Max Container Widths:** `max-w-7xl mx-auto px-6 sm:px-10` (Standard content grid), `max-w-screen-xl mx-auto px-4` (Navbar), `max-w-3xl mx-auto` (Hero text & single-column forms).
- **Border Radii:** Rounded corners use `rounded-2xl` (major cards), `rounded-xl` (stat counters & badges), and `rounded-full` (tags and circular avatars). Navbar buttons deliberately use `borderRadius: 0` for an academic collegiate aesthetic.
- **Shadows:** Layered elevation using `shadow-2xl` and `shadow-[0_2px_24px_rgba(0,0,0,0.45)]`.

### 7.4 Recurring UI Patterns
#### Pattern A: Category Tag / Pill Badge
```jsx
const Tag = ({ text }) => (
  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30">
    {text}
  </span>
);
```

#### Pattern B: Primary Gold CTA Button
```jsx
<a
  href="#apply"
  className="inline-block bg-amber-400 text-[#0F172A] font-bold text-sm tracking-wider uppercase px-10 py-4 rounded-full hover:bg-amber-300 transition-colors duration-200 shadow-lg shadow-amber-400/20"
>
  Explore Admissions
</a>
```

#### Pattern C: Elevated Interactive Card
```jsx
<div className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300 shadow-xl">
  <h3 className="text-white font-serif font-bold text-xl mb-4">Card Title</h3>
  <p className="text-white/60 text-sm leading-relaxed">Description body content...</p>
</div>
```

### 7.5 Dark Mode & Responsive Layouts
- **Dark Mode:** Hardcoded dark collegiate theme (`#0F172A` / `#0a1020`) across all main views. No dynamic dark/light toggle class is configured.
- **Responsive Breakpoints:** Uses Tailwind standard breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).
- **Mobile Navbar Behavior:** On screen widths below `1024px` (`lg`), the desktop link strip hides, displaying an animated hamburger toggle icon. Toggling drops down an unfolding menu drawer with body scrolling locked via `document.body.style.overflow = "hidden"`.

---

## 8. Asset Inventory

| Asset Path | File Size | Description & Where Consumed |
| :--- | :--- | :--- |
| `CS/public/favicon.svg` | 9.5 KB | Browser favicon icon |
| `CS/public/icons.svg` | 5.0 KB | Shared SVG icon sprites |
| `CS/public/logo.png` | 47.7 KB | College crest logo in public directory |
| `CS/src/assets/logo.png` | 47.7 KB | College crest logo imported in `Navbar.jsx` |
| `CS/src/assets/hero.png` | 13.1 KB | Fallback hero branding banner |
| `CS/src/assets/react.svg` | 4.1 KB | [UNUSED / DEAD CODE] Starter Vite SVG |
| `CS/src/assets/vite.svg` | 8.7 KB | [UNUSED / DEAD CODE] Starter Vite SVG |
| `CS/src/assets/hero/building.webp` | 1,105.8 KB | Main college academic building; consumed in `Hero.jsx`, `About.jsx`, `Courses.jsx`, `Notices.jsx`, `Gallery.jsx` |
| `CS/src/assets/hero/Faculties.webp` | 923.5 KB | Faculty group portrait; consumed in `Hero.jsx` |
| `CS/src/assets/hero/lab.webp` | 906.0 KB | Computer workstations lab; consumed in `Hero.jsx`, `About.jsx`, `Courses.jsx` |
| `CS/src/assets/faculty/hod.jpg` | 67.3 KB | HOD portrait; consumed in `facultyData.js` |
| `CS/src/assets/faculty/faculty1.jpg` | 73.1 KB | Dr. S. K. Nayak portrait; consumed in `facultyData.js` |
| `CS/src/assets/faculty/faculty2.jpg` | 186.1 KB | Prof. A. R. Rath portrait; consumed in `facultyData.js` |
| `CS/src/assets/faculty/faculty3.jpg` | 91.0 KB | Er. P. K. Sahoo portrait; consumed in `facultyData.js` |
| `CS/src/assets/achievements/topper.jpg` | 195.3 KB | Anjali Biswal topper portrait; consumed in `achievementsData.js` |
| `CS/src/assets/achievements/achiever1.jpg` | 195.3 KB | Student achiever photo; consumed in `achievementsData.js` |
| `CS/src/assets/achievements/achiever2.jpg` | 214.6 KB | Rudra Narayan Jena portrait; consumed in `achievementsData.js` |
| `CS/src/assets/achievements/achiever3.jpg` | 191.3 KB | Swagatika Sahoo portrait; consumed in `achievementsData.js` |
| `CS/src/assets/gallery/farewell1.webp` | 1,496.8 KB | Farewell event; consumed in `galleryData.js` |
| `CS/src/assets/gallery/freshers1.webp` | 3,108.1 KB | Freshers welcome event; consumed in `galleryData.js` |
| `CS/src/assets/gallery/ganesh1.webp` | 1,814.7 KB | Ganesh Puja ceremony; consumed in `galleryData.js` |
| `CS/src/assets/gallery/picnic1.webp` | 587.4 KB | Annual picnic excursion; consumed in `galleryData.js` |
| `CS/src/assets/gallery/saraswati1.webp` | 1,833.2 KB | Saraswati Puja ceremony; consumed in `galleryData.js` |
| `CS/src/assets/gallery/seminar1.jpg` | 266.4 KB | National AI seminar; consumed in `galleryData.js` |

### 8.1 External URLs & Network Resources
- **CDNs / Remote Fonts / External Scripts:** **Zero**. All scripts, stylesheets, and fonts are locally resolved.
- **External Links:**
  - `https://twitter.com` (`Footer.jsx:29`)
  - `https://linkedin.com` (`Footer.jsx:30`)
  - `https://github.com` (`Footer.jsx:31`)
  - `mailto:cs.department@kac.edu.in` (`Contact.jsx`, `Footer.jsx`)
  - `tel:+91(000)000-0000` (`Footer.jsx`)

---

## 9. Placeholder and Hardcoded Content

| File Path | Line(s) | Hardcoded Item / Placeholder Description |
| :--- | :--- | :--- |
| `CS/src/components/Footer.jsx` | 144 | Dummy phone number: `+91 (000) 000-0000` |
| `CS/src/components/Footer.jsx` | 29-31 | Dummy external social profile links (`https://twitter.com`, `linkedin.com`, `github.com`) |
| `CS/src/components/Hero.jsx` | 8-12 | Hardcoded stats array (`24+ Faculty`, `800+ Students`, `4 Laboratories`) embedded in component rather than in data store |
| `CS/src/data/achievementsData.js` | 66 | Dummy rank value `"1234"` for GATE exam entry |
| `CS/src/dataData.js` | 6, 12, 18, 24 | `placeholderLabel` keys used as fallback image text in `.jsx` |
| `CS/src/components/.jsx` | 39-48 | Rendered text blocks substituting missing dedicated laboratory photography |
| `CS/src/data/noticeData.js` | 33, 42, 51, 60, etc. | `pdfLink: null` for all notice records (no actual PDF documents attached yet) |
| `CS/src/pages/About.jsx` | 91 | Hardcoded `"29+ Years of Excellence"` floating badge on story image |
| `CS/src/pages/About.jsx` | 448 | Hardcoded `#apply` anchor link in CTA section |

---

## 10. Problems, Risks & Verification Analysis

### 10.1 Build and Lint Status
- **Production Build:** The production build compiles cleanly via Vite with native config loader (`vite build --configLoader native`). Output bundles are generated in `CS/dist/`.
- **Lint Status:** ESLint 10 checks pass across active route and layout files. Dead code stub files (`FacultyCard.jsx`, `NoticeCard.jsx`) contain default functions named `Home` that should be deleted.

### 10.2 Identified Bugs, Accessibility & Performance Risks
1. **Large High-Resolution Images (Performance Bottleneck):**
   - Images such as `freshers1.webp` (3.1 MB), `saraswati1.webp` (1.8 MB), `ganesh1.webp` (1.8 MB), and `farewell1.webp` (1.5 MB) are uncompressed JPEG files totaling over 12 MB.
   - *Risk:* Significant bandwidth usage and initial paint latency on 3G/4G mobile devices.
   - *Recommendation:* Compress photos using WebP/AVIF format and generate responsive `srcset` thumbnails.
2. **Dead / Orphan Files (Maintenance Risk):**
   - `CS/src/components/FacultyCard.jsx` and `CS/src/components/NoticeCard.jsx` are stubs that could confuse future developers.
   - `CS/src/App.css` is dead code.
3. **Missing Notice Attachments:**
   - Notice cards check `if (notice.pdfLink)` before rendering a download button. Because all notices currently have `pdfLink: null`, the button never displays.
4. **SEO & Document Metadata Gaps:**
   - `CS/index.html` has a static `<title>CSKAC</title>` and lacks meta descriptions, OpenGraph tags, or dynamic page-level titles.

---

## 11. Customization Map

This map guides developers on exactly which file(s) to edit for common tasks:

| Goal / Task to Change | Exact File(s) to Edit | Description of Edits |
| :--- | :--- | :--- |
| **College Name or Branding Crest** | `CS/src/components/Navbar.jsx` (lines 130-138)<br>`CS/src/components/Footer.jsx` (lines 14-22)<br>`CS/src/assets/logo.png` & `CS/public/logo.png` | Replace image asset; update textual name strings in Navbar and Footer |
| **Hero Slider Images & Statistics** | `CS/src/components/Hero.jsx`<br>`CS/src/assets/hero/` | Add/remove imported images in `BACKGROUND_IMAGES`; edit `STATS` array |
| **Navbar Navigation Links** | `CS/src/components/Navbar.jsx` (lines 6-15) | Edit the `NAV_LINKS` array (`{ label, to }`) |
| **Theme Colors & Global Palette** | `CS/src/index.css`<br>`CS/src/pages/*.jsx` | Replace Tailwind color classes (`amber-400`, `slate-900`) and hex codes (`#0F172A`, `#0a1020`) |
| **Department Notices & Announcements** | `CS/src/data/noticeData.js` | Add or update objects in the `notices` array; add PDF links to `public/notices/` |
| **Courses, Syllabi & Seat Quotas** | `CS/src/data/courseData.js` | Update `programsOverview` and `programDetails` objects |
| **Faculty Members & HOD Message** | `CS/src/data/facultyData.js`<br>`CS/src/assets/faculty/` | Edit `hod` object or append objects to `facultyMembers` array |
| **Gallery Photos & Categories** | `CS/src/data/galleryData.js`<br>`CS/src/assets/gallery/` | Import image; add entry to `items` array with category and date |
| **Official Contact Information** | `CS/src/data/facultyData.js` (`contact` export)<br>`CS/src/components/Footer.jsx` | Update `departmentEmail`, `officeLocation`, and `officeHours` |
| **Footer Links & Copyright** | `CS/src/components/Footer.jsx` | Edit links, columns, and copyright statement |
| **Page Title & Browser Favicon** | `CS/index.html`<br>`CS/public/favicon.svg` | Edit `<title>` tag and replace `favicon.svg` |
| **Adding a New Route / Page** | 1. Create `CS/src/pages/NewPage.jsx`<br>2. Register route in `CS/src/App.jsx`<br>3. Add link to `NAV_LINKS` in `Navbar.jsx` | Standard 3-step React Router route addition |

---

*End of Technical Handoff Document*
