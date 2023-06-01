import React from "react";
import Header from "../../components/Header/Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./BackendBefore.css";

var articles = [
  {
    title: "I have so experience",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel quisquam unde ducimus animi saepe illum ullam sapiente mollitia? Eos rem, sunt odit consectetur enim earum doloribus veniam hic velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel quisquam unde ducimus animi saepe illum ullam sapiente mollitia? Eos rem, sunt odit consectetur enim earum doloribus veniam hic velit?",
  },
  { title: "I have little experience", content: "Learn it now" },
];

function BackendBefore() {
  return (
    <>
      <Header />
      <h1>Done Backend Before. Let go to blog..</h1>

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
          <a  href={"/v2/add"}>Add</a>
        </Button>
      </Box>
    </>
  );
}

export default BackendBefore;
