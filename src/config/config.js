import { Client, Databases, ID, Account } from "appwrite";
// require('dotenv').config();
const client = new Client();
const account = new Account(client);
const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(process.env.REACT_APP_project_ID); // Your project ID

const Database_ID_v1 = process.env.REACT_APP_Database_ID_v1
const Collection_ID_v1 = process.env.REACT_APP_Collection_ID_v1;
const Database_ID_v2 = process.env.REACT_APP_Database_ID_v2;
const Collection_ID_v2 = process.env.REACT_APP_Collection_ID_v2;
let randomID = ID.unique();

export {
  databases,
  Database_ID_v1,
  Database_ID_v2,
  Collection_ID_v2,
  Collection_ID_v1,
  randomID,
  account,
};
