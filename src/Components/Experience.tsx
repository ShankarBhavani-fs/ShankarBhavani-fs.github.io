// src/components/Experience.tsx
import React from "react";
import { Card } from "react-bootstrap";

const Experience: React.FC = () => {
  return (
    <Card data-aos="fade-up">
      <Card.Body>
        <h2>Professional Experience</h2>
        <strong>Bosch Global Software Technologies</strong> – Senior Software
        Engineer (Apr 2021 – Aug 2024)
        <ul>
          <li>
            <strong>ctrlX Automation:</strong> Improved system efficiency by
            20%, developed task manager services using Angular and Golang.
          </li>
          <li>Optimized REST APIs, improving communication speed by 25%.</li>
          <li>
            Refined Linux kernel configurations, improving performance by 4
            seconds.
          </li>
        </ul>
        <ul>
          <li>
            <strong>ctrlX App Validation Framework:</strong> Reduced app
            validation time by 92%, developed optimized APIs, and created
            scalable applications.
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default Experience;
