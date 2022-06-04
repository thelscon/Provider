import { iChannel } from "../types";

export class STB implements iChannel {

    name = 'СТБ' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}