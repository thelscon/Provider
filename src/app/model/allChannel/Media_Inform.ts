import { iChannel } from "../types";

export class Media_Inform implements iChannel {

    name = 'Медиа Информ' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}