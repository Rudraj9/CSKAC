import { researchData } from '../data/researchData';

export default function ResearchPreview() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Section Header ──────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
            <span className="text-amber-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              Research & Laboratories
            </span>
            <div className="h-px w-8 bg-amber-500" aria-hidden="true" />
          </div>
          
          <h2 
            className="text-slate-900 font-bold leading-tight mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}
          >
            Advancing Learning Through Research, Innovation, and Practical Experience
          </h2>
          
          <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
            Our department is equipped with state-of-the-art facilities designed to bridge 
            the gap between theoretical computer science and applied engineering. We foster an 
            environment where analytical thinking meets hands-on problem solving.
          </p>
        </div>

        {/* ─── Research & Labs Grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {researchData.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-500 flex flex-col"
            >
              {/* Image Placeholder Area 
                  Note: When real images are added to src/assets/research/, 
                  you can easily swap this block with an <img /> tag.
              */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/10 transition-colors duration-300 z-10" />
                <span className="text-slate-400 font-medium text-sm tracking-widest uppercase z-20 px-4 text-center">
                  {item.placeholderLabel}
                </span>
                {/* Decorative hover accent line to compensate for lack of image animation */}
                <div className="absolute bottom-0 left-0 w-full border-b-4 border-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col text-center sm:text-left">
                <h3 
                  className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
