import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Project";
import { Experiences } from "./components/pages/Experience";
import { Articles } from "./components/pages/Article";
import { Footer } from "./components/elements/Footer";
import { Navbar } from "./components/elements/Navbar";
import { ScrollToTop } from "./components/elements/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </Router>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
