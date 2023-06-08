import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/implementation");
  }
  return (
    <>
      <div className="footer">
        <Box>
          <Button
            style={{
              color: "black",
              backgroundColor: "white",
              marginTop: "100px",
              marginLeft: "34%",
            }}
            sx={{ fontSize: 20 }}
            variant="contained"
            size="large"
            onClick={handleClick}
          >
            Implemented with Appwrite
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Footer;
