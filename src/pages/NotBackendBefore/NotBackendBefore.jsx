import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./NotBackendBefore.css";
import {
  databases,
  Database_ID_v1,
  Collection_ID_v1,
} from "../../config/config";
import CircularLoader from "../../components/CircularLoader/CircularLoader";

const promise = databases.listDocuments(Database_ID_v1, Collection_ID_v1);

function NotBackendBefore() {
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
          <h1>Never Done Backend Before???</h1>

          {articles.map((article) => (
            <div className="NotBackendBeforeBlogCard" key={article.title}>
              <h1>{article.title}</h1>
              <p className="NotBackendBeforeBlogCard-para">
                {article.content.ing(0, 90)}...
              </p>
              <a
                className="NotBackendBeforeBlogCard-link"
                href={`/articlesv1/${article.title}`}
              >
                Read more
              </a>
            </div>
          ))}

          <Box sx={{  }} className="notBackendBeforeButton">
            <Button
              style={{ color: "black", backgroundColor: "#E6FFFD" }}
              sx={{ fontSize: 20 }}
              variant="contained"
              size="large"
            >
              <a href={"/v1/add"}>Add</a>
            </Button>
          </Box>
        </div>
      )}
    </>
  );
}

export default NotBackendBefore;
