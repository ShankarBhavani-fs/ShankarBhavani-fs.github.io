import React, { useState, useEffect } from "react";
import { 
  FaCode, 
  FaPython, 
  FaJava, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaAngular,
  FaReact,
  FaDatabase,
  FaDocker, 
  FaGitAlt, 
  FaJenkins,
  FaAws,
  FaLinux,
  FaServer, 
  FaUbuntu,
  FaRobot,
  FaBrain,
  FaSearch,
  FaChartLine,
  FaCogs,
  FaNodeJs,
  FaFileCode,
  FaExchangeAlt,
  FaProjectDiagram,
  FaCloud,
  FaGoogle,
  FaTasks,
  FaUsers,
  FaCrown,
  FaHeart,
  FaHandshake,
  FaLightbulb,
  FaComments
} from "react-icons/fa";
import { 
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiGo,
  SiSupabase,
  SiFirebase
} from "react-icons/si";
import "./Skills.css";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);

  const getIconColor = (skillName: string): string => {
    const colors: { [key: string]: string } = {
      // Programming Languages
      'Python': '#3776ab',
      'Java': '#ed8b00',
      'JavaScript': '#f7df1e',
      'TypeScript': '#3178c6',
      'Node.js': '#339933',
      'Go': '#00add8',
      'SQL': '#336791',
      'Bash': '#4eaa25',
      'Shell Scripting': '#89e051',
      
      // AI & Machine Learning
      'Generative AI': '#ff6b6b',
      'Agentic AI': '#4ecdc4',
      'RAG Systems': '#45b7d1',
      'Machine Learning': '#96ceb4',
      'AI Automation': '#ffeaa7',
      'Neural Networks': '#dda0dd',
      'MCP Server': '#8b5cf6',
      'Model Optimization': '#f59e0b',
      'Prompt Engineering': '#ec4899',
      'LLM Integration': '#06b6d4',
      
      // Web & API Development
      'React': '#61dafb',
      'Angular': '#dd0031',
      'HTML5': '#e34f26',
      'CSS3': '#1572b6',
      'Swagger/OpenAPI': '#85ea2d',
      'REST APIs': '#61dafb',
      'GraphQL': '#e10098',
      
      // Cloud & DevOps
      'Azure': '#0078d4',
      'AWS': '#ff9900',
      'GCP': '#4285f4', // Google Blue
      'Docker': '#2496ed',
      'Azure DevOps': '#0078d4',
      
      // Database & Tools
      'MySQL': '#4479a1',
      'PostgreSQL': '#336791',
      'MongoDB': '#47a248',
      'Supabase': '#3ecf8e',
      'Firebase': '#ffca28',
      'Firestore': '#ffa611',
      'phpMyAdmin': '#6c78af',
      'Git': '#f05032',
      'Jenkins': '#d33833',
      'Postman': '#ff6c37',
      'SDK Development': '#4caf50',
      'Microservices': '#9c27b0',
      
      // Automation & Platforms
      'n8n Automation': '#ea4b71',
      'Ubuntu/Snap': '#e95420',
      'Linux': '#fcc624',
      'VS Code': '#007acc',
      'Agile/Scrum': '#0052cc',
      
      // Leadership & Soft Skills
      'Leadership': '#ff6b35',
      'Mindful Resilience': '#e74c3c',
      'Team Collaboration': '#3498db',
      'Problem Solving': '#f39c12',
      'Communication': '#9b59b6',
      'Adaptability': '#1abc9c'
    };
    
    return colors[skillName] || '#666666';
  };

  const skillsData: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: FaCode,
      skills: [
        { name: "Python", icon: FaPython },
        { name: "Go", icon: SiGo },
        { name: "JavaScript", icon: FaJs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Java", icon: FaJava },
        { name: "Node.js", icon: FaNodeJs },
        { name: "SQL", icon: FaDatabase },
        { name: "Bash", icon: FaLinux },
        { name: "Shell Scripting", icon: FaFileCode },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: FaRobot,
      skills: [
        { name: "Gen AI", icon: FaBrain },
        { name: "Agentic AI", icon: FaRobot },
        { name: "RAG Systems", icon: FaSearch },
        { name: "MCP", icon: FaCogs },
        { name: "Model Optimization", icon: FaChartLine },
        { name: "Prompt Engineering", icon: FaBrain },
        { name: "LLM Integration", icon: FaRobot },
        { name: "AI Automation", icon: FaCogs },
      ],
    },
    {
      title: "Web & API Development",
      icon: FaReact,
      skills: [
        { name: "React", icon: FaReact },
        { name: "Angular", icon: FaAngular },
        { name: "Microservices", icon: FaProjectDiagram },
        { name: "Swagger/OpenAPI", icon: FaFileCode },
        { name: "REST APIs", icon: FaExchangeAlt },
        { name: "HTML5", icon: FaHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: FaCloud,
      skills: [
        { name: "Azure", icon: FaCloud },
        { name: "AWS", icon: FaAws },
        { name: "GCP", icon: FaGoogle },
        { name: "Docker", icon: FaDocker },
        { name: "Azure DevOps", icon: FaServer },
      ],
    },
    {
      title: "Database & Tools",
      icon: FaDatabase,
      skills: [
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Supabase", icon: SiSupabase },
        { name: "Firebase", icon: SiFirebase },
        { name: "phpMyAdmin", icon: FaDatabase },
        { name: "SDK Development", icon: FaCode },
        { name: "Git", icon: FaGitAlt },
        { name: "Jenkins", icon: FaJenkins },
        { name: "Postman", icon: SiPostman },
      ],
    },
    {
      title: "Automation & Platforms",
      icon: FaCogs,
      skills: [
        { name: "n8n Automation", icon: FaCogs },
        { name: "Ubuntu/Snap", icon: FaUbuntu },
        { name: "Linux", icon: FaLinux },
        { name: "VS Code", icon: FaCode },
        { name: "Agile/Scrum", icon: FaTasks },
      ],
    },
    {
      title: "Leadership & Soft Skills",
      icon: FaUsers,
      skills: [
        { name: "Leadership", icon: FaCrown },
        { name: "Mindful Resilience", icon: FaHeart },
        { name: "Team Collaboration", icon: FaHandshake },
        { name: "Problem Solving", icon: FaLightbulb },
        { name: "Communication", icon: FaComments },
        { name: "Adaptability", icon: FaExchangeAlt },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCategories(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const categoryElements = document.querySelectorAll('.skills-category');
    categoryElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <div className="section-header">
        <FaCogs className="section-icon" />
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="section-subtitle">Technical Skills & Professional Competencies</div>
      </div>
      
      <div className="skills-grid">
        {skillsData.map((category, categoryIndex) => {
          const CategoryIcon = category.icon;
          const isVisible = visibleCategories.includes(categoryIndex);
          
          return (
            <div 
              key={categoryIndex}
              className={`skills-category ${isVisible ? 'animate' : ''} ${categoryIndex === 6 ? 'skill-card-7' : ''}`}
              data-index={categoryIndex}
              style={{
                animationDelay: `${categoryIndex * 0.2}s`
              }}
            >
              <h3 className="category-title">
                <CategoryIcon className="category-icon" />
                {category.title}
              </h3>
              
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon;
                  
                  return (
                    <li 
                      key={skillIndex}
                      className="skill-item"
                      style={{
                        animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                      }}
                    >
                      <div 
                        className="skill-icon-wrapper"
                        style={{ color: getIconColor(skill.name) }}
                      >
                        <SkillIcon className="skill-icon" />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
