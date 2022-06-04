import { iChannel } from "../types";

export class Odesa_live implements iChannel {

    name = 'Odesa.live' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}