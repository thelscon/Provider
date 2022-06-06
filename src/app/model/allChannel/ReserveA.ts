import { iChannel } from "../types";

export class ReserveA implements iChannel {

    name = 'Резерв аналоговое вещание' ;
    broadcastFormat = {
        analog : true 
    }
    
}