import { account } from "../../../../config/config";

function discordAuth(e) {
  e.preventDefault();
  account.createOAuth2Session(
    "discord",
    "https://appwrite-cloud-hackthon.vercel.app/implementation/success",
    "https://appwrite-cloud-hackthon.vercel.app/implementation/failure"
  );
}

export { discordAuth };
