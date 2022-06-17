import { iChannel } from "./channel.model";
import { tChannel } from "./channel.model" ;

export type tTariffsName = 'Социальный' | 'Базовый' ;
export interface iTariff {
    name : tTariffsName ,
    analogChannels : tChannel < 'analog' > [] ,
    digitalChannels : tChannel < 'digital' > [] , 
    allChannels : iChannel []
}

export abstract class aTariff implements iTariff {
    abstract name : tTariffsName ;
    abstract analogChannels : tChannel < 'analog' > [] ;
    abstract  digitalChannels : tChannel < 'digital' > [] ;
    get allChannels () : iChannel [] {
        let allChannels : iChannel [] = [] ;
        allChannels.push ( ...this.analogChannels ) ;
        this.digitalChannels.forEach ( value => {
            if ( allChannels.includes ( value ) === false ) {
                allChannels.push ( value )
            }
        } )
        return allChannels ;
    }
}