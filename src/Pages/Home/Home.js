import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";
import useTitle from "../../Hooks/useTitle";
import ShareButtonModal from "../Shared/NewsSummaryCard/ShareButtonModal";
import Loading from "../Shared/Spinner/Loading";

const Home = () => {
  const [smShow, setSmShow] = useState(false);
  const [newsId, setNewsId] = useState(null);
  const news = useLoaderData();
  const navigation = useNavigation();
  useTitle("Home");

  // Handle Data Loading
  if (navigation.status === "loading") return <Loading />;

  return (
    <div>
      <h6>Total {news.data.news.length} news</h6>
      {news.data.news.map((val) => (
        <NewsSummaryCard
          key={val._id}
          news={val}
          setSmShow={setSmShow}
          setNewsId={setNewsId}
        />
      ))}
      <ShareButtonModal smShow={smShow} setSmShow={setSmShow} newsId={newsId} />
    </div>
  );
};

export default Home;
