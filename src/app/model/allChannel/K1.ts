import { iChannel } from "../types";

export class K1 implements iChannel {

    name = 'К1' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}