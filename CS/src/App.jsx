import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import PublicLayout from "./layouts/PublicLayout";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Courses from "./pages/Courses";
import Notices from "./pages/Notices";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { Research, Achievements, Unavailable, NotFound } from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with Navbar/Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/research" element={<Research />} />
          <Route path="/achievements" element={<Achievements />} />
          {['syllabus', 'question-papers', 'labs', 'projects', 'alumni', 'placement', 'privacy', 'terms'].map(path => (
            <Route key={path} path={`/${path}`} element={<Unavailable />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
