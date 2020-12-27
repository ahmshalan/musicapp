import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { Notifications, Search, Settings } from "@material-ui/icons";

import classes from "./Header.module.css";
function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.search}>
        <IconButton className={classes.grey}>
          <Search />
        </IconButton>
        <input type="text" placeholder="Search for songs, artist etc.." />
      </div>
      <div className={classes.header__sidebar}>
        <IconButton className={classes.grey}>
          <Settings />
        </IconButton>
        <IconButton className={classes.grey}>
          <Notifications />
        </IconButton>
        <IconButton className={classes.grey}>
          <Avatar src="https://www.biography.com/.image/t_share/MTE5NDg0MDU0NzExNDA0MDQ3/shakira-189151-1-402.jpg" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
