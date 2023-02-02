import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const TodaysPick = () => {
  const [todaysPickNews, setTodaysPickNews] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://dragon-news.onrender.com/api/v1/news/todays-pick")
      .then((res) => res.json())
      .then((data) => setTodaysPickNews(data.data.todays_pick));
  }, []);

  return (
    <div style={{ cursor: "pointer" }}>
      <h4 className="mt-4">Todays Picks:</h4>
      {todaysPickNews.map((val) => (
        <Card
          className="mt-3"
          key={val._id}
          onClick={() => navigate(`/news/${val._id}`)}
        >
          <Card.Img variant="top" src={val.image_url} />
          <Card.Body>
            <h6>{val.title}</h6>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TodaysPick;
