import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className="mb-5">
      <Card.Header>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={author?.img}
              style={{ height: "60px" }}
              className="flex-shrink-0 me-3 rounded-circle"
              alt={author?.name}
            />
            <div>
              <h5 className="mt-0 mb-0">{author?.name}</h5>
              <p className="mb-0">{author?.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2" role="button" />
            <FaShareAlt role="button" />
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
