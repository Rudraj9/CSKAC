// src/pages/Faculty.jsx
import {
  hero,
  hod,
  leadershipStats,
  facultyMembers,
  expertiseAreas,
  researchContributions,
  facultyExcellence,
  contact,
  cta,
} from "../data/facultyData";

/* ─── Shared helpers ─── */
const Tag = ({ text, color = "amber" }) => {
  const palette = {
    amber: "bg-amber-400/15 text-amber-400 border-amber-400/30",
    blue: "bg-blue-400/15 text-blue-400 border-blue-400/30",
    purple: "bg-purple-400/15 text-purple-400 border-purple-400/30",
    emerald: "bg-emerald-400/15 text-emerald-400 border-emerald-400/30",
  };
  return (
    <span
      className={`inline-block px-3 py-1 text-[10px] font-bold tracking-[0.25em] uppercase rounded-full border ${palette[color] || palette.amber}`}
    >
      {text}
    </span>
  );
};

const tagColorMap = {
  Award: "amber",
  Research: "blue",
  Mentorship: "emerald",
  Innovation: "purple",
};

/* ═══════════════════════════════════════════════
   SECTION 1 — HERO
═══════════════════════════════════════════════ */
const HeroSection = () => (
  <section className="relative bg-[#0F172A] pt-28 pb-24 overflow-hidden">
    {/* decorative rings */}
    <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-amber-400/5 pointer-events-none" />
    <div className="absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full border border-amber-400/8 pointer-events-none" />
    {/* horizontal rule accent */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

    <div className="relative max-w-7xl mx-auto px-6 sm:px-10">
      <Tag text="Academic Faculty" />

      <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
        {hero.heading}
      </h1>

      <div className="mt-6 w-20 h-px bg-amber-400" />

      <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-3xl">
        {hero.subheading}
      </p>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 2 — HOD MESSAGE
═══════════════════════════════════════════════ */
const HODSection = () => (
  <section className="bg-[#0a1020] py-24 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="mb-14">
        <Tag text="Leadership" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white">
          Message from the Head of Department
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* portrait side */}
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
          <div className="relative w-full max-w-xs mx-auto lg:mx-0">
            {/* gold border frame */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-amber-400/40 via-amber-400/10 to-transparent" />
            <img
              src={hod.image}
              alt={hod.name}
              className="relative rounded-2xl w-full aspect-[3/4] object-cover object-top shadow-2xl"
            />
            {/* experience badge */}
            <div className="absolute -bottom-4 -right-4 bg-amber-400 text-[#0F172A] rounded-xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-bold font-serif leading-none">{hod.experience}</p>
              <p className="text-[10px] font-bold tracking-wider uppercase mt-1">Experience</p>
            </div>
          </div>

          {/* identity block */}
          <div className="text-center lg:text-left pt-6">
            <p className="text-white font-serif text-xl font-bold">{hod.name}</p>
            <p className="text-amber-400 text-sm mt-1 font-medium">{hod.designation}</p>
            <p className="text-white/50 text-xs mt-1">{hod.qualification}</p>
            <p className="text-white/40 text-xs mt-2 italic">{hod.specialization}</p>
            <a
              href={`mailto:${hod.email}`}
              className="mt-3 inline-block text-xs text-amber-400/70 hover:text-amber-400 transition-colors"
            >
              {hod.email}
            </a>
          </div>
        </div>

        {/* message side */}
        <div className="lg:col-span-3 flex flex-col justify-center">
          {/* large decorative quote mark */}
          <div
            className="text-amber-400/15 font-serif select-none leading-none mb-4"
            style={{ fontSize: "8rem", lineHeight: 1 }}
            aria-hidden
          >
            "
          </div>
          <blockquote className="font-serif text-white/80 text-xl sm:text-2xl leading-relaxed font-light italic -mt-10">
            {hod.message}
          </blockquote>
          <div className="mt-8 w-16 h-px bg-amber-400/40" />
          <p className="mt-4 text-white/40 text-sm tracking-widest uppercase">
            — {hod.name}, {hod.designation}
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 3 — LEADERSHIP STATS
═══════════════════════════════════════════════ */
const StatsSection = () => (
  <section className="bg-amber-400 py-20">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        {leadershipStats.map((s, i) => (
          <div key={i} className="text-center">
            <p className="font-serif text-5xl sm:text-6xl font-bold text-[#0F172A] leading-none">
              {s.value}
            </p>
            <p className="mt-3 text-[#0F172A]/70 text-xs font-bold tracking-widest uppercase">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 4 — FACULTY MEMBERS
═══════════════════════════════════════════════ */
const FacultyCard = ({ member }) => (
  <div className="group rounded-2xl border border-white/8 bg-white/3 overflow-hidden hover:border-amber-400/30 hover:bg-white/5 transition-all duration-300">
    {/* image */}
    <div className="relative overflow-hidden h-64">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        style={{ filter: "brightness(0.88) saturate(1.05)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/20 to-transparent" />
      {/* experience pill */}
      <div className="absolute top-4 right-4 bg-amber-400 text-[#0F172A] text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow">
        {member.experience}
      </div>
    </div>

    {/* content */}
    <div className="p-6">
      <h3 className="text-white font-serif text-lg font-bold leading-tight">{member.name}</h3>
      <p className="text-amber-400 text-xs font-semibold mt-1">{member.designation}</p>
      <p className="text-white/45 text-xs mt-1">{member.qualification}</p>

      <div className="my-4 w-10 h-px bg-white/15" />

      <p className="text-white/60 text-xs font-medium mb-3 italic">{member.specialization}</p>

      {/* research area tags */}
      <div className="flex flex-wrap gap-1.5">
        {member.researchAreas.map((area, j) => (
          <span
            key={j}
            className="text-[10px] px-2 py-0.5 rounded-md bg-white/8 text-white/50 font-medium"
          >
            {area}
          </span>
        ))}
      </div>

      {/* email */}
      <a
        href={`mailto:${member.email}`}
        className="mt-4 block text-[10px] text-amber-400/60 hover:text-amber-400 transition-colors truncate"
      >
        {member.email}
      </a>
    </div>
  </div>
);

const FacultySection = () => (
  <section className="bg-[#0F172A] py-24 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="text-center mb-16">
        <Tag text="Our Faculty" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white">
          Meet Our Faculty
        </h2>
        <p className="mt-4 text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
          Qualified educators and active researchers dedicated to academic excellence and student
          success.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {facultyMembers.map((member) => (
          <FacultyCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 5 — AREAS OF EXPERTISE
═══════════════════════════════════════════════ */
const ExpertiseSection = () => (
  <section className="bg-[#0a1020] py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="text-center mb-16">
        <Tag text="Expertise" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white">
          Areas of Expertise
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {expertiseAreas.map((area, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/3 hover:border-amber-400/40 hover:bg-amber-400/5 transition-all duration-200 cursor-default"
          >
            <span className="text-xl">{area.icon}</span>
            <span className="text-white/75 text-sm font-medium">{area.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 6 — RESEARCH & CONTRIBUTIONS
═══════════════════════════════════════════════ */
const ResearchSection = () => (
  <section className="bg-[#0F172A] py-24 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="mb-16">
        <Tag text="Research" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white max-w-xl leading-tight">
          Research &amp; Academic Contributions
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {researchContributions.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/8 bg-white/3 p-7 hover:border-amber-400/25 hover:bg-white/5 transition-all duration-300"
          >
            <span className="text-3xl block mb-4">{item.icon}</span>
            <p className="font-serif text-4xl font-bold text-amber-400 leading-none mb-2">
              {item.value}
            </p>
            <h3 className="text-white font-semibold text-sm mb-3">{item.title}</h3>
            <p className="text-white/50 text-xs leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 7 — FACULTY EXCELLENCE
═══════════════════════════════════════════════ */
const ExcellenceSection = () => (
  <section className="bg-[#0a1020] py-24 lg:py-36">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="text-center mb-16">
        <Tag text="Excellence" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white">
          Faculty Excellence
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {facultyExcellence.map((item, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/8 bg-white/3 p-8 hover:border-amber-400/20 transition-all duration-300"
          >
            <div className="mb-5">
              <Tag text={item.tag} color={tagColorMap[item.tag] || "amber"} />
            </div>
            <h3 className="text-white font-serif text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 8 — CONTACT FACULTY
═══════════════════════════════════════════════ */
const ContactSection = () => (
  <section className="bg-[#0F172A] py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-6 sm:px-10">
      <div className="mb-14">
        <Tag text="Contact" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-bold text-white">
          Contact the Faculty
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Department Email */}
        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-7">
          <span className="text-3xl block mb-4">📧</span>
          <h3 className="text-amber-400 font-semibold text-sm tracking-wider uppercase mb-2">
            Department Email
          </h3>
          <a
            href={`mailto:${contact.departmentEmail}`}
            className="text-white text-base hover:text-amber-400 transition-colors"
          >
            {contact.departmentEmail}
          </a>
        </div>

        {/* Phone */}
        <div className="rounded-2xl border border-white/8 bg-white/3 p-7">
          <span className="text-3xl block mb-4">📞</span>
          <h3 className="text-white/50 font-semibold text-sm tracking-wider uppercase mb-2">
            Phone
          </h3>
          <p className="text-white text-base">{contact.phone}</p>
          <p className="text-white/40 text-xs mt-2">{contact.officeHours}</p>
        </div>

        {/* Office Location */}
        <div className="rounded-2xl border border-white/8 bg-white/3 p-7 sm:col-span-2 lg:col-span-1">
          <span className="text-3xl block mb-4">📍</span>
          <h3 className="text-white/50 font-semibold text-sm tracking-wider uppercase mb-2">
            Office Location
          </h3>
          <p className="text-white text-sm leading-relaxed">{contact.officeLocation}</p>
          <p className="text-white/45 text-xs mt-2 leading-relaxed">{contact.college}</p>
        </div>
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════
   SECTION 9 — CTA
═══════════════════════════════════════════════ */
const CTASection = () => (
  <section className="relative bg-[#0a1020] py-32 overflow-hidden">
    {/* decorative rings */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber-400/5 pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-amber-400/8 pointer-events-none" />

    <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center">
      <div className="w-16 h-px bg-amber-400 mx-auto mb-10" />
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {cta.heading}
      </h2>
      <p className="mt-6 text-white/55 text-lg leading-relaxed">{cta.subheading}</p>
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

/* ═══════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════ */
const Faculty = () => (
  <main className="bg-[#0F172A] min-h-screen overflow-x-hidden">
    <HeroSection />
    <HODSection />
    <StatsSection />
    <FacultySection />
    <ExpertiseSection />
    <ResearchSection />
    <ExcellenceSection />
    <ContactSection />
    <CTASection />
  </main>
);

export default Faculty;