import { iChannel } from "../types";

export class TLC implements iChannel {

    name = 'TLC' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}