import { Link } from 'react-router-dom';
import { SHOW_DEMO_DATA, toppersByBatch, qualifiers } from '../data/achievementsData';

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

const AchievementsPreview = () => {
  // Latest batch's top 3 (always the real 2021-2024 batch)
  const latestBatch = toppersByBatch[0] || { batch: "", toppers: [] };
  const latestToppers = latestBatch.toppers.slice(0, 3).sort((a, b) => a.rank - b.rank);

  // Up to 3 recent qualifiers sorted by year descending
  const recentQualifiers = qualifiers
    .slice()
    .sort((a, b) => (parseInt(b.year, 10) || 0) - (parseInt(a.year, 10) || 0))
    .slice(0, 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold text-[#F59E0B] tracking-widest uppercase mb-3">
            ACHIEVEMENTS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 font-serif">
            Student Achievements
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Celebrating the dedication, university ranks, and competitive entrance exam success of our students.
          </p>
        </div>

        {/* Section 1: Department Toppers */}
        {latestToppers.length > 0 && (
          <div className="mb-24">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] font-serif">
                  Department Toppers
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Batch {latestBatch.batch}
                </p>
              </div>
              <Link 
                to="/achievements" 
                className="group flex items-center text-sm font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors duration-300"
              >
                View All Achievements
                <span className="ml-1.5 inline-block transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#F59E0B]">
                  &#8594;
                </span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              {/* Rank 2 (left on desktop) */}
              {latestToppers[1] && (
                <div className="order-2 md:order-1 bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-md bg-slate-100 flex items-center justify-center">
                    {latestToppers[1].image ? (
                      <img src={latestToppers[1].image} alt={latestToppers[1].name} className="w-full h-full object-cover object-center" />
                    ) : (
                      <span className="text-2xl font-bold text-slate-700">{getInitials(latestToppers[1].name)}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                      Rank 2
                    </span>
                    {SHOW_DEMO_DATA && latestToppers[1].isDemo && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-800 border border-amber-400/40">
                        Sample
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-[#0F172A] mb-1 font-serif">{latestToppers[1].name}</h4>
                  <p className="text-sm text-slate-500 mb-4">{latestToppers[1].course}</p>
                  <div className="bg-slate-50 w-full py-3 rounded-lg border border-slate-100 mt-auto">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-0.5">CGPA</p>
                    <p className="text-2xl font-bold text-[#0F172A] font-serif">{latestToppers[1].cgpa}</p>
                  </div>
                </div>
              )}

              {/* Rank 1 (Center Highlight) */}
              {latestToppers[0] && (
                <div className="order-1 md:order-2 bg-[#0F172A] rounded-2xl p-10 shadow-2xl border-2 border-[#F59E0B] flex flex-col items-center text-center transform md:-translate-y-6 hover:-translate-y-8 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F59E0B] to-yellow-300"></div>
                  
                  <div className="w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.3)] bg-white flex items-center justify-center">
                    {latestToppers[0].image ? (
                      <img src={latestToppers[0].image} alt={latestToppers[0].name} className="w-full h-full object-cover object-center" />
                    ) : (
                      <span className="text-3xl font-bold text-[#0F172A]">{getInitials(latestToppers[0].name)}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-[#F59E0B] text-[#0F172A] text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full shadow-md">
                      ★ Rank 1 • Department Topper
                    </div>
                    {SHOW_DEMO_DATA && latestToppers[0].isDemo && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                        Sample
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-1 font-serif">{latestToppers[0].name}</h4>
                  <p className="text-sm text-slate-300 mb-6">{latestToppers[0].course}</p>
                  
                  <div className="bg-white/10 w-full py-4 rounded-xl border border-white/10 mt-auto backdrop-blur-sm">
                    <p className="text-xs font-semibold text-[#F59E0B] uppercase tracking-widest mb-1">CGPA</p>
                    <p className="text-4xl font-bold text-white font-serif">{latestToppers[0].cgpa}</p>
                  </div>
                </div>
              )}

              {/* Rank 3 (right on desktop) */}
              {latestToppers[2] && (
                <div className="order-3 md:order-3 bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-md bg-slate-100 flex items-center justify-center">
                    {latestToppers[2].image ? (
                      <img src={latestToppers[2].image} alt={latestToppers[2].name} className="w-full h-full object-cover object-center" />
                    ) : (
                      <span className="text-2xl font-bold text-slate-700">{getInitials(latestToppers[2].name)}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                      Rank 3
                    </span>
                    {SHOW_DEMO_DATA && latestToppers[2].isDemo && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-800 border border-amber-400/40">
                        Sample
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-[#0F172A] mb-1 font-serif">{latestToppers[2].name}</h4>
                  <p className="text-sm text-slate-500 mb-4">{latestToppers[2].course}</p>
                  <div className="bg-slate-50 w-full py-3 rounded-lg border border-slate-100 mt-auto">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-0.5">CGPA</p>
                    <p className="text-2xl font-bold text-[#0F172A] font-serif">{latestToppers[2].cgpa}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Section 2: Recent Entrance Exam Qualifiers */}
        {recentQualifiers.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-10 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] font-serif">
                  Entrance Exam Qualifiers
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Recent achievements in State &amp; National entrance tests
                </p>
              </div>
              <Link 
                to="/achievements" 
                className="group flex items-center text-sm font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors duration-300"
              >
                View All
                <span className="ml-1.5 inline-block transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#F59E0B]">
                  &#8594;
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {recentQualifiers.map((qualifier) => (
                <div 
                  key={qualifier.id}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          qualifier.level === 'National'
                            ? 'bg-purple-50 text-purple-700 border-purple-200'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        }`}>
                          {qualifier.level} Level
                        </span>
                        {SHOW_DEMO_DATA && qualifier.isDemo && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-800 border border-amber-400/40">
                            Sample
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold text-slate-500">
                        {qualifier.exam} • {qualifier.year}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 flex-shrink-0 rounded-full overflow-hidden border-2 border-slate-100 bg-slate-100 flex items-center justify-center">
                        {qualifier.image ? (
                          <img 
                            src={qualifier.image} 
                            alt={qualifier.name} 
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <span className="text-sm font-bold text-slate-700">{getInitials(qualifier.name)}</span>
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0F172A] font-serif leading-snug">{qualifier.name}</h4>
                        {qualifier.course && (
                          <p className="text-xs text-slate-500">{qualifier.course}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {(qualifier.rank || qualifier.score) && (
                    <div className="bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100 flex items-center justify-between mt-3">
                      {qualifier.rank && (
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Rank</span>
                          <span className="text-lg font-bold text-[#0F172A] font-serif">{qualifier.rank}</span>
                        </div>
                      )}
                      {qualifier.score && (
                        <div className="text-right">
                          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Score</span>
                          <span className="text-lg font-bold text-[#0F172A] font-serif">{qualifier.score}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link 
            to="/achievements" 
            className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-full text-white bg-[#0F172A] hover:bg-[#1E293B] transition-all duration-300 shadow-lg shadow-[#0F172A]/20 hover:shadow-[#0F172A]/40 transform hover:-translate-y-0.5"
          >
            Explore All Achievements
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2.5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementsPreview;
