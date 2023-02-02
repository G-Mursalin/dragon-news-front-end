import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {
  FaBookmark,
  FaEye,
  FaRegBookmark,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const NewsSummaryCard = ({ news, setSmShow, setNewsId }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  const { user } = useContext(AuthContext);

  const handleBookmarks = () => {
    const data = { user_id: user.uid, news_id: _id, title, details, image_url };

    //  Send data to backend
    fetch("https://dragon-news.onrender.com/api/v1/bookmarks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(data.status);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Card className="mb-5">
      <Card.Header>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={author?.img}
              style={{ height: "50px", width: "50px", objectFit: "cover" }}
              className="flex-shrink-0 me-3 rounded-circle"
              alt={author?.name}
            />
            <div>
              <h6 className="mt-0 mb-0 fw-bold">{author?.name}</h6>
              <p className="mb-0">{author?.published_date}</p>
            </div>
          </div>
          <div>
            <Button
              onClick={handleBookmarks}
              variant="outline-dark"
              role="button"
              className="me-2"
            >
              <FaRegBookmark role="button" />
            </Button>

            <Button
              variant="outline-dark"
              onClick={() => {
                setSmShow(true);
                setNewsId(_id);
              }}
              role="button"
            >
              <FaShareAlt />
            </Button>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Img className="my-2" variant="top" src={image_url} />
        <div>
          {details.length > 250 ? (
            <p>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-between">
          <FaStar className="text-warning me-2" /> <span>{rating?.number}</span>
        </div>
        <div>
          <FaEye className="me-2" />
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
