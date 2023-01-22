import React from "react";

const NewsSummaryCard = ({ news }) => {
  const { title } = news;
  return (
    <div>
      <h4>{title}</h4>
    </div>
  );
};

export default NewsSummaryCard;
