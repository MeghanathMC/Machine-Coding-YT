import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" h-screen w-20 bg-white flex flex-col items-center py-4 gap-6 border-r border-gray-50 shadow-md">
      <div className="flex flex-col gap-2 items-center cursor-pointer hover:bg-gray-100 p-3 rounded-xl">
        <Link to="/">
          <img src="./home.svg" alt="" />
          <span className="text-xs">Home</span>
        </Link>
      </div>
      <div className="flex flex-col gap-2 items-center cursor-pointer hover:bg-gray-100 p-3 rounded-xl">
        <img src="./shorts.svg" alt="" />
        <span className="text-xs">Shorts</span>
      </div>
      <div className="flex flex-col gap-2 items-center cursor-pointer hover:bg-gray-100 p-3 rounded-xl">
        <img src="./sub.svg" alt="" />
        <span className="text-xs">Subscriptions</span>
      </div>
      <div className="flex flex-col gap-2 items-center cursor-pointer hover:bg-gray-100 p-3 rounded-xl">
        <img src="./profile.svg" alt="" />
        <span className="text-xs">You</span>
      </div>
    </div>
  );
};

export default Sidebar;
