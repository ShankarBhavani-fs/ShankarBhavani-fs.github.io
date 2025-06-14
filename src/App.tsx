import React, { useEffect } from "react";
import Header from "./Components/Header";
import Summary from "./Components/Summary";
// import Skills from "./Components/Skills";
// import Education from "./Components/Education";
// import Experience from "./Components/Experience";
// import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import UnderConstruction from "./Components/UnderConstruction";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Container } from "react-bootstrap";
import "./App.css"; // Ensure App.css exists

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Summary />
        <UnderConstruction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
