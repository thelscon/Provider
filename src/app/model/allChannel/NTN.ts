import { iChannel } from "../types";

export class NTN implements iChannel {

    name = 'НТН' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}