// src/data/noticeData.js

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
    },
    {
      id: 4,
      title: "Department Seminar: Web 3.0 & Blockchain",
      category: "Seminar",
      description: "Join us for an insightful guest lecture by an industry expert on the future of the decentralized web, smart contracts, and blockchain technology. The seminar is open to all second and third-year students.",
      date: "2026-06-15",
      isImportant: false,
      pdfLink: null
    },
    {
      id: 5,
      title: "State Scholarship Scheme Notification",
      category: "Scholarship",
      description: "Applications are invited for the State Government Merit Scholarship for the academic year 2026-27. Eligible students must submit their income certificates, mark sheets, and Aadhaar cards to the department office before the deadline.",
      date: "2026-06-10",
      isImportant: false,
      pdfLink: null
    },
    {
      id: 6,
      title: "Saraswati Puja Celebration Details",
      category: "Event",
      description: "The Department of Computer Science will be organizing the annual Saraswati Puja celebration next month. All students and faculty members are cordially invited to participate in the preparations and the main event.",
      date: "2026-06-05",
      isImportant: false,
      pdfLink: null
    },
    {
      id: 7,
      title: "Freshers Welcome 2026 - Save the Date",
      category: "Event",
      description: "The annual Freshers Welcome ceremony for the new batch of B.Sc and M.Sc students will be held in the main college auditorium. Dress code is formal. Cultural performances and introductions will highlight the evening.",
      date: "2026-06-02",
      isImportant: false,
      pdfLink: null
    },
    {
      id: 8,
      title: "Final Year Project Submission Deadline",
      category: "Academic",
      description: "Final year M.Sc and B.Sc students must submit their completed project reports, presentation slides, and code repositories to their respective faculty guides by the end of this month. Late submissions will face grade penalties.",
      date: "2026-05-28",
      isImportant: true,
      pdfLink: null
    },
    {
      id: 9,
      title: "Change in Lab Timings for Batch B",
      category: "General",
      description: "Please note that the Database Management Systems lab timing for Batch B has been shifted from 10:00 AM to 02:00 PM starting next week due to maintenance work in Lab 2.",
      date: "2026-05-25",
      isImportant: false,
      pdfLink: null
    }
  ]
};
