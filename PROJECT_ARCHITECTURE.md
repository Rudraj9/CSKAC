# SYSTEM ARCHITECTURE: CSKAC

## 1. High-Level System Architecture

The CSKAC project is architected as a **100% Client-Side Rendered (CSR) Single-Page Application (SPA)**. There are no server-side runtime containers or live backend microservices.

```mermaid
flowchart TD
    subgraph Browser ["Client Browser Environment"]
        DOM["HTML DOM (index.html)"]
        Mount["React 19 Root (main.jsx)"]
        Router["React Router DOM (App.jsx)"]
        Layout["PublicLayout (Navbar + Outlet + Footer)"]
        Pages["Page Components (/src/pages/*)"]
        State["Component Local State (useState, useMemo)"]
    end

    subgraph StaticAssets ["Static Bundled Assets (Vite)"]
        DataModules["In-Memory Data Models (/src/data/*.js)"]
        Images["Media & Photography (/src/assets/*)"]
        Tailwind["Compiled Tailwind CSS 4 (/src/index.css)"]
    end

    DOM --> Mount
    Mount --> Router
    Router --> Layout
    Layout --> Pages
    Pages --> State
    Pages -.->|Synchronous ES Module Import| DataModules
    Pages -.->|Bundled Image Assets| Images
    Layout -.->|Styled With| Tailwind
```

---

## 2. Component Hierarchy & Layout Structure

The layout hierarchy establishes persistent navigation and footer framing while dynamically mounting route targets inside the `<Outlet />`.

```mermaid
graph TD
    App["App.jsx (BrowserRouter)"]
    Routes["Routes Configuration"]
    PublicLayout["PublicLayout.jsx"]
    Navbar["Navbar.jsx (Sticky Header)"]
    Footer["Footer.jsx (Global Footer)"]
    Outlet["<Outlet />"]

    App --> Routes
    Routes --> PublicLayout
    PublicLayout --> Navbar
    PublicLayout --> Outlet
    PublicLayout --> Footer

    Outlet --> Home["Home.jsx"]
    Outlet --> About["About.jsx"]
    Outlet --> Faculty["Faculty.jsx"]
    Outlet --> Courses["Courses.jsx"]
    Outlet --> Notices["Notices.jsx"]
    Outlet --> Events["Events.jsx"]
    Outlet --> Gallery["Gallery.jsx"]
    Outlet --> Contact["Contact.jsx"]
    Outlet --> Research["Research (Resources.jsx)"]
    Outlet --> Achievements["Achievements (Resources.jsx)"]
    Outlet --> Unavailable["Unavailable (Resources.jsx)"]
    Outlet --> NotFound["NotFound (Resources.jsx)"]

    Home --> Hero["Hero.jsx (Carousel)"]
    Home --> AboutPreview["AboutPreview.jsx"]
    Home --> FacultyPreview["FacultyPreview.jsx"]
    Home --> [".jsx"]
    Home --> AchievementsPreview["AchievementsPreview.jsx"]
    Home --> GalleryPreview["GalleryPreview.jsx"]
```

---

## 3. Data Flow Architecture

Because there are no remote HTTP APIs or databases, data flows deterministically down the component tree through JavaScript module resolution and React component props.

```mermaid
sequenceDiagram
    autonumber
    actor User as User Browser
    participant DOM as index.html
    participant ReactRoot as main.jsx
    participant Router as App.jsx
    participant View as Page Component (e.g. Notices.jsx)
    participant Data as noticeData.js

    User->>DOM: Navigates to /notices
    DOM->>ReactRoot: Mounts root React DOM tree
    ReactRoot->>Router: Evaluates current URL path
    Router->>View: Instantiates Notices component inside PublicLayout
    View->>Data: Imports { noticeData } synchronously
    View->>View: Initializes useState (searchQuery, activeCategory, activeModal)
    View->>View: useMemo computes filtered notices array
    View->>User: Renders interactive UI with filtered notices
    User->>View: Enters search keyword / Selects category filter
    View->>View: Updates local state via setState()
    View->>User: Re-renders updated notice cards instantly without network delay
```

---

## 4. Entity-Relationship & Data Schemas (JavaScript In-Memory Store)

The structured data exported from `src/data/*.js` functions as the application's domain schema:

```mermaid
erDiagram
    FACULTY ||--o{ RESEARCH : conducts
    FACULTY {
        string id PK
        string name
        string designation
        string qualification
        string experience
        string[] specialization
        string email
        string image
    }

    COURSE ||--o{ SUBJECT : contains
    COURSE {
        string id PK
        string name
        string degreeType
        string duration
        string intake
        string overview
        string eligibility
        string[] careerOpportunities
    }

    SUBJECT {
        string code PK
        string title
        string semester
        int credits
    }

    NOTICE {
        int id PK
        string title
        string category
        string description
        string date
        boolean isImportant
        string pdfLink
    }

    GALLERY_ITEM {
        int id PK
        string title
        string category
        string description
        string image
        string date
    }

    ACHIEVER {
        int id PK
        string name
        string course
        string batch
        string cgpa
        int rank
        string image
    }
```

---

## 5. Complete Application Execution Lifecycle

1. **Bootstrap Phase**:
   - The browser fetches `index.html`.
   - The HTML parser encounters `<script type="module" src="/src/main.jsx">`.
   - Vite loads compiled ES modules into the JavaScript engine.
   - `main.jsx` calls `createRoot(document.getElementById('root'))` and mounts `<App />`.

2. **Routing Phase**:
   - `App.jsx` evaluates the current browser URL (`window.location.pathname`).
   - If the path matches `/` or a valid route, it renders `PublicLayout` and the child page component.
   - If the path matches placeholder routes (`/syllabus`, `/alumni`, etc.), it renders `Unavailable`.
   - Any unknown path falls through to `NotFound`.

3. **Page Rendering & Interaction**:
   - The active page imports its respective data object from `src/data/*.js`.
   - Interactive components (such as `Hero` carousel, `Notices` filters, `Courses` curriculum tabs, and `Gallery` modals) initialize their component-scoped state via `useState`.
   - User inputs (filtering, tabs, clicking modal buttons) trigger internal re-renders. No network round-trips or API latency occur.

