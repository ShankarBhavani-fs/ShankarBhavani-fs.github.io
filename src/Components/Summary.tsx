import React, { useState, useEffect } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "./Summary.css"; // Ensure this CSS file exists

const summaryText = ` Welcome to my portfolio! I am Bhavani Shankar, an MSCS student at the University of Illinois Chicago and former Senior Software Engineer at Bosch Global Software Technologies. I specialize in full-stack development, Responsible AI, cloud computing, automation, and building scalable software systems using React, Python, Golang, PostgreSQL, Docker, and cloud platforms. This portfolio showcases my experience, projects, and technical journey in software engineering and AI-driven application development. Explore my work and achievements, and feel free to connect with me! `;

const Summary: React.FC = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  // Auto-play typing animation on mount
  useEffect(() => {
    const animTimer = setTimeout(() => {
      setShowAnimation(true);
    }, 300);

    const typingTimer = setTimeout(() => {
      setIsTyping(true);
    }, 500); // Start typing shortly after component mounts

    return () => {
      clearTimeout(animTimer);
      clearTimeout(typingTimer);
    };
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
          setIsTyping(false);
          setHasPlayedOnce(true);
        }
      }, 5); // Faster typing speed
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTyping]);

  const handleReplay = () => {
    if (hasPlayedOnce && !isTyping) {
      setIsTyping(true);
    }
  };

  return (
    <div id="summary" className="summary-container">
      <div className="summary-content">
        <div className="text-section">
          <div
            className="text-content"
            onMouseEnter={handleReplay}
          >
            <p className={`summary-text ${isTyping ? "typing" : ""}`}>
              {text}
            </p>
            {hasPlayedOnce && !isTyping && (
              <p className="replay-hint">Hover to replay ↻</p>
            )}
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
