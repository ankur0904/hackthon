import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FullContentPagev1.css";
import {
  databases,
  Database_ID_v1,
  Collection_ID_v1,
} from "../../../config/config";
import Header from "../../../components/Header/Header";

function FullContentPagev1() {
  const { articleId } = useParams();
  // console.log(articleId);
  const promise = databases.listDocuments(Database_ID_v1, Collection_ID_v1);
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
  }, []);

  console.log(data);
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

export default FullContentPagev1;
