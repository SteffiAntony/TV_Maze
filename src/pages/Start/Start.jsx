import React from "react";
import logo from "../../assets/TVMaze-logo.png";
import SearchInput from "../SearchInput/SearchInput";
import "./Start.scss";

const Start = () => {
  return (
    <div id="homePage" className="homePageStyle">
      <div className="startPage">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="searchInputStyle">
          <SearchInput />
        </div>
      </div>
    </div>
  );
};

export default Start;
