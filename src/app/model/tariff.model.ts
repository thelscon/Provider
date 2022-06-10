import { eFormatType } from "./types" ;
import { iChannel } from "./channel.model";

export interface iTariff {
    name : string ,
    analogChannels  : iChannel < eFormatType.Analog >  [] ,
    digitalChannels : iChannel < eFormatType.Digital >  [] 
}