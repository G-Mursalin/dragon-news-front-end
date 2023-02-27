import React from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import useTitle from "../../Hooks/useTitle";
import Loading from "../Shared/Spinner/Loading";

const News = () => {
  const news = useLoaderData();
  const navigation = useNavigation();
  useTitle("News");
  if (news.status === "fail") return <h3>{news.message}</h3>;

  const { image_url, title, details, category_id } = news.data.oneNews;

  // Handle Data Loading
  if (navigation.status === "loading") return <Loading />;

  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>All news this category</Link>
      </Card.Body>
    </Card>
  );
};

export default News;
