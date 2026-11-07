// src/data/galleryData.js

import farewell1 from '../assets/gallery/farewell1.jpg';
import freshers1 from '../assets/gallery/freshers1.jpg';
import ganesh1 from '../assets/gallery/ganesh1.jpg';
import picnic1 from '../assets/gallery/picnic1.jpg';
import saraswati1 from '../assets/gallery/saraswati1.jpg';
import seminar1 from '../assets/gallery/seminar1.jpg';

export const galleryData = {
  hero: {
    title: "Department Gallery",
    subtitle: "Capturing memories, achievements, celebrations, and academic excellence.",
  },
  stats: [
    { label: "Events Conducted", value: "120+" },
    { label: "Workshops Organized", value: "45+" },
    { label: "Student Participation", value: "2500+" },
    { label: "Years of Activities", value: "29+" }
  ],
  categories: [
    "All",
    "Seminars",
    "Workshops",
    "Freshers",
    "Farewell",
    "Puja",
    "Picnic",
    "Technical",
    "Cultural"
  ],
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
      title: "Saraswati Puja Celebration",
      category: "Puja",
      description: "Seeking the blessings of Goddess Saraswati for knowledge and academic excellence.",
      image: saraswati1,
      date: "February 2025"
    },
    {
      id: 4,
      title: "Ganesh Puja Festival",
      category: "Puja",
      description: "Annual Ganesh Puja celebrations organized by the students and faculty.",
      image: ganesh1,
      date: "September 2025"
    },
    {
      id: 5,
      title: "Department Picnic",
      category: "Picnic",
      description: "An annual getaway for students and teachers to relax and bond outside the classroom.",
      image: picnic1,
      date: "January 2025"
    },
    {
      id: 6,
      title: "Farewell Ceremony 2024",
      category: "Farewell",
      description: "Bidding adieu to our outgoing batch with best wishes for their future endeavors.",
      image: farewell1,
      date: "May 2024"
    }
  ],
  featured: [
    {
      id: 101,
      title: "Annual TechFest Symposium",
      category: "Technical",
      description: "Our flagship technical event featuring hackathons, coding challenges, and expert talks.",
      image: seminar1,
      date: "March 2025",
      isLarge: true
    },
    {
      id: 102,
      title: "Alumni Meet & Cultural Eve",
      category: "Cultural",
      description: "A grand evening celebrating our alumni network along with cultural performances.",
      image: freshers1,
      date: "December 2025",
      isLarge: false
    }
  ],
  studentLife: [
    {
      icon: "💻",
      title: "Technical Learning",
      description: "Hands-on coding sessions, hackathons, and peer-to-peer programming clubs."
    },
    {
      icon: "🎭",
      title: "Cultural Participation",
      description: "Showcasing talent through annual fests, drama, music, and department celebrations."
    },
    {
      icon: "🤝",
      title: "Department Community",
      description: "A strong, supportive network of students, alumni, and faculty members."
    }
  ]
};
