import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <h1 className="header-heading">Learn Appwrite</h1>

        <a href={"https://github.com/appwrite/appwrite"}>
          <GitHubIcon className="header-button" sx={{ fontSize: 60 }} />
        </a>
      </div>
    </>
  );
}

export default Header;
