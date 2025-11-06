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
      name: "Portfolio Website",
      image: "🌐",
      skills: ["React", "TypeScript", "Vite", "CSS3"],
      description: "Modern portfolio website built with React and TypeScript, featuring responsive design, animations, and professional showcase sections.",
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://your-portfolio.com",
      type: "project"
    },
    {
      id: 4,
      name: "E-Commerce Platform",
      image: "�",
      skills: ["Node.js", "Express", "MongoDB", "Stripe API"],
      description: "Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.",
      githubLink: "https://github.com/yourusername/ecommerce",
      liveLink: "https://ecommerce-demo.com",
      type: "project"
    }
  ];

  return (
    <section className="projects-section" data-aos="fade-up">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Explore my technical projects and development work
          </p>
        </div>
        
        <div className="projects-grid">
          {projectsData.filter(project => project.type === "project").map((project) => (
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
