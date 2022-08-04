import React from "react";
import "./SliderComponent_4.css";
import Card from "@mui/material/Card";

import { useState } from "react";
import { Modal } from "@mantine/core";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Login from "../../img/login.PNG";
import AddToPlaylistModal from "../AddToPlaylistModal/AddToPlaylistModal";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

export default function SliderComponent_4() {/* 
  const [opened, setOpened] = useState(false);

  return (
    <div className="SliderComponent_4">
      <Modal
        className="CreatePlaylistDiv"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add To Playlist"
      >
        <AddToPlaylistModal />
      </Modal>
      <h2 className="SliderComponentHeading SongComponentHeading">
        Weekly Charts
      </h2>
      <div className="Sub-SliderComponent">
        <div className="SliderComponent_2_card">
          <Card
            className="cards-layout"
            sx={{
              backgroundColor: "#485461",
              backgroundImage:
                "linear-gradient(315deg, #485461 0%, #28313b 74%)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="cardComponent">
                <div className="card-heading">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn">
                  <i class="ss fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
            <PlaylistAddIcon
                sx={{
                  float: "right",
                  position: "relative",
                  bottom: "15px",
                  fontSize: "30px",
                  right: "5px",
                  color: "darkGrey"
                }}
                onClick={() => {
                  setOpened(true);
                  setId(track.id);
                }}
              />

            <i class="slider-component2_heart fa-regular fa-heart float-end text-end"></i>
          </Card>
        </div>

        <div className="SliderComponent_2_card">
          <Card
            className="cards-layout"
            sx={{
              backgroundColor: "#485461",
              backgroundImage:
                "linear-gradient(315deg, #485461 0%, #28313b 74%)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="cardComponent">
                <div className="card-heading">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn">
                  <i class="ss fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
            <PlaylistAddIcon
                sx={{
                  float: "right",
                  position: "relative",
                  bottom: "15px",
                  fontSize: "30px",
                  right: "5px",
                  color: "darkGrey"
                }}
                onClick={() => {
                  setOpened(true);
                  setId(track.id);
                }}
              />

            <i class="slider-component2_heart fa-regular fa-heart float-end text-end"></i>
          </Card>
        </div>

        <div className="SliderComponent_2_card">
          <Card
            className="cards-layout"
            sx={{
              backgroundColor: "#485461",
              backgroundImage:
                "linear-gradient(315deg, #485461 0%, #28313b 74%)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="cardComponent">
                <div className="card-heading">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn">
                  <i class="ss fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
            <PlaylistAddIcon
                sx={{
                  float: "right",
                  position: "relative",
                  bottom: "15px",
                  fontSize: "30px",
                  right: "5px",
                  color: "darkGrey"
                }}
                onClick={() => {
                  setOpened(true);
                  setId(track.id);
                }}
              />

            <i class="slider-component2_heart fa-regular fa-heart float-end text-end"></i>
          </Card>
        </div>

        <div className="SliderComponent_2_card">
          <Card
            className="cards-layout"
            sx={{
              backgroundColor: "#485461",
              backgroundImage:
                "linear-gradient(315deg, #485461 0%, #28313b 74%)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="cardComponent">
                <div className="card-heading">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn">
                  <i class="ss fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
            <PlaylistAddIcon
                sx={{
                  float: "right",
                  position: "relative",
                  bottom: "15px",
                  fontSize: "30px",
                  right: "5px",
                  color: "darkGrey"
                }}
                onClick={() => {
                  setOpened(true);
                  setId(track.id);
                }}
              />

            <i class="slider-component2_heart fa-regular fa-heart float-end text-end"></i>
          </Card>
        </div>

        <div className="SliderComponent_2_card">
          <Card
            className="cards-layout"
            sx={{
              backgroundColor: "#485461",
              backgroundImage:
                "linear-gradient(315deg, #485461 0%, #28313b 74%)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="cardComponent">
                <div className="card-heading">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn">
                  <i class="ss fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
            <PlaylistAddIcon
                sx={{
                  float: "right",
                  position: "relative",
                  bottom: "15px",
                  fontSize: "30px",
                  right: "5px",
                  color: "darkGrey"
                }}
                onClick={() => {
                  setOpened(true);
                  setId(track.id);
                }}
              />

            <i class="slider-component2_heart fa-regular fa-heart float-end text-end"></i>
          </Card>
        </div>

        <div className="SliderComponent_2_card">
          <Card
            className="cards-layout"
            sx={{
              backgroundColor: "#485461",
              backgroundImage:
                "linear-gradient(315deg, #485461 0%, #28313b 74%)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="cardComponent">
                <div className="card-heading">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn">
                  <i class="ss fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
            <PlaylistAddIcon
                sx={{
                  float: "right",
                  position: "relative",
                  bottom: "15px",
                  fontSize: "30px",
                  right: "5px",
                  color: "darkGrey"
                }}
                onClick={() => {
                  setOpened(true);
                  setId(track.id);
                }}
              />

            <i class="slider-component2_heart fa-regular fa-heart float-end text-end"></i>
          </Card>
        </div>

        <div className="SliderComponent_2_card">
          <Card
            className="cards-layout"
            sx={{
              backgroundColor: "#485461",
              backgroundImage:
                "linear-gradient(315deg, #485461 0%, #28313b 74%)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="cardComponent">
                <div className="card-heading">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn">
                  <i class="ss fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
            <PlaylistAddIcon
                sx={{
                  float: "right",
                  position: "relative",
                  bottom: "15px",
                  fontSize: "30px",
                  right: "5px",
                  color: "darkGrey"
                }}
                onClick={() => {
                  setOpened(true);
                  setId(track.id);
                }}
              />

            <i class="slider-component2_heart fa-regular fa-heart float-end text-end"></i>
          </Card>
        </div>

        <div className="SliderComponent_2_card">
          <Card className="cards-layout"
          sx={{
            backgroundColor: "#485461",
            backgroundImage:
              "linear-gradient(315deg, #485461 0%, #28313b 74%)",
          }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={Login}
                alt="green iguana"
              />
              <CardContent className="cardComponent">
                <div className="card-heading">
                  <Typography gutterBottom variant="h5" component="div">
                    Song Name
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Artist Name
                  </Typography>
                </div>
                <div className="playBtn">
                  <i class="ss fa-solid fa-circle-play"></i>
                </div>
              </CardContent>
            </CardActionArea>
            <PlaylistAddIcon
                sx={{
                  float: "right",
                  position: "relative",
                  bottom: "15px",
                  fontSize: "30px",
                  right: "5px",
                  color: "darkGrey"
                }}
                onClick={() => {
                  setOpened(true);
                  setId(track.id);
                }}
              />

            <i class="slider-component2_heart fa-regular fa-heart float-end text-end"></i>
          </Card>
        </div>
      </div>
    </div>
  ); */
}
