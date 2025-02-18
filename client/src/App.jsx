import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Donate from "./pages/Donate";
import DonateForm from "./pages/DonateForm";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/admin/Login";
import Projects from "./pages/project/Projects";
import Admin from "./pages/admin/Admin";
import ProjectDetails from "./pages/project/ProjectDetails";
import StartProject from "./pages/project/StartProject";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/ui/Footer";
import MaybeShowComponent from "./components/ui/MaybeShowComponent";
import ScrollToTop from "./components/ui/ScrollToTop";
function App() {
  const location = useLocation();
  return (
    <>
      <MaybeShowComponent>
        <Navbar />
      </MaybeShowComponent>
      <div
        className={`flex flex-col h-full  w-full ${
          location.pathname.startsWith("/admin")
            ? "lg:p-0"
            : "lg:p-[4rem] 2xl:container 2xl:mx-auto"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route
            path="/projects"
            element={
              <>
                <ScrollToTop />
                <Projects />
              </>
            }
          />
          <Route
            path="/donate"
            element={
              <>
                <ScrollToTop />
                <Donate />
              </>
            }
          />
          <Route
            path="/donate/:id"
            element={
              <>
                <ScrollToTop />
                <DonateForm />
              </>
            }
          />
          <Route
            path="/project-details/:id"
            element={
              <>
                <ScrollToTop />
                <ProjectDetails />
              </>
            }
          />
          <Route
            path="/start-project"
            element={
              <>
                <ScrollToTop />
                <StartProject />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ScrollToTop />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
      <MaybeShowComponent>
        <Footer />
      </MaybeShowComponent>
    </>
  );
}

export default App;
