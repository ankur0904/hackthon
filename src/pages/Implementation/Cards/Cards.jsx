import React from "react";
import "./Cards.css";
import GoogleIcon from "@mui/icons-material/Google";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";

function Cards(props) {
  console.log(props.image);
  let imageNumber;
  let icon;
  if (props.image === "img1") {
    imageNumber = img1;
    icon = <GoogleIcon sx={{ fontSize: 60 }} className="icons" />;
  } else if (props.image === "img2") {
    imageNumber = img2;
    icon = <FacebookRoundedIcon sx={{ fontSize: 60 }} className="icons" />;
  } else if (props.image === "img3") {
    imageNumber = img3;
    icon = <FacebookRoundedIcon sx={{ fontSize: 60 }} className="icons" />;
  } else if (props.image === "img4") {
    imageNumber = img4;
    icon = <FacebookRoundedIcon sx={{ fontSize: 60 }} className="icons" />;
  }
  return (
    <>
      <div className="cards">
        <img
          className="image"
          src={imageNumber}
          alt="image"
          height="320"
          width="400"
        />
        <div className="cards-icons">
          {icon}

        </div>
      </div>
    </>
  );
}

export default Cards;
