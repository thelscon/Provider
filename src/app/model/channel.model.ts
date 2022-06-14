interface iChannel {
    name : string
}
interface iChannelAnalog extends iChannel {
    broadcastFormat : {
        analog : boolean ,
        digital ?: boolean
    }
}
interface iChannelDigital extends iChannel {
    broadcastFormat : {
        analog ?: boolean ,
        digital : boolean
    }
}
interface iChannelAnalogDigital extends iChannel {
    broadcastFormat : {
        analog : boolean ,
        digital : boolean
    }
}

export type tChannel < K extends 'analog' | 'digital' | 'analog digital' > = 
    K extends 'analog' ? iChannelAnalog
    : K extends 'digital' ? iChannelDigital
    : K extends 'analog digital' ? iChannelAnalogDigital
    : iChannel ;