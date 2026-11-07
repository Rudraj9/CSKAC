// src/data/facultyData.js
import hodImg from "../assets/faculty/hod.jpg";
import faculty1Img from "../assets/faculty/faculty1.jpg";
import faculty2Img from "../assets/faculty/faculty2.jpg";
import faculty3Img from "../assets/faculty/faculty3.jpg";

// ─────────────────────────────────────────────────────────────
// ORIGINAL ARRAY — used by other pages, DO NOT modify
// ─────────────────────────────────────────────────────────────
export const facultyData = [
  {
    id: 1,
    name: "Dr. Anand Chandra Nayak",
    designation: "Head of Department",
    shortDescription: "Specializing in Computer Science education and research.",
    image: hodImg,
  },
  {
    id: 2,
    name: "Prof. Soumyarani Moharana",
    designation: "Associate Professor",
    shortDescription: "Expert in Artificial Intelligence and Machine Learning systems.",
    image: faculty1Img,
  },
  {
    id: 3,
    name: "Prof. Jyoti Prakash Samal",
    designation: "Assistant Professor",
    shortDescription: "Focusing on Data Structures, Algorithms, and Software Engineering.",
    image: faculty2Img,
  },
  {
    id: 4,
    name: "Prof. Subrat Kumar Sahoo",
    designation: "Assistant Professor",
    shortDescription: "Research interests include Web Technologies and Cybersecurity.",
    image: faculty3Img,
  },
];

// ─────────────────────────────────────────────────────────────
// FACULTY PAGE NAMED EXPORTS — used only by Faculty.jsx
// All names/images are derived from the real facultyData above
// ─────────────────────────────────────────────────────────────

export const hero = {
  heading: "Faculty & Academic Leadership",
  subheading:
    "The strength of any academic department lies in its people. Our faculty are not merely instructors — they are researchers, mentors, innovators, and guides who shape the intellectual journey of every student who walks through our doors.",
};

// HOD — derived from facultyData[0]
export const hod = {
  name: facultyData[0].name,
  designation: facultyData[0].designation,
  qualification: "Ph.D. in Computer Science, M.Tech (CSE), B.Tech (CSE)",
  experience: "20+ Years",
  specialization: "Computer Science Education & Research",
  image: facultyData[0].image,
  email: "hod.cs@kendraparacollege.ac.in",
  message:
    "It is my privilege to lead a department that stands at the confluence of academic rigour and technological innovation. Over two decades, we have steadily built a culture where students are not passive consumers of knowledge — they are active participants in discovery. Our faculty bring deep expertise, genuine curiosity, and an abiding commitment to each student's growth. I invite you to explore what makes our department a place where careers are launched and intellects are sharpened.",
};

export const leadershipStats = [
  { value: "4+", label: "Expert Faculty Members" },
  { value: "29+", label: "Years of Academic Excellence" },
  { value: "8", label: "Active Research Areas" },
  { value: "3200+", label: "Students Mentored" },
];

// Faculty members — derived from facultyData[1..] (all except HOD)
export const facultyMembers = [
  {
    id: facultyData[1].id,
    name: facultyData[1].name,
    designation: facultyData[1].designation,
    qualification: "M.Tech (CSE), B.Tech (CSE)",
    specialization: "Artificial Intelligence & Machine Learning",
    experience: "14 Years",
    image: facultyData[1].image,
    email: "s.moharana@kendraparacollege.ac.in",
    researchAreas: ["Artificial Intelligence", "Machine Learning", "Neural Networks"],
    achievements: [
      "Published 10+ peer-reviewed journal articles",
      "Invited speaker at national AI conferences",
    ],
  },
  {
    id: facultyData[2].id,
    name: facultyData[2].name,
    designation: facultyData[2].designation,
    qualification: "M.Tech (Software Engg.), B.Tech (CSE)",
    specialization: "Data Structures, Algorithms & Software Engineering",
    experience: "10 Years",
    image: facultyData[2].image,
    email: "jp.samal@kendraparacollege.ac.in",
    researchAreas: ["Algorithms", "Software Engineering", "Data Structures"],
    achievements: [
      "Best Teacher Award — Kendrapara Autonomous College 2022",
      "Mentored 5 university rank holders",
    ],
  },
  {
    id: facultyData[3].id,
    name: facultyData[3].name,
    designation: facultyData[3].designation,
    qualification: "M.Tech (CSE), GATE Qualified",
    specialization: "Web Technologies & Cybersecurity",
    experience: "8 Years",
    image: facultyData[3].image,
    email: "sk.sahoo@kendraparacollege.ac.in",
    researchAreas: ["Cybersecurity", "Web Technologies", "Network Security"],
    achievements: [
      "Certified Ethical Hacker (CEH)",
      "Conducted 10+ industry workshops on web security",
    ],
  },
];

export const expertiseAreas = [
  { icon: "🧠", label: "Artificial Intelligence" },
  { icon: "📊", label: "Machine Learning" },
  { icon: "🔢", label: "Data Structures & Algorithms" },
  { icon: "🌐", label: "Computer Networks" },
  { icon: "🔐", label: "Cybersecurity" },
  { icon: "⚙️", label: "Software Engineering" },
  { icon: "🖥️", label: "Web Technologies" },
  { icon: "🗄️", label: "Database Systems" },
];

export const researchContributions = [
  {
    icon: "📄",
    title: "Journal Publications",
    value: "40+",
    description:
      "Peer-reviewed articles published in national and international journals including IEEE and Springer.",
  },
  {
    icon: "🎤",
    title: "Conference Presentations",
    value: "30+",
    description:
      "Papers presented at prestigious national and international conferences across India.",
  },
  {
    icon: "🔬",
    title: "Research Projects",
    value: "5",
    description:
      "Active projects funded by UGC and SERB, covering AI, cybersecurity, and software systems.",
  },
  {
    icon: "🎓",
    title: "Students Guided",
    value: "200+",
    description:
      "Final-year and postgraduate students guided to successful project completions and publications.",
  },
];

export const facultyExcellence = [
  {
    tag: "Award",
    title: "Best Teacher Awards",
    description:
      "Faculty members have received institution-level and state-level recognition for outstanding academic contributions and student-centred teaching.",
  },
  {
    tag: "Research",
    title: "Funded Research Projects",
    description:
      "Our faculty have successfully completed and are currently executing research projects with government and institutional funding.",
  },
  {
    tag: "Mentorship",
    title: "Student Success Rate — 94%",
    description:
      "Consistent results-oriented mentorship has contributed to a 94% pass rate and multiple university rank holders over the past decade.",
  },
  {
    tag: "Innovation",
    title: "Industry-Aligned Certificate Programs",
    description:
      "Faculty-designed certificate programs in cybersecurity and web technologies, aligned with industry standards and employer requirements.",
  },
];

export const contact = {
  departmentEmail: "cs@kendraparacollege.ac.in",
  phone: "+91 6725 255XXX",
  officeLocation: "Department of Computer Science, Block B, Ground Floor",
  college: "Kendrapara Autonomous College, Kendrapara — 754211, Odisha",
  officeHours: "Monday – Saturday, 9:00 AM – 5:00 PM",
};

export const cta = {
  heading: "Learn from educators who are active researchers.",
  subheading:
    "Our faculty bring real expertise, ongoing research, and genuine mentorship to every classroom — shaping graduates who are ready for the world.",
  buttonText: "Contact the Department",
  buttonLink: "/contact",
};