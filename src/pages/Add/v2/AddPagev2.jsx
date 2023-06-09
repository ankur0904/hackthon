import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./AddPage2.css";
import {
  databases,
  Database_ID_v2,
  Collection_ID_v2,
  randomID,
} from "../../../config/config";
import Flash from "../../../components/Flash/Flash";

function AddPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [flash, setFlash] = useState("");
  const [flashTitle, setFlashTitle] = useState("Error :(");

  function handleClick() {
    console.log(title, content);

    const promise = databases.createDocument(
      Database_ID_v2,
      Collection_ID_v2,
      randomID,
      {
        title: title,
        content: content,
      }
    );

    promise.then(
      function (response) {
        setFlash(true);
        setFlashTitle("Success :)");
      },
      function (error) {
        console.log(error);
      }
    );
  }

  return (
    <>
    <div className="AddPage">
    <Header />
      <h1>Contribute to our blogs...</h1>
      <textarea
        className="addPage-input1"
        placeholder="Your title here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows="9"
        cols="50"
        className="addPage-input2"
        placeholder="Your post here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Box sx={{ "& button": { m: 2 } }} className="addPageButton1">
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          sx={{ fontSize: 20 }}
          variant="contained"
          size="large"
          onClick={handleClick}
        >
          Add
        </Button>
      </Box>

      <Box sx={{ "& button": { m: 2 } }} className="addPageButton2">
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          sx={{ fontSize: 20 }}
          variant="contained"
          size="large"
        >
          <Link to="/">Home Page</Link>
        </Button>
      </Box>
      {flash && <Flash flashTitle={flashTitle} />}
    </div>

    </>
  );
}

export default AddPage;
