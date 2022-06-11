export type tChannel < T > =
    T extends 'a' ? {
        name : string ,
        broadcastFormat : {
            analog : boolean ,
            digital ?: boolean
        }
    }
    : T extends 'd' ? {
        name : string ,
        broadcastFormat : {
            analog ?: boolean
            digital : boolean
        }
    }
    : T extends 'ad' ? {
        name : string ,
        broadcastFormat : {
            analog : boolean ,
            digital : boolean
        }
    }
    : {
        name : string
    } ;