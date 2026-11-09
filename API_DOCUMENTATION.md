# API DOCUMENTATION: CSKAC

## 1. Architectural Scope & API Status

### Status: Zero Remote HTTP APIs
As verified by direct codebase inspection, the CSKAC web application **does not implement or consume external or internal HTTP REST/GraphQL endpoints**. 

The system operates on an **In-Memory Data Provider Pattern**:
- All data records (notices, course catalogs, faculty directories, photo archives, and academic toppers) are bundled statically as JavaScript objects in `src/data/*.js`.
- Components import data synchronously via ES Module imports (`import { courseData } from '../data/courseData'`).
- No network requests (`fetch`, `axios`, `XMLHttpRequest`) are made at runtime.

---

## 2. In-Memory Data Query Contracts (Virtual API)

To assist developers who may build a real REST API or headless CMS backend for this application in the future, the data models currently consumed by the views are documented below as data contracts:

### A. Notice Service Contract (`src/data/noticeData.js`)

#### Data Entity: `noticeData`
- **Consumer**: [`CS/src/pages/Notices.jsx`](file:///c:/Users/ASUS/OneDrive/Desktop/CSKAC/CS/src/pages/Notices.jsx)
- **Shape**:
```typescript
interface NoticeDataResponse {
  hero: {
    title: string;
    subtitle: string;
  };
  stats: Array<{
    label: string;
    value: string;
  }>;
  categories: string[];
  notices: Array<{
    id: number;
    title: string;
    category: "Examination" | "Academic" | "Seminar" | "Workshop" | "Placement" | "Scholarship" | "Event" | "General";
    description: string;
    date: string; // ISO date format YYYY-MM-DD
    isImportant: boolean;
    pdfLink: string | null;
  }>;
}
```

#### Sample Payload:
```json
{
  "id": 1,
  "title": "Internal Examination Schedule for Even Semester",
  "category": "Examination",
  "description": "The detailed schedule for the upcoming Mid-Semester Internal Examinations...",
  "date": "2026-06-25",
  "isImportant": true,
  "pdfLink": null
}
```

---

### B. Course & Curriculum Contract (`src/data/courseData.js`)

#### Data Entity: `courseData`
- **Consumer**: [`CS/src/pages/Courses.jsx`](file:///c:/Users/ASUS/OneDrive/Desktop/CSKAC/CS/src/pages/Courses.jsx)
- **Shape**:
```typescript
interface CourseDataResponse {
  hero: {
    title: string;
    subtitle: string;
  };
  programsOverview: Array<{
    id: string;
    name: string;
    degreeType: string;
    duration: string;
    intake: string;
    shortDescription: string;
    highlights: string[];
    icon: string;
  }>;
  programDetails: Array<{
    id: string;
    name: string;
    overview: string;
    eligibility: string;
    duration: string;
    careerOpportunities: string[];
    keySubjects: string[];
  }>;
}
```

#### Sample Payload:
```json
{
  "id": "bsc",
  "name": "B.Sc. Computer Science",
  "degreeType": "Undergraduate Program",
  "duration": "4 Years",
  "intake": "64 Seats",
  "highlights": [
    "Strong programming foundation",
    "Data Structures & Algorithms",
    "Database Systems",
    "Software Development Lifecycle"
  ]
}
```

---

### C. Faculty & Staff Contract (`src/data/facultyData.js`)

#### Data Entity: `facultyMembers`, `hod`, `contact`
- **Consumers**: [`CS/src/pages/Faculty.jsx`](file:///c:/Users/ASUS/OneDrive/Desktop/CSKAC/CS/src/pages/Faculty.jsx), [`CS/src/pages/Contact.jsx`](file:///c:/Users/ASUS/OneDrive/Desktop/CSKAC/CS/src/pages/Contact.jsx)
- **Shape**:
```typescript
interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  specialization: string[];
  email: string;
  image: string; // Imported bundled asset path
}

interface DepartmentContact {
  departmentEmail: string;
  officeLocation: string;
  college: string;
  officeHours: string;
}
```

---

### D. Gallery & Events Contract (`src/data/galleryData.js`)

#### Data Entity: `galleryData`
- **Consumers**: [`CS/src/pages/Gallery.jsx`](file:///c:/Users/ASUS/OneDrive/Desktop/CSKAC/CS/src/pages/Gallery.jsx), [`CS/src/pages/Events.jsx`](file:///c:/Users/ASUS/OneDrive/Desktop/CSKAC/CS/src/pages/Events.jsx)
- **Shape**:
```typescript
interface GalleryItem {
  id: number;
  title: string;
  category: "Seminars" | "Workshops" | "Freshers" | "Farewell" | "Puja" | "Picnic" | "Technical" | "Cultural";
  description: string;
  image: string; // Imported bundled asset path
  date: string;
}
```

---

## 3. Recommended Future REST API Specification

If the department transitions to a live backend (e.g., Express.js, FastAPI, or Strapi CMS), the following endpoints should replace the static data modules:

| HTTP Method | Target Endpoint | Associated Page Component | Description |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/notices` | `Notices.jsx` | Fetch all active department notices with query params `?category=...&search=...` |
| `POST` | `/api/v1/notices` | Admin Console | Create a new announcement with optional PDF file upload |
| `GET` | `/api/v1/courses` | `Courses.jsx` | Retrieve degree offerings, semester syllabi, and intake quotas |
| `GET` | `/api/v1/faculty` | `Faculty.jsx` | Fetch faculty profiles, designations, and publication records |
| `GET` | `/api/v1/gallery` | `Gallery.jsx` | Paginated image gallery items with thumbnail URLs |
| `POST` | `/api/v1/contact` | `Contact.jsx` | Submit student inquiry or contact form message |

