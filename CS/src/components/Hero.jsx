import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import buildingImg from '../assets/hero/building.jpg';
import labImg from '../assets/hero/lab.jpg';
import facultiesImg from '../assets/hero/Faculties.jpg';

// ─── Department statistics ─────────────────────────────────────────────────────
const STATS = [
  { value: "24+", label: "Faculty Members" },
  { value: "800+", label: "Students Enrolled" },
  { value: "4",   label: "Laboratories" },
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
            alt={`Hero background ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* ─── Dark Overlay ──────────────────────────────────────────────────── */}
      <div 
        className="absolute inset-0 bg-slate-900/65 sm:bg-slate-900/60 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" 
        aria-hidden="true" 
      />

      {/* ─── Main Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="w-full lg:w-3/5 xl:w-1/2 flex flex-col">
          
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
            <span className="text-amber-500 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase drop-shadow-md">
              Kendrapara Autonomous College
            </span>
          </div>

          <div className="flex gap-5 lg:gap-6">
            {/* Vertical gold rule */}
            <div className="w-0.5 shrink-0 self-stretch bg-amber-500 rounded-full drop-shadow-lg" aria-hidden="true" />
            
            <div className="flex flex-col">
              <h1 
                className="text-white font-bold leading-tight mb-4 drop-shadow-lg"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                }}
              >
                Department of <br />
                Computer Science
              </h1>

              <p className="text-amber-400 text-lg lg:text-xl font-medium tracking-wide mb-6 drop-shadow-md">
                Where Rigorous Theory Meets Applied Computing
              </p>

              <p className="text-slate-200 leading-relaxed text-base lg:text-lg max-w-lg mb-10 drop-shadow-sm">
                Established to foster computational thinking and research excellence,
                our department prepares graduates for careers in academia, industry,
                and public service — grounded in both foundational theory and
                hands-on engineering practice.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mb-14">
                <Link
                  to="/faculty"
                  className="px-8 py-3.5 bg-amber-500 text-slate-900 text-sm font-bold
                             tracking-wide hover:bg-amber-400 transition-colors duration-200 shadow-lg"
                >
                  Explore Faculty
                </Link>
                <Link
                  to="/courses"
                  className="px-8 py-3.5 border border-slate-300 text-white text-sm
                             font-bold tracking-wide hover:border-amber-400 hover:text-amber-400
                             transition-colors duration-200 backdrop-blur-sm bg-white/5 shadow-lg"
                >
                  View Courses
                </Link>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="flex flex-wrap items-center gap-8 md:gap-16 border-t border-slate-400/30 pt-8 pl-5 lg:pl-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span 
                  className="text-white font-bold mb-1 drop-shadow-md"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-slate-300 text-xs font-semibold tracking-widest uppercase drop-shadow-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
