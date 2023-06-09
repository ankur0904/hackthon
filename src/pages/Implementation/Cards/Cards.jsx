import React from "react";
import "./Cards.css";
import GoogleIcon from "@mui/icons-material/Google";
import "https://kit.fontawesome.com/6d8c4bc4fd.js";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import { googleAuth } from "../Auth/GoogleAuth/GoogleAuth";
import { discordAuth } from "../Auth/DiscordAuth/DiscordAuth";

function Cards(props) {
  let imageNumber;
  let icon;
  if (props.image === "img1") {
    imageNumber = img1;
    icon = (
      <GoogleIcon
        sx={{ fontSize: 60 }}
        className="icons"
        onClick={(e) => googleAuth(e)}
      />
    );
  } else if (props.image === "img2") {
    imageNumber = img2;
    icon = (
      <i
        className="fa-brands fa-discord icons-discord"
        onClick={(e) => discordAuth(e)}
      />
    );
  }

  return (
    <>
      <div className="cards">
        <img
          className="image"
          src={imageNumber}
          alt="randomImage"
          height="320"
          width="400"
        />
        <div className="cards-icons">{icon}</div>
      </div>
    </>
  );
}

export default Cards;
