import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../store/navSlice";
const SideBarFullContainer = () => {
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-48 bg-white flex flex-col items-start py-4 gap-4 border-r shadow-lg z-50 transition-transform duration-300`}
    >
      <div className="flex p-4 gap-4">
        <div>
          <img
            className="h-6 cursor-pointer rounded-full  hover:bg-gray-200"
            onClick={() => dispatch(toggleSideBar())}
            src="./hamberger.svg"
            alt="hamberger-menu"
          />
        </div>
        <div>
          <img className="h-6" src="./logo.svg" alt="youtube-logo" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
          <img src="./home.svg" alt="" />
          <span className="text-xs">Home</span>
        </div>
        <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
          <img src="./shorts.svg" alt="" />
          <span className="text-xs">Shorts</span>
        </div>
        <div className="flex gap-2 items-center cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
          <img src="./sub.svg" alt="" />
          <span className="text-xs">Subscriptions</span>
        </div>
      </div>{" "}
      <hr className="w-full border-gray-200" />
      <div className="flex  gap-2 items-center cursor-pointer hover:bg-gray-100 p-3 rounded-lg">
        <img src="./profile.svg" alt="" />
        <span className="text-xs">You</span>
      </div>
    </div>
  );
};

export default SideBarFullContainer;
