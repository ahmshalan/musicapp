import React from "react";
import "./SidebarTap.css";
import {
  AlbumOutlined,
  FavoriteBorder,
  History,
  Home,
  Mic,
  PersonOutline,
  Search,
} from "@material-ui/icons";

const choosenIcon = (name) => {
  switch (name) {
    case "home":
      return <Home />;
    case "recently played":
      return <History />;
    case "browse":
      return <Search />;
    case "radio":
      return <Mic />;
    case "favorite songs":
      return <FavoriteBorder />;
    case "artists":
      return <PersonOutline />;
    case "albums":
      return <AlbumOutlined />;
    default:
      return "";
  }
};

function SidebarTap({ name, isIcon }) {
  return (
    <div className="sidebarTap">
      {choosenIcon(name)}
      <div className="sidebarTap_info">{name}</div>
    </div>
  );
}

export default SidebarTap;
