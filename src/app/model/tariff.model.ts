import { tChannel } from "./channel.model"

export interface iTariff {
    name : string ,
    analogChannels  : tChannel < 'a' > [] ,
    digitalChannels : tChannel < 'd' > [] 
}