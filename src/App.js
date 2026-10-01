import React, { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = lazy(() => import("./components/Projects/Projects"));
const About = lazy(() => import("./components/About/About"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const showAssistant = false;

function App() {
  useEffect(() => {
    if (!showAssistant) {
      document.querySelector("script[data-elevenlabs]")?.remove();
      return;
    }

    const loadWidget = () => {
      if (document.querySelector("script[data-elevenlabs]")) {
        return;
      }
      const script = document.createElement("script");
      script.src = "https://elevenlabs.io/convai-widget/index.js";
      script.async = true;
      script.dataset.elevenlabs = "true";
      document.body.appendChild(script);
    };

    const timer = window.setTimeout(loadWidget, 4000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id="scroll">
        <Navbar />
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <Footer />

        {showAssistant && (
          <div className="ai-assistant">
            <elevenlabs-convai agent-id="zv4NEtyQeJacOTp6ywfS"></elevenlabs-convai>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
