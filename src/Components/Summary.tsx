import React, { useState, useEffect } from "react";
import "./Summary.css"; // Ensure this CSS file exists

const summaryText = `  Welcome to my portfolio! I am Bhavani Shankar, a passionate software developer with expertise in full-stack development, Responsible AI, cloud computing, and automation. This portfolio showcases my work, skills, and projects that highlight my commitment to innovation and performance optimization.`;

const Summary: React.FC = () => {
  const [text, setText] = useState("Hover to start...");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    if (isTyping) {
      setText(""); // Clear the text before typing starts
      interval = setInterval(() => {
        if (index < summaryText.length) {
          setText((prev) => prev + summaryText[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30); // Faster typing speed
    }

    return () => clearInterval(interval);
  }, [isTyping]);

  return (
    <div className="summary-container">
      <div
        className="card"
        onMouseEnter={() => setIsTyping(true)}
        onMouseLeave={() => {
          setIsTyping(false);
          setText("Know about me...");
        }}
      >
        <div className="border-animation"></div> {/* Rotating Red Border */}
        <div className="bg"></div>
        <div className="blob"></div>
        <div className={`content ${isTyping ? "left-align" : "center-text"}`}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
