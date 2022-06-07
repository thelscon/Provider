export interface iBroadcastFormat {
    analog ?: boolean ,
    digital ?: boolean
}

export interface iChannel {
    name : string ,
    broadcastFormat ?: iBroadcastFormat
}

type tBroadcastType < P extends keyof iBroadcastFormat > = Pick < iBroadcastFormat , P > ;
export interface iTariff {
    name : string ,
    analogChannels : tBroadcastType < 'analog' > [] ,
    digitalChannels : tBroadcastType < 'digital' > [] 
}