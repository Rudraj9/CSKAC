import { useDocumentTitle } from "../hooks/useDocumentTitle";
// src/pages/Notices.jsx
import { useState, useMemo, useEffect } from 'react';
import { noticeData, SHOW_DEMO_NOTICES } from '../data/noticeData';
import { getNoticeStatus, formatDeadlineLabel } from '../utils/noticeStatus';
import building from '../assets/hero/building.webp';

/* ─── tiny helpers ─── */
const formatDisplayDate = (dateStr) => {
  if (!dateStr) return "";
  const parts = String(dateStr).split("-");
  if (parts.length !== 3) return dateStr;
  const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

/* ═══════════════════════════════════════════════
   HERO & STATS SECTIONS
═══════════════════════════════════════════════ */
const HeroSection = () => {
  const { hero } = noticeData;
  return (
    <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img
        src={building}
        alt="Department Building"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: "brightness(0.25) saturate(1.1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/30" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 text-center mt-12">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          {hero.title}
        </h1>
        <div className="mt-8 w-24 h-1 bg-amber-400 mx-auto rounded-full" />
        <p className="mt-8 text-white/80 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
          {hero.subtitle}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
};

const StatsSection = ({ noticesWithStatus }) => {
  const dynamicStats = useMemo(() => {
    const activeCount = noticesWithStatus.filter(n => n.status.state !== "expired").length;
    const urgentCount = noticesWithStatus.filter(n => n.status.state === "urgent").length;
    const academicCount = noticesWithStatus.filter(n => n.category === "Academic" && n.status.state !== "expired").length;
    const importantCount = noticesWithStatus.filter(n => n.isImportant && n.status.state !== "expired").length;

    return [
      { label: "Active Notices", value: activeCount },
      { label: "Closing Soon (Urgent)", value: urgentCount },
      { label: "Academic Updates", value: academicCount },
      { label: "Important Alerts", value: importantCount }
    ];
  }, [noticesWithStatus]);

  return (
    <section className="bg-[#0F172A] pb-12 pt-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {dynamicStats.map((s, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center shadow-lg hover:border-amber-400/30 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0">
              <p className="text-3xl font-serif font-bold text-amber-400 mb-1.5">{s.value}</p>
              <p className="text-white/60 text-xs font-semibold tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   NOTICE CARDS
═══════════════════════════════════════════════ */
const NoticeCard = ({ notice, onOpenModal }) => {
  const { status } = notice;
  const isExpired = status.state === "expired";
  const isUrgent = status.state === "urgent";
  const isSafe = status.state === "safe";
  const deadlineLabel = formatDeadlineLabel(status);

  // Border & glow styling based strictly on deadline states:
  // - urgent: red border (red-500/70), subtle red glow
  // - safe: green border (emerald-500/60), subtle green glow on hover
  // - expired: 55% opacity, grayscale, grey badge (no red or green)
  // - no-deadline: neutral slate/white border
  let cardBorder = "border border-white/10 hover:border-white/30 hover:bg-white/10";
  if (isExpired) {
    cardBorder = "border border-white/10 bg-white/[0.02] opacity-55 hover:opacity-75 grayscale hover:grayscale-0";
  } else if (isUrgent) {
    cardBorder = "border-2 border-red-500/70 bg-red-950/20 shadow-lg shadow-red-950/30 hover:border-red-400 hover:shadow-red-900/40 hover:bg-red-950/30";
  } else if (isSafe) {
    cardBorder = "border border-emerald-500/60 bg-emerald-950/15 shadow-md shadow-emerald-950/20 hover:border-emerald-400/80 hover:shadow-emerald-900/30 hover:bg-emerald-950/25";
  } else if (notice.isImportant) {
    cardBorder = "bg-[#0a1020] border-l-4 border-l-amber-400 border-t border-r border-b border-white/10 hover:border-r-amber-400/30 hover:border-t-amber-400/30 hover:border-b-amber-400/30 hover:bg-white/5";
  }

  return (
    <div className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 motion-reduce:transition-none shadow-xl flex flex-col justify-between overflow-hidden ${cardBorder}`}>
      <div>
        {/* Date & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
              isExpired
                ? "bg-white/10 text-white/60 border border-white/10"
                : "bg-amber-400/10 text-amber-400 border border-amber-400/20"
            }`}>
              {notice.category}
            </span>

            {/* Demo Sample Badge */}
            {notice.isDemo && (
              <span className="text-[10px] font-bold tracking-wider uppercase text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                Sample
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Suppress Important badge on expired notices */}
            {notice.isImportant && !isExpired && (
              <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-red-400 bg-red-400/10 px-2.5 py-1 rounded-md border border-red-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse motion-reduce:animate-none" />
                Important
              </span>
            )}

            {/* Deadline / Expiry Badges */}
            {isExpired && (
              <span className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase text-white/70 bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Expired on {formatDisplayDate(notice.deadline)}
              </span>
            )}

            {isUrgent && (
              <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-red-300 bg-red-500/20 px-2.5 py-1 rounded-md border border-red-500/40 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse motion-reduce:animate-none" />
                {deadlineLabel}
              </span>
            )}

            {isSafe && (
              <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-md border border-emerald-500/40 shadow-sm">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {deadlineLabel}
              </span>
            )}

            {/* Publication Date */}
            <span className="text-white/40 text-xs font-medium tracking-wider flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {notice.date}
            </span>
          </div>
        </div>

        {/* Content */}
        <h3 className={`font-serif text-xl sm:text-2xl font-bold mb-3 leading-tight transition-colors ${
          isExpired
            ? "text-white/70 group-hover:text-white"
            : isUrgent
            ? "text-white group-hover:text-red-300"
            : isSafe
            ? "text-white group-hover:text-emerald-300"
            : "text-white group-hover:text-amber-400"
        }`}>
          {notice.title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2">
          {notice.description}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
        <button 
          onClick={() => onOpenModal(notice)}
          className={`text-sm font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 ${
            isExpired
              ? "text-white/60 hover:text-white"
              : isUrgent
              ? "text-red-400 hover:text-red-300"
              : isSafe
              ? "text-emerald-400 hover:text-emerald-300"
              : "text-amber-400 hover:text-amber-300"
          }`}
        >
          Read More
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform motion-reduce:transform-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>

        {notice.pdfLink ? (
          isExpired ? (
            <span 
              aria-disabled="true"
              className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-white/30 border border-white/5 pointer-events-none cursor-not-allowed"
              title="Notice has expired"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </span>
          ) : (
            <a 
              href={notice.pdfLink}
              onClick={e => e.stopPropagation()}
              className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-white/50 hover:bg-amber-400/20 hover:text-amber-400 border border-white/10 hover:border-amber-400/30 transition-all motion-reduce:transition-none"
              title="Download Attachment"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
          )
        ) : null}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   SIDEBAR
═══════════════════════════════════════════════ */
const Sidebar = ({ noticesWithStatus, onOpenModal }) => {
  // Prefer non-expired notices for important and recent announcements
  const nonExpiredNotices = noticesWithStatus.filter(n => n.status.state !== "expired");
  const fallbackList = nonExpiredNotices.length > 0 ? nonExpiredNotices : noticesWithStatus;

  const latestNotices = [...fallbackList].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
  const importantNotices = fallbackList.filter(n => n.isImportant).slice(0, 3);

  return (
    <div className="space-y-8 sticky top-24">
      {/* Important Notice Box */}
      {importantNotices.length > 0 && (
        <div className="bg-gradient-to-br from-amber-400/10 to-amber-400/5 border border-amber-400/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <h3 className="text-white font-serif text-xl font-bold mb-5 flex items-center gap-2">
            <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
            Important Alerts
          </h3>
          <ul className="space-y-4 relative z-10">
            {importantNotices.map((n) => (
              <li key={n.id} className="border-b border-amber-400/10 pb-4 last:border-0 last:pb-0">
                <button onClick={() => onOpenModal(n)} className="text-left group w-full">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-amber-400 text-xs font-semibold">{n.date}</span>
                    {n.status.state === "urgent" && (
                      <span className="text-[10px] text-red-300 font-bold uppercase bg-red-500/20 px-1.5 py-0.5 rounded border border-red-500/30">
                        {formatDeadlineLabel(n.status)}
                      </span>
                    )}
                    {n.status.state === "safe" && (
                      <span className="text-[10px] text-emerald-300 font-bold uppercase bg-emerald-500/20 px-1.5 py-0.5 rounded border border-emerald-500/30">
                        {formatDeadlineLabel(n.status)}
                      </span>
                    )}
                  </div>
                  <span className="text-white/80 text-sm group-hover:text-white transition-colors line-clamp-2">{n.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Recent Announcements */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
        <h3 className="text-white font-serif text-xl font-bold mb-5 flex items-center gap-2">
          <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Recent Activity
        </h3>
        <ul className="space-y-4">
          {latestNotices.map((n) => (
            <li key={n.id} className="flex gap-4 group cursor-pointer" onClick={() => onOpenModal(n)}>
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-white/20 group-hover:bg-amber-400 transition-colors" />
              <div>
                <p className="text-white/70 text-sm group-hover:text-white transition-colors line-clamp-2 mb-1">{n.title}</p>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-xs font-medium uppercase tracking-wider">{n.category}</span>
                  {n.status.state === "urgent" && (
                    <span className="text-[10px] text-red-400 font-semibold">{formatDeadlineLabel(n.status)}</span>
                  )}
                  {n.status.state === "safe" && (
                    <span className="text-[10px] text-emerald-400 font-semibold">{formatDeadlineLabel(n.status)}</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   NOTICE DETAIL MODAL
═══════════════════════════════════════════════ */
const NoticeModal = ({ isOpen, onClose, notice }) => {
  if (!isOpen || !notice) return null;
  const { status } = notice;
  const isExpired = status.state === "expired";
  const isUrgent = status.state === "urgent";
  const isSafe = status.state === "safe";
  const deadlineLabel = formatDeadlineLabel(status);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-md" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0a1020] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        <div className={`h-1 ${isExpired ? "bg-white/20" : isUrgent ? "bg-red-500" : isSafe ? "bg-emerald-400" : "bg-amber-400"}`} />
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-400/10 text-amber-400 px-2.5 py-1 rounded-md">
                {notice.category}
              </span>

              {notice.isDemo && (
                <span className="text-[10px] font-bold tracking-wider uppercase text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  Sample
                </span>
              )}

              {notice.isImportant && !isExpired && (
                <span className="text-[10px] font-bold tracking-wider uppercase text-red-400 bg-red-400/10 px-2.5 py-1 rounded-md">
                  Important
                </span>
              )}

              {isExpired && (
                <span className="text-[10px] font-bold tracking-wider uppercase text-white/70 bg-white/10 px-2.5 py-1 rounded-md border border-white/15">
                  Expired on {formatDisplayDate(notice.deadline)}
                </span>
              )}

              {isUrgent && (
                <span className="text-[10px] font-bold tracking-wider uppercase text-red-300 bg-red-500/20 px-2.5 py-1 rounded-md border border-red-500/40">
                  {deadlineLabel}
                </span>
              )}

              {isSafe && (
                <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-md border border-emerald-500/40">
                  {deadlineLabel}
                </span>
              )}
            </div>
            <h2 className="text-white font-serif text-2xl sm:text-3xl font-bold leading-tight">{notice.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-4 text-white/40 text-sm font-semibold tracking-wider uppercase mb-6">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Published: <span className="text-white/70">{notice.date}</span>
            </span>

            {notice.deadline && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Deadline: <span className={isExpired ? "text-white/60" : isUrgent ? "text-red-400 font-bold" : isSafe ? "text-emerald-400 font-bold" : "text-white/70"}>{formatDisplayDate(notice.deadline)}</span>
              </span>
            )}
          </div>
          <p className="text-white/70 text-base leading-relaxed whitespace-pre-wrap">
            {notice.description}
          </p>
        </div>

        {/* Footer */}
        <div className="p-6 sm:p-8 bg-white/[0.02] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {notice.pdfLink ? (
            isExpired ? (
              <span
                aria-disabled="true"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white/40 font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full cursor-not-allowed pointer-events-none"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Application Closed
              </span>
            ) : (
              <a 
                href={notice.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 text-[#0F172A] font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full hover:bg-amber-300 transition-colors shadow-lg shadow-amber-400/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download Attachment
              </a>
            )
          ) : (
            <p className="text-white/40 text-sm italic">No attachments for this notice.</p>
          )}
          <button 
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 text-white font-bold text-sm tracking-wider uppercase px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   MAIN PAGE EXPORT
═══════════════════════════════════════════════ */
const Notices = () => {
  useDocumentTitle("Notice Board");
  const { categories, notices } = noticeData;
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [showExpired, setShowExpired] = useState(true);
  const [currentDate, setCurrentDate] = useState(() => new Date());

  // Re-evaluate status on window focus or 60s timer (handles midnight rollover)
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        setCurrentDate(new Date());
      }
    };
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setModalOpen(false);
        document.body.style.overflow = 'auto';
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleOpenModal = (notice) => {
    setSelectedNotice(notice);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Compute status for all notices
  const noticesWithStatus = useMemo(() => {
    return notices.map(n => ({
      ...n,
      status: getNoticeStatus(n, currentDate)
    }));
  }, [notices, currentDate]);

  // Filter & sort notices
  // Sort rule: urgent (soonest first), then safe and no-deadline together by newest publication date, then expired (most recently expired first)
  const { activeList, expiredList } = useMemo(() => {
    const searchLower = searchQuery.toLowerCase().trim();

    const matches = noticesWithStatus.filter(notice => {
      const matchesCategory = activeCategory === "All" || notice.category === activeCategory;
      const matchesSearch = 
        !searchLower ||
        notice.title.toLowerCase().includes(searchLower) ||
        notice.description.toLowerCase().includes(searchLower) ||
        notice.category.toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });

    const activeOrNonExpired = matches.filter(n => n.status.state !== "expired");
    const expired = matches.filter(n => n.status.state === "expired");

    // Sort activeOrNonExpired:
    // 1. "urgent" notices come first, ordered soonest first (ascending daysLeft: 0, 1, 2...)
    // 2. "safe" and "no-deadline" together next, ordered by newest publication date first
    activeOrNonExpired.sort((a, b) => {
      const aIsUrgent = a.status.state === "urgent";
      const bIsUrgent = b.status.state === "urgent";

      if (aIsUrgent && bIsUrgent) {
        return (a.status.daysLeft ?? 0) - (b.status.daysLeft ?? 0);
      }
      if (aIsUrgent) return -1;
      if (bIsUrgent) return 1;

      return new Date(b.date) - new Date(a.date);
    });

    // Sort expired: most recently expired first (highest / least-negative daysLeft first, or newest deadline first)
    expired.sort((a, b) => {
      const aDays = a.status.daysLeft ?? -9999;
      const bDays = b.status.daysLeft ?? -9999;
      if (aDays !== bDays) {
        return bDays - aDays;
      }
      return new Date(b.date) - new Date(a.date);
    });

    return { activeList: activeOrNonExpired, expiredList: expired };
  }, [noticesWithStatus, activeCategory, searchQuery]);

  const totalFilteredCount = activeList.length + (showExpired ? expiredList.length : 0);

  return (
    <main className="bg-[#0F172A] min-h-screen font-sans pb-24">
      <HeroSection />

      {/* Demo notice banner (rendered only when SHOW_DEMO_NOTICES is true) */}
      {SHOW_DEMO_NOTICES && (
        <section className="bg-amber-400/10 border-y border-amber-400/20 py-2.5 px-6 text-center">
          <p className="text-amber-300 text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Demo preview: sample notices shown for layout review only.
          </p>
        </section>
      )}

      <StatsSection noticesWithStatus={noticesWithStatus} />

      <section className="pt-12 lg:pt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* MAIN CONTENT (Left side on desktop) */}
            <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-10">
              
              {/* Search & Filters */}
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-white/40 group-focus-within:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search notices by title, category, or keyword..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0a1020] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/50 transition-all shadow-inner"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap items-center gap-2">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 motion-reduce:transition-none ${
                        activeCategory === cat
                          ? "bg-amber-400 text-[#0F172A] shadow-md shadow-amber-400/20"
                          : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Deadline Status Color Legend */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs">
                <span className="text-white/40 font-semibold uppercase tracking-wider text-[11px]">Deadline Guide:</span>
                <div className="flex items-center gap-2 text-emerald-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                  <span>More than a week left</span>
                </div>
                <div className="flex items-center gap-2 text-red-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-sm shadow-red-400/50" />
                  <span>Closing within a week</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                  <span>Expired</span>
                </div>
              </div>

              {/* Results Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-white font-serif text-2xl font-bold">
                  {searchQuery ? "Search Results" : activeCategory === "All" ? "Current Notices" : `${activeCategory} Notices`}
                </h2>
                <span className="text-amber-400 text-sm font-semibold bg-amber-400/10 px-3 py-1 rounded-full">
                  {totalFilteredCount} found
                </span>
              </div>

              {/* Active Notices Section */}
              {activeList.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeList.map((notice) => (
                    <NoticeCard key={notice.id} notice={notice} onOpenModal={handleOpenModal} />
                  ))}
                </div>
              ) : expiredList.length > 0 ? (
                <div className="text-center py-12 px-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                  <p className="text-white/70 text-base font-medium">No active notices in this selection. Check the expired notices section below.</p>
                </div>
              ) : (
                <div className="text-center py-20 bg-white/5 border border-white/10 rounded-2xl">
                  <svg className="w-16 h-16 text-white/20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <p className="text-white/60 text-lg font-medium">No notices found matching your criteria.</p>
                  <button 
                    onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
                    className="mt-4 text-amber-400 hover:text-amber-300 underline font-medium text-sm"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Expired / Past Notices Group */}
              {expiredList.length > 0 && (
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-white/80 font-serif text-xl font-bold flex items-center gap-2">
                        <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Past Notices
                      </h3>
                      <p className="text-white/40 text-xs mt-1">Concluded application windows and archived deadlines.</p>
                    </div>

                    <button
                      type="button"
                      aria-pressed={showExpired}
                      onClick={() => setShowExpired(prev => !prev)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase border border-white/15 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                      <span>{showExpired ? "Hide expired notices" : `Show expired notices (${expiredList.length})`}</span>
                      <svg 
                        className={`w-4 h-4 transform transition-transform motion-reduce:transform-none ${showExpired ? "rotate-180" : ""}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {showExpired && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {expiredList.map((notice) => (
                        <NoticeCard key={notice.id} notice={notice} onOpenModal={handleOpenModal} />
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* SIDEBAR (Right side on desktop, bottom on mobile) */}
            <div className="lg:col-span-4 xl:col-span-3 mt-10 lg:mt-0">
              <Sidebar noticesWithStatus={noticesWithStatus} onOpenModal={handleOpenModal} />
            </div>

          </div>
        </div>
      </section>

      {/* Notice Detail Modal */}
      <NoticeModal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        notice={selectedNotice} 
      />
    </main>
  );
};

export default Notices;
