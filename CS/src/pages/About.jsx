// src/pages/About.jsx
import { aboutData } from "../data/aboutData";
import building from "../assets/hero/building.jpg";
import lab from "../assets/hero/lab.jpg";

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
  const { hero } = aboutData;
  return (
    <section className="relative h-[92vh] min-h-[600px] flex items-end overflow-hidden">
      {/* background */}
      <img
        src={building}
        alt="College Building"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: "brightness(0.35) saturate(0.9)" }}
      />
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />

      {/* content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 pb-20 lg:pb-28">
        {/* badge */}
        <div className="mb-6">
          <Tag text={hero.badge} />
        </div>

        {/* dept name */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-4xl">
          {hero.departmentName}
        </h1>

        {/* college name */}
        <p className="mt-3 text-amber-400 text-base sm:text-lg font-medium tracking-widest uppercase">
          {hero.college}
        </p>

        {/* divider */}
        <div className="mt-6 mb-6 w-20 h-px bg-amber-400" />

        {/* tagline */}
        <p className="text-white/70 text-xl sm:text-2xl font-light italic max-w-2xl leading-relaxed">
          "{hero.tagline}"
        </p>

        {/* established */}
        <p className="mt-8 text-white/40 text-sm tracking-[0.25em] uppercase">
          {hero.established}
        </p>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 2 — OUR STORY
═══════════════════════════════════════════════ */
const StorySection = () => {
  const { story } = aboutData;
  return (
    <section className="bg-[#0F172A] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* eyebrow */}
        <div className="mb-12">
          <Tag text="Our Story" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* image side */}
          <div className="relative">
            <img
              src={building}
              alt="Department Building"
              className="rounded-2xl w-full h-[480px] object-cover object-center shadow-2xl"
              style={{ filter: "brightness(0.85) saturate(1.1)" }}
            />
            {/* floating card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-amber-400 text-[#0F172A] rounded-xl px-6 py-4 shadow-2xl">
              <p className="text-3xl font-bold font-serif leading-none">29+</p>
              <p className="text-xs font-semibold tracking-wider uppercase mt-1">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* text side */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {story.heading}
            </h2>
            <p className="text-amber-400/80 text-lg italic">{story.subheading}</p>
            <div className="space-y-5">
              {story.paragraphs.map((p, i) => (
                <p key={i} className="text-white/65 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 3 — VISION & MISSION
═══════════════════════════════════════════════ */
const VisionMissionSection = () => {
  const { vision, mission } = aboutData;
  return (
    <section className="bg-[#0a1020] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-16 text-center">
          <Tag text="Purpose" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Vision &amp; Mission
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Vision — larger card */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-amber-400/5 p-8 sm:p-10 flex flex-col justify-between min-h-64">
            {/* decorative */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-amber-400/10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-amber-400/10" />

            <div>
              <div className="w-12 h-1 bg-amber-400 mb-6" />
              <h3 className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                {vision.heading}
              </h3>
              <p className="font-serif text-white text-xl sm:text-2xl leading-relaxed font-light italic">
                "{vision.text}"
              </p>
            </div>
          </div>

          {/* Mission — list */}
          <div className="lg:col-span-3 rounded-2xl border border-white/8 bg-white/3 p-8 sm:p-10">
            <div className="w-12 h-1 bg-white/20 mb-6" />
            <h3 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">
              {mission.heading}
            </h3>
            <ul className="space-y-5">
              {mission.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-white/70 text-base leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 4 — AT A GLANCE (Stats)
═══════════════════════════════════════════════ */
const StatsSection = () => {
  const { stats } = aboutData;
  return (
    <section className="bg-amber-400 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-5xl sm:text-6xl font-bold text-[#0F172A] leading-none">
                {s.value}
              </p>
              <p className="mt-3 text-[#0F172A]/70 text-sm font-semibold tracking-widest uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 5 — PROGRAMS
═══════════════════════════════════════════════ */
const ProgramsSection = () => {
  const { programs } = aboutData;
  return (
    <section className="bg-[#0F172A] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <Tag text="Academic Programs" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Programs Offered
          </h2>
          <p className="mt-4 text-white/50 max-w-xl mx-auto">
            Structured pathways designed to take you from foundational knowledge to industry-ready
            expertise.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-stretch ${
            programs.length === 2 
              ? "max-w-4xl mx-auto" 
              : programs.length === 3 
                ? "lg:grid-cols-3" 
                : "lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {programs.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300"
            >
              {/* Top row: icon and duration */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-4xl block transform group-hover:scale-110 transition-transform duration-300">
                  {p.icon}
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 border border-amber-400/30 rounded-full px-3 py-1 bg-amber-400/10">
                  {p.duration}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-white font-serif font-bold text-xl leading-tight mb-4">
                {p.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                {p.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[10px] px-2.5 py-1 rounded-md bg-[#0F172A]/50 text-white/70 font-medium border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 6 — FACILITIES
═══════════════════════════════════════════════ */
const FacilitiesSection = () => {
  const { facilities } = aboutData;
  return (
    <section className="bg-[#0a1020] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* header + background image row */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <Tag text="Infrastructure" />
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Facilities &amp; Infrastructure
            </h2>
            <p className="mt-5 text-white/55 leading-relaxed">
              Modern infrastructure designed for deep learning, hands-on practice, and
              cutting-edge research — all under one roof.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-64 lg:h-80">
            <img
              src={lab}
              alt="Computer Laboratory"
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.7) saturate(1.15)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1020]/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-semibold text-lg">State-of-the-art Labs</p>
              <p className="text-white/60 text-sm">200+ workstations across 5 labs</p>
            </div>
          </div>
        </div>

        {/* facility cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/8 bg-white/3 p-6 hover:border-amber-400/25 hover:bg-white/5 transition-all duration-300"
            >
              <span className="text-3xl block mb-4">{f.icon}</span>
              <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 7 — WHY CHOOSE US
═══════════════════════════════════════════════ */
const WhyChooseSection = () => {
  const { whyChooseUs } = aboutData;
  return (
    <section className="bg-[#0F172A] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* section header */}
        <div className="max-w-2xl mb-16">
          <Tag text="Why Us" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
            Why Choose Our Department
          </h2>
          <p className="mt-5 text-white/55">
            More than a degree — we offer an environment where curious minds are challenged,
            supported, and prepared for what comes next.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/8 bg-white/3 p-8 hover:border-amber-400/30 transition-all duration-300"
            >
              <span className="text-3xl mb-5 block group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </span>
              <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 8 — HIGHLIGHTS
═══════════════════════════════════════════════ */
const HighlightsSection = () => {
  const { highlights } = aboutData;
  const tagColors = {
    Research: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    Events: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    Achievement: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    Innovation: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  };

  return (
    <section className="bg-[#0a1020] py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <Tag text="Highlights" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Department Highlights
          </h2>
        </div>

        {/* highlight grid with alternating image blocks */}
        <div className="grid lg:grid-cols-2 gap-6">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/8 overflow-hidden hover:border-amber-400/20 transition-all duration-300"
            >
              {/* subtle background image for first and last */}
              {(i === 0 || i === 3) && (
                <img
                  src={i === 0 ? lab : building}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover opacity-10 scale-105"
                />
              )}
              <div className="relative p-8 bg-gradient-to-br from-white/5 to-transparent">
                <span
                  className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border mb-5 ${
                    tagColors[h.tag] || "text-white/50 border-white/20 bg-white/5"
                  }`}
                >
                  {h.tag}
                </span>
                <h3 className="text-white font-serif text-xl font-bold mb-3">{h.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{h.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 9 — CTA
═══════════════════════════════════════════════ */
const CTASection = () => {
  const { cta } = aboutData;
  return (
    <section className="relative py-32 overflow-hidden">
      {/* background */}
      <img
        src={lab}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.2) saturate(0.8)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 via-[#0F172A]/80 to-amber-900/30" />

      {/* decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber-400/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-amber-400/8 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
        <div className="w-16 h-px bg-amber-400 mx-auto mb-10" />
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {cta.heading}
        </h2>
        <p className="mt-6 text-white/60 text-lg leading-relaxed">{cta.subheading}</p>
        <div className="mt-12">
          <a
            href={cta.buttonLink}
            className="inline-block bg-amber-400 text-[#0F172A] font-bold text-sm tracking-wider uppercase px-10 py-4 rounded-full hover:bg-amber-300 transition-colors duration-200 shadow-lg shadow-amber-400/20"
          >
            {cta.buttonText}
          </a>
        </div>
        <div className="w-16 h-px bg-amber-400/30 mx-auto mt-10" />
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════ */
const About = () => (
  <main className="bg-[#0F172A] min-h-screen overflow-x-hidden">
    <HeroSection />
    <StorySection />
    <VisionMissionSection />
    <StatsSection />
    <ProgramsSection />
    <FacilitiesSection />
    <WhyChooseSection />
    <HighlightsSection />
    <CTASection />
  </main>
);

export default About;