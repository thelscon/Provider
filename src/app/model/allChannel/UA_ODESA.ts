import { iChannel } from "../types";

export class UA_ODESA implements iChannel {

    name = 'UA: ODESA' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}