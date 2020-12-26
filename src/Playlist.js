import React from "react";
import Banner from "./Components/Banner";
import PlaylistTap from "./Components/PlaylistTap";
import classes from "./Playlist.module.css";

function Playlist() {
  return (
    <div className={classes.playlist}>
      <Banner />

      <div className={classes.playlist__songs}>
        <PlaylistTap/>
      </div>
    </div>
  );
}

export default Playlist;
