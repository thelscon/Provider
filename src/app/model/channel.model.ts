export type tChannel < T extends 'analog' | 'digital' | 'analog digital' > =
    T extends 'analog' ? {
        name : string ,
        broadcastFormat : {
            analog : boolean ,
            digital ?: boolean
        }
    }
    : T extends 'digital' ? {
        name : string ,
        broadcastFormat : {
            analog ?: boolean
            digital : boolean
        }
    }
    : T extends 'analog digital' ? {
        name : string ,
        broadcastFormat : {
            analog : boolean ,
            digital : boolean
        }
    }
    : {
        name : string ,
        broadcastFormat : {}
    } ;