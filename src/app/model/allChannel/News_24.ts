import { iChannel } from "../types";

export class News_24 implements iChannel {

    name = 'News 24' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}