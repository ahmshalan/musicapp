import React from "react";
import "./Music.css";
function Music({darkTheme}) {
  return (
    <div className={`music ${darkTheme && "darkThemeMain"}`}>
      <h1>This is the music main Menu</h1>
    </div>
  );
}

export default Music;
