import React, { useState, useEffect } from "react";
import "./LibraryCharts.css";
import library from "../../img/library.jpg";
import { useNavigate } from "react-router";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@mui/material/Grid';
import { Modal } from "@mantine/core";
import CreatePlayListModal from "../CreatePlayListModal/CreatePlayListModal";


export default function LibraryCharts() {
  let navigate = useNavigate();

  const [opened, setOpened] = useState(false);

  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    // get playlists
fetch('https://muzixplaylist.herokuapp.com/api/getPlaylist', {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json'
  }
}).then(res => res.json())
  .then(data => {console.log(data)
    setPlaylist(data);});
    
  }, []);

  return (
    <div className="LibraryCharts">
      <div className="LikedSongHead">
        <img className="playlistImg" src={library} alt="" />
        <h1
          className="LikedName"
          style={{ fontFamily: "Open Sans", fontSiz: "16px" }}
        >
          Music Library
        </h1>
      </div>
      <h2 style={{color:"white", marginLeft: "8px"}}> Your Liked Songs</h2>
      <div className="liked-songs-lists">
        <div
          className="likedPlaylistLibray"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/liked")}
        >
          <h3>LIKED SONGS</h3>
        </div>
      </div>

    
      
        {/* <Grid container>
      <div className="playlistsCards">
      {playlist.map((playlist) => (
      <div
          className="likedPlaylistLibray"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/playlist/${playlist._id}`)}
        >
          <h3>{playlist.playlistName}</h3>
        </div>
         ))}
      </div>
      </Grid> */}
      <Modal
        className="CreatePlaylistDiv"
        opened={opened}
        onClose={() => setOpened(false)}
        title=  "Create PlayList"
      >
        <CreatePlayListModal/>
      </Modal>
      <div className=" NavIcon createPlaylist LibraryCreatePlaylist">
        <h4 onClick={() => setOpened(true)} style={{color: 'white', float: 'right', marginRight: '25px'}}>
          <i className="navTop-icon fa-solid fa-square-plus"></i>Create New Playlist
        </h4>
      </div>
<h2 style={{color:"white", marginLeft: "8px"}}> Your Playlists</h2>
<Grid container className="PlaylistContainer">

    {playlist.map((playlist) => (
      
  <Grid item lg={3} md={6} sx={12}>
    <div
          className="likedPlaylistLibrayPlaylist"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/playlist/${playlist._id}`)}
        >
          <h3>{playlist.playlistName}</h3>
        </div>
  </Grid>
  
  ))}


</Grid>
     
      
    </div>
  );
}
