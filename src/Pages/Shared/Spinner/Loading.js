import Spinner from "react-bootstrap/Spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="h-100 d-flex justify-content-center align-items-center gap-1 mt-auto">
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default Loading;
