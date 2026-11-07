import { Link } from 'react-router-dom';
import { departmentToppers, qualifiers } from '../data/achievementsData';

const AchievementsPreview = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Our Achievers
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Celebrating the hard work, dedication, and academic excellence of our students.
          </p>
        </div>

        {/* Section 1: Department Toppers */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
              Department Toppers
            </h3>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Rank 2 */}
            <div className="order-2 md:order-1 bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-md">
                <img src={departmentToppers[1].image} alt={departmentToppers[1].name} className="w-full h-full object-cover object-center" />
              </div>
              <h4 className="text-xl font-bold text-[#0F172A] mb-1">{departmentToppers[1].name}</h4>
              <p className="text-sm text-slate-500 mb-4">{departmentToppers[1].course} • {departmentToppers[1].batch}</p>
              <div className="bg-slate-50 w-full py-3 rounded-lg border border-slate-100 mt-auto">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">CGPA</p>
                <p className="text-2xl font-bold text-[#0F172A]">{departmentToppers[1].cgpa}</p>
              </div>
            </div>

            {/* Rank 1 (Topper) */}
            <div className="order-1 md:order-2 bg-[#0F172A] rounded-2xl p-10 shadow-2xl border border-[#F59E0B]/30 flex flex-col items-center text-center transform md:-translate-y-8 hover:-translate-y-10 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#F59E0B] to-yellow-300"></div>
              
              <div className="absolute top-6 right-6 text-[#F59E0B]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 opacity-80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>
                </svg>
              </div>

              <div className="relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 text-[#F59E0B]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
                  </svg>
                </div>
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.3)] relative z-10 bg-white">
                  <img src={departmentToppers[0].image} alt={departmentToppers[0].name} className="w-full h-full object-cover object-center" />
                </div>
              </div>
              
              <div className="bg-[#F59E0B] text-[#0F172A] text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full mb-4">
                Department Topper
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-1">{departmentToppers[0].name}</h4>
              <p className="text-sm text-slate-300 mb-6">{departmentToppers[0].course} • {departmentToppers[0].batch}</p>
              
              <div className="bg-white/10 w-full py-4 rounded-xl border border-white/10 mt-auto backdrop-blur-sm">
                <p className="text-xs font-medium text-[#F59E0B] uppercase tracking-widest mb-1">CGPA</p>
                <p className="text-4xl font-bold text-white">{departmentToppers[0].cgpa}</p>
              </div>
            </div>

            {/* Rank 3 */}
            <div className="order-3 md:order-3 bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-md">
                <img src={departmentToppers[2].image} alt={departmentToppers[2].name} className="w-full h-full object-cover object-center" />
              </div>
              <h4 className="text-xl font-bold text-[#0F172A] mb-1">{departmentToppers[2].name}</h4>
              <p className="text-sm text-slate-500 mb-4">{departmentToppers[2].course} • {departmentToppers[2].batch}</p>
              <div className="bg-slate-50 w-full py-3 rounded-lg border border-slate-100 mt-auto">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">CGPA</p>
                <p className="text-2xl font-bold text-[#0F172A]">{departmentToppers[2].cgpa}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: OJEE / CPET Qualifiers */}
        <div>
           <div className="flex items-center justify-between mb-10 max-w-5xl mx-auto">
             <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
               OJEE / CPET Qualifiers
             </h3>
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
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {qualifiers.map((qualifier) => (
              <div 
                key={qualifier.id}
                className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 flex flex-col sm:flex-row items-center gap-6 group transform hover:-translate-y-1"
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border-4 border-slate-50 group-hover:border-[#F59E0B]/30 transition-colors duration-300 shadow-sm">
                  <img 
                    src={qualifier.image} 
                    alt={qualifier.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-grow flex flex-col sm:flex-row sm:items-center sm:justify-between w-full text-center sm:text-left">
                  <div className="mb-4 sm:mb-0">
                    <h4 className="text-xl font-bold text-[#0F172A] mb-1">{qualifier.name}</h4>
                    <p className="text-[#F59E0B] font-medium text-sm flex items-center justify-center sm:justify-start gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {qualifier.qualification} {qualifier.year}
                    </p>
                  </div>
                  {qualifier.rank && (
                    <div className="bg-slate-50 px-5 py-2.5 rounded-lg border border-slate-100 min-w-[90px]">
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">Rank</p>
                      <p className="text-xl font-bold text-[#0F172A] leading-none">{qualifier.rank}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

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
