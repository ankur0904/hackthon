import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./BackendBefore.css";
import {
  databases,
  Database_ID_v2,
  Collection_ID_v2,
} from "../../config/config";
import CircularLoader from "../../components/CircularLoader/CircularLoader";

const promise = databases.listDocuments(Database_ID_v2, Collection_ID_v2);

function BackendBefore() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    promise.then(
      function (response) {
        console.log(response.documents);
        setArticles(response.documents);
        setIsLoading(false);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <CircularLoader />
      ) : (
        <div>
          <h1>Done Backend Before. Let go to blog..</h1>
          {articles.map((article) => (
            <div
              className="NotBackendBeforeBlogCard"
              style={{ width: "90vw" }}
              key={article.title}
            >
              <h1>{article.title}</h1>
              <p className="NotBackendBeforeBlogCard-para">
                {article.content.substring(0, 125)}...
              </p>
              <a
                className="NotBackendBeforeBlogCard-link"
                href={`/articlesv2/${article.title}`}
              >
                Read more
              </a>
            </div>
          ))}
          <Box sx={{ }} className="BackendBeforeButton">
            <Button
              style={{ color: "black", backgroundColor: "#E6FFFD" }}
              sx={{ fontSize: 20 }}
              variant="contained"
              size="large"
            >
              <a href={"/v2/add"}>Add</a>
            </Button>
          </Box>
        </div>
      )}
    </>
  );
}

export default BackendBefore;
