import React, { useEffect, useState, useCallback } from "react";
import {
  FaBriefcase,
  FaRocket,
  FaCogs,
  FaCode,
  FaServer,
  FaUniversity,
  FaLaptopCode,
  FaDatabase,
  FaGitAlt,
  FaBuilding,
} from "react-icons/fa";
import { SiLinux, SiReact } from "react-icons/si";
import "./Experience.css";

interface Achievement {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  impact: string;
}

interface ExperienceItem {
  id: number;
  company: string;
  logo: React.ComponentType<{ className?: string }>;
  position: string;
  duration: string;
  location: string;
  type: "full-time" | "internship" | "part-time";
  description: string;
  achievements: Achievement[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const experienceDataRaw: ExperienceItem[] = [
    {
      id: 1,
      company: "University of Illinois at Chicago",
      logo: FaUniversity,
      position: "Graduate Research Assistant",
      duration: "Aug 2025 – Present",
      location: "Chicago, IL",
      type: "part-time",
      description:
        "Currently working as a Graduate Research Assistant at UIC College of Engineering, developing full-stack applications and research tools using modern web technologies.",
      achievements: [
        {
          icon: FaLaptopCode,
          title: "Full-Stack Development",
          description: "Developing web applications using React, Node.js, and MySQL",
          impact: "Enhanced research productivity",
        },
        {
          icon: FaDatabase,
          title: "Database Management",
          description: "Managing databases using MySQL and phpMyAdmin",
          impact: "Improved data accessibility for research",
        },
      ],
      technologies: ["React", "Node.js", "MySQL", "phpMyAdmin", "JavaScript", "HTML5", "CSS3"],
    },
    {
      id: 2,
      company: "Bosch Rexroth USA",
      logo: FaBuilding,
      position: "Software Engineering Intern",
      duration: "Jun 2025 – Aug 2025",
      location: "Hoffman Estates, IL",
      type: "internship",
      description:
        "Internship focused on industrial automation solutions and software development for manufacturing systems.",
      achievements: [
        {
          icon: FaCogs,
          title: "Automation Solutions",
          description: "Worked on industrial automation software development",
          impact: "Gained expertise in manufacturing software systems",
        },
        {
          icon: FaCode,
          title: "Software Development",
          description: "Contributed to software projects using various technologies",
          impact: "Enhanced development skills",
        },
      ],
      technologies: ["Python", "Java", "REST APIs", "Microservices", "Jenkins", "Git"],
    },
    {
      id: 3,
      company: "University of Illinois at Chicago",
      logo: FaUniversity,
      position: "Graduate Hourly - Web Developer",
      duration: "May 2025 – Aug 2025",
      location: "Chicago, IL",
      type: "part-time",
      description:
        "Worked as a web developer for UIC College of Engineering, developing and maintaining web applications and digital solutions.",
      achievements: [
        {
          icon: SiReact,
          title: "Web Development",
          description: "Built responsive web applications using React and modern frameworks",
          impact: "Improved user experience for college systems",
        },
        {
          icon: FaDatabase,
          title: "Database Integration",
          description: "Integrated MySQL databases with web applications",
          impact: "Enhanced data management capabilities",
        },
      ],
      technologies: ["React", "Node.js", "MySQL", "phpMyAdmin", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
      id: 4,
      company: "Bosch Global Software Technologies",
      logo: FaBuilding,
      position: "Senior Software Engineer",
      duration: "Dec 2023 – Aug 2024",
      location: "Bangalore, India",
      type: "full-time",
      description:
        "Led development of enterprise automation solutions and validation frameworks, driving significant improvements in system performance and efficiency.",
      achievements: [
        {
          icon: FaRocket,
          title: "ctrlX Automation Platform",
          description: "Led development of task manager services using Angular and Golang",
          impact: "Improved system efficiency by 20%",
        },
        {
          icon: FaCogs,
          title: "App Validation Framework",
          description: "Built scalable validation system with microservices architecture",
          impact: "Reduced validation time by 92%",
        },
      ],
      technologies: ["Angular", "Golang", "Microservices", "Jenkins", "Docker", "Kubernetes", "SDK Development"],
    },
    {
      id: 5,
      company: "Bosch Global Software Technologies",
      logo: FaBuilding,
      position: "Software Engineer",
      duration: "Apr 2021 – Dec 2023",
      location: "Bangalore, India",
      type: "full-time",
      description:
        "Developed industrial automation solutions and optimized system performance through innovative software engineering approaches.",
      achievements: [
        {
          icon: FaServer,
          title: "REST API Optimization",
          description: "Optimized communication protocols and data handling",
          impact: "Improved API communication speed by 25%",
        },
        {
          icon: SiLinux,
          title: "Linux Kernel Optimization",
          description: "Refined kernel configurations for industrial automation",
          impact: "Enhanced performance by 4 seconds",
        },
      ],
      technologies: ["Angular", "Golang", "Linux", "REST APIs", "Docker", "Jenkins", "Git", "Python"],
    },
    {
      id: 6,
      company: "Accenture",
      logo: FaBuilding,
      position: "Associate Software Engineer",
      duration: "Jan 2021 – Apr 2021",
      location: "India",
      type: "full-time",
      description:
        "Started professional career as Associate Software Engineer, working on software development projects and gaining foundational industry experience.",
      achievements: [
        {
          icon: FaCode,
          title: "Software Development",
          description: "Worked on various software development projects",
          impact: "Built strong foundation in programming",
        },
        {
          icon: FaGitAlt,
          title: "Version Control",
          description: "Learned industry best practices for code management",
          impact: "Established professional development workflow",
        },
      ],
      technologies: ["Java", "Python", "JavaScript", "Git", "SQL", "HTML5", "CSS3"],
    },
  ];

  // Oldest -> Newest
  const experienceData = [...experienceDataRaw].reverse();

  const handleExperienceClick = (exp: ExperienceItem) => {
    setSelectedExperience(exp);
  };

  const closeModal = useCallback(() => {
    setSelectedExperience(null);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedExperience) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [selectedExperience]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <>
    <section id="experience" className="experience-section" data-aos="fade-up">
      <div className="experience-container">
        <div className="section-header">
          <FaBriefcase className="section-icon" />
          <h2 className="section-title">Professional Experience</h2>
          <div className="section-subtitle">Career Journey & Achievements</div>
        </div>

        <div className="experience-timeline-years">
          {experienceData.map((exp) => {
            const CompanyLogo = exp.logo;
            const isCurrent = exp.duration.includes("Present");

            return (
              <div
                key={exp.id}
                className={`year-item ${isCurrent ? "current" : ""}`}
                onClick={() => handleExperienceClick(exp)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleExperienceClick(exp)}
              >
                <div className="year-marker">
                  <div className="year-dot">
                    <CompanyLogo className="year-icon" />
                  </div>
                  <div className="year-connector" />
                </div>

                <div className="year-info-compact">
                  <div className="company-position-box">
                    <div className="company-name">{exp.company}</div>
                    <div className="position-name">{exp.position}</div>
                  </div>
                  {isCurrent && <div className="current-indicator">●</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {selectedExperience && (
          <div
            className="experience-modal-overlay"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedExperience.company} – ${selectedExperience.position}`}
          >
            <div className="experience-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal} aria-label="Close">
                ×
              </button>

              <div className="modal-header">
                <div className="modal-logo">
                  {(() => {
                    const Logo = selectedExperience.logo; // ✅ fix: capitalize component variable
                    return <Logo className="modal-logo-icon" />;
                  })()}
                </div>
                <div className="modal-company-info">
                  <h2 className="modal-company">{selectedExperience.company}</h2>
                  <div className="modal-position">{selectedExperience.position}</div>
                  <div className="modal-meta">
                    <span className="modal-duration">{selectedExperience.duration}</span>
                    <span className="modal-location">{selectedExperience.location}</span>
                    <span className={`modal-type ${selectedExperience.type}`}>
                      {selectedExperience.type === "part-time"
                        ? "PART-TIME"
                        : selectedExperience.type.replace("-", " ").toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="modal-description">
                <h3>Role Description</h3>
                <p>{selectedExperience.description}</p>
              </div>

              <div className="modal-achievements">
                <h3>Key Achievements</h3>
                <div className="modal-achievements-grid">
                  {selectedExperience.achievements.map((achievement, idx) => {
                    const AchievementIcon = achievement.icon;
                    return (
                      <div key={idx} className="modal-achievement-card">
                        <div className="modal-achievement-icon">
                          <AchievementIcon className="modal-achievement-icon-svg" />
                        </div>
                        <div className="modal-achievement-content">
                          <h4 className="modal-achievement-title">{achievement.title}</h4>
                          <p className="modal-achievement-description">{achievement.description}</p>
                          <div className="modal-achievement-impact">{achievement.impact}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="modal-technologies">
                <h3>Technologies & Skills Used</h3>
                <div className="modal-tech-grid">
                  {selectedExperience.technologies.map((tech, idx) => (
                    <span key={idx} className="modal-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Experience;
