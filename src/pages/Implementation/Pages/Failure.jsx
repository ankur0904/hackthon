import React from "react";
import Header from "../../../components/Header/Header";
import "./implementationAuthPage.css"

function Failure(props) {
  return (
    <>
      <Header />
      <h1 className="condition-heading">Failed to logged in with Oauth.</h1>
    </>
  );
}

export default Failure;
// https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/discord/647c34a319c46f10741c
