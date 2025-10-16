import React, { useState, useEffect } from "react";
import { 
  FaLinkedin, 
  FaGithub, 
  FaUser, 
  FaCogs, 
  FaGraduationCap, 
  FaBriefcase, 
  FaProjectDiagram,
  FaBars,
  FaTimes,
  FaEnvelope
} from "react-icons/fa";
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

  const navigationItems: NavItem[] = [
    { id: 'summary', label: 'About', icon: FaUser, href: '#summary' },
    { id: 'skills', label: 'Skills', icon: FaCogs, href: '#skills' },
    { id: 'education', label: 'Education', icon: FaGraduationCap, href: '#education' },
    { id: 'experience', label: 'Experience', icon: FaBriefcase, href: '#experience' },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram, href: '#projects' }
  ];

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
    <header className={`professional-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        {/* Logo/Brand */}
        <div className="brand-section">
          <div className="brand-name">
            <span className="first-name">Bhavani</span>
            <span className="last-name">Shankar</span>
          </div>
          <div className="brand-title">AI Software Engineer</div>
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
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
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

        {/* Social Links & Contact */}
        <div className="header-actions">
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/shankar-bhavani"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ExperimenterX"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="social-link email"
              aria-label="Send Email"
            >
              <FaEnvelope />
            </a>
          </div>
          
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
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.id} className="mobile-nav-item">
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
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
  );
};

export default Header;
