import { Link, useLocation } from 'react-router-dom';
import ResearchPreview from '../components/ResearchPreview';
import AchievementsPreview from '../components/AchievementsPreview';

export function Research() {
  return <><h1 className="sr-only">Department Research</h1><ResearchPreview /></>;
}

export function Achievements() {
  return <><h1 className="sr-only">Student Achievements</h1><AchievementsPreview /></>;
}

export function Unavailable() {
  const { pathname } = useLocation();
  const title = pathname.split('/').filter(Boolean).at(-1)?.replaceAll('-', ' ') || 'Page';
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 min-h-[50vh]">
      <h1 className="text-3xl font-bold text-slate-900 capitalize mb-4">{title}</h1>
      <p className="text-slate-600 mb-6">This section is not available yet. No content or management tools have been added for it.</p>
      <Link to="/" className="text-amber-700 underline">Return to the department homepage</Link>
    </section>
  );
}

export function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 min-h-[50vh]">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Page not found</h1>
      <p className="text-slate-600 mb-6">The requested page does not exist.</p>
      <Link to="/" className="text-amber-700 underline">Return to the department homepage</Link>
    </section>
  );
}
