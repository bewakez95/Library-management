import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Carosels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://i.ytimg.com/vi/o3AF72ov8nQ/maxresdefault.jpg"}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://i.ytimg.com/vi/o3AF72ov8nQ/maxresdefault.jpg"}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://i.ytimg.com/vi/o3AF72ov8nQ/maxresdefault.jpg"}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosels;
