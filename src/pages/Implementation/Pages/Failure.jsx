import React from "react";
import Header from "../../../components/Header/Header";
import "./implementationAuthPage.css";

function Failure(props) {
  return (
    <>
      <Header />
      <h1 className="condition-heading">Failed to logged in with Oauth.</h1>
    </>
  );
}

export default Failure;
