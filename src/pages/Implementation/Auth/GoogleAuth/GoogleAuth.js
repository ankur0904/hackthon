import { account } from "../../../../config/config";

function googleAuth(e) {
  e.preventDefault();
  account.createOAuth2Session(
    "google",
    "https://appwrite-cloud-hackthon.vercel.app/implementation/success",
    "https://appwrite-cloud-hackthon.vercel.app/implementation/failure"
  );
}

export { googleAuth };
