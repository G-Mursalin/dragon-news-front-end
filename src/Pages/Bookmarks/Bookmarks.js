import React, { useEffect, useState, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Bookmarks = () => {
  const [bookmarksNews, setBookmarksNews] = useState([]);
  const { user } = useContext(AuthContext);
  const [refetch, setRefetch] = useState(false);

  const handleRemoveBookmarks = (user_id, news_id) => {
    //  Send data to backend
    fetch(`https://dragon-news.onrender.com/api/v1/bookmarks/${user_id}/${news_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.status);
        setRefetch((pre) => !pre);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    fetch(`https://dragon-news.onrender.com/api/v1/bookmarks/${user.uid}`, {})
      .then((response) => response.json())
      .then((data) => {
        setBookmarksNews(data.data.bookmarks);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [refetch, user.uid]);

  return (
    <div>
      <h6 className="">Your Recent Bookmarks: {bookmarksNews.length}</h6>
      {bookmarksNews.map((val) => (
        <Card key={val._id} className=" mb-5">
          <Card.Header>
            <div>
              <Button
                variant="outline-dark"
                role="button"
                className="d-flex ms-auto"
                onClick={() => handleRemoveBookmarks(val.user_id, val.news_id)}
              >
                Remove From Bookmark
              </Button>
            </div>
          </Card.Header>
          <Card.Img variant="top" src={val.image_url} />
          <Card.Body>
            <Card.Title>{val.title}</Card.Title>
            <Card.Text>{val.details}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Bookmarks;
