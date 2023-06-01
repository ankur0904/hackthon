import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./AddPage.css";

function AddPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handleClick() {
    alert(content);
    console.log(content);
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

      <button onClick={handleClick}>Add</button>
      <Link to="/">Home Page</Link>
    </>
  );
}

export default AddPage;
