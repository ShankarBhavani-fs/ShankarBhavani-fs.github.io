import React, { useState, useEffect, useCallback } from "react";
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaBookOpen,
  FaAward
} from "react-icons/fa";

import "./Education.css";

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
  status: "current" | "completed";
  logo: React.ComponentType<{ className?: string }>;
}

const Education: React.FC = () => {
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);

  const educationDataRaw: EducationItem[] = [
    {
      id: 1,
      institution: "University of Illinois, Chicago",
      degree: "Master of Science",
      field: "Computer Science",
      duration: "Aug 2024 - Jun 2026",
      location: "Chicago, IL",
      gpa: "3.5/4.0",
      status: "current",
      logo: FaUniversity,
      achievements: [
        "Graduate Research Assistant",
        "AI software Track"
      ],
      coursework: [
        "Artificial Intelligence",
        "Software Engineering",
        "Database Systems",
        "Information Retrieval",
        "web development and cloud computing"
      ]
    },
    {
      id: 2,
      institution: "Bangalore Institute of Technology",
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      duration: "Jun 2016 - Jul 2020",
      location: "Bangalore, India",
      gpa: "8/10.0",
      status: "completed",
      logo: FaBookOpen,
      achievements: [
        "Cultural event organizer",
        "Journal publication for Accident prediction using ML"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Computer Networks",
        "Database Management Systems",
        "Web Technologies",
        "Operating Systems"
      ]
    },
    {
      id: 3,
      institution: "JNVH, Karnataka",
      degree: "Pre-University",
      field: "Science & Mathematics",
      duration: "Jun 2014 - May 2016",
      location: "Karnataka, India",
      status: "completed",
      logo: FaGraduationCap,
      achievements: [
        "Science club member",
        "Math Olympiad participant"
      ],
      coursework: [
        "Physics",
        "Mathematics"
      ]
    }
  ];

  // Oldest -> Newest
  const educationData = [...educationDataRaw].reverse();

  const handleEducationClick = (edu: EducationItem) => {
    setSelectedEducation(edu);
  };

  const closeModal = useCallback(() => {
    setSelectedEducation(null);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedEducation) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [selectedEducation]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  return (
    <section id="education" className="education-section" data-aos="fade-up">
      <div className="education-container">
        <div className="section-header">
          <FaGraduationCap className="section-icon" />
          <h2 className="section-title">Education</h2>
          <div className="section-subtitle">Academic Journey & Achievements</div>
        </div>

        <div className="education-timeline-years">
          {educationData.map((edu) => {
            const InstitutionLogo = edu.logo;
            const isCurrent = edu.status === "current";

            return (
              <div
                key={edu.id}
                className={`year-item ${isCurrent ? "current" : ""}`}
                onClick={() => handleEducationClick(edu)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleEducationClick(edu)}
              >
                <div className="year-marker">
                  <div className="year-dot">
                    <InstitutionLogo className="year-icon" />
                  </div>
                  <div className="year-connector" />
                </div>

                <div className="year-info-compact">
                  <div className="company-position-box">
                    <div className="company-name">{edu.institution}</div>
                    <div className="position-name">{edu.degree} in {edu.field}</div>
                  </div>
                  {isCurrent && <div className="current-indicator">●</div>}
                </div>
              </div>
            );
          })}
        </div>

        {selectedEducation && (
          <div
            className="education-modal-overlay"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedEducation.institution} – ${selectedEducation.degree}`}
          >
            <div className="education-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal} aria-label="Close">
                ×
              </button>

              <div className="modal-header">
                <div className="modal-logo">
                  {(() => {
                    const Logo = selectedEducation.logo;
                    return <Logo className="modal-logo-icon" />;
                  })()}
                </div>
                <div className="modal-company-info">
                  <h2 className="modal-company">{selectedEducation.institution}</h2>
                  <div className="modal-position">{selectedEducation.degree}</div>
                  <div className="modal-meta">
                    <span className="modal-duration">{selectedEducation.duration}</span>
                    <span className="modal-location">{selectedEducation.location}</span>
                    {selectedEducation.gpa && (
                      <span className="modal-type gpa">
                        GPA: {selectedEducation.gpa}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-description">
                <h3>Program Details</h3>
                <p>{selectedEducation.degree} in {selectedEducation.field}</p>
              </div>

              {selectedEducation.achievements && selectedEducation.achievements.length > 0 && (
                <div className="modal-achievements">
                  <h3>Achievements & Recognition</h3>
                  <div className="modal-achievements-grid">
                    {selectedEducation.achievements.map((achievement, idx) => (
                      <div key={idx} className="modal-achievement-card">
                        <div className="modal-achievement-icon">
                          <FaAward className="modal-achievement-icon-svg" />
                        </div>
                        <div className="modal-achievement-content">
                          <p className="modal-achievement-description">{achievement}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedEducation.coursework && selectedEducation.coursework.length > 0 && (
                <div className="modal-technologies">
                  <h3>Key Coursework</h3>
                  <div className="modal-tech-grid">
                    {selectedEducation.coursework.map((course, idx) => (
                      <span key={idx} className="modal-tech-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
