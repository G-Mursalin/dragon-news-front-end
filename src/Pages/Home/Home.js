import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  const news = useLoaderData();
  useTitle("Home");
  return (
    <div>
      <h6>Total {news.length} news</h6>
      {news.map((val) => (
        <NewsSummaryCard key={val._id} news={val} />
      ))}
    </div>
  );
};

export default Home;
