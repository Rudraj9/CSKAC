import { useDocumentTitle } from "../hooks/useDocumentTitle";
// src/pages/Courses.jsx
import { courseData } from '../data/courseData';
import building from '../assets/hero/building.webp';
import lab from '../assets/hero/lab.webp';

/* ─── tiny helper ─── */
const Tag = ({ text }) => (
  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30">
    {text}
  </span>
);

/* ═══════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════ */
const HeroSection = () => {
  const { hero } = courseData;
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* background */}
      <img
        src={building}
        alt="College Building"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: "brightness(0.3) saturate(1.1)" }}
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />

      {/* content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center mt-20">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          {hero.title}
        </h1>
        <div className="mt-8 w-24 h-1 bg-amber-400 mx-auto rounded-full" />
        <p className="mt-8 text-white/80 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
          {hero.subtitle}
        </p>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 2 — PROGRAMS OVERVIEW
═══════════════════════════════════════════════ */
const ProgramsOverviewSection = () => {
  const { programsOverview } = courseData;
  return (
    <section className="bg-[#0F172A] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <Tag text="Overview" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Our Degree Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          {programsOverview.map((prog, idx) => (
            <div
              key={idx}
              className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-500 shadow-xl"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-5xl block transform group-hover:scale-110 transition-transform duration-300">
                  {prog.icon}
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-amber-400 border border-amber-400/30 rounded-full px-3 py-1 bg-amber-400/10">
                  {prog.duration}
                </span>
              </div>
              <h3 className="text-white font-serif font-bold text-2xl mb-2">{prog.name}</h3>
              <p className="text-amber-400 text-sm font-medium tracking-wide uppercase mb-6">
                {prog.degreeType} • {prog.intake}
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8 flex-grow">
                {prog.shortDescription}
              </p>
              
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Key Highlights</h4>
                <ul className="space-y-3">
                  {prog.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start text-white/60 text-sm">
                      <span className="text-amber-400 mr-3 text-lg leading-none">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 3 — PROGRAM DETAILS
═══════════════════════════════════════════════ */
const ProgramDetailsSection = () => {
  const { programDetails } = courseData;
  return (
    <section className="bg-[#0a1020] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-20">
          <Tag text="Curriculum" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Program Details
          </h2>
        </div>

        <div className="space-y-24">
          {programDetails.map((detail, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Left/Right Text Content */}
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <h3 className="text-3xl font-serif font-bold text-white mb-6">
                  {detail.name}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {detail.overview}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-white font-semibold text-lg">Eligibility</h4>
                      <p className="text-white/60 mt-1">{detail.eligibility}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 mt-1">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-5">
                      <h4 className="text-white font-semibold text-lg">Duration</h4>
                      <p className="text-white/60 mt-1">{detail.duration}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right/Left Cards Content */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                {/* Key Subjects Card */}
                <div className="bg-[#0F172A] rounded-2xl p-8 border border-white/5 shadow-xl hover:border-white/15 transition-colors">
                  <h4 className="text-amber-400 font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                    Key Subjects
                  </h4>
                  <ul className="space-y-3">
                    {detail.keySubjects.map((subject, sIdx) => (
                      <li key={sIdx} className="text-white/70 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Career Card */}
                <div className="bg-[#0F172A] rounded-2xl p-8 border border-white/5 shadow-xl hover:border-white/15 transition-colors">
                  <h4 className="text-amber-400 font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Career Paths
                  </h4>
                  <ul className="space-y-3">
                    {detail.careerOpportunities.map((career, cIdx) => (
                      <li key={cIdx} className="text-white/70 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                        {career}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 4 — WHY STUDY WITH US
═══════════════════════════════════════════════ */
const WhyStudySection = () => {
  const { whyStudyWithUs } = courseData;
  return (
    <section className="bg-[#0F172A] py-20 lg:py-32 relative overflow-hidden">
      {/* subtle decorations */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <Tag text="Why Choose Us" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            The Academic Experience
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {whyStudyWithUs.map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.35rem)] group flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-amber-400/20 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-3xl mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 5 — CTA
═══════════════════════════════════════════════ */
const CTASection = () => {
  const { cta } = courseData;
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0a1020]">
      {/* background */}
      <img
        src={lab}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        style={{ filter: "brightness(0.4) saturate(0.8)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0a1020]/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <div className="w-16 h-px bg-amber-400 mx-auto mb-10" />
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {cta.heading}
        </h2>
        <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
          {cta.subheading}
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          {cta.buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.link}
              className={`w-full sm:w-auto inline-block font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-all duration-300 shadow-lg ${
                btn.primary
                  ? "bg-amber-400 text-[#0F172A] hover:bg-amber-300 shadow-amber-400/20"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              {btn.text}
            </a>
          ))}
        </div>
        <div className="w-16 h-px bg-amber-400/30 mx-auto mt-12" />
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════ */
const Courses = () => {
  useDocumentTitle("Courses & Programs");
  return (
    <main className="bg-[#0F172A] min-h-screen overflow-x-hidden font-sans">
      <HeroSection />
      <ProgramsOverviewSection />
      <ProgramDetailsSection />
      <WhyStudySection />
      <CTASection />
    </main>
  );
};

export default Courses;