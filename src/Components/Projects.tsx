import React from "react";
import { FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa";
import data from "../data/data.json";
import "./Projects.css";

interface Project {
  id: string;
  title: string;
  emoji: string;
  description: string;
  technologies: string[];
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = data.projects;

  return (
    <section id="projects" className="projects-section" data-aos="fade-up">
      <div className="container">
        <div className="section-header">
          <FaLaptopCode className="section-icon" />
          <h2 className="section-title">Projects</h2>
          <div className="section-subtitle">Technical Projects & Development Work</div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="flip-card" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <div className="project-image">
                    {project.emoji}
                  </div>
                  <p className="title">{project.title}</p>
                  {/* <div className="project-skills">
                    {project.technologies.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="skill-tag">{tech}</span>
                    ))}
                  </div> */}
                  <p className="hover-text">Hover to explore</p>
                </div>
                
                {/* Back Side */}
                <div className="flip-card-back">
                  <p className="title">Project Details</p>
                  <p className="description">{project.description}</p>
                  <div className="skills-list">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="skill-badge">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.link && project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FaExternalLinkAlt /> View Project
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
