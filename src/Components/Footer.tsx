// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#000000",
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
          style={{ color: "#ff8c42", textDecoration: "none" }}
        >
          LinkedIn
        </a>{" "}
        | Email:{" "}
        <a
          href="mailto:shankar.bhavani.in@gmail.com"
          style={{ color: "#ff8c42", textDecoration: "none" }}
        >
          shankar.bhavani.in@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
