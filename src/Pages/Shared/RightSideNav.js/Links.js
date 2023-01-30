import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaBookOpen, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Links = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h4 className="mt-4">Find Us On:</h4>
        <ListGroup className="gap-3">
          <ListGroup.Item
            role="button"
            className="d-flex align-items-center gap-2"
          >
            <FaFacebook />
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-black"
            >
              Facebook
            </a>
          </ListGroup.Item>
          <ListGroup.Item
            role="button"
            className="d-flex align-items-center gap-2"
          >
            <FaYoutube />
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-black"
            >
              Youtube
            </a>
          </ListGroup.Item>
          <ListGroup.Item
            role="button"
            className="d-flex align-items-center gap-2"
          >
            <FaTwitter />{" "}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-black"
            >
              Twitter
            </a>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <h4 className="mt-4">Ours Terms and Conditions:</h4>
        <ListGroup
          className="gap-3"
          onClick={() => navigate("/terms-conditions")}
        >
          <ListGroup.Item
            role="button"
            className="d-flex align-items-center gap-2"
          >
            <FaBookOpen /> Terms and Conditions
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default Links;
