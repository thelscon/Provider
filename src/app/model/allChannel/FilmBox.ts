import { iChannel } from "../types";

export class FilmBox implements iChannel {

    name = 'FilmBox' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}