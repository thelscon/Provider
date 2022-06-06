import { iChannel } from "../types";

export class SEA_TV implements iChannel {

    name = 'SEA TV' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}