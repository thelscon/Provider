import { iChannel } from "../types";

export class Discovery implements iChannel {

    name = 'Discovery' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}