import { Component } from "@angular/core";

import { iTariff } from "../model/tariff.model";
import { Channel } from "../model/channel.model";
import { ChannelRepository } from "../model/channel.repository";

@Component ({
    selector : 'section' ,
    templateUrl : './view.component.html' ,
    styleUrls : [ './view.component.css' ]
})
export class ViewComponent {

    constructor ( private _channelRepository : ChannelRepository ) {}

    get channels () : Channel [] {
        return this._channelRepository.channels
    }

}