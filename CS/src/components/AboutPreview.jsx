import { Link } from 'react-router-dom';
import buildingImg from '../assets/hero/building.webp';

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* ─── Left Side: Content ────────────────────────────────────────── */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
              <span className="text-amber-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                About The Department
              </span>
            </div>

            {/* Heading */}
            <h2 
              className="text-slate-900 font-bold leading-tight mb-6"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Building the Future Through Computing Education and Innovation
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-8">
              The Department of Computer Science stands at the forefront of technological 
              advancement, dedicated to cultivating analytical minds and engineering excellence. 
              We offer a rigorous academic environment that bridges theoretical foundations 
              with cutting-edge practical applications, preparing our graduates to lead 
              in an increasingly digital world.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4 mb-10">
              {[
                "Experienced Faculty",
                "Modern Computing Laboratories",
                "Research & Innovation",
                "Industry-Oriented Learning"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div>
              <Link 
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 text-white text-sm font-bold tracking-wide hover:bg-amber-500 hover:text-slate-900 transition-colors duration-300 shadow-md group"
              >
                Read More
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* ─── Right Side: Image ─────────────────────────────────────────── */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative group rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-slate-900/5 transition-opacity duration-300 group-hover:opacity-0 z-10" />
              <img 
                src={buildingImg} 
                alt="Department Building" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-amber-500 z-20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
