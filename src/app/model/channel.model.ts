import { iBroadcastFormat , iChannel } from "./types";


export class Channel  implements iChannel {

    broadcastFormat: iBroadcastFormat = {};

    constructor ( 
        public name : string ) {}

}