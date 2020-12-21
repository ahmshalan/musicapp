import React from "react";
import SidebarTap from "./SidebarTap";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="sidebar__header">MUSICLY</h3>
      <div className="sidebar__block1">
        <SidebarTap name="home" />
        <SidebarTap name="browse" />
        <SidebarTap name="radio" />
      </div>
      <div className="sidebar__block">
        <h5>Your Library</h5>
        <SidebarTap name="recently played" />
        <SidebarTap name="favorite songs" />
        <SidebarTap name="artists" />
        <SidebarTap name="albums" />
      </div>
      <div className="sidebar__block">
        <h5>Playlists</h5>
        <SidebarTap name="hindi top 50" isIcon={true} />
        <SidebarTap name="indipop" isIcon={true} />
        <SidebarTap name="romance season" isIcon={true} />
      </div>
    </div>
  );
}

export default Sidebar;
