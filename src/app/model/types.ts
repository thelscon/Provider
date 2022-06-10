export enum eFormatType {
    Analog = 'analog' ,
    Digital = 'digital' ,
    AnalogDigital = 'analog digital' ,
    Empty = ''
}
export type tBroadcastFormat < K > = 
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