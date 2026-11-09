// src/data/achievementsData.js
/**
 * ============================================================================
 * INSTRUCTIONS FOR ADDING / UPDATING ACHIEVEMENTS DATA
 * ============================================================================
 *
 * 1. WHERE TO STORE PHOTOS:
 *    - Place portrait photos in `CS/src/assets/achievements/` (e.g. `topper2025.jpg` or `.webp`).
 *    - Import them at the top of this file:
 *        // e.g.: import newStudentImg from '../assets/achievements/newStudent.jpg';
 *    - Note: `image` is optional. If not provided or set to null/empty, the UI
 *      gracefully renders an initials avatar badge.
 *
 * 2. HOW TO ADD A NEW TOPPERS BATCH:
 *    - Add a new batch object to `realToppersByBatch` (newest batch first):
 *    ```javascript
 *    {
 *      batch: "2022-2025",
 *      toppers: [
 *        {
 *          id: 4,
 *          name: "Student Name",
 *          course: "B.Sc. Computer Science",
 *          cgpa: "9.90",
 *          rank: 1,
 *          image: newStudentImg, // or null
 *        },
 *        // rank 2, rank 3...
 *      ]
 *    }
 *    ```
 *
 * 3. HOW TO ADD A NEW ENTRANCE EXAM QUALIFIER:
 *    - Append an object to the `realQualifiers` array:
 *    ```javascript
 *    {
 *      id: 5,
 *      name: "Student Name",
 *      level: "National", // or "State"
 *      exam: "GATE",      // e.g. "GATE", "OJEE", "CPET", "CUET-PG", "JAM", "UGC-NET"
 *      year: "2025",
 *      rank: "45",        // optional, omit or empty string if not applicable
 *      score: "780",      // optional, omit or empty string if not applicable
 *      qualifiedFor: "M.Tech / Higher Studies", // optional
 *      course: "B.Sc. Computer Science",        // optional
 *      image: newStudentImg,                    // optional, can be null
 *    }
 *    ```
 * ============================================================================
 */

import topper from '../assets/achievements/topper.jpg';
import achiever1 from '../assets/achievements/achiever1.jpg';
import achiever2 from '../assets/achievements/achiever2.jpg';
import achiever3 from '../assets/achievements/achiever3.jpg';

// TEMP DEMO: set to false (or delete the demo blocks) before publishing.
export const SHOW_DEMO_DATA = true;

// ─────────────────────────────────────────────────────────────
// 1. REAL BATCH-WISE TOPPERS
// ─────────────────────────────────────────────────────────────
export const realToppersByBatch = [
  {
    batch: "2021-2024",
    toppers: [
      {
        id: 1,
        name: "Anjali Biswal",
        course: "B.Sc. Computer Science",
        cgpa: "9.85",
        rank: 1,
        image: topper,
      },
      {
        id: 2,
        name: "Swagatika Sahoo",
        course: "B.Sc. Computer Science",
        cgpa: "9.60",
        rank: 2,
        image: achiever3,
      },
      {
        id: 3,
        name: "Rudra Narayan Jena",
        course: "B.Sc. Computer Science",
        cgpa: "9.45",
        rank: 3,
        image: achiever2,
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// 2. REAL ENTRANCE EXAM QUALIFIERS
// Level Mapping:
// - OJEE (Odisha Joint Entrance Examination) -> "State"
// - CPET (Common PG Entrance Test, Odisha)    -> "State"
// - GATE, UGC-NET, JAM, CUET-PG              -> "National"
// ─────────────────────────────────────────────────────────────
export const realQualifiers = [
  {
    id: 1,
    name: "Anjali Biswal",
    level: "State",
    exam: "OJEE",
    year: "2024",
    rank: "09",
    score: "",
    qualifiedFor: "MCA / M.Tech Lateral Entry",
    course: "B.Sc. Computer Science",
    image: topper,
  },
  {
    id: 2,
    name: "Swagatika Sahoo",
    level: "State",
    exam: "OJEE",
    year: "2024",
    rank: "33",
    score: "",
    qualifiedFor: "MCA / M.Tech Lateral Entry",
    course: "B.Sc. Computer Science",
    image: achiever3,
  },
  {
    id: 3,
    name: "Rudra Narayan Jena",
    level: "State",
    exam: "OJEE",
    year: "2024",
    rank: "44",
    score: "",
    qualifiedFor: "MCA / M.Tech Lateral Entry",
    course: "B.Sc. Computer Science",
    image: achiever2,
  },
  {
    id: 4,
    name: "Subham Nayak",
    level: "State",
    exam: "CPET",
    year: "2024",
    // TODO: confirm real rank (previously unverified dummy "1234")
    rank: "1234",
    score: "",
    qualifiedFor: "Postgraduate Admissions (M.Sc. Computer Science)",
    course: "B.Sc. Computer Science",
    image: achiever1,
  },
];

// ===== TEMP DEMO DATA START =====
export const demoToppersByBatch = [
  {
    batch: "2020-2023",
    toppers: [
      {
        id: "demo-t1",
        name: "Sample Student A",
        course: "B.Sc. Computer Science",
        cgpa: "9.80",
        rank: 1,
        image: null,
        isDemo: true,
      },
      {
        id: "demo-t2",
        name: "Sample Student B",
        course: "B.Sc. Computer Science",
        cgpa: "9.55",
        rank: 2,
        image: null,
        isDemo: true,
      },
      {
        id: "demo-t3",
        name: "Sample Student C",
        course: "B.Sc. Computer Science",
        cgpa: "9.35",
        rank: 3,
        image: null,
        isDemo: true,
      },
    ],
  },
  {
    batch: "2019-2022",
    toppers: [
      // B.Sc. Group
      {
        id: "demo-t4",
        name: "Sample Student D",
        course: "B.Sc. Computer Science",
        cgpa: "9.75",
        rank: 1,
        image: null,
        isDemo: true,
      },
      {
        id: "demo-t5",
        name: "Sample Student E",
        course: "B.Sc. Computer Science",
        cgpa: "9.50",
        rank: 2,
        image: null,
        isDemo: true,
      },
      {
        id: "demo-t6",
        name: "Sample Student F",
        course: "B.Sc. Computer Science",
        cgpa: "9.30",
        rank: 3,
        image: null,
        isDemo: true,
      },
      // M.Sc. Group (Demonstrates multi-course grouping in batch)
      {
        id: "demo-t7",
        name: "Sample Student G",
        course: "M.Sc. Computer Science",
        cgpa: "9.88",
        rank: 1,
        image: null,
        isDemo: true,
      },
      {
        id: "demo-t8",
        name: "Sample Student H",
        course: "M.Sc. Computer Science",
        cgpa: "9.62",
        rank: 2,
        image: null,
        isDemo: true,
      },
    ],
  },
  {
    batch: "2018-2021",
    toppers: [
      {
        id: "demo-t9",
        name: "Sample Student I",
        course: "B.Sc. Computer Science",
        cgpa: "9.70",
        rank: 1,
        image: null,
        isDemo: true,
      },
      {
        id: "demo-t10",
        name: "Sample Student J",
        course: "B.Sc. Computer Science",
        cgpa: "9.45",
        rank: 2,
        image: null,
        isDemo: true,
      },
      {
        id: "demo-t11",
        name: "Sample Student K",
        course: "B.Sc. Computer Science",
        cgpa: "9.20",
        rank: 3,
        image: null,
        isDemo: true,
      },
    ],
  },
  {
    batch: "2017-2020",
    toppers: [
      // 2 toppers only to test layout adaptability
      {
        id: "demo-t12",
        name: "Sample Student L",
        course: "B.Sc. Computer Science",
        cgpa: "9.65",
        rank: 1,
        image: null,
        isDemo: true,
      },
      {
        id: "demo-t13",
        name: "Sample Student M",
        course: "B.Sc. Computer Science",
        cgpa: "9.40",
        rank: 2,
        image: null,
        isDemo: true,
      },
    ],
  },
];

export const demoQualifiers = [
  {
    id: "demo-q1",
    name: "Sample Qualifier 1",
    level: "National",
    exam: "GATE",
    year: "2025",
    rank: "214",
    score: "785",
    qualifiedFor: "M.Tech program admission",
    course: "B.Sc. Computer Science",
    image: null,
    isDemo: true,
  },
  {
    id: "demo-q2",
    name: "Sample Qualifier 2",
    level: "National",
    exam: "UGC-NET",
    year: "2024",
    rank: "",
    score: "198 / 300",
    qualifiedFor: "JRF & Assistant Professorship eligibility",
    course: "M.Sc. Computer Science",
    image: null,
    isDemo: true,
  },
  {
    id: "demo-q3",
    name: "Sample Qualifier 3",
    level: "National",
    exam: "CUET-PG",
    year: "2024",
    rank: "88",
    score: "",
    qualifiedFor: "Central Universities postgraduate entrance",
    course: "B.Sc. Computer Science",
    image: null,
    isDemo: true,
  },
  {
    id: "demo-q4",
    name: "Sample Qualifier 4",
    level: "National",
    exam: "JAM",
    year: "2023",
    rank: "340",
    score: "54.33",
    qualifiedFor: "Postgraduate programs admission",
    course: "B.Sc. Computer Science",
    image: null,
    isDemo: true,
  },
  {
    id: "demo-q5",
    name: "Sample Qualifier 5",
    level: "State",
    exam: "OJEE",
    year: "2023",
    rank: "18",
    score: "",
    qualifiedFor: "MCA program admission",
    course: "B.Sc. Computer Science",
    image: null,
    isDemo: true,
  },
  {
    id: "demo-q6",
    name: "Sample Qualifier 6",
    level: "State",
    exam: "CPET",
    year: "2023",
    rank: "52",
    score: "68.50",
    qualifiedFor: "M.Sc. program admission",
    course: "B.Sc. Computer Science",
    image: null,
    isDemo: true,
  },
  {
    id: "demo-q7",
    name: "Sample Qualifier 7",
    level: "National",
    exam: "GATE",
    year: "2022",
    rank: "512",
    score: "",
    qualifiedFor: "M.Tech program admission",
    course: "B.Sc. Computer Science",
    image: null,
    isDemo: true,
  },
  {
    id: "demo-q8",
    name: "Sample Qualifier 8",
    level: "National",
    exam: "CUET-PG",
    year: "2022",
    rank: "",
    score: "245",
    qualifiedFor: "Postgraduate entrance",
    course: "B.Sc. Computer Science",
    image: null,
    isDemo: true,
  },
  {
    id: "demo-q9",
    name: "Sample Qualifier 9",
    level: "State",
    exam: "OJEE",
    year: "2021",
    // Test qualifier with neither rank nor score filled
    rank: "",
    score: "",
    qualifiedFor: "MCA Lateral Entry admission",
    course: "B.Sc. Computer Science",
    image: null,
    isDemo: true,
  },
  {
    id: "demo-q10",
    name: "Sample Qualifier 10",
    level: "National",
    exam: "JAM",
    year: "2021",
    rank: "419",
    score: "",
    qualifiedFor: "Master in Science program",
    course: "B.Sc. Computer Science",
    image: null,
    isDemo: true,
  },
];
// ===== TEMP DEMO DATA END =====

// ─────────────────────────────────────────────────────────────
// EXPORTED DATA ARRAYS
// Controlled via SHOW_DEMO_DATA flag
// ─────────────────────────────────────────────────────────────
export const toppersByBatch = SHOW_DEMO_DATA
  ? [...realToppersByBatch, ...demoToppersByBatch]
  : realToppersByBatch;

export const qualifiers = SHOW_DEMO_DATA
  ? [...realQualifiers, ...demoQualifiers]
  : realQualifiers;

// ─────────────────────────────────────────────────────────────
// 3. DYNAMIC HELPER FUNCTIONS
// ─────────────────────────────────────────────────────────────

/**
 * Returns all available batch strings, sorted newest first.
 * Batches are formatted like "YYYY-YYYY".
 */
export function getBatches() {
  const batchList = toppersByBatch.map((b) => b.batch);
  return batchList.sort((a, b) => {
    const startYearA = parseInt(a.split("-")[0], 10) || 0;
    const startYearB = parseInt(b.split("-")[0], 10) || 0;
    return startYearB - startYearA;
  });
}

/**
 * Returns unique exam names sorted alphabetically.
 */
export function getExams() {
  const examSet = new Set(qualifiers.map((q) => q.exam).filter(Boolean));
  return Array.from(examSet).sort();
}

/**
 * Computes aggregate summary metrics dynamically from the active data.
 */
export function getAchievementStats() {
  const batches = toppersByBatch.length;
  const toppers = toppersByBatch.reduce((acc, curr) => acc + (curr.toppers?.length || 0), 0);
  const totalQualifiers = qualifiers.length;

  return {
    batches,
    toppers,
    qualifiers: totalQualifiers,
  };
}

// ─────────────────────────────────────────────────────────────
// BACKWARD COMPATIBILITY EXPORT
// Flat list of toppers for any legacy consumers
// ─────────────────────────────────────────────────────────────
export const departmentToppers = toppersByBatch.flatMap((b) =>
  b.toppers.map((t) => ({ ...t, batch: b.batch }))
);
