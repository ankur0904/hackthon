import React from "react";
import Header from "../../components/Header/Header";

function NotFoundPage() {
  return (
    <>
      <Header />
      <h1 style={{ fontSize: "300px" }}>: )</h1>
      <h1>
        You are developer right???? <br />
      </h1>
      <p
        style={{ fontSize: "20px", fontWeight: "lighter", textAlign: "center" }}
      >
        I think you should contribute to my project...
      </p>
      <a style={{ marginLeft: "46%" }} href="https://www.github.com/ankur0904">
        Project
      </a>
    </>
  );
}

export default NotFoundPage;
