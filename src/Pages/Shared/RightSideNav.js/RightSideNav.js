import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Brand1 from "./../../../assets/brands/Brand1.png";
import Brand2 from "./../../../assets/brands/Brand2.png";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const RightSideNav = () => {
  const googleProvider = new GoogleAuthProvider();
  const { providerLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        toast.success("Successfully Login");
      })
      .catch((error) => {
        const message = error.message;
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <Button
          variant="outline-primary"
          className="d-flex align-items-center justify-content-center gap-2"
          onClick={handleGoogleLogin}
        >
          <FaGoogle /> Login with Google
        </Button>
        <Button
          variant="outline-dark"
          className="d-flex align-items-center justify-content-center gap-2"
        >
          <FaGithub /> Login with GitHub
        </Button>
      </div>

      <div>
        <h5 className="mt-4">Find Us On</h5>
        <ListGroup className="gap-3">
          <ListGroup.Item
            role="button"
            className="d-flex align-items-center gap-2"
          >
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item
            role="button"
            className="d-flex align-items-center gap-2"
          >
            <FaYoutube /> Youtube
          </ListGroup.Item>
          <ListGroup.Item
            role="button"
            className="d-flex align-items-center gap-2"
          >
            <FaTwitter /> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>

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
    </div>
  );
};

export default RightSideNav;
