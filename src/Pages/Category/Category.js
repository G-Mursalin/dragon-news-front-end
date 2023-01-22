import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const news = useLoaderData();
  if (news.message) return <h2>{news.message}</h2>;

  return <div>Category {news.length}</div>;
};

export default Category;
