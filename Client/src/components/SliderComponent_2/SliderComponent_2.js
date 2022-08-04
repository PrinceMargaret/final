import React from "react";
import { useState } from "react";
import "./SliderComponent_2.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Modal } from "@mantine/core";
import { CardActionArea } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AddToPlaylistModal from "../AddToPlaylistModal/AddToPlaylistModal";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import {useAuthContext} from "../../hooks/useAuthContext"

export default function SliderComponent_2() {
  const {user} = useAuthContext()
  const [opened, setOpened] = useState(false);
  const [heart, setHeart] = useState(
    "slider-component2_heart fa-solid fa-heart float-end text-end"
  );
  const [SongData, setSongData] = React.useState([]);
  const [Id, setId] = useState("");

  React.useEffect(() => {
    fetch("https://muzixcloud.herokuapp.com/api/GetTopArtist")
      .then((res) => res.json())
      .then((data) => {
        //remove first item from array

        setSongData(data.tracks);
        //console.log(data.tracks);
      });
  }, []);

  function addLikedSong(track) {
    if(user){
      fetch("https://likedapi.herokuapp.com/api/addLikedSong", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likedSong: track,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        // document.getElementById(heart).classList.add("fa-solid");
        // document.getElementById(heart).classList.remove("fa-solid");
      })
      difftoast();
    }
    if(!user){
      toast.error('Please Log In', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    }
  }

  const difftoast = () => {
    
    toast.success('Song Added to Liked Songs', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }
  
  const handleClick1 = (track)=>{
    if(!user){
      toast.error('Please Log In', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    }
    else{
      setOpened(true);
      setId(track.id);
    }
  }

  return (
    <div className="SliderComponent_2">
      <Modal
        className="CreatePlaylistDiv"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create PlayList"
      >
        <AddToPlaylistModal SongList={SongData} Id={Id} />
      </Modal>
      <h2 className="SliderComponentHeading SongComponentHeading">
      New Release Songs
      </h2>
      <div className="Sub-SliderComponent">
        {SongData?.map((track) => (
          <div className="SliderComponent_2_card" key={track.id}>
            <Card
              className="cards-layout"
              sx={{
                backgroundColor: "#485461",
                backgroundImage:
                  "linear-gradient(315deg, #485461 0%, #28313b 74%)",
                width: "300px",
                marginLeft: 0,
                marginRight: 0,
              }}
            >
              <CardActionArea>
                <img
                  src={track.album.images[1].url}
                  id="image"
                  alt="green iguana"
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      color: "darkGrey",
                    }}
                  >
                    {track.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {track.artists.name}
                    <audio controls className="Audio">
                      <source src={track.preview_url} type="audio/mpeg" />
                    </audio>
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <i
                class="slider-component2_heart fa-solid fa-plus float-end text-end"
                id="plus" 
                onClick={() => {
                  setOpened(true);
                  setId(track.id);
                }}

              ></i> */}

              <PlaylistAddIcon
                sx={{
                  float: "right",
                  position: "relative",
                  bottom: "15px",
                  fontSize: "30px",
                  right: "5px",
                  color: "darkGrey",
                }}
                onClick={() => {
                  handleClick1(track);
                }}
              />

              <i
                id="heart"
                className={`${heart}`}
                onClick={addLikedSong.bind(this, track)}
              ></i>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
              }
