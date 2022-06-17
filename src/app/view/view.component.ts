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

    private _activeTariff : tTariffsName | undefined | null;
    
    currentChannels : iChannel [] = this.channels ;

    constructor (
        // public tstname : Tmp
    ) {}

    get channels () : iChannel [] {
        return ChannelsRepository.channels ;
    }

    get tariffs () : aTariff [] {
        return ChannelsRepository.tariffs ;
    }

    chooseATarif ( value ?: aTariff ) {
        if ( value ) {
            if ( this._activeTariff !== value.name ) {
                this._activeTariff = value.name ;
                this.currentChannels = value.allChannels
            }
        }
        else {
            if ( this._activeTariff ) {
                this._activeTariff = null ;
                this.currentChannels = this.channels ;
            }
        }
    }

}