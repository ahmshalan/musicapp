import React from "react";
import "./Music.css";
import PlayList from "./Playlist";
function Music({ darkTheme }) {
  return (
    <div className={`music ${darkTheme && "darkThemeMain"}`}>
      <PlayList darkTheme={darkTheme} />
    </div>
  );
}

export default Music;
