import { iChannel } from "../types";

export class Nauka implements iChannel {

    name = 'Наука' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}