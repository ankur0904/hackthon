import { Client, Databases, ID, Account } from "appwrite";

const client = new Client();
const account = new Account(client);
const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("647c34a319c46f10741c"); // Your project ID

const Database_ID_v1 = "647c34cda0184d7c964e";
const Collection_ID_v1 = "647c436a8e7ca3dc98bc";
const Database_ID_v2 = "647c34cda0184d7c964e";
const Collection_ID_v2 = "647c34ef6124404ce8d7";
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
