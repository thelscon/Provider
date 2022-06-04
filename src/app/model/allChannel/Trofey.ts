import { iChannel } from "../types";

export class Trofey implements iChannel {

    name = 'Трофей' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}