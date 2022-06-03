export interface iBroadcastFormat {
    analog ?: boolean ,
    digital ?: boolean
}

export interface iChannel {
    name : string ,
    broadcastFormat : iBroadcastFormat
}

export interface iTariff {
    name : string ,
    social ?: iChannel [] ,
    basic ?: iChannel []
}