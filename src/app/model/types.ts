export enum eFormatType {
    Analog = 'analog' ,
    Digital = 'digital' ,
    AnalogDigital = 'analog digital' ,
    Empty = ''
}
type tBroadcastFormat < K > = 
    K extends eFormatType.Analog ? {
        analog : true ,
        digital ?: true
    }
    : K extends eFormatType.Digital ? {
        analog ?: true ,
        digital : true
    }
    : K extends eFormatType.AnalogDigital ? {
        analog : true ,
        digital : true
    }
    : K extends eFormatType.Empty ? {
        analog ?: true ,
        digital ?: true
    }
    : {}

export interface iChannel < K extends eFormatType > {
    name : string ,
    broadcastFormat ?: tBroadcastFormat < K >
}

export interface iTariff {
    name : string ,
    analogChannels  : iChannel < eFormatType.Analog >  [] ,
    digitalChannels : iChannel < eFormatType.Digital >  [] 
}