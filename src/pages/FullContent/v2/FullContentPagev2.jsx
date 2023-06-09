import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "./FullContentPagev2.css";
import {
  databases,
  Database_ID_v2,
  Collection_ID_v2,
} from "../../../config/config";

function FullContentPagev2() {
  const { articleId } = useParams();
  const promise = databases.listDocuments(Database_ID_v2, Collection_ID_v2);
  const [data, setData] = useState({});
  useEffect(() => {
    promise.then(
      function (response) {
        const result = response.documents;
        for (let i = 0; i < result.length; i++) {
          const element = result[i];
          if (element.title === articleId) {
            setData(result[i]);
          }
        }
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header />
      <div className="fullContentPage">
        <h1 className="fullCotentPageHeading">{data.title}</h1>
        <p className="fullContentPagePara">{data.content}</p>
      </div>
    </>
  );
}

export default FullContentPagev2;
