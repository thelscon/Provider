import { Injectable } from "@angular/core";

import { iChannel } from "./channel.model";
import { ChannelData } from "./channels.data";
import { iTariff } from "./tariff.model";
import { TariffsData } from "./tariffs.data";

// @Injectable ()
export class ChannelsRepository {

    static get channels () : iChannel [] {
        return ChannelData.channels ;
    }

    static get tariffs () : iTariff [] {
        return TariffsData.tariffs ;
    }

}

export class Tmp {
    name : string = 'test name'
}