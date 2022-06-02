import { iTariff } from "./tariff.model";

export interface iChannel {
    name : string ,
    tariff ?: iTariff
}

export class Channel implements iChannel {
    tariff ?: iTariff ;

    constructor ( 
        public name : string , 
        _tariffsOne ?: string , 
        _tariffsTwo ?: string ) {

        if ( _tariffsOne ) {
            this.tariff = {} ;

            if ( _tariffsOne.includes ( 'Социальный' ) ) {  
                this.tariff.social = {} ;

                if ( _tariffsOne.includes ( 'Аналоговый' ) ) {
                    this.tariff.social.analog = true ;
                }

                if ( _tariffsOne.includes ( 'Цифровой' ) ) {
                    this.tariff.social.digital = true ;
                }
            }

            if ( _tariffsOne.includes ( 'Базовый' ) ) {  
                this.tariff.basic = {} ;

                if ( _tariffsOne.includes ( 'Аналоговый' ) ) {
                    this.tariff.basic.analog = true ;
                }

                if ( _tariffsOne.includes ( 'Цифровой' ) ) {
                    this.tariff.basic.digital = true ;
                }                
            }
        }
    }
}