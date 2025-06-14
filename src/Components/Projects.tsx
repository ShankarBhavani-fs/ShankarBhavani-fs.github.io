// src/components/Projects.tsx
import React from "react";
import { Card } from "react-bootstrap";

const Projects: React.FC = () => {
  return (
    <Card data-aos="fade-right">
      <Card.Body>
        <h2>Projects & Certificates</h2>
        <ul>
          <li>
            Accident Prediction System (Machine Learning): Published in IRJET
          </li>
          <li>Movie Theatre Management: Developed with C# and MySQL</li>
          <li>
            Certifications: Go, Azure DevOps, JavaScript, Git, Jenkins, REST
            APIs, Docker
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Projects;
