import React from "react";
import { Container } from "react-bootstrap";
// import "./UnderConstruction.css"; // optional for custom styles

const UnderConstruction: React.FC = () => {
  return (
    <Container
      className="under-construction text-center my-5"
      data-aos="zoom-in"
    >
      <h2>🚧 Portfolio Under Renovation 🚧</h2>
      <p>
        Experiencing conflicts between design and animation, wait for the best
        experience!
      </p>
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnFyNWFuNGM3ajM4M2RlYnlka2Jtb3U2b203eXUwaXFxcjU0ZnJzbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VHOF8pfPZOt9p018zw/giphy.gif"
        alt="Under Construction"
        style={{ width: "250px", height: "auto", marginTop: "1rem" }}
      />
    </Container>
  );
};

export default UnderConstruction;
