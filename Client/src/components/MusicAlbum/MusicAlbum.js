import React from "react";
import "./MusicAlbum.css";
import SignUp from "../../img/signup.png";

export default function MusicAlbum() {
  return (
    <div className="MusicAlbum">
        <div className="footerImg">
        <img className="MusicAlbumImg" src={SignUp} />
        </div>
        <div className="footerTxt">
      <h4 className="songName-MusicFooter">Chauffeur</h4>
      <p className="artistName-MusicFooter">Diljit Dosanjh, Tony Laneze</p>
      </div>
    </div>
  );
}
