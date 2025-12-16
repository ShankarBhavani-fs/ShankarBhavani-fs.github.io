import React, { useEffect } from "react";
import Header from "./Components/Header";
import Summary from "./Components/Summary";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Footer from "./Components/Footer";
import { useAnalytics } from "./hooks/useAnalytics";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Container } from "react-bootstrap";
import "./App.css"; // Ensure App.css exists

const App: React.FC = () => {
  // Initialize analytics tracking
  useAnalytics();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
    </div>
  );
};

export default App;
