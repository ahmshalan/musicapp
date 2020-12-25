import React from "react";
import "./PlaylistTap.css";
import {
  ListItem,
  ListItemText,
  IconButton,
  Avatar,
  ListItemIcon,
  ListItemAvatar,
} from "@material-ui/core";
import { FavoriteBorderOutlined, MoreHoriz } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "30rem",
  },
}));

function PlaylistTap(props) {
  const { index, style } = props;

  return (
    <ListItem button key={index} style={style}>
      <ListItemAvatar>
        <Avatar
          variant="square"
          alt="Alan walker"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Alan_Walker_-_Faded.png/220px-Alan_Walker_-_Faded.png"
        ></Avatar>
      </ListItemAvatar>
      <ListItemIcon>
        <IconButton>
          <FavoriteBorderOutlined />
        </IconButton>
      </ListItemIcon>
      <ListItemText primary="Faded-Alan Walker" />
      <ListItemText secondary="Single Album" />
      <ListItemText secondary="4:17" />
      <ListItemText secondary="2,011,799,067" />

      <IconButton>
        <MoreHoriz />
      </IconButton>
    </ListItem>
  );
}
function VirtualizedList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            height={height}
            width={width}
            itemSize={70}
            itemCount={50}
          >
            {PlaylistTap}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
}

export default VirtualizedList;
