import { Injectable } from "@angular/core";

import { Channel } from "./channel.model";
import { ChannelData } from "./channel.data";

@Injectable ()
export class ChannelRepository {

    private _channels : Channel [] = []

    constructor ( private _channelData : ChannelData ) {

        this._channels = _channelData.channels ;

    }

    get channels () : Channel [] {
        return this._channels
    }

}