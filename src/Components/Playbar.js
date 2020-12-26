import {
  Avatar,
  Grid,
  IconButton,
  InputLabel,
  Slider,
} from "@material-ui/core";
import {
  PlayArrow,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeUp,
} from "@material-ui/icons";
import React from "react";
import classes from "./Playbar.module.css";
function Playbar() {
  return (
    <div className={classes.playbar}>
      <Grid
        container
        justify="space-evenly"
        direction="row"
        alignItems="center"
      >
        <Grid item>
          <Avatar className={classes.avatar} variant="square" src=""></Avatar>
        </Grid>

        <Grid item>
          <InputLabel className={classes.song__name}>Shape of you</InputLabel>
          <InputLabel className={classes.artist__name}>Ed Sheeran</InputLabel>
        </Grid>
        <Grid item>
          <IconButton className={classes.white}>
            <SkipPrevious />
          </IconButton>
          <IconButton className={classes.white}>
            <PlayArrow />
          </IconButton>
          <IconButton className={classes.white}>
            <SkipNext />
          </IconButton>
        </Grid>
        <Grid item>
          <InputLabel className={classes.white}>0:00</InputLabel>
        </Grid>
        <Grid item xs={4}>
          <Slider className={classes.white} />
        </Grid>
        <Grid item>
          <InputLabel className={classes.white}>4:30</InputLabel>
        </Grid>
        <Grid item>
          <IconButton className={classes.white}>
            <Shuffle />
          </IconButton>
        </Grid>
        <Grid item className={classes.volume__control}>
          <VolumeUp className={classes.volumeUp} />
          <Slider className={classes.white} />
        </Grid>
      </Grid>

    </div>
  );
}

export default Playbar;
