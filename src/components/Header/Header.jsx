import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import {  useNavigate } from 'react-router-dom';
import "./Header.css";



function Header() {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/");
  }
  return (
    <>
      <div className="header">
        <h1 className="header-heading" onClick={handleClick}>Learn Appwrite</h1>

        <a href={"https://github.com/appwrite/appwrite"}>
          <GitHubIcon className="header-button" sx={{ fontSize: 60 }} />
        </a>
      </div>
    </>
  );
}

export default Header;
