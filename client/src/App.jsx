import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import Donate from "./pages/Donate";
import DonateForm from "./pages/DonateForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col h-full 2xl:container 2xl:mx-auto  w-full lg:p-10 lg:px-10">
        <Routes>
          <Route path="/" element={<Home />} />
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
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
