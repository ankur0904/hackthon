import React from "react";
import Header from "../../components/Header/Header";
import Cards from "./Cards/Cards";
import "./ImplementationPage.css";

function ImplementationPage() {
  return (
    <>
      <Header />
      <div className="ImplementationPageHeading">
        <h1>OAuth implemented with Appwrite</h1>
      </div>
      <Cards image="img1" />
      <Cards image="img2" />
    </>
  );
}

export default ImplementationPage;
