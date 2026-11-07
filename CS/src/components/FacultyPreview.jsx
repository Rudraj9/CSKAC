import { Link } from 'react-router-dom';
import { facultyData } from '../data/facultyData';

export default function FacultyPreview() {
  // Show only up to 4 faculty members for the preview
  const previewData = facultyData.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Section Header ──────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
            <span className="text-amber-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              Our Faculty
            </span>
            <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
          </div>
          
          <h2 
            className="text-slate-900 font-bold leading-tight mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            Meet Our Academic Leaders
          </h2>
          
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
            Our esteemed faculty members are dedicated educators, mentors, and 
            researchers committed to shaping the next generation of computing professionals.
          </p>
        </div>

        {/* ─── Faculty Grid ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewData.map((faculty) => (
            <div 
              key={faculty.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 z-10" />
                <img 
                  src={faculty.image} 
                  alt={faculty.name} 
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6 text-center">
                <h3 
                  className="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors duration-300"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {faculty.name}
                </h3>
                <p className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4">
                  {faculty.designation}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {faculty.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── View All Button ─────────────────────────────────────────────── */}
        <div className="mt-16 text-center">
          <Link 
            to="/faculty"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 text-slate-900 text-sm font-bold tracking-wide hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-300 shadow-sm group"
          >
            View All Faculty
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
