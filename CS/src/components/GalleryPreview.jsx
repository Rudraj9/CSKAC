import { Link } from 'react-router-dom';
import { galleryData } from '../data/galleryData';

const GalleryPreview = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 right-10 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-10 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200/60 pb-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-[#F59E0B] tracking-widest uppercase mb-3">
              GALLERY
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Moments Beyond the Classroom
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Showcase the academic, cultural, and extracurricular experiences that define student life within the Department of Computer Science.
            </p>
          </div>
          
          <Link 
            to="/gallery" 
            className="group mt-6 md:mt-0 flex items-center text-sm font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors duration-300"
          >
            View Full Gallery 
            <span className="ml-1.5 inline-block transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#F59E0B]">
              &#8594;
            </span>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:auto-rows-[260px]">
          {galleryData.items.map((item) => (
            <div 
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-300 ${item.span} h-64 sm:h-72 md:h-full`}
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
              
              {/* Content on Hover */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-y-4 group-hover:translate-y-0">
                <span className="text-[#F59E0B] text-xs font-bold uppercase tracking-wider mb-2">
                  {item.category}
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;
