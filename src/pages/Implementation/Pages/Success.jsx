import React from "react";
import Header from "../../../components/Header/Header";
import "./implementationAuthPage.css"

function Success(props) {
  return (
    <>
      <Header />
      <h1 className="condition-heading">Sucessfully logged in with Oauth.</h1>
    </>
  );
}

export default Success;
