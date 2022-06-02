import { Component } from "@angular/core";

import { Channel } from "../model/channel.model";
import { ChannelRepository } from "../model/channel.repository";

@Component ({
    selector : 'section' ,
    templateUrl : './view.component.html' ,
    styleUrls : [ './view.component.css' ]
})
export class ViewComponent {

    constructor ( private _channels : ChannelRepository ) {}

    get channels () : Channel [] {
        return this._channels.channels
    }

}