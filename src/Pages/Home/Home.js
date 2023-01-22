import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <h2>Home {news.length}</h2>
      {news.map((val) => (
        <NewsSummaryCard key={val._id} news={val} />
      ))}
    </div>
  );
};

export default Home;
