import React from "react";
import Sidebar from "./Sidebar";
import FeedContainer from "./FeedContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <FeedContainer />
    </div>
  );
};

export default Body;
