import { useDocumentTitle } from "../hooks/useDocumentTitle";
// src/pages/Gallery.jsx
import { useState } from 'react';
import { galleryData } from '../data/galleryData';
import building from '../assets/hero/building.webp';

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
  const { hero } = galleryData;
  return (
    <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      {/* background */}
      <img
        src={building}
        alt="Department Building"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        style={{ filter: "brightness(0.3) saturate(1.1)" }}
      />
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

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 2 — STATISTICS
═══════════════════════════════════════════════ */
const StatsSection = () => {
  const { stats } = galleryData;
  return (
    <section className="bg-[#0F172A] pb-16 pt-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg hover:border-amber-400/30 transition-colors">
              <p className="text-3xl md:text-4xl font-serif font-bold text-amber-400 mb-2">{s.value}</p>
              <p className="text-white/60 text-xs md:text-sm font-semibold tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 3 & 4 — FILTER & GALLERY GRID
═══════════════════════════════════════════════ */
const MainGallerySection = ({ onOpenModal }) => {
  const { categories, items } = galleryData;
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section className="bg-[#0F172A] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12">
          <Tag text="Memories" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white mb-10">
            Event Highlights
          </h2>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-amber-400 text-[#0F172A] shadow-md shadow-amber-400/20"
                    : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenModal(item, filteredItems, idx)}
              className="group cursor-pointer rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-amber-400/40 transition-all duration-500 shadow-xl flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-400 text-[#0F172A] px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-white font-serif text-xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                  {item.description}
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <span className="text-white/40 text-xs font-medium tracking-wider">
                    {item.date}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-400/20 group-hover:border-amber-400/50 transition-colors">
                    <svg className="w-4 h-4 text-white/50 group-hover:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/50 text-lg">No events found for this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 5 — FEATURED EVENTS
═══════════════════════════════════════════════ */
const FeaturedEventsSection = ({ onOpenModal }) => {
  const { featured } = galleryData;
  return (
    <section className="bg-[#0a1020] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Tag text="Spotlight" />
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
              Featured Events
            </h2>
          </div>
          <p className="text-white/50 max-w-md md:text-right">
            A glimpse into our most celebrated and impactful moments that define our department's legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onOpenModal(item, featured, idx)}
              className={`group cursor-pointer relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-amber-400/40 transition-all duration-500 ${
                item.isLarge ? 'lg:col-span-2' : 'lg:col-span-1'
              } h-[400px] lg:h-[500px]`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-400 text-[#0F172A] px-3 py-1.5 rounded-md mb-4 inline-block">
                  {item.category}
                </span>
                <h3 className="text-white font-serif text-2xl lg:text-3xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm lg:text-base leading-relaxed max-w-xl mb-4">
                  {item.description}
                </p>
                <p className="text-white/40 text-xs font-semibold tracking-wider uppercase">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   SECTION 7 — STUDENT LIFE
═══════════════════════════════════════════════ */
const StudentLifeSection = () => {
  const { studentLife } = galleryData;
  return (
    <section className="bg-[#0F172A] py-20 lg:py-32 relative overflow-hidden">
      {/* decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <Tag text="Culture" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-bold text-white">
            Student Life & Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {studentLife.map((item, idx) => (
            <div key={idx} className="bg-[#0a1020] border border-white/5 rounded-2xl p-8 hover:bg-white/5 hover:border-amber-400/20 transition-all duration-300 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-4">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════
   LIGHTBOX MODAL
═══════════════════════════════════════════════ */
const LightboxModal = ({ isOpen, onClose, currentItem, onNext, onPrev }) => {
  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/95 backdrop-blur-sm p-4 sm:p-8">
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-[#0F172A] transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      {/* Navigation Buttons */}
      <button 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-[#0F172A] transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-amber-400 hover:text-[#0F172A] transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      {/* Modal Content */}
      <div 
        className="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-[#0a1020]">
          <img 
            src={currentItem.image} 
            alt={currentItem.title}
            className="w-full max-h-[70vh] object-contain bg-black"
          />
          <div className="p-6 sm:p-8 bg-gradient-to-t from-[#0F172A] to-[#0F172A]/90">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-400 text-[#0F172A] px-2.5 py-1 rounded-md mb-2 inline-block">
                  {currentItem.category}
                </span>
                <h3 className="text-white font-serif text-2xl font-bold">{currentItem.title}</h3>
              </div>
              <span className="text-white/40 text-sm font-semibold tracking-wider uppercase border border-white/10 px-4 py-2 rounded-full whitespace-nowrap">
                {currentItem.date}
              </span>
            </div>
            <p className="text-white/70 text-base leading-relaxed max-w-3xl">
              {currentItem.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════ */
const Gallery = () => {
  useDocumentTitle("Photo Gallery");
  const [modalState, setModalState] = useState({
    isOpen: false,
    currentItem: null,
    itemsList: [],
    currentIndex: 0
  });

  const handleOpenModal = (item, list, index) => {
    setModalState({
      isOpen: true,
      currentItem: item,
      itemsList: list,
      currentIndex: index
    });
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setModalState({ ...modalState, isOpen: false });
    document.body.style.overflow = 'auto';
  };

  const handleNext = () => {
    const { itemsList, currentIndex } = modalState;
    const nextIndex = (currentIndex + 1) % itemsList.length;
    setModalState({
      ...modalState,
      currentItem: itemsList[nextIndex],
      currentIndex: nextIndex
    });
  };

  const handlePrev = () => {
    const { itemsList, currentIndex } = modalState;
    const prevIndex = (currentIndex - 1 + itemsList.length) % itemsList.length;
    setModalState({
      ...modalState,
      currentItem: itemsList[prevIndex],
      currentIndex: prevIndex
    });
  };

  return (
    <main className="bg-[#0F172A] min-h-screen font-sans">
      <HeroSection />
      <StatsSection />
      <MainGallerySection onOpenModal={handleOpenModal} />
      <FeaturedEventsSection onOpenModal={handleOpenModal} />
      <StudentLifeSection />
      
      <LightboxModal 
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        currentItem={modalState.currentItem}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </main>
  );
};

export default Gallery;
