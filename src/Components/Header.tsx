import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Header.css"; // Ensure this CSS file exists

const Header: React.FC = () => {
  return (
    <Navbar className="sticky-header" expand="lg">
      <Container className="d-flex flex-column align-items-center">
        {/* Centered Tooltip with Your Name & Speech Bubble */}
        <div className="tooltip-container">
          <span className="text">Bhavani Shankar</span>
          <span className="tooltip">Hello 👋</span>
        </div>

        {/* Navigation Links */}
        <Nav className="mt-3">
          <Nav.Link href="#summary" className="nav-link">
            Summary
          </Nav.Link>
          <Nav.Link href="#skills" className="nav-link">
            Skills
          </Nav.Link>
          <Nav.Link href="#education" className="nav-link">
            Education
          </Nav.Link>
          <Nav.Link href="#experience" className="nav-link">
            Experience
          </Nav.Link>
          <Nav.Link href="#projects" className="nav-link">
            Projects
          </Nav.Link>
        </Nav>
        <p></p>
        {/* Social Links */}
        <div className="d-flex gap-3 mt-3">
          <a
            href="https://www.linkedin.com/in/shankar-bhavani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} color="white" />
          </a>
          <a
            href="https://github.com/ExperimenterX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} color="white" />
          </a>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
