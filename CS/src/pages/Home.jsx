import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import FacultyPreview from "../components/FacultyPreview";
import AchievementsPreview from "../components/AchievementsPreview";
import AlumniPreview from "../components/AlumniPreview";
import GalleryPreview from "../components/GalleryPreview";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function Home() {
  useDocumentTitle("Home");
  return (
    <>
      <Hero />
      <AboutPreview />
      <FacultyPreview />
      <AchievementsPreview />
      <AlumniPreview />
      <GalleryPreview />
    </>
  );
}

export default Home;
