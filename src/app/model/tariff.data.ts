import { iTariff } from "./tariff.model";
import { ChannelsData } from "./channels.data";

let Channels = new ChannelsData () ;

export class SocialTariff implements iTariff  {

    name = 'Социальный' ;
    // analogChannels = [
    //     // Channels.M2
    // //     Channels.NTN ,
    // //     Channels.IT3 ,
    // //     Channels.TET ,
    // //     Channels.Dva_plyus_dva ,
    // //     Channels.Odyn_plyus_odyn ,
    // //     Channels.ICTV ,
    // //     Channels.STB ,
    // //     Channels.Novyy_kanal ,
    // //     Channels.TRK_Ukrayina ,
    // //     Channels.Inter ,
    // //     Channels.Bihudi ,
    // //     Channels.OTSE ,
    // //     Channels.UNIAN ,
    // //     Channels.Paramount_Comedy ,
    // //     Channels.PlusPlus , < K >
    // //     Channels.Enter_film ,
    // //     Channels.Meha ,
    // //     Channels.Piksel ,
    // //     Channels.NLO_TV ,
    // //     Channels.K1 ,
    // //     Channels.Somyy_kanal ,
    // //     Channels.ReserveA ,
    // //     Channels.FilmBox_ArtHouse ,
    // //     Channels.Pershyy ,
    // //     Channels.ReserveA ,
    // //     Channels.Dumskaya_TV ,
    // //     Channels.Reporter ,
    // //     Channels.Pervyy_gorodskoy ,
    // //     Channels.ReserveA ,
    // //     Channels.Tretiy_tsifrovoy ,
    // //     Channels.TuneBox ,
    // //     Channels.UA_ODESA ,
    // //     Channels.Rada ,
    // //     Channels.Suspilne_Krym ,
    // //     Channels.Suspilne_Kultura ,
    // //     Channels.PLUS ,
    // //     Channels.Hlas ,
    // //     Channels.Hrad
    // ];
    digitalChannels = [
        Channels.Inter ,
    ];

}