import React, { useState } from "react";
import { 
  FaCertificate, 
  FaShieldAlt, 
  FaCode, 
  FaServer, 
  FaGlobe, 
  FaUsers, 
  FaAward,
  FaExternalLinkAlt,
  FaMedal,
  FaTrophy,
  FaStar,
  FaMicrosoft
} from "react-icons/fa";
import "./Achievements.css";

interface Achievement {
  id: number;
  title: string;
  category: "certification" | "security" | "engagement" | "award" | "leadership";
  icon: React.ComponentType<{ className?: string }>;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialId?: string;
  verificationLink?: string;
  highlights: string[];
  image?: string;
}

const Achievements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const achievementsData: Achievement[] = [
    {
      id: 1,
      title: "Go Programming Specialization",
      category: "certification",
      icon: FaCode,
      issuer: "University of California, Irvine",
      date: "2024",
      description: "Advanced Go programming course covering concurrency, web services, and distributed systems programming.",
      skills: ["Go", "Concurrency", "Web Services", "REST APIs", "Microservices"],
      credentialId: "ABC123XYZ",
      verificationLink: "https://coursera.org/verify/ABC123XYZ",
      highlights: [
        "Built scalable web applications using Go",
        "Implemented concurrent programming with goroutines",
        "Developed RESTful APIs and microservices",
        "Scored 98% in final assessment"
      ]
    },
    {
      id: 2,
      title: "Microsoft Azure DevOps Engineer Expert",
      category: "certification",
      icon: FaMicrosoft,
      issuer: "Microsoft",
      date: "2024",
      description: "Expert-level certification in Azure DevOps practices, CI/CD pipelines, and cloud infrastructure management.",
      skills: ["Azure", "DevOps", "CI/CD", "Docker", "Kubernetes", "Infrastructure as Code"],
      credentialId: "AZ-400-2024-001",
      verificationLink: "https://learn.microsoft.com/verify/AZ-400-2024-001",
      highlights: [
        "Implemented enterprise CI/CD pipelines",
        "Managed Azure cloud infrastructure at scale",
        "Automated deployment processes",
        "Reduced deployment time by 70%"
      ]
    },
    {
      id: 3,
      title: "OWASP Top 10 Security Specialist",
      category: "security",
      icon: FaShieldAlt,
      issuer: "OWASP Foundation",
      date: "2024",
      description: "Comprehensive cybersecurity certification focusing on web application security vulnerabilities and mitigation strategies.",
      skills: ["Cybersecurity", "Web Security", "Penetration Testing", "Vulnerability Assessment", "OWASP"],
      credentialId: "OWASP-SEC-2024",
      verificationLink: "https://owasp.org/verify/SEC-2024",
      highlights: [
        "Identified and fixed 50+ security vulnerabilities",
        "Conducted security audits for web applications",
        "Implemented secure coding practices",
        "Led security awareness training sessions"
      ]
    },
    {
      id: 4,
      title: "Global Student Engagement Ambassador",
      category: "engagement",
      icon: FaGlobe,
      issuer: "University of Illinois Chicago",
      date: "2025 - Present",
      description: "Leading international student engagement initiatives and cross-cultural programs at UIC.",
      skills: ["Leadership", "Cross-cultural Communication", "Event Management", "Public Speaking"],
      highlights: [
        "Organized 15+ cultural exchange events",
        "Mentored 100+ international students",
        "Increased student participation by 40%",
        "Collaborated with 20+ international organizations"
      ]
    },
    {
      id: 5,
      title: "Research Excellence Award",
      category: "award",
      icon: FaTrophy,
      issuer: "UIC College of Engineering",
      date: "2025",
      description: "Recognition for outstanding research contribution in machine learning and data analytics.",
      skills: ["Research", "Machine Learning", "Data Analytics", "Academic Writing"],
      highlights: [
        "Published research in IRJET journal",
        "Presented at 3 international conferences",
        "Achieved 94% accuracy in ML model",
        "Received $5,000 research grant"
      ]
    },
    {
      id: 6,
      title: "Docker & Kubernetes Administrator",
      category: "certification",
      icon: FaServer,
      issuer: "Cloud Native Computing Foundation",
      date: "2024",
      description: "Professional certification in container orchestration and cloud-native technologies.",
      skills: ["Docker", "Kubernetes", "Container Orchestration", "Cloud Native", "DevOps"],
      credentialId: "CKA-2024-456",
      verificationLink: "https://cncf.io/verify/CKA-2024-456",
      highlights: [
        "Deployed production Kubernetes clusters",
        "Managed containerized applications at scale",
        "Implemented monitoring and logging solutions",
        "Achieved 99.9% application uptime"
      ]
    },
    {
      id: 7,
      title: "Community Leadership Excellence",
      category: "leadership",
      icon: FaUsers,
      issuer: "IEEE Student Branch",
      date: "2023-2024",
      description: "Led technical community initiatives and student development programs.",
      skills: ["Leadership", "Team Management", "Technical Mentoring", "Event Organization"],
      highlights: [
        "Led team of 25+ student volunteers",
        "Organized 10+ technical workshops",
        "Increased membership by 60%",
        "Received 'Outstanding Leader' award"
      ]
    },
    {
      id: 8,
      title: "Full Stack JavaScript Developer",
      category: "certification",
      icon: FaCode,
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Comprehensive full-stack development certification covering modern JavaScript frameworks and tools.",
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express.js", "Full Stack Development"],
      credentialId: "FCC-JS-2023-789",
      verificationLink: "https://freecodecamp.org/verify/FCC-JS-2023-789",
      highlights: [
        "Built 10+ full-stack applications",
        "Mastered modern JavaScript frameworks",
        "Implemented responsive web designs",
        "Completed 300+ coding challenges"
      ]
    }
  ];

  const categories = [
    { key: "all", label: "All", icon: FaStar },
    { key: "certification", label: "Certifications", icon: FaCertificate },
    { key: "security", label: "Security", icon: FaShieldAlt },
    { key: "engagement", label: "Global Engagement", icon: FaGlobe },
    { key: "award", label: "Awards", icon: FaAward },
    { key: "leadership", label: "Leadership", icon: FaUsers }
  ];

  const filteredAchievements = selectedCategory === "all" 
    ? achievementsData 
    : achievementsData.filter(achievement => achievement.category === selectedCategory);

  const toggleExpand = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="achievements-section" data-aos="fade-up">
      <div className="container">
        <div className="achievements-header">
          <h2 className="achievements-title">Achievements & Certifications</h2>
          <p className="achievements-subtitle">
            Click on any book to explore my professional achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.key}
                className={`category-btn ${selectedCategory === category.key ? "active" : ""}`}
                onClick={() => setSelectedCategory(category.key)}
              >
                <Icon className="category-icon" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Bookshelf Display */}
        <div className="bookshelf">
          <div className="shelf">
            {filteredAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={achievement.id} 
                  className={`book ${achievement.category}`}
                  onClick={() => toggleExpand(achievement.id)}
                  data-aos="zoom-in" 
                  data-aos-delay={index * 50}
                  title={achievement.title}
                >
                  <div className="book-spine">
                    <Icon className="book-icon" />
                    <span className="book-title">{achievement.title}</span>
                    <span className="book-year">{achievement.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expanded Modal */}
        {expandedItem && (
          <div className="achievement-modal-overlay" onClick={() => setExpandedItem(null)}>
            <div className="achievement-modal" onClick={(e) => e.stopPropagation()}>
              {(() => {
                const achievement = achievementsData.find(a => a.id === expandedItem);
                if (!achievement) return null;
                const Icon = achievement.icon;
                
                return (
                  <>
                    <button className="modal-close" onClick={() => setExpandedItem(null)}>×</button>
                    
                    <div className="modal-header">
                      <div className="modal-icon-wrapper">
                        <Icon className="modal-icon" />
                      </div>
                      <div className="modal-info">
                        <h3 className="modal-title">{achievement.title}</h3>
                        <div className="modal-meta">
                          <span className="modal-issuer">{achievement.issuer}</span>
                          <span className="modal-date">{achievement.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="modal-content">
                      <p className="modal-description">{achievement.description}</p>
                      
                      <div className="skills-section">
                        <h4>Skills & Technologies</h4>
                        <div className="skills-tags">
                          {achievement.skills.map((skill, idx) => (
                            <span key={idx} className="skill-tag">{skill}</span>
                          ))}
                        </div>
                      </div>

                      <div className="highlights-section">
                        <h4>Key Highlights</h4>
                        <ul className="highlights-list">
                          {achievement.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                      </div>

                      {(achievement.verificationLink || achievement.credentialId) && (
                        <div className="verification-section">
                          {achievement.credentialId && (
                            <div className="credential-id">
                              <FaMedal className="credential-icon" />
                              <span>Credential ID: {achievement.credentialId}</span>
                            </div>
                          )}
                          {achievement.verificationLink && (
                            <a 
                              href={achievement.verificationLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="verify-link"
                            >
                              <FaExternalLinkAlt />
                              Verify Certificate
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;