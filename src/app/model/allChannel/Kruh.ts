import { iChannel } from "../types";

export class Kruh implements iChannel {

    name = 'Круг' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}