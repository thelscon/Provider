import { iChannel } from "../types";

export class Rada implements iChannel {

    name = 'Рада' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}