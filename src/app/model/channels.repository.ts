import { Injectable } from "@angular/core";
import { iChannel } from "./channel.model";

import { ChannelData } from "./channels.data";

@Injectable ()
export class ChannelsRepository {

    private _channels : iChannel [] = [] ;

    constructor () {} 

    get channels () : iChannel [] {
        return ChannelData.channels ;
    }

}