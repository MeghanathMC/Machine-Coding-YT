import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../store/navSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className="flex shadow-md justify-between items-center">
      <div className="flex p-4 gap-4">
        <div>
          <img
            className="h-6 cursor-pointer rounded-full  hover:bg-gray-200"
            onClick={() => toggleMenu()}
            src="./hamberger.svg"
            alt="hamberger-menu"
          />
        </div>
        <div>
          <a href="/">
            <img className="h-6" src="./logo.svg" alt="youtube-logo" />
          </a>
        </div>
      </div>

      <div className="flex p-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-200 h-10 rounded-l-full px-4 w-96"
        />
        <button className="border border-gray-200 rounded-r-full px-4 bg-gray-100 flex items-center hover:cursor-pointer">
          <img src="./search.svg" alt="search icon" className="h-5" />
        </button>
      </div>

      <div className="flex items-center gap-6 px-6">
        <div className="border border-gray-200 rounded-full bg-gray-200 flex px-4 py-1 items-center gap-2">
          <img src="./create.svg" alt="create" className="h-5" />
          <p className="text-lg">Create</p>
        </div>
        <img src="./profile.svg" alt="profile-icon" className="h-8" />
      </div>
    </div>
  );
};

export default Header;
