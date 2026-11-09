// src/data/noticeData.js

/**
 * Notice Data Guidelines:
 *
 * Notice objects accept the following fields:
 * - `id` (number): Unique identifier.
 * - `title` (string): Title of notice.
 * - `category` (string): Category (e.g. "Examination", "Academic", "Scholarship", etc.).
 * - `description` (string): Full body text.
 * - `date` (string "YYYY-MM-DD"): Publication date (when the notice was announced).
 * - `deadline` (string "YYYY-MM-DD" | null): Optional last day the notice is relevant.
 *   - Compared against visitor's local calendar day.
 *   - Relevant through 23:59:59 of that day.
 *   - Urgent when 0 to 7 days left (including closes today).
 *   - Safe when > 7 days left.
 *   - Expired once the deadline calendar day has passed.
 * - `isImportant` (boolean): Flag to highlight the notice (suppressed on expired notices).
 * - `pdfLink` (string | null): Path to attachment file.
 *
 * Copy-Paste Example:
 * {
 *   id: 10,
 *   title: "Merit Scholarship Renewal Application",
 *   category: "Scholarship",
 *   description: "Eligible students must submit their renewal forms before the window closes.",
 *   date: "2026-11-01",
 *   deadline: "2026-11-20", // YYYY-MM-DD or null
 *   isImportant: true,
 *   pdfLink: null
 * }
 */

// TEMP DEMO: set to false before publishing.
export const SHOW_DEMO_NOTICES = true;

const realNotices = [
  {
    id: 1,
    title: "Internal Examination Schedule for Even Semester",
    category: "Examination",
    description: "The detailed schedule for the upcoming Mid-Semester Internal Examinations for B.Sc and M.Sc Computer Science has been published. All students are requested to check their respective batch timings and seating arrangements. Hall tickets must be carried to the examination hall.",
    date: "2026-06-25",
    deadline: null,
    isImportant: true,
    pdfLink: null
  },
  {
    id: 2,
    title: "National Workshop on Artificial Intelligence",
    category: "Workshop",
    description: "A three-day hands-on workshop on AI and Machine Learning covering foundational models, neural networks, and prompt engineering. Registration is mandatory and seats are limited. Certificates will be provided to all participants upon successful completion.",
    date: "2026-06-20",
    deadline: null,
    isImportant: true,
    pdfLink: null
  },
  {
    id: 3,
    title: "TCS Campus Placement Drive Information",
    category: "Placement",
    description: "Tata Consultancy Services (TCS) will be conducting a campus placement drive for final-year students next week. Eligibility criteria include a minimum of 60% aggregate. The registration link is enclosed in the attached PDF document.",
    date: "2026-06-18",
    deadline: null,
    isImportant: true,
    pdfLink: null
  },
  {
    id: 4,
    title: "Department Seminar: Web 3.0 & Blockchain",
    category: "Seminar",
    description: "Join us for an insightful guest lecture by an industry expert on the future of the decentralized web, smart contracts, and blockchain technology. The seminar is open to all second and third-year students.",
    date: "2026-06-15",
    deadline: null,
    isImportant: false,
    pdfLink: null
  },
  {
    id: 5,
    title: "State Scholarship Scheme Notification",
    category: "Scholarship",
    description: "Applications are invited for the State Government Merit Scholarship for the academic year 2026-27. Eligible students must submit their income certificates, mark sheets, and Aadhaar cards to the department office before the deadline.",
    date: "2026-06-10",
    deadline: null,
    isImportant: false,
    pdfLink: null
  },
  {
    id: 6,
    title: "Saraswati Puja Celebration Details",
    category: "Event",
    description: "The Department of Computer Science will be organizing the annual Saraswati Puja celebration next month. All students and faculty members are cordially invited to participate in the preparations and the main event.",
    date: "2026-06-05",
    deadline: null,
    isImportant: false,
    pdfLink: null
  },
  {
    id: 7,
    title: "Freshers Welcome 2026 - Save the Date",
    category: "Event",
    description: "The annual Freshers Welcome ceremony for the new batch of B.Sc and M.Sc students will be held in the main college auditorium. Dress code is formal. Cultural performances and introductions will highlight the evening.",
    date: "2026-06-02",
    deadline: null,
    isImportant: false,
    pdfLink: null
  },
  {
    id: 8,
    title: "Final Year Project Submission Deadline",
    category: "Academic",
    description: "Final year M.Sc and B.Sc students must submit their completed project reports, presentation slides, and code repositories to their respective faculty guides by the end of this month. Late submissions will face grade penalties.",
    date: "2026-05-28",
    deadline: null,
    isImportant: true,
    pdfLink: null
  },
  {
    id: 9,
    title: "Change in Lab Timings for Batch B",
    category: "General",
    description: "Please note that the Database Management Systems lab timing for Batch B has been shifted from 10:00 AM to 02:00 PM starting next week due to maintenance work in Lab 2.",
    date: "2026-05-25",
    deadline: null,
    isImportant: false,
    pdfLink: null
  }
];

// ===== TEMP DEMO DATA START =====
// Helper to format offset dates (YYYY-MM-DD) relative to visitor's current calendar date
const formatOffsetDate = (offsetDays) => {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const demoNotices = [
  {
    id: 101,
    title: "Sample: Special Exam Form Fill-up Window",
    category: "Examination",
    description: "Online portal for special back-paper and improvement examination form fill-up. Registration closes strictly tonight.",
    date: formatOffsetDate(-5),
    deadline: formatOffsetDate(0), // Closes today (Urgent, red)
    isImportant: true,
    pdfLink: null,
    isDemo: true
  },
  {
    id: 102,
    title: "Sample: State Post-Matric Scholarship Window",
    category: "Scholarship",
    description: "Eligible SC/ST/OBC students must complete biometric authentication and submit renewal documents before the portal window closes.",
    date: formatOffsetDate(-10),
    deadline: formatOffsetDate(2), // Closes in 2 days (Urgent, red)
    isImportant: true,
    pdfLink: null,
    isDemo: true
  },
  {
    id: 103,
    title: "Sample: Pre-Placement Training Registration Boundary (+7 Days)",
    category: "Placement",
    description: "Pre-placement training program registration boundary test. Last day to confirm enrollment with placement cell.",
    date: formatOffsetDate(-3),
    deadline: formatOffsetDate(7), // Closes in 7 days (Urgent boundary, red)
    isImportant: false,
    pdfLink: null,
    isDemo: true
  },
  {
    id: 104,
    title: "Sample: Inter-College Coding Contest Registration (+8 Days)",
    category: "Event",
    description: "Annual algorithmic coding competition. Teams of two may apply before next week's verification round.",
    date: formatOffsetDate(-2),
    deadline: formatOffsetDate(8), // Closes in 8 days (Safe boundary, green)
    isImportant: false,
    pdfLink: null,
    isDemo: true
  },
  {
    id: 105,
    title: "Sample: Cloud Computing & DevOps Workshop Registration",
    category: "Workshop",
    description: "Department-sponsored two-day hands-on cloud architecture workshop. Registrations open for all pre-final year students.",
    date: formatOffsetDate(-2),
    deadline: formatOffsetDate(10), // Closes in 10 days (Safe, green)
    isImportant: false,
    pdfLink: null,
    isDemo: true
  },
  {
    id: 106,
    title: "Sample: Campus Hackathon Team Submission",
    category: "Event",
    description: "Annual 24-hour departmental hackathon problem statements and team registration. Submission period has concluded.",
    date: formatOffsetDate(-25),
    deadline: formatOffsetDate(-3), // Expired 3 days ago (Expired, grey)
    isImportant: false,
    pdfLink: null,
    isDemo: true
  },
  {
    id: 107,
    title: "Sample: Summer Research Internship Application",
    category: "Academic",
    description: "Applications for summer research assistantships with partner research institutions. Application portal is now closed.",
    date: formatOffsetDate(-45),
    deadline: formatOffsetDate(-20), // Expired 20 days ago (Expired, grey)
    isImportant: false,
    pdfLink: null,
    isDemo: true
  }
];
// ===== TEMP DEMO DATA END =====

export const noticeData = {
  hero: {
    title: "Department Notices",
    subtitle: "Stay updated with the latest announcements, academic updates, events, and important departmental information."
  },
  stats: [
    { label: "Total Notices", value: "45+" },
    { label: "Upcoming Events", value: "8" },
    { label: "Academic Updates", value: "24" },
    { label: "Important Announcements", value: "5" }
  ],
  categories: [
    "All",
    "Examination",
    "Academic",
    "Seminar",
    "Workshop",
    "Placement",
    "Scholarship",
    "Event",
    "General"
  ],
  notices: SHOW_DEMO_NOTICES ? [...realNotices, ...demoNotices] : realNotices
};
