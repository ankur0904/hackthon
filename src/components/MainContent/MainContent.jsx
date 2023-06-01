import React from "react";
import "./MainContent.css";

function MainContent() {
  return (
    <>
      <div className="maincontent">
        <div className="maincontent-content">
          <h2 className="maincontent-heading">
            Here is what you are missing in 2023 without Appwrite
          </h2>
          <ul className="maincontent-list">
            <li className="maincontent-list-item">Reducing Development Time</li>
            <li className="maincontent-list-item">Easy to use SDKs and APIs</li>
            <li className="maincontent-list-item">Security</li>
            <li className="maincontent-list-item">Scalability</li>
            <li className="maincontent-list-item"> and many more...</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainContent;
