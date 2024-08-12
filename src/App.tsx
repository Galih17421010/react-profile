import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Projects } from "./components/pages/Project";
import DetailProject from "./components/pages/DetailProject";
import { Experiences } from "./components/pages/Experience";
import { Resume } from "./components/pages/Resume";
import { Articles } from "./components/pages/Article";
import { NotFound } from "./components/pages/404";
import { Footer } from "./components/elements/Footer";
import { Navbar } from "./components/elements/Navbar";
import { ScrollToTop } from "./components/elements/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

interface RouteProps {
  element: React.ReactNode;
  path: string;
}

const routeList: RouteProps[] = [
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <About />,
    path: "/about",
  },
  {
    element: <Projects />,
    path: "/projects",
  },
  {
    element: <DetailProject />,
    path: "/projects/:slug",
  },
  {
    element: <Experiences />,
    path: "/experiences",
  },
  {
    element: <Resume />,
    path: "/resume",
  },
  {
    element: <Articles />,
    path: "/articles",
  },
  {
    element: <NotFound />,
    path: "*",
  },
];

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {routeList.map((route: RouteProps, i) => (
            <Route path={route.path} element={route.element} key={i} />
          ))}
        </Routes>
      </Router>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
