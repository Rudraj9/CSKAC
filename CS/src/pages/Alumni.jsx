import { useState, useMemo } from "react";
import {
  SHOW_DEMO_ALUMNI,
  getVisibleAlumni,
  getAlumniBatches,
  getAlumniCourses,
  getFeaturedAlumni,
  getAlumniStats,
  isValidLinkedIn,
  isValidEmail,
} from "../data/alumniData";
import { siteConfig } from "../data/siteConfig";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import building from "../assets/hero/building.webp";

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function Alumni() {
  useDocumentTitle("Alumni | CS Department, KAC");

  const visibleAlumni = useMemo(() => getVisibleAlumni(), []);
  const batches = useMemo(() => getAlumniBatches(), []);
  const courses = useMemo(() => getAlumniCourses(), []);
  const featuredAlumni = useMemo(() => getFeaturedAlumni(), []);
  const stats = useMemo(() => getAlumniStats(), []);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState("All");

  // Filter & Sort: newest batch first, then name A-Z
  const filteredAlumni = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return visibleAlumni
      .filter((alumnus) => {
        const matchesBatch = selectedBatch === "All" || alumnus.batch === selectedBatch;
        const matchesCourse = selectedCourse === "All" || alumnus.course === selectedCourse;

        const matchesSearch =
          !q ||
          alumnus.name?.toLowerCase().includes(q) ||
          alumnus.organization?.toLowerCase().includes(q) ||
          alumnus.currentRole?.toLowerCase().includes(q) ||
          alumnus.location?.toLowerCase().includes(q);

        return matchesBatch && matchesCourse && matchesSearch;
      })
      .sort((a, b) => {
        // Sort batch newest first
        const parseStart = (str = "") => {
          const match = str.match(/(\d{4})/);
          return match ? parseInt(match[1], 10) : 0;
        };
        const batchDiff = parseStart(b.batch) - parseStart(a.batch);
        if (batchDiff !== 0) return batchDiff;

        // Then name A-Z
        return (a.name || "").localeCompare(b.name || "");
      });
  }, [visibleAlumni, searchQuery, selectedBatch, selectedCourse]);

  // Action link for "Join the alumni network"
  const joinFormUrl = siteConfig.alumniFormUrl;
  const contactEmail = siteConfig.email || "cs.department@kac.edu.in";
  const joinMailto = `mailto:${encodeURIComponent(contactEmail)}?subject=${encodeURIComponent(
    "Alumni network: update my details"
  )}&body=${encodeURIComponent(
    "Hello CS Department,\n\nI would like to update my details in the Department Alumni Network:\n\nFull Name: \nBatch: \nCourse: \nCurrent Role: \nOrganization: \nLocation: \nLinkedIn Profile: \nContact Email: \nConsent to display: Yes\n"
  )}`;

  const privacyMailto = `mailto:${encodeURIComponent(contactEmail)}?subject=${encodeURIComponent(
    "Alumni entry: update/removal request"
  )}&body=${encodeURIComponent(
    "Hello CS Department,\n\nPlease update or remove my alumni record from the department directory:\n\nFull Name: \nBatch: \nDetails of request: \n"
  )}`;

  return (
    <main className="bg-[#0F172A] min-h-screen text-slate-200 font-sans pb-24">
      {/* ── 1. HERO BANNER ── */}
      <section className="relative h-[48vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src={building}
          alt="Department Building"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          style={{ filter: "brightness(0.25) saturate(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/30" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center mt-12">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            Our Alumni
          </h1>
          <div className="mt-8 w-24 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="mt-8 text-white/80 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
            Celebrating the journeys, careers, and contributions of graduates from the Department of Computer Science.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
      </section>

      {/* Demo Banner */}
      {SHOW_DEMO_ALUMNI && (
        <section className="bg-amber-400/10 border-y border-amber-400/20 py-2.5 px-6 text-center">
          <p className="text-amber-300 text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Demo preview: sample alumni shown for layout review only.
          </p>
        </section>
      )}

      {/* ── 2. STATS STRIP ── */}
      <section className="bg-[#0F172A] pb-12 pt-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center shadow-lg hover:border-amber-400/30 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0">
              <p className="text-3xl font-serif font-bold text-amber-400 mb-1.5">{stats.alumni}</p>
              <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">Registered Alumni</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center shadow-lg hover:border-amber-400/30 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0">
              <p className="text-3xl font-serif font-bold text-amber-400 mb-1.5">{stats.batches}</p>
              <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">Graduated Batches</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center shadow-lg hover:border-amber-400/30 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0">
              <p className="text-3xl font-serif font-bold text-amber-400 mb-1.5">{stats.organizations}+</p>
              <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">Organizations & Institutes</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16 lg:space-y-24">
        {/* ── 3. FEATURED ALUMNI ROW (Hide if none) ── */}
        {featuredAlumni.length > 0 && (
          <section aria-labelledby="featured-alumni-heading" className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 mb-3">
                Spotlight
              </div>
              <h2 id="featured-alumni-heading" className="text-white font-serif text-2xl sm:text-3xl font-bold">
                Featured Graduates
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredAlumni.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#0a1020] border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between hover:border-amber-400 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 blur-2xl rounded-full pointer-events-none" />
                  
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-amber-400/50"
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-amber-400/10 text-amber-400 font-bold text-lg flex items-center justify-center border border-amber-400/30">
                            {getInitials(item.name)}
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-white font-serif text-xl font-bold">{item.name}</h3>
                            {item.isDemo && (
                              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                                Sample
                              </span>
                            )}
                          </div>
                          <p className="text-amber-400 text-xs font-semibold mt-0.5">
                            {item.currentRole} {item.organization ? `· ${item.organization}` : ""}
                          </p>
                          <p className="text-white/50 text-xs mt-0.5">
                            {item.course} ({item.batch})
                          </p>
                        </div>
                      </div>
                    </div>

                    {item.quote && (
                      <blockquote className="mt-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-white/80 text-sm italic leading-relaxed">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-white/10 text-xs">
                    <span className="text-white/50 flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {item.location || "Location not specified"}
                    </span>

                    <div className="flex items-center gap-3">
                      {isValidLinkedIn(item.linkedin) && (
                        <a
                          href={item.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${item.name} on LinkedIn`}
                          className="text-amber-400 hover:text-amber-300 font-semibold underline flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
                        >
                          LinkedIn
                        </a>
                      )}
                      {isValidEmail(item.email) && (
                        <a
                          href={`mailto:${item.email}`}
                          aria-label={`Email ${item.name}`}
                          className="text-white/70 hover:text-white font-semibold underline flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
                        >
                          Email
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 4. DIRECTORY ── */}
        <section aria-labelledby="directory-heading" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <h2 id="directory-heading" className="text-white font-serif text-3xl font-bold">
                Alumni Directory
              </h2>
              <p className="text-white/60 text-sm mt-1">
                Browse alumni by batch, degree program, or name.
              </p>
            </div>
            <span className="text-amber-400 text-sm font-semibold bg-amber-400/10 px-3 py-1 rounded-full w-fit">
              {filteredAlumni.length} found
            </span>
          </div>

          {/* Search & Filter Controls */}
          <div className="space-y-6">
            {/* Search Input */}
            <div>
              <label htmlFor="alumni-search" className="block text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                Search Alumni
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-white/40 group-focus-within:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  id="alumni-search"
                  type="text"
                  placeholder="Search by alumnus name, organization, role, or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#0a1020] border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-all shadow-inner"
                />
              </div>
            </div>

            {/* Filter Pills */}
            <div className="space-y-3">
              {/* Batch Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-white/40 uppercase tracking-wider mr-2">Batch:</span>
                <button
                  type="button"
                  aria-pressed={selectedBatch === "All"}
                  onClick={() => setSelectedBatch("All")}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 motion-reduce:transition-none ${
                    selectedBatch === "All"
                      ? "bg-amber-400 text-[#0F172A] shadow-md shadow-amber-400/20"
                      : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  All Batches
                </button>
                {batches.map((batch) => (
                  <button
                    key={batch}
                    type="button"
                    aria-pressed={selectedBatch === batch}
                    onClick={() => setSelectedBatch(batch)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 motion-reduce:transition-none ${
                      selectedBatch === batch
                        ? "bg-amber-400 text-[#0F172A] shadow-md shadow-amber-400/20"
                        : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {batch}
                  </button>
                ))}
              </div>

              {/* Course Pills */}
              {courses.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-white/40 uppercase tracking-wider mr-2">Course:</span>
                  <button
                    type="button"
                    aria-pressed={selectedCourse === "All"}
                    onClick={() => setSelectedCourse("All")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 motion-reduce:transition-none ${
                      selectedCourse === "All"
                        ? "bg-amber-400 text-[#0F172A] shadow-md shadow-amber-400/20"
                        : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    All Courses
                  </button>
                  {courses.map((course) => (
                    <button
                      key={course}
                      type="button"
                      aria-pressed={selectedCourse === course}
                      onClick={() => setSelectedCourse(course)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 motion-reduce:transition-none ${
                        selectedCourse === course
                          ? "bg-amber-400 text-[#0F172A] shadow-md shadow-amber-400/20"
                          : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {course}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cards Grid: 1 col on mobile, 2 on sm, 3 on lg */}
          {filteredAlumni.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAlumni.map((item) => {
                const hasLinkedIn = isValidLinkedIn(item.linkedin);
                const hasEmail = isValidEmail(item.email);

                return (
                  <div
                    key={item.id}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0"
                  >
                    <div>
                      {/* Avatar & Header */}
                      <div className="flex items-start gap-4 mb-4">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 rounded-full object-cover border border-white/15"
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-full bg-white/10 text-white font-bold text-base flex items-center justify-center border border-white/15 flex-shrink-0">
                            {getInitials(item.name)}
                          </div>
                        )}
                        <div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            <h3 className="text-white font-serif text-lg font-bold leading-tight">
                              {item.name}
                            </h3>
                            {item.isDemo && (
                              <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400/80 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                                Sample
                              </span>
                            )}
                          </div>
                          <p className="text-amber-400 text-xs font-semibold mt-1">
                            {item.currentRole || "Alumnus"}
                          </p>
                          <p className="text-white/60 text-xs mt-0.5">
                            {item.organization || "Independent"}
                          </p>
                        </div>
                      </div>

                      {/* Meta Tags */}
                      <div className="space-y-1 text-xs text-white/50 border-t border-white/5 pt-3 mb-4">
                        <div className="flex items-center justify-between">
                          <span>Batch:</span>
                          <span className="text-white/80 font-medium">{item.batch}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Course:</span>
                          <span className="text-white/80 font-medium">{item.course}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center justify-between">
                            <span>Location:</span>
                            <span className="text-white/80 font-medium">{item.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      {hasLinkedIn || hasEmail ? (
                        <div className="flex items-center gap-3">
                          {hasLinkedIn && (
                            <a
                              href={item.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${item.name} on LinkedIn`}
                              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold underline focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
                            >
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                              </svg>
                              LinkedIn
                            </a>
                          )}
                          {hasEmail && (
                            <a
                              href={`mailto:${item.email}`}
                              aria-label={`Email ${item.name}`}
                              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white font-semibold underline focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
                            >
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              Email
                            </a>
                          )}
                        </div>
                      ) : (
                        <span className="text-white/40 italic">Contact not shared</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl">
              <svg className="w-16 h-16 text-white/20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {visibleAlumni.length === 0 ? (
                <>
                  <p className="text-white/80 text-xl font-serif font-bold mb-2">Alumni profiles are coming soon</p>
                  <p className="text-white/50 text-sm max-w-md mx-auto mb-6">
                    We are currently collecting profiles and consents from our graduated batches. Join the network below to add your details.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-white/60 text-lg font-medium">No alumni found matching your criteria.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedBatch("All");
                      setSelectedCourse("All");
                    }}
                    className="mt-4 text-amber-400 hover:text-amber-300 underline font-medium text-sm focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
                  >
                    Clear Filters
                  </button>
                </>
              )}
            </div>
          )}

          {/* Privacy Note */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-white/50">
            Alumni details are shown with their consent. To update or remove an entry, email{" "}
            <a
              href={privacyMailto}
              className="text-amber-400 hover:text-amber-300 underline focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
            >
              {contactEmail}
            </a>
            .
          </div>
        </section>

        {/* ── 5. JOIN THE ALUMNI NETWORK ── */}
        <section className="bg-gradient-to-br from-amber-400/10 via-[#0a1020] to-amber-400/5 border border-amber-400/20 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-white font-serif text-3xl font-bold">Join the Alumni Network</h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              Are you a graduate of the Department of Computer Science, Kendrapara Autonomous College? Connect with fellow alumni, mentor juniors, and stay updated with departmental events.
            </p>
            <div className="pt-4">
              <a
                href={joinFormUrl ? joinFormUrl : joinMailto}
                target={joinFormUrl ? "_blank" : undefined}
                rel={joinFormUrl ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 bg-amber-400 text-[#0F172A] font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-full hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                {joinFormUrl ? "Fill Alumni Form" : "Update Your Details"}
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
