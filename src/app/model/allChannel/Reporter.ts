import { iChannel } from "../types";

export class Reporter implements iChannel {

    name = 'Репортер' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}