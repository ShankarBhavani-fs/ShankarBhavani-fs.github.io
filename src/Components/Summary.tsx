import React, { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "./Summary.css"; // Ensure this CSS file exists

const summaryText = ` Welcome to my portfolio! I am Bhavani Shankar, a passionate software developer with expertise in full-stack development, Responsible AI, cloud computing, and automation. This portfolio showcases my work, skills, and projects that highlight my commitment to innovation.`;

const Summary: React.FC = () => {
  const [text, setText] = useState("Hover to start...");
  const [isTyping, setIsTyping] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 300); // Small delay for better visual effect

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    if (isTyping) {
      setText(""); // Clear the text before typing starts
      interval = setInterval(() => {
        if (index < summaryText.length) {
          setText(summaryText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30); // Faster typing speed
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTyping]);

  return (
    <div id="summary" className="summary-container">
      <div className="summary-content">
        <div className="text-section">
          <div
            className="text-content"
            onMouseEnter={() => setIsTyping(true)}
            onMouseLeave={() => {
              setIsTyping(false);
              setText("Know about me...");
            }}
          >
            <p className={`summary-text ${isTyping ? "typing" : "center-text"}`}>
              {text}
            </p>
          </div>
        </div>
        <div className={`animation-section ${showAnimation ? "slide-in" : ""}`}>
          <DotLottieReact
            src="https://lottie.host/78506dd9-82fc-411b-ab6e-82ef1a4625cc/H5U0gjU2zV.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;
