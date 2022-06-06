import { iChannel } from "../types";

export class AMC implements iChannel {

    name = 'AMC' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}