import React, { useState } from "react";
import { 
  FaCertificate, 
  FaExternalLinkAlt,
  FaTrophy,
  FaGlobe,
  FaTimes,
  FaBookOpen,
  FaMedal,
  FaBriefcase
} from "react-icons/fa";
import certificatesData from "../data/data.json";
import "./Achievements.css";

interface Certificate {
  course_title: string;
  certificate_url: string;
  certificate_no: string;
  date_completed: string;
  length: string;
  instructors: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  provider: string;
  type: string;
  link?: string;
}

interface AchievementWithIcon extends Achievement {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const Achievements: React.FC = () => {
  const [showCertificatesModal, setShowCertificatesModal] = useState<boolean>(false);

  const certificates: Certificate[] = certificatesData.certificates;
  const achievements: Achievement[] = certificatesData.achievements;

  // Function to get icon and color based on achievement type/category
  const getAchievementIcon = (achievement: Achievement): { icon: React.ComponentType<{ className?: string }>, color: string } => {
    if (achievement.type === 'publication' || achievement.category.includes('Research')) {
      return { icon: FaBookOpen, color: '#3b82f6' }; // Blue for research/publications
    }
    if (achievement.type === 'scholarship' || achievement.category.includes('Academic')) {
      return { icon: FaMedal, color: '#f59e0b' }; // Gold for academic achievements
    }
    if (achievement.type === 'engagement' || achievement.category.includes('Cultural')) {
      return { icon: FaGlobe, color: '#10b981' }; // Green for global/cultural
    }
    // Default fallback
    return { icon: FaTrophy, color: '#8b5cf6' }; // Purple for general achievements
  };

  const achievementsWithIcons: AchievementWithIcon[] = achievements.map(achievement => {
    const { icon, color } = getAchievementIcon(achievement);
    return { ...achievement, icon, color };
  });

  const openCertificatesModal = () => {
    setShowCertificatesModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificatesModal = () => {
    setShowCertificatesModal(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="achievements" className="achievements-section" data-aos="fade-up">
      <div className="container">
        <div className="section-header">
          <FaBriefcase className="section-icon" />
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className="section-subtitle">Professional Growth & Recognition</div>
        </div>

        {/* Certifications Section */}
        <div className="section-subsection">
          <div className="subsection-header">
            <FaCertificate className="subsection-icon" />
            <h3>Certifications</h3>
          </div>
          
          <div className="certificate-box" onClick={openCertificatesModal}>
            <div className="certificate-box-content">
              <FaCertificate className="certificate-blueprint-icon" />
              <h4>Show All Certificates</h4>
              {/* <p>{certificates.length} Certificates Available</p> */}
              <span className="view-all-text">Click to view all →</span>
            </div>
          </div>
        </div>
        
        {/* Achievements Section */}
        <div className="section-subsection">
          <div className="subsection-header">
            <FaTrophy className="subsection-icon" />
            <h3>Achievements</h3>
          </div>
          
          <div className="achievements-grid">
            {achievementsWithIcons.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={achievement.id} 
                  className="achievement-card"
                  data-aos="zoom-in" 
                  data-aos-delay={index * 50}
                  style={{ "--item-color": achievement.color } as React.CSSProperties}
                >
                  <div className="achievement-icon">
                    <IconComponent />
                  </div>
                  <div className="achievement-info">
                    <h4 className="achievement-title">{achievement.title}</h4>
                    <p className="achievement-provider">{achievement.provider}</p>
                  </div>
                  {achievement.link && achievement.link !== "#" && (
                    <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="achievement-link">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificates Modal */}
        {showCertificatesModal && (
          <div className="modal-overlay" onClick={closeCertificatesModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>All Certificates</h3>
                <button 
                  className="modal-close" 
                  onClick={closeCertificatesModal}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="certificates-list">
                {certificates.map((cert, index) => (
                  <div key={index} className="certificate-item">
                    <div className="certificate-item-content">
                      <FaCertificate className="certificate-item-icon" />
                      <h4 className="certificate-title">{cert.course_title}</h4>
                    </div>
                    <a 
                      href={`https://${cert.certificate_url}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      View Certificate <FaExternalLinkAlt />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;
