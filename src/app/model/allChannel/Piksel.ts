import { iChannel } from "../types";

export class Piksel implements iChannel {

    name = 'Піксель' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}