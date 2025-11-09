import React from "react";
import Sidebar from "./Sidebar";
import FeedContainer from "./FeedContainer";
import { useSelector } from "react-redux";
import SideBarFullContainer from "./SideBarFullContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  const navData = useSelector((store) => store.nav);

  const { isOpen } = navData;
  return (
    <div className="flex">
      {isOpen ? <SideBarFullContainer /> : <Sidebar />}
      <Outlet />
    </div>
  );
};

export default Body;
