import { Component } from "@angular/core";


import { iChannel } from "../model/channel.model";
import { tTariffsName } from "../model/tariff.model";
import { aTariff } from "../model/tariff.model";
import { ChannelsRepository } from "../model/channels.repository";
import { Tmp } from "../model/channels.repository";

@Component ({
    selector : 'section' ,
    templateUrl : './view.component.html' ,
    styleUrls : [ './view.component.css' ]
})
export class ViewComponent {

    constructor (
        // public tstname : Tmp
    ) {}

    get channels () : iChannel [] {
        return ChannelsRepository.channels ;
    }

    get tariffs () : aTariff [] {
        return ChannelsRepository.tariffs ;
    }

}