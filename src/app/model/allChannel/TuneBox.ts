import { iChannel } from "../types";

export class TuneBox implements iChannel {

    name = '360TuneBox' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}