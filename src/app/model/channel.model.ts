import { iChannel , iBroadcastFormat } from "./types";


export class Channel implements iChannel {
    
    broadcastFormat: iBroadcastFormat = {} ;

    constructor ( 
        public name : string ,
        _broadcastFormat : string ) {

            if ( _broadcastFormat.includes ( 'Аналоговый' ) )
                this.broadcastFormat.analog = true ;
            if ( _broadcastFormat.includes ( 'Цифровой' ) )
                this.broadcastFormat.digital = true ;

    }
}

// const InterTVChannel : iChannel = new Inter () ;