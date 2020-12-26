import React from "react";
import SidebarTap from "./Components/SidebarTap";
import "./Sidebar.css";

function Sidebar({ darkTheme }) {
  return (
    <div className={`sidebar ${darkTheme && "darkTheme"}`}>
      <h3 className="sidebar__header">MUSICLY</h3>
      <div className="sidebar__block1">
        <SidebarTap name="home" theme={darkTheme} />
        <SidebarTap name="browse" theme={darkTheme} />
        <SidebarTap name="radio" theme={darkTheme} />
      </div>
      <div className="sidebar__block">
        <h5>Your Library</h5>
        <SidebarTap name="recently played" theme={darkTheme} />
        <SidebarTap name="favorite songs" theme={darkTheme} />
        <SidebarTap name="artists" theme={darkTheme} />
        <SidebarTap name="albums" theme={darkTheme} />
      </div>
      <div className="sidebar__block">
        <h5>Playlists</h5>
        <SidebarTap name="hindi top 50" theme={darkTheme} />
        <SidebarTap name="indipop" theme={darkTheme} />
        <SidebarTap name="romance season" theme={darkTheme} />
      </div>
    </div>
  );
}

export default Sidebar;
