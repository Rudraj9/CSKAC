import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import FacultyPreview from "../components/FacultyPreview";
import ResearchPreview from "../components/ResearchPreview";
import AchievementsPreview from "../components/AchievementsPreview";
import GalleryPreview from "../components/GalleryPreview";

function Home() {
  return (
    <>
      <Hero />
       <AboutPreview />
       <FacultyPreview />
       <ResearchPreview />
       <AchievementsPreview />
       <GalleryPreview />
    </>
  );
}

export default Home;