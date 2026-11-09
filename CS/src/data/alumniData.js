// src/data/alumniData.js
/**
 * ============================================================================
 * INSTRUCTIONS FOR ADDING / UPDATING ALUMNI DATA
 * ============================================================================
 *
 * 1. WHERE TO STORE PHOTOS:
 *    - Place portrait photos in `CS/src/assets/alumni/` (e.g. `alumnus2024.jpg` or `.webp`).
 *    - Import them at the top of this file:
 *        // e.g.: import alumnusImg from '../assets/alumni/alumnus2024.jpg';
 *    - Note: `image` is optional. If null or empty, the UI renders an initials avatar.
 *
 * 2. CONSENT REQUIREMENT:
 *    - `consent` MUST be explicitly set to `true` for an alumnus to be displayed.
 *    - If `consent` is false or missing, the entry is filtered out automatically.
 *
 * 3. COPY-PASTE EXAMPLE:
 *    ```javascript
 *    {
 *      id: 1,
 *      name: "Alumnus Full Name",
 *      batch: "2020-2023",
 *      passoutYear: "2023",
 *      course: "B.Sc. Computer Science", // or "M.Sc. Computer Science"
 *      currentRole: "Software Engineer",
 *      organization: "Tech Solutions Pvt. Ltd.",
 *      location: "Bhubaneswar",
 *      linkedin: "https://www.linkedin.com/in/username", // full profile URL or empty
 *      email: "alumnus@example.com", // optional, only if consent given to share
 *      image: null, // imported image or null
 *      quote: "My years at CSKAC gave me a solid foundation in computer science.", // optional
 *      featured: false, // boolean (set to true to highlight in top carousel/cards)
 *      consent: true // REQUIRED to display
 *    }
 *    ```
 * ============================================================================
 */

// TEMP DEMO: set to false before publishing.
export const SHOW_DEMO_ALUMNI = true;

// ─────────────────────────────────────────────────────────────
// REAL ALUMNI ENTRIES
// ─────────────────────────────────────────────────────────────
// TODO: add real alumni (with their consent)
export const realAlumni = [];

// ===== TEMP DEMO DATA START =====
export const demoAlumni = [
  {
    id: 101,
    name: "Sample Alumnus A",
    batch: "2021-2024",
    passoutYear: "2024",
    course: "B.Sc. Computer Science",
    currentRole: "Software Engineer",
    organization: "Sample Tech Company",
    location: "Bengaluru",
    linkedin: "https://www.linkedin.com/",
    email: "sample.a@example.com",
    image: null,
    quote: "Sample text: The foundational programming and systems courses prepared me well for engineering roles.",
    featured: true,
    consent: true,
    isDemo: true
  },
  {
    id: 102,
    name: "Sample Alumnus B",
    batch: "2021-2024",
    passoutYear: "2024",
    course: "M.Sc. Computer Science",
    currentRole: "Research Scholar",
    organization: "Sample University",
    location: "Bhubaneswar",
    linkedin: "https://www.linkedin.com/",
    email: "sample.b@example.com",
    image: null,
    quote: "Sample text: Dedicated mentorship and lab guidance fostered my passion for academic research.",
    featured: true,
    consent: true,
    isDemo: true
  },
  {
    id: 103,
    name: "Sample Alumnus C",
    batch: "2020-2023",
    passoutYear: "2023",
    course: "B.Sc. Computer Science",
    currentRole: "Data Analyst",
    organization: "Sample Analytics Firm",
    location: "Hyderabad",
    linkedin: "https://www.linkedin.com/",
    email: "", // email not shared
    image: null,
    quote: "",
    featured: false,
    consent: true,
    isDemo: true
  },
  {
    id: 104,
    name: "Sample Alumnus D",
    batch: "2020-2023",
    passoutYear: "2023",
    course: "M.Sc. Computer Science",
    currentRole: "Systems Engineer",
    organization: "Sample Enterprise Solutions",
    location: "Pune",
    linkedin: "", // linkedin not shared
    email: "sample.d@example.com",
    image: null,
    quote: "",
    featured: false,
    consent: true,
    isDemo: true
  },
  {
    id: 105,
    name: "Sample Alumnus E",
    batch: "2019-2022",
    passoutYear: "2022",
    course: "B.Sc. Computer Science",
    currentRole: "Government Services",
    organization: "Sample Public Sector Agency",
    location: "Cuttack",
    linkedin: "", // neither linkedin nor email shared
    email: "",
    image: null,
    quote: "",
    featured: false,
    consent: true,
    isDemo: true
  },
  {
    id: 106,
    name: "Sample Alumnus F",
    batch: "2019-2022",
    passoutYear: "2022",
    course: "M.Sc. Computer Science",
    currentRole: "Cloud Engineer",
    organization: "Sample Cloud Infrastructure Ltd.",
    location: "Bengaluru",
    linkedin: "https://www.linkedin.com/",
    email: "sample.f@example.com",
    image: null,
    quote: "",
    featured: false,
    consent: true,
    isDemo: true
  },
  {
    id: 107,
    name: "Sample Alumnus G",
    batch: "2018-2021",
    passoutYear: "2021",
    course: "B.Sc. Computer Science",
    currentRole: "Full Stack Developer",
    organization: "Sample Digital Agency",
    location: "Bhubaneswar",
    linkedin: "https://www.linkedin.com/",
    email: "",
    image: null,
    quote: "",
    featured: false,
    consent: true,
    isDemo: true
  },
  {
    id: 108,
    name: "Sample Alumnus H",
    batch: "2017-2020",
    passoutYear: "2020",
    course: "B.Sc. Computer Science",
    currentRole: "Database Administrator",
    organization: "Sample Financial Services",
    location: "Kolkata",
    linkedin: "https://www.linkedin.com/",
    email: "sample.h@example.com",
    image: null,
    quote: "",
    featured: false,
    consent: true,
    isDemo: true
  },
  {
    id: 109,
    name: "Sample Alumnus I",
    batch: "2016-2019",
    passoutYear: "2019",
    course: "B.Sc. Computer Science",
    currentRole: "Cybersecurity Analyst",
    organization: "Sample Security Labs",
    location: "New Delhi",
    linkedin: "",
    email: "sample.i@example.com",
    image: null,
    quote: "",
    featured: false,
    consent: true,
    isDemo: true
  },
  {
    id: 110,
    name: "Sample Alumnus J",
    batch: "2015-2018",
    passoutYear: "2018",
    course: "B.Sc. Computer Science",
    currentRole: "Senior Software Engineer",
    organization: "Sample Global Corporation",
    location: "Bengaluru",
    linkedin: "https://www.linkedin.com/",
    email: "sample.j@example.com",
    image: null,
    quote: "",
    featured: false,
    consent: true,
    isDemo: true
  }
];
// ===== TEMP DEMO DATA END =====

// Combined active alumni array based on demo flag
export const alumni = SHOW_DEMO_ALUMNI ? [...realAlumni, ...demoAlumni] : realAlumni;

// ─────────────────────────────────────────────────────────────
// LINK VALIDATION HELPERS
// ─────────────────────────────────────────────────────────────
export function isValidLinkedIn(url) {
  if (!url || typeof url !== "string") return false;
  const clean = url.trim();
  return (
    clean.startsWith("https://www.linkedin.com/") ||
    clean.startsWith("https://linkedin.com/")
  );
}

export function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// ─────────────────────────────────────────────────────────────
// DYNAMIC COMPUTED HELPERS
// ─────────────────────────────────────────────────────────────
/**
 * Returns alumni who have explicitly granted consent (`consent === true`).
 */
export function getVisibleAlumni() {
  return alumni.filter((item) => item && item.consent === true);
}

/**
 * Returns sorted unique batch names (newest first).
 */
export function getAlumniBatches() {
  const visible = getVisibleAlumni();
  const set = new Set();
  visible.forEach((item) => {
    if (item.batch) set.add(item.batch);
  });

  return Array.from(set).sort((a, b) => {
    const parseStart = (str) => {
      const match = str.match(/(\d{4})/);
      return match ? parseInt(match[1], 10) : 0;
    };
    return parseStart(b) - parseStart(a);
  });
}

/**
 * Returns unique course names.
 */
export function getAlumniCourses() {
  const visible = getVisibleAlumni();
  const set = new Set();
  visible.forEach((item) => {
    if (item.course) set.add(item.course);
  });
  return Array.from(set).sort();
}

/**
 * Returns featured visible alumni.
 */
export function getFeaturedAlumni() {
  return getVisibleAlumni().filter((item) => Boolean(item.featured));
}

/**
 * Returns summary metrics for the stats strip.
 */
export function getAlumniStats() {
  const visible = getVisibleAlumni();
  const batches = getAlumniBatches();

  const orgSet = new Set();
  visible.forEach((item) => {
    if (item.organization && item.organization.trim()) {
      orgSet.add(item.organization.trim().toLowerCase());
    }
  });

  return {
    alumni: visible.length,
    batches: batches.length,
    organizations: orgSet.size
  };
}
