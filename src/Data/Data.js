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

class Playlist {
  static getPlaylist = () => {
    return [...playlistTracks];
  };
}

export default Playlist;
