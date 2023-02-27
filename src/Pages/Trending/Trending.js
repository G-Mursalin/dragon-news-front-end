import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";
import ShareButtonModal from "../Shared/NewsSummaryCard/ShareButtonModal";
import Loading from "../Shared/Spinner/Loading";

const Trending = () => {
  const { data } = useLoaderData();
  const [smShow, setSmShow] = useState(false);
  const [newsId, setNewsId] = useState(null);
  const navigation = useNavigation();

  // Handle Data Loading
  if (navigation.status === "loading") return <Loading />;

  return (
    <div>
      <h6>{data.trending_news.length} Trending News</h6>
      {data.trending_news.map((val) => (
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

export default Trending;
