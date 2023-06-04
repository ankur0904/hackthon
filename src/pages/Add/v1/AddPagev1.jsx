import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./AddPage.css";
import {
  databases,
  Database_ID_v1,
  Collection_ID_v1,
  randomID,
} from "../../../config/config";

function AddPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handleClick() {
    const promise = databases.createDocument(
      Database_ID_v1,
      Collection_ID_v1,
      randomID,
      {
        title: title,
        content: content,
      }
    );
  }

  return (
    <>
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
      <Box sx={{ "& button": { ml: 100, mt: 1 } }}>
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

      <Box sx={{ "& button": { ml: 95, mt: 1 } }}>
        <Button
          style={{ color: "black", backgroundColor: "white" }}
          sx={{ fontSize: 20 }}
          variant="contained"
          size="large"
        >
          <Link to="/">Home Page</Link>
        </Button>
      </Box>
    </>
  );
}

export default AddPage;
