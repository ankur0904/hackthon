import { account } from "../../../../config/config";

function discordAuth(e){
    
    e.preventDefault();
    account.createOAuth2Session('discord', 'http://localhost:3000/implementation/success', 'http://localhost:3000/implementation/failure');
}


export  {discordAuth};