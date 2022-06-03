import { iChannel } from "../types";

export class Inter implements iChannel {

    name = 'Інтер' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}