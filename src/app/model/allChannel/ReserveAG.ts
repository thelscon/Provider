import { iChannel } from "../types";

export class ReserveAG implements iChannel {

    name = 'Резерв аналоговое и цифровое вещание' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}