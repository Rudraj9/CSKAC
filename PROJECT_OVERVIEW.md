# PROJECT OVERVIEW: CSKAC (Department of Computer Science Website)

## Executive Summary
The **CSKAC** web platform is the official web portal for the **Department of Computer Science at Kendrapara Autonomous College (KAC)**, Odisha, India. Designed as a high-performance, responsive Single-Page Application (SPA) built on React 19, Vite 8, and Tailwind CSS 4, the portal provides prospective students, current scholars, faculty members, and institutional evaluators with comprehensive academic, organizational, and cultural information about the department.

---

## 1. Project Purpose & Problem Statement
Academic institutions frequently struggle with fragmented, outdated, or poorly structured web presences that fail to communicate institutional credibility, faculty expertise, curricula, and student achievements. 

The CSKAC project resolves these challenges by providing:
- A centralized digital hub for all departmental updates, syllabus details, faculty portfolios, and academic schedules.
- Rapid discovery of educational opportunities (B.Sc. & M.Sc. Computer Science programs, eligibility, and seat quotas).
- Instant visibility into student honors (toppers, competitive exam qualifiers like OJEE).
- Archival documentation of campus life, technological seminars, and cultural festivals through categorized media galleries.
- High accessibility, mobile-first responsiveness, and fast load times without heavy server infrastructure overhead.

---

## 2. Target Users & Core Use Cases

| User Persona | Typical Tasks / Use Cases | Key Modules Utilized |
| :--- | :--- | :--- |
| **Prospective Students & Parents** | Exploring course offerings, checking eligibility criteria, seat capacity, fee structures, and campus infrastructure. | `/courses`, `/about`, `/contact` |
| **Current Students** | Tracking internal exam schedules, downloading notice PDFs, verifying academic timetables, and attending guest workshops. | `/notices`, `/events`, `/syllabus` (placeholder) |
| **Alumni & External Recruiters** | Verifying institutional credentials, browsing departmental toppers, and exploring placement track records. | `/achievements`, ``, `/faculty` |
| **Faculty & Evaluators (NAAC/UGC)** | Reviewing departmental faculty credentials, publications, leadership messages, and research facilities. | `/faculty`, `/about`, `` |

---

## 3. Core Features & Capabilities

1. **Brand-Rich Landing Page (`/`)**:
   - Automated rotating carousel featuring high-resolution photography of college buildings, computer laboratories, and faculty convocations.
   - Quick-glance previews for department history, faculty rosters, research initiatives, student toppers, and event galleries.
2. **Institutional History & Vision (`/about`)**:
   - 9-section deep-dive covering 29+ years of departmental legacy, mission statements, infrastructure metrics, and academic pathways.
3. **Faculty Directory & Leadership (`/faculty`)**:
   - Detailed profiles for the Head of Department (HOD) and faculty lecturers, including qualifications, designations, and domains of specialization.
4. **Academic Course Catalog (`/courses`)**:
   - Comprehensive curriculum breakdowns for undergraduate (B.Sc. 4-Year) and postgraduate (M.Sc. 2-Year) programs.
5. **Interactive Notice Board (`/notices`)**:
   - Category filtering (`Examination`, `Workshop`, `Placement`, `Seminar`, `General`), full-text search, important notice badges, and modal detail views.
6. **Categorized Department Gallery (`/gallery`)**:
   - Filterable gallery showcasing college life across Seminars, Workshops, Freshers, Farewells, and Cultural celebrations.
7. **Department Contact Hub (`/contact`)**:
   - Official communication coordinates, administrative office location, and office hours.
8. **Research & Student Achievements (``, `/achievements`)**:
   - Dedicated focus on student toppers, entrance exam rank holders, and lab infrastructure.

---

## 4. Current Development Status
- **Architecture**: Single Page Application (SPA), Client-Side Rendered (CSR).
- **Backend Status**: **Fully Decoupled / Client-Driven**. The application currently operates with zero server-side or database dependencies. All dynamic records (notices, gallery images, course catalogs, faculty data) are loaded synchronously via structured JavaScript data modules located in `CS/src/data/`.
- **Completion Level**:
  - **Public Pages**: 100% functional and interactive (`Home`, `About`, `Faculty`, `Courses`, `Notices`, `Gallery`, `Events`, `Contact`, `Research`, `Achievements`).
  - **Placeholder Sections**: Utility links (e.g. `/syllabus`, `/question-papers`, `/labs`, `/projects`, `/alumni`, `/placement`) route to a graceful fallback component (`Unavailable.jsx`).

---

## 5. Technology Stack Summary

```
Frontend Framework:       React 19.2.6
Client Router:            React Router DOM 7.17.0
Build Engine / Bundler:   Vite 8.0.12
Styling System:           Tailwind CSS 4.3.0 + @tailwindcss/vite 4.3.0
Language:                 JavaScript (ES Modules, JSX)
Hosting / Runtime:        Node.js >= 20 (Local dev/build), Static Web Host (Production)
```

---

## 6. Project Execution Quickstart

### Prerequisites
- **Node.js**: `v20.x` or `v22.x` (Validated on Node `22.23.2`)
- **npm**: `v10.x` or higher

### Local Development
```powershell
# From the top-level repository directory (CSKAC)
npm run dev

# Alternatively, from within the CS/ directory
cd CS
npm run dev
```

### Production Build & Preview
```powershell
# From the top-level repository directory
npm run build
npm run preview
```
The output production bundle will be generated in `CS/dist/`, completely static and ready for deployment to any CDN, GitHub Pages, Netlify, Vercel, or Apache/Nginx web server.

