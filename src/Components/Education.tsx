import React, { useState, useEffect } from "react";
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaCalendarAlt, 
  FaMedal,
  FaBookOpen,
  FaAward,
  FaMapMarkerAlt
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
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const educationData: EducationItem[] = [
    {
      id: 1,
      institution: "University of Illinois, Chicago",
      degree: "Master of Science",
      field: "Computer Science",
      duration: "Aug 2024 – Jun 2026",
      location: "Chicago, IL",
      gpa: "4.0/4.0",
      status: "current",
      logo: FaUniversity,
      achievements: [
        "Graduate Research Assistant",
        "Dean's List Recognition",
        "AI/ML Specialization Track"
      ],
      coursework: [
        "Advanced Machine Learning",
        "Artificial Intelligence",
        "Software Engineering",
        "Database Systems",
        "Computer Networks"
      ]
    },
    {
      id: 2,
      institution: "Bangalore Institute of Technology",
      degree: "Bachelor of Engineering",
      field: "Computer Science & Engineering",
      duration: "Jun 2016 – Jul 2020",
      location: "Bangalore, India",
      gpa: "8.5/10.0",
      status: "completed",
      logo: FaBookOpen,
      achievements: [
        "First Class with Distinction",
        "Department Topper",
        "Best Final Year Project Award"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Computer Networks",
        "Database Management Systems",
        "Web Technologies",
        "Operating Systems"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const educationElements = document.querySelectorAll('.education-item');
    educationElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education-section" data-aos="fade-up">
      <div className="education-container">
        <div className="section-header">
          <FaGraduationCap className="section-icon" />
          <h2 className="section-title">Education</h2>
          <div className="section-subtitle">Academic Journey & Achievements</div>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => {
            const LogoIcon = edu.logo;
            const isVisible = visibleItems.includes(index);
            
            return (
              <div
                key={edu.id}
                className={`education-item ${isVisible ? 'animate' : ''} ${edu.status}`}
                data-index={index}
                style={{
                  animationDelay: `${index * 0.3}s`
                }}
              >
                <div className="education-card">
                  <div className="education-header">
                    <div className="institution-logo">
                      <LogoIcon className="logo-icon" />
                    </div>
                    <div className="institution-info">
                      <h3 className="institution-name">{edu.institution}</h3>
                      <div className="degree-info">
                        <span className="degree">{edu.degree}</span>
                        <span className="field">in {edu.field}</span>
                      </div>
                      <div className="education-meta">
                        <div className="duration">
                          <FaCalendarAlt className="meta-icon" />
                          {edu.duration}
                        </div>
                        <div className="location">
                          <FaMapMarkerAlt className="meta-icon" />
                          {edu.location}
                        </div>
                        {edu.gpa && (
                          <div className="gpa">
                            <FaMedal className="meta-icon" />
                            GPA: {edu.gpa}
                          </div>
                        )}
                      </div>
                    </div>
                    {edu.status === 'current' && (
                      <div className="current-badge">
                        <span>Current</span>
                      </div>
                    )}
                  </div>

                  <div className="education-details">
                    {edu.achievements && (
                      <div className="achievements">
                        <h4 className="detail-title">
                          <FaAward className="detail-icon" />
                          Achievements
                        </h4>
                        <ul className="achievement-list">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="achievement-item">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {edu.coursework && (
                      <div className="coursework">
                        <h4 className="detail-title">
                          <FaBookOpen className="detail-icon" />
                          Key Coursework
                        </h4>
                        <div className="coursework-tags">
                          {edu.coursework.map((course, idx) => (
                            <span key={idx} className="course-tag">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {index < educationData.length - 1 && (
                  <div className="timeline-connector"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
