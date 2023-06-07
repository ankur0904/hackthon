import { account } from "../../../../config/config";

function googleAuth(e){
    e.preventDefault();
    account.createOAuth2Session('google', 'http://localhost:3000/implementation/success', 'http://localhost:3000/implementation/failure');
}


export  {googleAuth};