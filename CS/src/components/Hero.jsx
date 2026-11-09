import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import buildingImg from '../assets/hero/building.webp';
import labImg from '../assets/hero/lab.webp';
import facultiesImg from '../assets/hero/Faculties.webp';
import { facultyMembers } from '../data/facultyData';
import { STATS_STUDENTS_ENROLLED, STATS_LABORATORIES_COUNT } from '../data/siteConfig';

// Compute total faculty dynamically from data: facultyMembers.length + 1 for HOD
const totalFacultyCount = `${facultyMembers.length + 1}+`;

// ─── Department statistics ─────────────────────────────────────────────────────
const STATS = [
  { value: totalFacultyCount, label: "Faculty Members" },
  { value: STATS_STUDENTS_ENROLLED, label: "Students Enrolled" },
  { value: STATS_LABORATORIES_COUNT, label: "Laboratories" },
];

const BACKGROUND_IMAGES = [buildingImg, labImg, facultiesImg];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-900"
      aria-label="Department introduction"
    >
      {/* ─── Background Images with Fade Transition ────────────────────────── */}
      {BACKGROUND_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="Kendrapara Autonomous College Department of Computer Science campus atmosphere"
            className="w-full h-full object-cover object-center"
            style={{
              filter: "brightness(0.55) contrast(1.08)",
            }}
          />
        </div>
      ))}

      {/* ─── Gradient overlays ──────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/65 to-slate-900/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30"
        aria-hidden="true"
      />

      {/* ─── Content Container ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Department pill badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              Autonomous College • NAAC Accredited
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.12] tracking-tight mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Empowering Minds,<br />
            <span className="text-amber-400">Engineering</span> the Future.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8 font-light">
            Established to foster computational thinking and academic excellence, the Department
            of Computer Science offers rigorous undergraduate education backed by modern
            computing laboratories and dedicated faculty.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Link
              to="/courses"
              className="px-6 py-3 bg-amber-400 text-slate-900 font-semibold text-sm tracking-wide
                         hover:bg-amber-300 transition-colors duration-200 shadow-lg shadow-amber-400/20"
              style={{ borderRadius: 0 }}
            >
              Explore Programs
            </Link>
            <Link
              to="/faculty"
              className="px-6 py-3 border border-slate-400 text-slate-200 font-semibold text-sm
                         tracking-wide hover:border-white hover:text-white hover:bg-white/5
                         transition-all duration-200"
              style={{ borderRadius: 0 }}
            >
              Meet the Faculty
            </Link>
          </div>

          {/* ─── Quick Stats Row ────────────────────────────────────────────── */}
          <div className="pt-8 border-t border-slate-700/60 grid grid-cols-3 gap-6 max-w-lg">
            {STATS.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="text-2xl sm:text-3xl font-bold text-amber-400 tracking-tight"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 tracking-wide mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ─── Slide Indicator dots ───────────────────────────────────────────── */}
      <div className="absolute bottom-6 right-6 lg:right-12 z-20 flex items-center gap-2">
        {BACKGROUND_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              index === currentImageIndex
                ? "w-8 h-2 bg-amber-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
