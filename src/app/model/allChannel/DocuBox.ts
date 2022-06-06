import { iChannel } from "../types";

export class DocuBox implements iChannel {

    name = 'DocuBox' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}