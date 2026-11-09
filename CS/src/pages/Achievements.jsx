import { useState, useMemo } from "react";
import {
  SHOW_DEMO_DATA,
  toppersByBatch,
  qualifiers,
  getBatches,
  getExams,
  getAchievementStats,
} from "../data/achievementsData";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import building from "../assets/hero/building.webp";

// ─── Helpers ───
const Tag = ({ text }) => (
  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30">
    {text}
  </span>
);

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function Achievements() {
  useDocumentTitle("Achievements");

  const batches = useMemo(() => getBatches(), []);
  const allExams = useMemo(() => getExams(), []);
  const stats = useMemo(() => getAchievementStats(), []);

  // Topper batch selection (first batch selected by default)
  const [selectedBatch, setSelectedBatch] = useState(batches[0] || "");

  // Qualifier filters
  const [levelFilter, setLevelFilter] = useState("All"); // "All" | "National" | "State"
  const [examFilter, setExamFilter] = useState("All");

  // Selected batch object
  const currentBatchData = useMemo(() => {
    return toppersByBatch.find((b) => b.batch === selectedBatch) || null;
  }, [selectedBatch]);

  // Group toppers by course within the selected batch
  const toppersByCourse = useMemo(() => {
    if (!currentBatchData?.toppers) return {};
    return currentBatchData.toppers.reduce((acc, topper) => {
      const course = topper.course || "General";
      if (!acc[course]) acc[course] = [];
      acc[course].push(topper);
      return acc;
    }, {});
  }, [currentBatchData]);

  // Filtered qualifiers sorted by year descending
  const filteredQualifiers = useMemo(() => {
    return qualifiers
      .filter((q) => {
        const matchesLevel = levelFilter === "All" || q.level === levelFilter;
        const matchesExam = examFilter === "All" || q.exam === examFilter;
        return matchesLevel && matchesExam;
      })
      .sort((a, b) => (parseInt(b.year, 10) || 0) - (parseInt(a.year, 10) || 0));
  }, [levelFilter, examFilter]);

  return (
    <main className="bg-[#0F172A] min-h-screen text-slate-200">
      {/* ─── Hero Section ─── */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center overflow-hidden">
        <img
          src={building}
          alt="Kendrapara Autonomous College Academic Building"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.3) saturate(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center mt-16">
          <div className="mb-4">
            <Tag text="Hall of Fame" />
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Student Achievements
          </h1>
          <div className="mt-6 w-24 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="mt-6 text-white/80 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Honoring academic excellence, university rank holders, and state &amp; national entrance exam qualifiers.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F172A] to-transparent" />
      </section>

      {/* ─── Temporary Demo Preview Banner (Auto-hidden when SHOW_DEMO_DATA is false) ─── */}
      {SHOW_DEMO_DATA && (
        <aside
          role="status"
          aria-label="Demo mode preview notice"
          className="bg-amber-400/15 border-y border-amber-400/40 text-amber-300 py-3 px-6 text-center text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 shadow-inner"
        >
          <svg
            className="w-4 h-4 text-amber-400 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Demo preview: sample data shown for layout review only.</span>
        </aside>
      )}

      {/* ─── Stats Strip ─── */}
      <section className="border-b border-white/10 bg-[#0a1020]/90 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
              <span
                className="text-4xl sm:text-5xl font-bold text-amber-400 block"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                {stats.batches}
              </span>
              <span className="text-xs font-semibold text-white/70 uppercase tracking-widest mt-2 block">
                Graduating Batches Recognized
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
              <span
                className="text-4xl sm:text-5xl font-bold text-amber-400 block"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                {stats.toppers}
              </span>
              <span className="text-xs font-semibold text-white/70 uppercase tracking-widest mt-2 block">
                Department Toppers
              </span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg">
              <span
                className="text-4xl sm:text-5xl font-bold text-amber-400 block"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                {stats.qualifiers}
              </span>
              <span className="text-xs font-semibold text-white/70 uppercase tracking-widest mt-2 block">
                Entrance Exam Qualifiers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 1: Batch-wise Toppers ─── */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-12 text-center md:text-left">
          <Tag text="Academic Honors" />
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mt-4"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Batch-wise Department Toppers
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            Celebrating our top graduating scholars who demonstrated consistent intellectual rigor and stellar academic records.
          </p>
        </div>

        {/* Batch selection pills: responsive wrapping for mobile & desktop */}
        {batches.length > 0 && (
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-12">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1 sm:mr-2">
              Select Batch:
            </span>
            {batches.map((batch) => {
              const isSelected = selectedBatch === batch;
              return (
                <button
                  key={batch}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedBatch(batch)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? "bg-amber-400 text-slate-900 border-amber-400 shadow-md shadow-amber-400/20"
                      : "bg-white/5 text-slate-300 border-white/10 hover:border-amber-400/40 hover:text-white"
                  }`}
                >
                  Batch {batch}
                </button>
              );
            })}
          </div>
        )}

        {/* Toppers display grouped by course */}
        {Object.keys(toppersByCourse).length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10 p-8">
            <p className="text-slate-400 text-lg">No department toppers recorded for Batch {selectedBatch}.</p>
          </div>
        ) : (
          Object.entries(toppersByCourse).map(([courseName, toppersList]) => (
            <div key={courseName} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {courseName}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {toppersList
                  .slice()
                  .sort((a, b) => a.rank - b.rank)
                  .map((topper) => {
                    const isRank1 = topper.rank === 1;

                    return (
                      <div
                        key={topper.id}
                        className={`rounded-2xl transition-all duration-300 flex flex-col items-center text-center p-8 relative overflow-hidden ${
                          isRank1
                            ? "bg-[#0a1020] border-2 border-amber-400 shadow-2xl shadow-amber-400/10 sm:col-span-2 lg:col-span-1 transform lg:-translate-y-2"
                            : "bg-white/5 border border-white/10 shadow-lg hover:border-white/20"
                        }`}
                      >
                        {/* Top banner accent for Rank 1 */}
                        {isRank1 && (
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />
                        )}

                        {/* Badges row: Rank Badge + Sample Badge */}
                        <div className="mb-6 flex items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase ${
                              isRank1
                                ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30"
                                : topper.rank === 2
                                ? "bg-slate-300 text-slate-950"
                                : "bg-amber-700/80 text-white"
                            }`}
                          >
                            {isRank1 ? "★ Rank 1 • Topper" : `Rank ${topper.rank}`}
                          </span>

                          {/* Sample Badge for demo items */}
                          {SHOW_DEMO_DATA && topper.isDemo && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-400/20 text-amber-300 border border-amber-400/40">
                              Sample
                            </span>
                          )}
                        </div>

                        {/* Photo or Initials Avatar */}
                        <div
                          className={`rounded-full overflow-hidden mb-6 flex items-center justify-center border-4 ${
                            isRank1
                              ? "w-36 h-36 border-amber-400 shadow-xl shadow-amber-400/20 bg-slate-800"
                              : "w-28 h-28 border-white/20 bg-slate-800"
                          }`}
                        >
                          {topper.image ? (
                            <img
                              src={topper.image}
                              alt={`${topper.name} - Rank ${topper.rank} Topper`}
                              className="w-full h-full object-cover object-center"
                            />
                          ) : (
                            <span className="text-2xl font-bold text-amber-400 tracking-wider">
                              {getInitials(topper.name)}
                            </span>
                          )}
                        </div>

                        {/* Details */}
                        <h4
                          className={`font-bold text-white mb-1 ${
                            isRank1 ? "text-2xl font-serif" : "text-xl font-serif"
                          }`}
                        >
                          {topper.name}
                        </h4>
                        <p className="text-xs text-slate-400 tracking-wide uppercase mb-6">
                          {topper.course} • Batch {selectedBatch}
                        </p>

                        {/* CGPA display */}
                        <div
                          className={`w-full py-3.5 rounded-xl border mt-auto ${
                            isRank1
                              ? "bg-amber-400/10 border-amber-400/30 text-amber-400"
                              : "bg-white/5 border-white/10 text-white"
                          }`}
                        >
                          <span className="text-[11px] font-semibold uppercase tracking-widest block opacity-80 mb-0.5">
                            Cumulative Grade Point (CGPA)
                          </span>
                          <span
                            className="text-3xl font-bold tracking-tight block"
                            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                          >
                            {topper.cgpa}
                          </span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))
        )}
      </section>

      {/* ─── Section 2: Entrance Exam Qualifiers ─── */}
      <section className="py-20 lg:py-28 bg-[#0a1020] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="mb-12 text-center md:text-left">
            <Tag text="Competitive Success" />
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mt-4"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              State &amp; National Entrance Exam Qualifiers
            </h2>
            <p className="text-slate-400 mt-2 text-base max-w-2xl">
              Showcasing scholars who cracked competitive postgraduate and university entrance examinations including OJEE, CPET, and national tests.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 shadow-xl space-y-6">
            {/* Level Filter */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                Exam Level:
              </span>
              {["All", "National", "State"].map((lvl) => {
                const isSelected = levelFilter === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setLevelFilter(lvl)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                      isSelected
                        ? "bg-amber-400 text-slate-900 border-amber-400 shadow-sm shadow-amber-400/20"
                        : "bg-white/5 text-slate-300 border-white/10 hover:border-amber-400/40 hover:text-white"
                    }`}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>

            {/* Exam Filter */}
            {allExams.length > 0 && (
              <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/10">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">
                  Exam:
                </span>
                <button
                  type="button"
                  aria-pressed={examFilter === "All"}
                  onClick={() => setExamFilter("All")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                    examFilter === "All"
                      ? "bg-amber-400 text-slate-900 border-amber-400 shadow-sm shadow-amber-400/20"
                      : "bg-white/5 text-slate-300 border-white/10 hover:border-amber-400/40 hover:text-white"
                  }`}
                >
                  All Exams
                </button>
                {allExams.map((examName) => {
                  const isSelected = examFilter === examName;
                  return (
                    <button
                      key={examName}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setExamFilter(examName)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                        isSelected
                          ? "bg-amber-400 text-slate-900 border-amber-400 shadow-sm shadow-amber-400/20"
                          : "bg-white/5 text-slate-300 border-white/10 hover:border-amber-400/40 hover:text-white"
                      }`}
                    >
                      {examName}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Result count */}
            <div className="text-xs text-slate-400 pt-2 border-t border-white/10">
              Showing <span className="font-semibold text-amber-400">{filteredQualifiers.length}</span> qualifier{filteredQualifiers.length === 1 ? "" : "s"}
            </div>
          </div>

          {/* Qualifiers Grid */}
          {filteredQualifiers.length === 0 ? (
            <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10 p-8">
              <p className="text-slate-400 text-lg">No qualifiers match the selected filter combination.</p>
              <button
                type="button"
                onClick={() => {
                  setLevelFilter("All");
                  setExamFilter("All");
                }}
                className="mt-4 px-6 py-2 rounded-full bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-amber-300 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQualifiers.map((qualifier) => {
                const isNational = qualifier.level === "National";

                return (
                  <div
                    key={qualifier.id}
                    className="bg-white/5 border border-white/10 hover:border-amber-400/30 rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      {/* Top Row: Level badge & Exam (+ Sample badge if demo) */}
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                              isNational
                                ? "bg-purple-400/10 text-purple-300 border-purple-400/30"
                                : "bg-emerald-400/10 text-emerald-300 border-emerald-400/30"
                            }`}
                          >
                            {qualifier.level} Level
                          </span>

                          {SHOW_DEMO_DATA && qualifier.isDemo && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                              Sample
                            </span>
                          )}
                        </div>

                        <span className="text-amber-400 text-xs font-bold tracking-wider">
                          {qualifier.exam} • {qualifier.year}
                        </span>
                      </div>

                      {/* Student Info */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-slate-800 border-2 border-white/20 flex items-center justify-center">
                          {qualifier.image ? (
                            <img
                              src={qualifier.image}
                              alt={`${qualifier.name} - ${qualifier.exam} Qualifier`}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <span className="text-sm font-bold text-amber-400">
                              {getInitials(qualifier.name)}
                            </span>
                          )}
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-white font-serif leading-tight">
                            {qualifier.name}
                          </h4>
                          {qualifier.course && (
                            <p className="text-xs text-slate-400 mt-1">{qualifier.course}</p>
                          )}
                        </div>
                      </div>

                      {/* Qualified For note */}
                      {qualifier.qualifiedFor && (
                        <p className="text-xs text-slate-300 bg-white/5 rounded-lg p-2.5 mb-4 border border-white/5">
                          <span className="text-amber-400 font-semibold block mb-0.5">Program / Pathway:</span>
                          {qualifier.qualifiedFor}
                        </p>
                      )}
                    </div>

                    {/* Rank / Score highlight */}
                    {(qualifier.rank || qualifier.score) && (
                      <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                        {qualifier.rank && (
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                              Rank
                            </span>
                            <span className="text-xl font-bold text-amber-400 font-serif">
                              {qualifier.rank}
                            </span>
                          </div>
                        )}
                        {qualifier.score && (
                          <div className="text-right">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                              Score
                            </span>
                            <span className="text-xl font-bold text-white font-serif">
                              {qualifier.score}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
