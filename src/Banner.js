import { Avatar } from "@material-ui/core";
import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("https://asiapop40.com/wp-content/uploads/2016/05/banner-alan-walker.png")`,
        backgroundPosition: "center center",
      }}
    >
      <Avatar
        variant="square"
        src="https://asiapop40.com/wp-content/uploads/2016/05/banner-alan-walker.png"
      ></Avatar>
      <div className="banner__contents">
        <h1 className="banner__playlist">Playlist</h1>
        <h1 className="banner__title">ment</h1>
        <h1 className="banner__description">Alan walker is a great singer</h1>
        <h1 className="banner__createdBy">
          <span>created by</span> Ahmed Hossam
        </h1>
      </div>
    </header>
  );
}

export default Banner;
