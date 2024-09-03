import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import "./WebsiteLayout.css";
import SideBar from "../components/Sidebar/SideBar";

const LandingPage = () => {
  return (
    <div className="userLayoutBody">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="otherSide">
        <div className="userLayoutHeader">
          <Header />
        </div>
        <div className="holder">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
