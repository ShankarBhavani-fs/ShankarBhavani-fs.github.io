import React, { useState } from "react";
import { 
  FaCertificate, 
  FaShieldAlt, 
  FaCode, 
  FaGlobe, 
  FaUsers, 
  FaAward,
  FaExternalLinkAlt,
  FaTrophy,
  FaStar,
  FaMicrosoft,
  FaCloud,
  FaTools,
  FaBrain
} from "react-icons/fa";
import { SiUdemy, SiAmazon } from "react-icons/si";
import "./Achievements.css";

interface Item {
  id: number;
  title: string;
  type: "certificate" | "achievement";
  icon: React.ComponentType<{ className?: string }>;
  provider: string;
  link?: string;
  color: string;
}

const Achievements: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all");

  const items: Item[] = [
    { id: 1, title: "Go Programming Specialization", type: "certificate", icon: FaCode, provider: "UC Irvine", link: "#", color: "#00D4FF" },
    { id: 2, title: "Azure DevOps Engineer Expert", type: "certificate", icon: FaMicrosoft, provider: "Microsoft", link: "#", color: "#0078D4" },
    { id: 3, title: "Python Developer Bootcamp", type: "certificate", icon: SiUdemy, provider: "Udemy", link: "#", color: "#A435F0" },
    { id: 4, title: "AWS Solutions Architect", type: "certificate", icon: SiAmazon, provider: "Amazon", link: "#", color: "#FF9900" },
    { id: 5, title: "Cybersecurity Fundamentals", type: "certificate", icon: FaShieldAlt, provider: "Google", link: "#", color: "#4285F4" },
    { id: 6, title: "React Advanced Patterns", type: "certificate", icon: FaCode, provider: "Udemy", link: "#", color: "#A435F0" },
    { id: 7, title: "Docker & Kubernetes", type: "certificate", icon: FaTools, provider: "Udemy", link: "#", color: "#A435F0" },
    { id: 8, title: "Machine Learning Specialization", type: "certificate", icon: FaBrain, provider: "Stanford", link: "#", color: "#00D4FF" },
    { id: 9, title: "Node.js Complete Guide", type: "certificate", icon: FaCode, provider: "Udemy", link: "#", color: "#A435F0" },
    { id: 10, title: "Cloud Computing Basics", type: "certificate", icon: FaCloud, provider: "IBM", link: "#", color: "#1261FE" },
    
    { id: 11, title: "Research Excellence Award", type: "achievement", icon: FaTrophy, provider: "UIC Engineering", color: "#FFD700" },
    { id: 12, title: "Global Student Ambassador", type: "achievement", icon: FaGlobe, provider: "UIC", color: "#10b981" },
    { id: 13, title: "IEEE Outstanding Leader", type: "achievement", icon: FaUsers, provider: "IEEE", color: "#8b5cf6" },
    { id: 14, title: "Hackathon Winner", type: "achievement", icon: FaAward, provider: "TechFest 2024", color: "#f59e0b" },
    { id: 15, title: "Open Source Contributor", type: "achievement", icon: FaStar, provider: "GitHub", link: "#", color: "#24292f" },
  ];

  const filteredItems = selectedType === "all" 
    ? items 
    : items.filter(item => item.type === selectedType);

  return (
    <section className="achievements-section" data-aos="fade-up">
      <div className="container">
        <div className="achievements-header">
          <h2 className="achievements-title">Achievements & Certifications</h2>
          <p className="achievements-subtitle">
            Professional certifications and notable achievements
          </p>
        </div>

        <div className="type-filter">
          <button
            className={`filter-btn ${selectedType === "all" ? "active" : ""}`}
            onClick={() => setSelectedType("all")}
          >
            <FaStar className="filter-icon" />
            All ({items.length})
          </button>
          <button
            className={`filter-btn ${selectedType === "certificate" ? "active" : ""}`}
            onClick={() => setSelectedType("certificate")}
          >
            <FaCertificate className="filter-icon" />
            Certificates ({items.filter(i => i.type === "certificate").length})
          </button>
          <button
            className={`filter-btn ${selectedType === "achievement" ? "active" : ""}`}
            onClick={() => setSelectedType("achievement")}
          >
            <FaAward className="filter-icon" />
            Achievements ({items.filter(i => i.type === "achievement").length})
          </button>
        </div>

        <div className="items-grid">
          {filteredItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="item-card"
                data-aos="zoom-in" 
                data-aos-delay={index * 50}
                style={{ "--item-color": item.color } as React.CSSProperties}
              >
                <div className="item-icon">
                  <Icon />
                </div>
                <div className="item-content">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-provider">{item.provider}</p>
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="item-link"
                    aria-label={`View ${item.title} certificate`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-results">
            <p>No items found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
