import { iTariff } from "./cabletv.model";
import { ChannelsData } from "./channels.data";

let Channels = new ChannelsData () ;

export class SotsialnyyTariff implements iTariff  {

    name = 'Социальный' ;
    analogChannels = [
        Channels.M2 ,
        Channels.NTN ,
        Channels.IT3 ,
        Channels.TET ,
        Channels.Dva_plyus_dva ,
        Channels.Odyn_plyus_odyn ,
        Channels.ICTV ,
        Channels.STB ,
        Channels.Novyy_kanal ,
        Channels.TRK_Ukrayina ,
        Channels.Inter ,
        Channels.Bihudi ,
        Channels.OTSE ,
        Channels.UNIAN ,
        Channels.Paramount_Comedy ,
        Channels.PlusPlus ,
        Channels.Enter_film ,
        Channels.Meha ,
        Channels.Piksel ,
        Channels.NLO_TV ,
        Channels.K1 ,
        Channels.Somyy_kanal ,
        Channels.Milady_Television ,
        Channels.ECO_TV ,
        Channels.Pershyy ,
        Channels.Karavan_TV ,
        Channels.Dumskaya_TV ,
        Channels.Reporter ,
        Channels.Pervyy_gorodskoy ,
        Channels.Natali ,
        Channels.Tretiy_tsifrovoy ,
        Channels.TuneBox ,
        Channels.UA_ODESA ,
        Channels.Rada ,
        Channels.Suspilne_Krym ,
        Channels.Suspilne_Kultura ,
        Channels.PLUS ,
        Channels.Hlas ,
        Channels.Hrad
    ];
    digitalChannels = [
        Channels.Inter ,
        Channels.NTN ,
        Channels.Zoom ,
        Channels.Piksel ,
        Channels.Enter_film ,
        Channels.Meha ,
        Channels.K1 ,
        Channels.K2 ,
        Channels.TRK_Ukrayina ,
        Channels.NLO_TV ,
        Channels.Indyho_TV ,
        Channels.Bolt ,
        Channels.Kvartal_TV ,
        Channels.Apostrof_TV ,
        Channels.Ukrainian_Fashion_TV ,
        Channels.Ukrayina_24 ,
        Channels.STB ,
        Channels.ICTV ,
        Channels.Novyy_kanal ,
        Channels.M1 ,
        Channels.M2 ,
        Channels.OTSE ,
        Channels.Odyn_plyus_odyn ,
        Channels.Dva_plyus_dva ,
        Channels.TET ,
        Channels.FILMUADrama ,
        Channels.Paramount_Comedy ,
        Channels.UNIAN ,
        Channels.PlusPlus ,
        Channels.Bihudi ,
        Channels.Somyy_kanal ,
        Channels.ReserveG ,
        Channels.Dumskaya_TV ,
        Channels.Pervyy_gorodskoy ,
        Channels.ReserveG ,
        Channels.Tretiy_tsifrovoy
    ];

}

export class BazovyyTariff implements iTariff  {

    name = 'Базовый' ;
    analogChannels = [];
    digitalChannels = [];

}