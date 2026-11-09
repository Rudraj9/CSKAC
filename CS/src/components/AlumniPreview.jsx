import { Link } from "react-router-dom";
import { getVisibleAlumni, getFeaturedAlumni, isValidLinkedIn } from "../data/alumniData";

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export default function AlumniPreview() {
  const visible = getVisibleAlumni();

  // If there are no visible alumni (or consent===true), hide the section entirely
  if (!visible || visible.length === 0) {
    return null;
  }

  // Pick up to 3 featured or recent alumni
  const featured = getFeaturedAlumni();
  const displayList = featured.length > 0 ? featured.slice(0, 3) : visible.slice(0, 3);

  return (
    <section className="bg-[#0b1329] py-20 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 mb-3">
              Department Network
            </div>
            <h2 className="text-white font-serif text-3xl sm:text-4xl font-bold">
              Our Alumni Network
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2 max-w-2xl">
              Graduates of CSKAC making impacts in software development, research, and industry leadership.
            </p>
          </div>

          <Link
            to="/alumni"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm tracking-wider uppercase transition-colors group w-fit"
          >
            <span>Meet Our Alumni</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform motion-reduce:transform-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayList.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 motion-reduce:hover:translate-y-0"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border border-white/20"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-amber-400/10 text-amber-400 font-bold text-base flex items-center justify-center border border-amber-400/20 flex-shrink-0">
                      {getInitials(item.name)}
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-white font-serif text-lg font-bold leading-tight">{item.name}</h3>
                      {item.isDemo && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-amber-400/80 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
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

                {item.quote && (
                  <p className="text-white/70 text-xs italic leading-relaxed line-clamp-3 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-white/40">{item.location || item.batch}</span>
                {isValidLinkedIn(item.linkedin) ? (
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.name} on LinkedIn`}
                    className="text-amber-400 hover:text-amber-300 font-semibold underline focus:outline-none focus:ring-1 focus:ring-amber-400 rounded"
                  >
                    LinkedIn
                  </a>
                ) : (
                  <span className="text-white/30 text-[11px]">CSKAC Graduate</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
