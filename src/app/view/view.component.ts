import { Component } from "@angular/core";


import { iChannel } from "../model/channel.model";
import { tTariffsName } from "../model/tariff.model";
import { aTariff } from "../model/tariff.model";
import { ChannelsRepository } from "../model/channels.repository";

@Component ({
    selector : 'section' ,
    templateUrl : './view.component.html' ,
    styleUrls : [ './view.component.css' ]
})
export class ViewComponent {

    private _activeTariff : tTariffsName | undefined | null;
    private _currentChannels : iChannel [] = this.channels ;
    private _currentPageList : number = 1 ;

    numberOfChannels : number = 20 ;

    constructor (
    ) {}

    get currentPageList() : number {
        return this._currentPageList ;
    }
    set currentPageList( value : number ) {
        this._currentPageList = value ;
    }

    get currentChannels () : iChannel [] {
        let start = ( this.currentPageList - 1 ) * this.numberOfChannels ;
        return this._currentChannels.slice ( start , start + this.numberOfChannels )
    }
    set currentChannels( value: iChannel [] ) {
        this._currentChannels = value ;
    }

    chooseNumberOfChannels( value : string ): void {
        this.currentPageList = 1 ;
        this.numberOfChannels = Number ( value ) ;
    }

    get pageListNumber () : number {
        return Math.ceil( this._currentChannels.length / this.numberOfChannels ) ;
    }

    get channels () : iChannel [] {
        return ChannelsRepository.channels ;
    }

    get tariffs () : aTariff [] {
        return ChannelsRepository.tariffs ;
    }

    chooseATarif ( value ?: aTariff ) {
        this.currentPageList = 1 ;
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

    choiseCurrentPageList ( value : string ) : void {
        this.currentPageList = Number ( value )
    }

}