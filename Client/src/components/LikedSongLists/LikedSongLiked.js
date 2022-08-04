import React, { useEffect } from "react";
import "./LikedSongLists.css";
import playlistImg from "../../img/playlist.jpg";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



import "../SliderComponent_2/SliderComponent_2.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { CardActionArea } from "@mui/material";

import personalPlaylistImage from "../../img/personalplaylist.jpg";

import Typography from "@mui/material/Typography";

export default function LikedSongLists() {
  const [likedSong, setLikedSong] = React.useState([]);

  React.useEffect(() => {
    // getLikedSong
    fetch("https://likedapi.herokuapp.com/api/getLikedSong", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLikedSong(data);
      });
  }, []);


  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  function removeLiked(id) {


    fetch(`https://likedapi.herokuapp.com/api/removeLiked/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // filter data by spliceing the song
        //use splice to remove the song from the playlist
        console.log(id, "SongId");
        likedSong[0]?.likedSong.map((song, index) => {
          console.log(song.id, "songs id");
          if (song.id === id) {
            likedSong[0]?.likedSong.splice(index, 1);
          }
        });
      })
      .then(
        fetch("https://likedapi.herokuapp.com/api/getLikedSong", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setLikedSong(data);
          })
      );
      difftoast();
    }
  
    const difftoast = () => {
      
      toast.success(`Song Deleted from Liked Songs`, {
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
    <div className="LikedSongCards">
      <div className="LikedSongHead">
        <img className="playlistImg" src={playlistImg} alt="" />
        <h1
          className="LikedName"
          style={{ fontFamily: "Open Sans", fontSiz: "16px" }}
        >
          Liked Songs
        </h1>
      </div>
      {likedSong[0]?.likedSong.map((item) => (
        <div className="liked-songs-lists" key={item.id}>
          <List
            sx={{
              width: "98%",
              background: "linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%)",
              borderRadius: "8px",
            }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={item.name} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.artists.name}
                    </Typography>
                  </React.Fragment>
                }
              />
              <i
                
                class="fa-solid fa-heart"
                style={{ marginRight: "20px", marginTop: "19px", color: "red", fontSize: "18px" }}
                id="plus"
                onClick={removeLiked.bind(this, item.id)}
              ></i>
              {/* <FavoriteIcon
                sx={{ marginRight: "20px", marginTop: "15px", color: "red" }}
              /> */}
              <p style={{ marginRight: "20px", marginTop: "15px" }}> {millisToMinutesAndSeconds(item.duration_ms)} </p>
              <MoreHorizIcon sx={{ marginRight: "20px", marginTop: "15px" }} />

            </ListItem>
            <audio controls>
              <source src={item.preview_url} type="audio/mpeg" />
            </audio>
          </List>
        </div>
      ))}
      <ToastContainer/>
    </div>
  );
}

{
  /* <div className='LikedSongCards'>
        <div className="LikedSongHead">
            <img className='playlistImg' src={playlistImg} alt="" />
            <h1 className='LikedName' style={{fontFamily: "Open Sans", fontSiz: "16px"}}>Liked Songs</h1>
        </div>
        <div className="Sub-SliderComponent">
        {likedSong[0]?.likedSong.map((item) =>
          <div className="SliderComponent_2_card" >
            
          <Card className='cards-layout'
          sx={{backgroundColor: "#485461",
            backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)"}}>
          
          <CardActionArea>
          
          <img src={item.album.images[1].url} id="image"  alt="green iguana"/>
           
          
            
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
               
              {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item.artists.name}
              
              <audio controls>
                <source src={item.preview_url} type="audio/mpeg" />
              </audio>
              </Typography>
            </CardContent>
          </CardActionArea>
          <i class="slider-component2_heart fa-solid fa-minus float-end text-end" id="plus" onClick={removeLiked.bind(this,item.id)}></i>
          
          
          
        </Card>
        </div>)}
      </div>
    </div> */
}