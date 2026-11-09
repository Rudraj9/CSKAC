# TECHNICAL CODEBASE ANALYSIS: CSKAC

## 1. Directory Structure & File Inventory

The repository is structured as a monorepo-style workspace where the root folder delegates development and build commands to an inner Vite application located in `CS/`.

```
CSKAC/
├── package.json                   # Root orchestrator scripts (npm --prefix CS ...)
├── package-lock.json              # Lockfile for root package
├── PROJECT_OVERVIEW.md            # High-level architecture and executive summary
├── PROJECT_CODEBASE_ANALYSIS.md   # Comprehensive code-level technical breakdown (this file)
├── PROJECT_ARCHITECTURE.md        # Architecture diagrams, component hierarchy & data flows
├── API_DOCUMENTATION.md           # API and data querying contracts
└── CS/                            # Primary application source root
    ├── .gitignore                 # Git ignore rules for CS project
    ├── eslint.config.js           # Flat ESLint 10 configuration
    ├── index.html                 # Single-page HTML mount document
    ├── package.json               # Application dependencies, scripts, and engine specs
    ├── package-lock.json          # Precise tree of locked dependencies
    ├── README.md                  # Project introductory instructions
    ├── vite.config.js             # Vite 8 config with React & Tailwind CSS 4 plugins
    ├── public/                    # Raw static assets copied as-is to dist root
    │   ├── favicon.svg            # Browser tab icon
    │   ├── icons.svg              # SVG sprite definitions
    │   └── logo.png               # Official institutional logo
    └── src/                       # Application source code
        ├── App.css                # Legacy starter styles (Unused technical debt)
        ├── App.jsx                # Top-level client-side router & route hierarchy
        ├── index.css              # Global stylesheet declaring Tailwind CSS 4 import
        ├── main.jsx               # React 19 entry point mounting the root DOM tree
        ├── assets/                # Static media imported via Vite bundler
        │   ├── hero.png           # Fallback branding image
        │   ├── logo.png           # High-resolution collegiate crest
        │   ├── react.svg          # Unused Vite scaffold graphic
        │   ├── vite.svg           # Unused Vite scaffold graphic
        │   ├── achievements/      # Portrait photography for academic rank holders
        │   │   ├── topper.jpg     # Top rank holder image
        │   │   ├── achiever1.jpg  # Rank holder image
        │   │   ├── achiever2.jpg  # Rank holder image
        │   │   └── achiever3.jpg  # Rank holder image
        │   ├── faculty/           # Professional portraits for faculty & HOD
        │   │   ├── hod.jpg        # HOD portrait
        │   │   ├── faculty1.jpg   # Faculty lecturer portrait
        │   │   ├── faculty2.jpg   # Faculty lecturer portrait
        │   │   └── faculty3.jpg   # Faculty lecturer portrait
        │   ├── gallery/           # Cultural and departmental event photo archives
        │   │   ├── farewell1.webp  # Convocations / Farewell ceremony
        │   │   ├── freshers1.webp  # Freshers orientation ceremony
        │   │   ├── ganesh1.webp    # Ganesh Puja festival
        │   │   ├── picnic1.webp    # Annual excursion
        │   │   ├── saraswati1.webp # Saraswati Puja ceremony
        │   │   └── seminar1.jpg   # National AI / Tech seminar
        │   └── hero/              # Full-bleed imagery for page headers and carousels
        │       ├── building.webp   # Exterior shot of college academic building
        │       ├── Faculties.webp  # Group faculty portrait
        │       └── lab.webp        # Computer science laboratory workstations
        ├── components/            # Reusable UI presentation & section components
        │   ├── AboutPreview.jsx   # Teaser summary of department background on Home page
        │   ├── AchievementsPreview.jsx # Rank holders and OJEE achievers showcase
        │   ├── FacultyCard.jsx    # Dead/Stub component (Technical debt)
        │   ├── FacultyPreview.jsx # Homepage carousel/strip for faculty members
        │   ├── Footer.jsx         # Global footer with links, contacts, and copyright
        │   ├── GalleryPreview.jsx # Visual grid preview for homepage
        │   ├── Hero.jsx           # Dynamic auto-advancing cross-fade carousel on Home
        │   ├── Navbar.jsx         # Sticky header with responsive navigation drawer
        │   ├── NoticeCard.jsx     # Dead/Stub component (Technical debt)
        │   └── .jsx# Homepage preview cards for lab research areas
        ├── data/                  # Static JavaScript data stores
        │   ├── aboutData.js       # Department history, vision, mission, facilities, stats
        │   ├── achievementsData.js# Student toppers, CGPAs, batches, and exam ranks
        │   ├── courseData.js      # B.Sc. & M.Sc. curricula, eligibility, career prospects
        │   ├── facultyData.js     # HOD message, faculty rosters, contact coordinates
        │   ├── galleryData.js     # Photographic collections, categories, metadata
        │   ├── noticeData.js      # Department bulletins, categories, dates, descriptions
        │   └── .js    # Specialized research facilities and activities
        ├── layouts/               # Layout wrapper components
        │   └── PublicLayout.jsx   # Wraps public views with Navbar, main content, and Footer
        └── pages/                 # Full route-level page views
            ├── About.jsx          # Comprehensive 9-section institutional history
            ├── Contact.jsx        # Department communication details & office location
            ├── Courses.jsx        # In-depth degree program specs & syllabus tabs
            ├── Events.jsx         # Chronological list of departmental events
            ├── Faculty.jsx        # Faculty directory, HOD statement, and research domains
            ├── Gallery.jsx        # Category-filtered photo showcase with modal view
            ├── Home.jsx           # Main aggregate landing page
            ├── Notices.jsx        # Searchable and filterable notice board
            └── Resources.jsx      # Research, Achievements, Unavailable, & 404 views
```

---

## 2. File-by-File Technical Breakdown

### A. Root & Configuration Files
- **`package.json` (Root)**:
  - *Role*: Root task runner.
  - *Dependencies*: None.
  - *Scripts*: Proxies `dev`, `build`, `lint`, and `preview` commands to `npm --prefix CS <script>`.
  - *Essentiality*: Essential for standard repository workflows.
- **`CS/package.json`**:
  - *Role*: Declares frontend application dependencies and scripts.
  - *Key Dependencies*: `react` (`^19.2.6`), `react-dom` (`^19.2.6`), `react-router-dom` (`^7.17.0`), `tailwindcss` (`^4.3.0`), `@tailwindcss/vite` (`^4.3.0`).
  - *Scripts*: Runs Vite with `--configLoader native` to prevent Windows file-locking/bundling issues.
- **`CS/vite.config.js`**:
  - *Role*: Configures Vite 8 with `@vitejs/plugin-react` and `@tailwindcss/vite`.
  - *Connections*: Injects Tailwind CSS 4 engine into Vite's CSS processing pipeline.
- **`CS/eslint.config.js`**:
  - *Role*: Flat ESLint 10 linting specification with React Hooks and React Refresh rules.
- **`CS/index.html`**:
  - *Role*: Single Page Application entry point mounting `<div id="root"></div>` and importing `/src/main.jsx`.

### B. Core Application Logic
- **`CS/src/main.jsx`**:
  - *Role*: Mounts the React component tree into the DOM via `createRoot(document.getElementById('root'))` inside `React.StrictMode`. Imports `index.css`.
- **`CS/src/App.jsx`**:
  - *Role*: Defines client-side routing hierarchy using `react-router-dom` (`BrowserRouter`, `Routes`, `Route`).
  - *Connections*: Mounts `PublicLayout` as a parent route containing all nested child page routes (`/`, `/about`, `/faculty`, `/courses`, `/notices`, `/events`, `/gallery`, `/contact`, ``, `/achievements`), plus wildcard fallbacks for unbuilt sections (`/syllabus`, `/alumni`, etc.) and a 404 `NotFound` handler.
- **`CS/src/layouts/PublicLayout.jsx`**:
  - *Role*: Master public shell.
  - *Structure*: Renders `<Navbar />`, `<main className="min-h-screen"><Outlet /></main>`, and `<Footer />`.
- **`CS/src/index.css`**:
  - *Role*: Imports Tailwind CSS via `@import "tailwindcss";` using Tailwind v4 syntax.

### C. Pages Deep Dive
- **`CS/src/pages/Home.jsx`**:
  - *Role*: Aggregate landing page.
  - *Composed Components*: `Hero`, `AboutPreview`, `FacultyPreview`, ``, `AchievementsPreview`, `GalleryPreview`.
- **`CS/src/pages/About.jsx`**:
  - *Role*: Extensive 9-section institutional narrative.
  - *Sections*: `HeroSection`, `StorySection`, `VisionMissionSection`, `StatsSection`, `ProgramsSection`, `FacilitiesSection`, `WhyChooseSection`, `HighlightsSection`, `CTASection`.
  - *Data Source*: `src/data/aboutData.js`.
- **`CS/src/pages/Faculty.jsx`**:
  - *Role*: Leadership and staff catalog.
  - *Sections*: `HeroSection`, `HODSection`, `StatsSection`, `FacultyGrid`, `ResearchContributionsSection`, `FacultyExcellenceSection`, `ContactSection`, `CTASection`.
  - *Data Source*: `src/data/facultyData.js`.
- **`CS/src/pages/Courses.jsx`**:
  - *Role*: Course catalog.
  - *Sections*: Hero, Program overview cards (B.Sc. & M.Sc.), interactive detailed tabs switching between programs with eligibility, semester-wise subjects, and career paths.
  - *Data Source*: `src/data/courseData.js`.
- **`CS/src/pages/Notices.jsx`**:
  - *Role*: Real-time searchable departmental bulletin board.
  - *Features*: Category pills, text search, date formatting, important notice pulse badges, and a full-featured modal dialog showing full notice announcements and optional PDF attachment triggers.
  - *Data Source*: `src/data/noticeData.js`.
- **`CS/src/pages/Gallery.jsx`**:
  - *Role*: Interactive photo gallery.
  - *Features*: Filter pills (Seminars, Workshops, Freshers, Farewell, Puja, Picnic, etc.), hover zoom effects, and full-screen image preview modal.
  - *Data Source*: `src/data/galleryData.js`.
- **`CS/src/pages/Events.jsx`**:
  - *Role*: Event timeline grid rendered using records from `galleryData.items`.
- **`CS/src/pages/Contact.jsx`**:
  - *Role*: Official departmental contact card (email, physical campus room, office hours).
  - *Data Source*: `contact` export in `facultyData.js`.
- **`CS/src/pages/Resources.jsx`**:
  - *Role*: Shared multi-view module exporting:
    - `Research`: Wraps `` with screen-reader headers.
    - `Achievements`: Wraps `AchievementsPreview`.
    - `Unavailable`: Fallback route for placeholder navigation links.
    - `NotFound`: 404 route handler.

### D. Reusable Components
- **`CS/src/components/Navbar.jsx`**:
  - *Role*: Sticky responsive navigation bar.
  - *Behaviors*: Scroll-driven shadow activation, active NavLink gold underline transitions, mobile burger toggle menu with body-scroll locking.
- **`CS/src/components/Hero.jsx`**:
  - *Role*: Interactive hero banner on the homepage.
  - *Behaviors*: Background image carousel changing every 5,000ms with CSS opacity cross-fades.
- **`CS/src/components/Footer.jsx`**:
  - *Role*: Institutional footer with quick links, degree paths, accreditation notices, and contact information.
- **`CS/src/components/AboutPreview.jsx`**, **`FacultyPreview.jsx`**, **`.jsx`**, **`AchievementsPreview.jsx`**, **`GalleryPreview.jsx`**:
  - *Role*: High-impact synopsis blocks presenting teasers of their respective full pages on the homepage.

---

## 3. Backend, Database & API Architecture Analysis

### Verified Architectural Status
- **Backend Server**: **NONE**. The application contains no Express, Fastify, Nest, Django, Flask, or Spring Boot server. All previous development mock login services and authentication context files have been fully excised.
- **Database / Persistent Storage**: **NONE**. There is no SQL (PostgreSQL, MySQL, SQLite) or NoSQL (MongoDB, DynamoDB) database.
- **Data Querying Pattern**: **Direct In-Memory Synchronous Import**. Data structures are exported as pure JavaScript objects/arrays in `src/data/*.js` and directly consumed by React components via standard ES Module `import` syntax.

---

## 4. Dependencies Analysis

| Package | Version | Layer | Necessity | Description / Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `react` | `^19.2.6` | Runtime | **Essential** | Core React library for UI component modeling and rendering. |
| `react-dom` | `^19.2.6` | Runtime | **Essential** | DOM renderer for React web applications. |
| `react-router-dom`| `^7.17.0` | Runtime | **Essential** | Declarative client-side routing, navigation links, and URL param handling. |
| `tailwindcss` | `^4.3.0` | Build/Runtime | **Essential** | Atomic utility-first CSS styling framework. |
| `@tailwindcss/vite` | `^4.3.0` | Build Tool | **Essential** | Native Vite plugin providing zero-config Tailwind v4 compilation. |
| `vite` | `^8.0.12` | Dev / Build | **Essential** | Next-generation fast development server and Rollup-based production bundler. |
| `@vitejs/plugin-react` | `^6.0.1` | Build Tool | **Essential** | Babel/SWC Fast Refresh support for React in Vite. |
| `eslint` | `^10.3.0` | Dev Tool | Optional | Code quality and static linting tool. |

---

## 5. Known Issues & Technical Debt

1. **Unused Stub Components**:
   - `CS/src/components/FacultyCard.jsx` and `CS/src/components/NoticeCard.jsx` contain dummy placeholder code (`function Home() { return <h1>Home Page</h1>; }`) and are not imported anywhere. Both `Faculty.jsx` and `Notices.jsx` implement their own localized card components.
   - *Recommendation*: Safely delete both dead stub files.
2. **Unused Legacy Stylesheet**:
   - `CS/src/App.css` is an unreferenced leftover file from Vite's initial project generator.
   - *Recommendation*: Delete `CS/src/App.css`.
3. **Unused Static SVG Assets**:
   - `CS/src/assets/react.svg` and `CS/src/assets/vite.svg` are default Vite starter files unreferenced by any component.
   - *Recommendation*: Remove unused SVGs to clean the asset pipeline.
4. **OneDrive File Locking on Windows**:
   - Because the project is located within `OneDrive/Desktop/`, OneDrive's background sync can intermittently hold locks on `node_modules` or `.vite` temporary directories during development.
   - *Recommendation*: Run `npm --prefix CS run dev` with Vite's native config loader (already configured in `package.json`).

