import { eFormatType } from "./types";
import { tBroadcastFormat } from "./types";

export interface iChannel < K extends eFormatType > {
    name : string ,
    broadcastFormat ?: tBroadcastFormat < K >
}

export class Channel < K extends eFormatType > implements iChannel < K > {

    constructor ( 
        public name : string ) {}

}