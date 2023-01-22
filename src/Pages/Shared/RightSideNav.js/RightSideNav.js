import React from "react";
import Button from "react-bootstrap/Button";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";

import Brand1 from "./../../../assets/brands/Brand1.png";
import Brand2 from "./../../../assets/brands/Brand2.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="d-grid gap-2">
        <Button variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with GitHub
        </Button>
      </div>

      <div>
        <h5 className="mt-4">Find Us On</h5>
        <ListGroup className="gap-3">
          <ListGroup.Item>Facebook</ListGroup.Item>
          <ListGroup.Item>Youtube</ListGroup.Item>
          <ListGroup.Item>Twitter</ListGroup.Item>
          <ListGroup.Item>WhatsApp</ListGroup.Item>
          <ListGroup.Item>Discord</ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <Carousel>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Brand1} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Brand2} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSideNav;
