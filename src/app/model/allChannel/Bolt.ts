import { iChannel } from "../types";

export class Bolt implements iChannel {

    name = 'Bolt' ;
    broadcastFormat = {
        digital : true
    }
    
}