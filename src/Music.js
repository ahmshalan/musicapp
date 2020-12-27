import React from "react";
import PlayList from "./Container/Playlist";

import classes from "./Music.module.css";
import Header from "./Container/Header";
import Carousel from "react-material-ui-carousel";
import { Button, Paper } from "@material-ui/core";

function Item(props) {
  return (
    <Paper className = {classes.slider} >
      <h2 className={classes.slider__songName}>{props.item.name}</h2>
      <h2 className={classes.slider__songRank}>#{props.item.rank} </h2>
      <div className={classes.slider__footer}>
        <div className={classes.slider__Album}>
          <p>Album</p>
          <h2>{props.item.Album} </h2>
        </div>
        <div className={classes.slider__Artist}>
          <p>Artist</p>
          <h2>{props.item.Artist} </h2>
        </div>
      </div>

    </Paper>
  );
}

function Music({ darkTheme }) {
  var items = [
    {
      cover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Alan_Walker_-_Faded.png/220px-Alan_Walker_-_Faded.png",
      name: "insecure",
      rank: 1,
      Album: "insecure",
      Artist: "BLA - BLA",
    },
    {
      cover: "",
      name: "Faded",
      rank: 2,
      Album: "Single",
      Artist: "Alan Walker",
    },
  ];
  return (
    <div className={`${classes.music} ${darkTheme && classes.darkThemeMain}`}>
      <Header />
      <Carousel className = {classes.carousel}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      {/* <PlayList darkTheme={darkTheme} /> */}
    </div>
  );
}

export default Music;
