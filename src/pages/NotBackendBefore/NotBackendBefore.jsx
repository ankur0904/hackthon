import React,{useState, useEffect} from "react";
import Header from "../../components/Header/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./NotBackendBefore.css";
import {databases,Database_ID_v1,Collection_ID_v1, randomID} from "../../config/config";


const promise = databases.listDocuments(Database_ID_v1, Collection_ID_v1);

function NotBackendBefore() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
      promise.then(
        function (response) {
          console.log(response.documents);
          setArticles(response.documents);
        },
        function (error) {
          console.log(error); // Failure
        }
      );
  }, []);
  return (
    <>
      <Header />
      <h1>Never Done Backend Before???</h1>

      {articles.map((article) => (
        <div className="NotBackendBeforeBlogCard" key={article.title}>
          <h1>{article.title}</h1>
          <p className="NotBackendBeforeBlogCard-para">
            {article.content.substring(0, 125)}...
          </p>
          <a
            className="NotBackendBeforeBlogCard-link"
            href={`/articles/${article.title}`}
          >
            Read more
          </a>
        </div>
      ))}

      <Box sx={{ "& button": { ml: 100, mt: 1 } }} >
        <Button
          style={{ color: "black", backgroundColor: "#E6FFFD"}}
          sx={{ fontSize: 20 }}
          variant="contained"
          size="large"
        >
          <a  href={"/v1/add"}>Add</a>
        </Button>
      </Box>
    </>
  );
}

export default NotBackendBefore;
