import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";
import useTitle from "../../Hooks/useTitle";

const Category = () => {
  const news = useLoaderData();
  useTitle("Category");
  if (news.message) return <h6>{news.message}</h6>;

  return (
    <div>
      <h6>Total {news.length} news</h6>
      {news.map((val) => (
        <NewsSummaryCard key={val._id} news={val} />
      ))}
    </div>
  );
};

export default Category;
