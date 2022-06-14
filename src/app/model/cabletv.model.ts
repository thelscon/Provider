import { tChannel } from "./channel.model"

export interface iTariff {
    name : string ,
    analogChannels  : tChannel < 'analog' > [] ,
    digitalChannels : tChannel < 'digital' > [] 
}

export interface iCableTV {
    tariffs : iTariff []
}