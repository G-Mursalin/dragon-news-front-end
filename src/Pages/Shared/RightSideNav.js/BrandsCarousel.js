import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "./../../../assets/brands/Brand1.png";
import Brand2 from "./../../../assets/brands/Brand2.png";

const BrandsCarousel = () => {
  return (
    <div>
      <Carousel className="mt-4">
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={Brand1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={Brand2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandsCarousel;
