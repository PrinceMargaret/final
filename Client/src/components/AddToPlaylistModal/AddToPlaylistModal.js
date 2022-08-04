import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddToPlaylistModal(props) {
  const [playlistId, setPlaylistId] = React.useState("");
  const [favPlaylist, setfavPlaylist] = React.useState([]);
  const handleChange = (event) => {
    setPlaylistId(event.target.value);
  };


 //playlist state
 const [playlist, setPlaylist] = React.useState([]);
 React.useEffect(() => {
   // get playlists
fetch('https://muzixplaylist.herokuapp.com/api/getPlaylist', {
 method: 'GET',
 headers: {
     'Content-Type': 'application/json'
 }
}).then(res => res.json())
 .then(data => {console.log(data)
   setPlaylist(data);});
   console.log( props.Id,"props.Id");
   let filterSong =props.SongList?.filter(song => song.id === props.Id);
   console.log(filterSong,"filterSong");
   setfavPlaylist(filterSong);



 }, []);



 function addSongToPlaylist() {
   fetch(`https://muzixplaylist.herokuapp.com/api/addSongToPlaylist/${playlistId}`, {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify({

      favPlaylist: favPlaylist
       
     
     })
   }).then(res => res.json())
     .then(data => {console.log(data)
      document.getElementById('alert').classList.add("alert-appear");
      document.getElementById('alert').classList.remove("alert-box");
    
       });
       difftoast();
      }
    
      const difftoast = () => {
        
        toast.success(`Song Added to playlist `, {
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
    <div className="AddToPlaylistModal">
      <FormControl
        variant="standard"
        sx={{
          m: 1,
          minWidth: 120,
          width: "80%",
          marginLeft: "10%",
        }}
      >
        <InputLabel id="demo-simple-select-standard-label">
          Playlists
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={playlistId}
          onChange={handleChange}
          label="Your Playlist"
        >


          <MenuItem value="">
            
          </MenuItem>
          {playlist.map((playlist) => (
       

       <MenuItem value={playlist._id}>{playlist.playlistName}</MenuItem>
      ))}
          
          
        </Select>
      </FormControl>
      <Button onClick={addSongToPlaylist} variant="contained" endIcon={<PlaylistAddIcon />}
      sx={{float: "right", right: "10%", top: 5}}>
        Add
      </Button>

      <div id="alert" className='alert-box'>
        {/* <Alert severity="success"
        sx={{marginTop: '60px'}}>
        <AlertTitle>Success</AlertTitle>
         Playlist Created! — <strong>check it out!</strong>
      </Alert> */}
        </div>
        
    </div>
  );
}
