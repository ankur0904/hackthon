import React from "react";
import Header from "../../components/Header/Header";
import Cards from "./Cards/Cards";
import "./ImplementationPage.css";

function ImplementationPage() {
  return (
    <>
      <Header />
      <div className="heading">
        <h1>OAuth implemented with Appwrite</h1>
      </div>
      <Cards image="img1" />
      <Cards image="img2" />
      <Cards image="img3" />
      <Cards image="img4" />
    </>
  );
}

export default ImplementationPage;
