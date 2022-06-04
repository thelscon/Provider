import { iChannel } from "../types";

export class PLUS implements iChannel {

    name = 'PLUS' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}