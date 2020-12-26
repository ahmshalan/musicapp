import React from "react";
import classes from "./PlaylistTap.module.css";
import {
  ListItem,
  IconButton,
  Avatar,
  Grid,
  InputLabel,
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

const playlistTracks = [
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Alan_Walker_-_Faded.png/220px-Alan_Walker_-_Faded.png",
    Name: "Faded",
    isFavourite: false,
    Artist: "Alan Walker",
    Album: "Single Album",
    Duration: "4:17",
    Views: "2,011,799,067",
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/en/3/30/DJ_Khaled_Popstar.png",
    Name: "POPSTAR",
    isFavourite: false,
    Artist: "DJ Khaled ft. Drake",
    Album: "Single Album",
    Duration: "3:20",
    Views: "280,219,064",
  },
  {
    cover:
      "https://i1.sndcdn.com/artworks-p1aZMz9yt8txRFzH-vhk8lg-t500x500.jpg",
    Name: "Han AlAn",
    isFavourite: false,
    Artist: "Adham Nabulsi",
    Album: "Single Album",
    Duration: "3:41",
    Views: "367,651",
  },
];

function PlaylistTap(props) {
  const { index, style } = props;

  return (
    <ListItem button key={index} style={style}>
      <Grid container direction="row" justify="space-between">
        <Grid item className={classes.grid}>
          <Avatar
            className={classes.avatar}
            variant="square"
            alt={playlistTracks[index].Artist}
            src={playlistTracks[index].cover}
          ></Avatar>
        </Grid>

        <Grid item>
          <IconButton>
            <FavoriteBorderOutlined className={classes.icon} />
          </IconButton>
        </Grid>

        <Grid item>
          <InputLabel
            primary={`${playlistTracks[index].Name}`}
            className={classes.primary}
          />
        </Grid>
        <Grid item>
          <InputLabel
            primary={playlistTracks[index].Album}
            className={classes.secondary}
          />
        </Grid>
        <Grid item>
          <InputLabel
            primary={playlistTracks[index].Duration}
            className={classes.secondary}
          />
        </Grid>
        <Grid item className={classes.secondary}>
          <InputLabel >
          {playlistTracks[index].Views}
          </InputLabel>
        </Grid>
        <Grid item>
          <IconButton>
            <MoreHoriz className={classes.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
}
function VirtualizedList() {
  const classess = useStyles();
  return (
    <div className={classess.root}>
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            height={height}
            width={width}
            itemSize={70}
            itemCount={playlistTracks.length}
          >
            {PlaylistTap}
          </FixedSizeList>
        )}
      </AutoSizer>
    </div>
  );
}

export default VirtualizedList;
