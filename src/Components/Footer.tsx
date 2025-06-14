// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2a2d34",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <p>
        Connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/shankar-bhavani"
          target="_blank"
          style={{ color: "#ff5252" }}
        >
          LinkedIn
        </a>{" "}
        | Email:{" "}
        <a
          href="mailto:shankar.bhavani.in@gmail.com"
          style={{ color: "#ff5252" }}
        >
          shankar.bhavani.in@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
