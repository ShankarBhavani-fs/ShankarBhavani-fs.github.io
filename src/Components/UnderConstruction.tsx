import React from "react";
import { Container } from "react-bootstrap";
// import "./UnderConstruction.css"; // optional for custom styles

const UnderConstruction: React.FC = () => {
  return (
    <Container
      className="under-construction text-center my-5"
      data-aos="zoom-in"
    >
      <h2>🚧 Portfolio Under Construction 🚧</h2>
      <p>We're working hard to bring you the full experience. Stay tuned!</p>
      <img
        src="https://media.giphy.com/media/vR1dPIYzQmkRzLZk2w/giphy.gif"
        alt="Under Construction"
        style={{ width: "250px", height: "auto", marginTop: "1rem" }}
      />
    </Container>
  );
};

export default UnderConstruction;
