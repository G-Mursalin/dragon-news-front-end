import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";
import useTitle from "../../Hooks/useTitle";
import Loading from "../Shared/Spinner/Loading";

const Category = () => {
  useTitle("Category");
  const news = useLoaderData();
  const navigation = useNavigation();

  // Handle Data Loading
  if (navigation.status === "loading") return <Loading />;

  return (
    <div>
      <h5>Total {news.data.category_news.length} news found</h5>
      {news.data.category_news.map((val) => (
        <NewsSummaryCard key={val._id} news={val} />
      ))}
    </div>
  );
};

export default Category;
