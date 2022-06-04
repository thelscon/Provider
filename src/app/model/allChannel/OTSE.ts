import { iChannel } from "../types";

export class OTSE implements iChannel {

    name = 'ОЦЕ' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}