import { iChannel } from "../types";

export class Hlas implements iChannel {

    name = 'Глас' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}