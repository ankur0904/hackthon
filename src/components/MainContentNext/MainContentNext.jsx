import React from "react";
import "./MainContentNext.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function MainContentNext() {
  const navigate = useNavigate();
  function handleClickFirst() {
    navigate("/notBackendBefore");
  }
  function handleClickSecond() {
    navigate("/backendBefore");
  }
  return (
    <>
      <div className="mainContentNext">
        <div className="mainContentNext-content">
          <div className="mainContentNext-cards-first">
            <p>
              Installation For the installation head over <br /> to the official
              documentation <br />
              here.
            </p>
            {/* <button>Install</button> */}

            <Box sx={{ "& button": { m: 2 } }} className="mainContentNextButtonFirst">
              <Button
                style={{ color: "black", backgroundColor: "white" }}
                sx={{ fontSize: 20 }}
                variant="contained"
                size="large"
              >
                <a href={"https://appwrite.io/docs/self-hosting"}>Install</a>
              </Button>
            </Box>
          </div>
          <div className="mainContentNext-cards-second">
            <p>
              Have you done backend <br /> before? If not go here.
            </p>
            <Box sx={{ "& button": { m: 2 } }} className="mainContentNextButton">
              <Button
                style={{ color: "black", backgroundColor: "white" }}
                sx={{ fontSize: 20 }}
                variant="contained"
                size="large"
                onClick={handleClickFirst}
              >
                GO
              </Button>
            </Box>
          </div>
          <div className="mainContentNext-cards-third">
            <p>
              Have you done backend <br /> before? If you done.
            </p>
            <Box sx={{ "& button": { m: 2 } }} className="mainContentNextButton">
              <Button
              
                style={{ color: "black", backgroundColor: "white" }}
                sx={{ fontSize: 20 }}
                variant="contained"
                size="large"
                onClick={handleClickSecond}
              >
                GO
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContentNext;
