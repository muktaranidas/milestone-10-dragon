import React from "react";
import Carousel from "react-bootstrap/Carousel";
import prama from "../../../assets/brands/prama.jpg";
import oyeishi from "../../../assets/brands/oyeishi.jpg";
const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={prama} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={oyeishi} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
