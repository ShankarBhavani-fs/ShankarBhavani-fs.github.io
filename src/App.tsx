import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Summary from "./Components/Summary";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Footer from "./Components/Footer";
import { useAnalytics } from "./hooks/useAnalytics";
import { FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Container } from "react-bootstrap";
import "./App.css"; // Ensure App.css exists

const App: React.FC = () => {
  // Initialize analytics tracking
  useAnalytics();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const summaryElement = document.getElementById('summary');
    if (summaryElement) {
      summaryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Summary />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default App;
