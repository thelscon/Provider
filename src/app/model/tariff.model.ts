type onlyTrue = true

interface iBroadcastFormat {
    analog ?: onlyTrue ,
    digital ?: onlyTrue
}

export interface iTariff {
    social ?: iBroadcastFormat ,
    basic ?: iBroadcastFormat
}