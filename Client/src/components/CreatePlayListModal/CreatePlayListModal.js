import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate } from "react-router";
import "./CreatePlayListModal.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreatePlayListModal() {
  
  const [PlayListName, setPlayListName] = React.useState("");
  
  let navigate = useNavigate();

  const CreatePlaylist = async() => {
    await fetch("https://muzixplaylist.herokuapp.com/api/createPlaylist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: PlayListName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlayListName(data);
        document.getElementById("alert").classList.add("alert-appear");
        document.getElementById("alert").classList.remove("alert-box");
        navigate(`/${PlayListName}`)
      })
      .catch((err) => {
        document.getElementById("alert").value = "Playlist already exists";
      });
      difftoast();
    }
  
    const difftoast = () => {
      
      toast.success(`"${PlayListName}"  Playlist Created`, {
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
    <div className="CreatePlayListModal">
      <div id="alert" className="alert-box">
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>'{PlayListName}' Playlist Created! —{" "}
          <strong>check it out!</strong>
        </Alert>
      </div>
      <TextField
        id="standard-basic"
        onChange={(e) => setPlayListName(e.target.value)}
        label="#Playlist"
        variant="standard"
        sx={{ width: 300, marginLeft: "50px" }}
      />
      <Button
        onClick={CreatePlaylist}
        variant="outlined"
        style={{ float: "right", marginTop: "15px" }}
      >
        Create
      </Button>
      {/* <ToastContainer/> */}
    </div>
  );
}