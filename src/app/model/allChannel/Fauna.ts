import { iChannel } from "../types";

export class Fauna implements iChannel {

    name = 'Фауна' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}