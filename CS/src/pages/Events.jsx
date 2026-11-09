import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { galleryData } from '../data/galleryData';

function Events() {
  useDocumentTitle("Department Events");
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Department Events</h1>
      <p className="text-slate-600 mb-10">Explore past department activities and celebrations.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.items.map(event => (
          <article key={event.id} className="rounded-xl border border-slate-200 overflow-hidden bg-white">
            <img src={event.image} alt={event.title} loading="lazy" className="w-full h-48 object-cover" />
            <div className="p-6">
              <p className="text-sm text-amber-700 mb-2">{event.date} · {event.category}</p>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h2>
              <p className="text-slate-600">{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Events;
