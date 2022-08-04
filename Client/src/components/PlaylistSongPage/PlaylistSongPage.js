import React from "react";
import "./PlaylistSongPage.css";

import { useState } from "react";
import "../SliderComponent_2/SliderComponent_2.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import playlistImg from "../../img/playlist.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import RemoveIcon from "@mui/icons-material/Remove";

import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { CardActionArea } from "@mui/material";

import personalPlaylistImage from "../../img/personalplaylist.jpg";

import Typography from "@mui/material/Typography";

import { useParams } from "react-router-dom";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PlaylistSongPage() {
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  let { id } = useParams();

  const [playlist, setPlaylist] = React.useState([]);
  React.useEffect(() => {
    // get playlists
    fetch(`https://muzixplaylist.herokuapp.com/api/getPlaylist/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaylist(data);
      });
  }, [id]);

  function deleteSong(SongId) {
    fetch(
      `https://muzixplaylist.herokuapp.com/api/deleteSongToPlaylist/${playlist._id}/${SongId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("hello");
        // filter data by spliceing the song
        //use splice to remove the song from the playlist
        console.log(SongId, "SongId");
        data.songs.map((song, index) => {
          console.log(song.favPlaylist[0].id, "songs id");
          if (song.favPlaylist[0].id === SongId) {
            data.songs.splice(index, 1);
            setPlaylist(data);
          }
        });
      })
      .then(
        fetch(`https://muzixplaylist.herokuapp.com/api/getPlaylist/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setPlaylist(data);
          })
      );
      difftoast();
    }
  
    const difftoast = () => {
      
      toast.success(`Song Deleted from Playlist`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
    });
  }

  return (
    <div className="PlaylistSongPage">
      <div className="LikedSongHead">
        <img className="playlistImg" src={personalPlaylistImage} alt="" />
        <h1
          className="LikedName"
          style={{ fontFamily: "Open Sans", fontSiz: "16px" }}
        >
          {playlist.playlistName}{" "}
        </h1>
      </div>

      <div className="Sub-SliderComponent">
        {/* {playlist.songs?.map((item) =>
          <div className="SliderComponent_2_card" >
            
          <Card className='cards-layout'
          sx={{backgroundColor: "#485461",
            backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)"}}>
          
          <CardActionArea>
          
          <img src={item.favPlaylist[0].album.images[1].url} id="image"  alt="green iguana"/>
           
          
            

            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
               
              {item.favPlaylist[0].name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item.favPlaylist[0].artists.name}
              

              <audio controls>
                <source src={item.favPlaylist[0].preview_url} type="audio/mpeg" />
              </audio>

              </Typography>
            </CardContent>
          </CardActionArea>
          <i class="slider-component2_heart fa-solid fa-minus float-end text-end" id="plus" onClick={deleteSong.bind(this,item.favPlaylist[0].id)}></i>

          <i id="heart" class="slider-component2_heart fa-regular fa-heart float-end text-end"  ></i>
          
          
        </Card>
        </div>)} */}

        {playlist.songs?.map((item) => (
          <div className="liked-songs-lists">
            <List
              sx={{
                width: "98%",
                background: "linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%)",
                borderRadius: "8px",
              }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={item.favPlaylist[0].name}
                    src={item.favPlaylist[0].album.images[1].url}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.favPlaylist[0].name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.favPlaylist[0].artists.name}
                      </Typography>
                    </React.Fragment>
                  }
                />
                <i
                  class="fa-solid fa-heart"
                  style={{
                    marginRight: "20px",
                    marginTop: "19px",
                    color: "red",
                    fontSize: "18px",
                  }}
                  id="plus"
                ></i>
                {/* <FavoriteIcon
                sx={{ marginRight: "20px", marginTop: "15px", color: "red" }}
              /> */}
                <p style={{ marginRight: "20px", marginTop: "15px" }}>
                  {" "}
                  {millisToMinutesAndSeconds(
                    item.favPlaylist[0].duration_ms
                  )}{" "}
                </p>
                <MoreHorizIcon
                  sx={{ marginRight: "20px", marginTop: "15px" }}
                />

                <i
                  class="fa-solid fa-minus float-end text-end"
                  style={{ marginTop: "-8px" }}
                  onClick={deleteSong.bind(this, item.favPlaylist[0].id)}
                ></i>

                {/* <RemoveIcon
              sx={{position: "relative", marginTop: "5px", color: "grey" }}
              onClick={deleteSong.bind(this,item.favPlaylist[0].id)}
              /> */}
              </ListItem>
              <audio controls>
                <source
                  src={item.favPlaylist[0].preview_url}
                  type="audio/mpeg"
                />
              </audio>
            </List>
          </div>
        ))}
      </div>
      <ToastContainer/>
    </div>
  );
}
