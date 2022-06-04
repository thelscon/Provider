import { iChannel } from "../types";

export class Hrad implements iChannel {

    name = 'Град' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}