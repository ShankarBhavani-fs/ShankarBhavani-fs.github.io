import React, { useState, useEffect, useMemo } from "react";
import { 
  FaCogs, 
  FaGraduationCap, 
  FaBriefcase, 
  FaProjectDiagram,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaTrophy,
  FaDownload
} from "react-icons/fa";
import profileImage from "../assets/newhs-bs.jpeg";
import resumePDF from "../data/Bhavani-Shankar_2026_Grad-FS.pdf";
import "./Header.css";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('summary');
  const [showImageModal, setShowImageModal] = useState(false);

  const navigationItems: NavItem[] = useMemo(() => [
    { id: 'skills', label: 'Skills', icon: FaCogs, href: '#skills' },
    { id: 'education', label: 'Education', icon: FaGraduationCap, href: '#education' },
    { id: 'experience', label: 'Experience', icon: FaBriefcase, href: '#experience' },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram, href: '#projects' },
    { id: 'achievements', label: 'Achievements', icon: FaTrophy, href: '#achievements' },
    { id: 'footer', label: 'Contact', icon: FaEnvelope, href: '#footer' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
    <header className={`professional-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        {/* Profile Section */}
        <div className="profile-section">
          <div 
            className="profile-image-wrapper"
            onClick={() => setShowImageModal(true)}
            style={{ cursor: 'pointer' }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setShowImageModal(true)}
            aria-label="View profile picture"
          >
            <img
              src={profileImage}
              alt="Bhavani Shankar, AI Software Engineer and MSCS student at UIC"
              className="profile-image"
            />
          </div>
          <div
            className="brand-section"
            onClick={() => handleNavClick("#summary")}
            style={{ cursor: "pointer" }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && handleNavClick("#summary")
            }
          >
            <div className="brand-name">
              <span className="first-name">Bhavani</span>
              <span className="last-name">Shankar</span>
            </div>
            <div className="brand-title">AI Software Engineer</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="nav-list">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <IconComponent className="nav-icon" />
                    <span className="nav-text">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Download Resume Button */}
          <a
            href={resumePDF}
            download="Bhavani_Shankar_Resume.pdf"
            className="resume-download-btn"
            aria-label="Download Resume"
          >
            <FaDownload />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="mobile-nav-list">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id} className="mobile-nav-item">
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <IconComponent className="mobile-nav-icon" />
                    <span className="mobile-nav-text">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>

    {/* Image Modal - Outside header for full screen overlay */}
    {showImageModal && (
      <div 
        className="image-modal-overlay"
        onClick={() => setShowImageModal(false)}
      >
        <img 
          src={profileImage} 
          alt="Bhavani Shankar" 
          className="modal-profile-image"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
    </>
  );
};

export default Header;
