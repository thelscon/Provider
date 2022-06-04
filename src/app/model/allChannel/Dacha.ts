import { iChannel } from "../types";

export class Dacha implements iChannel {

    name = 'Дача' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}