import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

interface Project {
  id: number;
  name: string;
  image: string;
  skills: string[];
  description: string;
  githubLink?: string;
  liveLink?: string;
  type: "project" | "certification";
}

const Projects: React.FC = () => {
  const projectsData: Project[] = [
    {
      id: 1,
      name: "Accident Prediction System",
      image: "🚗",
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
      description: "ML-based system to predict vehicle accidents using traffic data and weather conditions. Published in IRJET journal with 94% accuracy rate.",
      githubLink: "https://github.com/yourusername/accident-prediction",
      liveLink: "https://accident-predictor.netlify.app",
      type: "project"
    },
    {
      id: 2,
      name: "Movie Theatre Management",
      image: "🎬",
      skills: ["C#", "MySQL", ".NET", "Windows Forms"],
      description: "Complete theatre management system with booking, scheduling, and payment processing. Handles 1000+ concurrent users efficiently.",
      githubLink: "https://github.com/yourusername/theatre-management",
      type: "project"
    },
    {
      id: 3,
      name: "Go Programming",
      image: "🔷",
      skills: ["Go", "Concurrency", "REST APIs", "Microservices"],
      description: "Advanced Go programming certification covering goroutines, channels, and building scalable web services.",
      liveLink: "https://coursera.org/verify/certificate-id",
      type: "certification"
    },
    {
      id: 4,
      name: "Azure DevOps",
      image: "☁️",
      skills: ["Azure", "CI/CD", "Pipelines", "Cloud Architecture"],
      description: "Microsoft Azure DevOps certification focusing on continuous integration, deployment pipelines, and cloud infrastructure.",
      liveLink: "https://learn.microsoft.com/verify/certificate-id",
      type: "certification"
    },
    {
      id: 5,
      name: "Full-Stack Development",
      image: "💻",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      description: "Comprehensive full-stack development certification covering modern web technologies and best practices.",
      liveLink: "https://certificate-link.com",
      type: "certification"
    },
    {
      id: 6,
      name: "DevOps Mastery",
      image: "⚙️",
      skills: ["Docker", "Jenkins", "Git", "REST APIs"],
      description: "Advanced DevOps practices including containerization, automation, version control, and API development.",
      liveLink: "https://certificate-link.com",
      type: "certification"
    }
  ];

  return (
    <section className="projects-section" data-aos="fade-up">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Projects & Certifications</h2>
          <p className="projects-subtitle">
            Explore my technical projects and professional certifications
          </p>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="flip-card" data-aos="zoom-in" data-aos-delay={project.id * 100}>
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <div className="project-image">
                    {project.image}
                  </div>
                  <p className="title">{project.name}</p>
                  <div className="project-skills">
                    {project.skills.slice(0, 2).map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <p className="hover-text">Hover to explore</p>
                </div>
                
                {/* Back Side */}
                <div className="flip-card-back">
                  <p className="title">{project.type === "project" ? "Project" : "Certification"}</p>
                  <p className="description">{project.description}</p>
                  <div className="skills-list">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> {project.type === "project" ? "Live Demo" : "View Certificate"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
