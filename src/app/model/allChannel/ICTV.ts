import { iChannel } from "../types";

export class ICTV implements iChannel {

    name = 'ICTV' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}