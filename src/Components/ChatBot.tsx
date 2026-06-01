import React, { useState } from "react";
import { FaComments, FaTimes, FaRobot } from "react-icons/fa";
import "./ChatBot.css";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button 
        className="chat-fab"
        onClick={toggleChat}
        aria-label="Open AI Chat Assistant"
      >
        <FaComments className="chat-icon" />
        <span className="chat-pulse"></span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div 
          className="chat-modal-overlay"
          onClick={toggleChat}
        >
          <div 
            className="chat-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="chat-modal-header">
              <div className="chat-header-info">
                <FaRobot className="chat-robot-icon" />
                <div>
                  <h3>PersonaRAG AI Assistant</h3>
                  <p className="chat-subtitle">Powered by Advanced RAG</p>
                </div>
              </div>
              <button 
                className="chat-close-btn"
                onClick={toggleChat}
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>

            <div className="chat-modal-content">
              <div className="under-construction-chat">
                <div className="construction-icon">🚧</div>
                <h2>AI Assistant Under Development</h2>
                <p>
                  The <strong>PersonaRAG AI Assistant</strong> is currently being developed. 
                  This intelligent chatbot will answer questions about my experience, 
                  skills, and projects using advanced Retrieval-Augmented Generation (RAG).
                </p>
                <div className="feature-list">
                  <div className="feature-item">
                    <span className="feature-icon">🤖</span>
                    <span>Personalized AI responses</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📚</span>
                    <span>Portfolio knowledge base</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">⚡</span>
                    <span>Real-time contextual answers</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">☁️</span>
                    <span>Cloud-hosted deployment</span>
                  </div>
                </div>
                <p className="status-message">
                  <strong>Status:</strong> Awaiting cloud deployment
                </p>
                <img
                  src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnFyNWFuNGM3ajM4M2RlYnlka2Jtb3U2b203eXUwaXFxcjU0ZnJzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VHOF8pfPZOt9p018zw/giphy.gif"
                  alt="Under Construction"
                  className="construction-gif"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
