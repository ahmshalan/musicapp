import React from "react";
import Banner from "./Banner";
import PlaylistTap from "./PlaylistTap";
import "./Playlist.css";

function Playlist() {
  return (
    <div className="playlist">
      <Banner />

      <div className="playlist__songs">
        <PlaylistTap />
      </div>
    </div>
  );
}

export default Playlist;
