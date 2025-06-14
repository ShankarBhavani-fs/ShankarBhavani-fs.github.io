// src/components/Education.tsx
import React from "react";
import { Card } from "react-bootstrap";

const Education: React.FC = () => {
  return (
    <Card data-aos="fade-left">
      <Card.Body>
        <h2>Education</h2>
        <div className="row">
          <div className="col-md-6">
            <strong>University of Illinois, Chicago</strong>
            <br />
            Master's in Computer Science (Aug 2024 – Jun 2026)
          </div>
          <div className="col-md-6">
            <strong>Bangalore Institute of Technology</strong>
            <br />
            Bachelor of Engineering in Computer Science (Jun 2016 – Jul 2020)
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Education;
