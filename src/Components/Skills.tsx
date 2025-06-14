// src/components/Skills.tsx
import React from "react";
import { Card } from "react-bootstrap";

const Skills: React.FC = () => {
  return (
    <Card data-aos="fade-right">
      <Card.Body>
        <h2>Skills</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h3>Languages</h3>
            <ul className="list-unstyled">
              <li>Java, Golang, C, Python, JavaScript</li>
              <li>SQL, Angular, HTML5, CSS3</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Technologies</h3>
            <ul className="list-unstyled">
              <li>Azure DevOps, CI/CD, REST API</li>
              <li>Docker, Scrum/Agile, Git, Jenkins</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Platforms</h3>
            <ul className="list-unstyled">
              <li>Linux, Windows, WSL, IoT</li>
            </ul>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Skills;
