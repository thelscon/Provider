export type tTypeName = 'analog' | 'digital' | 'analog digital' ;

export interface iChannel {
    name: string,
    broadcastFormat: {
        analog?: boolean,
        digital?: boolean
    }
}
interface iChannelAnalog extends iChannel {
    broadcastFormat: {
        analog: boolean,
        digital?: boolean
    }
}
interface iChannelDigital extends iChannel {
    broadcastFormat: {
        analog?: boolean,
        digital: boolean
    }
}
interface iChannelAnalogDigital extends iChannel {
    broadcastFormat: {
        analog: boolean,
        digital: boolean
    }
}

export type tChannel<K extends tTypeName> =
    K extends 'analog' ? iChannelAnalog
    : K extends 'digital' ? iChannelDigital
    : K extends 'analog digital' ? iChannelAnalogDigital
    : iChannel;