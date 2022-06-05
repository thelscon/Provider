import { iChannel } from "../types";

export class Live implements iChannel {

    name = 'Live' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}