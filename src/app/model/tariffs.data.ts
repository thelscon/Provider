import { Injectable } from "@angular/core";

import { iChannel, tChannel , iChannelAnalog } from "./channel.model";
import { aTariff } from "./tariff.model";
import { ChannelData } from "./channels.data";

class SotsialnyyTariff extends aTariff {

    readonly name = 'Социальный';
    readonly analogChannels: tChannel<'analog'>[] = [
        ChannelData.M2,
        ChannelData.NTN,
        ChannelData.IT3,
        ChannelData.TET,
        ChannelData.Dva_plyus_dva,
        ChannelData.Odyn_plyus_odyn,
        ChannelData.ICTV,
        ChannelData.STB,
        ChannelData.Novyy_kanal,
        ChannelData.TRK_Ukrayina,
        ChannelData.Inter,
        ChannelData.Bihudi,
        ChannelData.OTSE,
        ChannelData.UNIAN,
        ChannelData.Paramount_Comedy,
        ChannelData.PlusPlus,
        ChannelData.Enter_film,
        ChannelData.Meha,
        ChannelData.Piksel,
        ChannelData.NLO_TV,
        ChannelData.K1,
        ChannelData.Somyy_kanal,
        ChannelData.Milady_Television,
        ChannelData.ECO_TV,
        ChannelData.Pershyy,
        ChannelData.Karavan_TV,
        ChannelData.Dumskaya_TV,
        ChannelData.Reporter,
        ChannelData.Pervyy_gorodskoy,
        ChannelData.Natali,
        ChannelData.Tretiy_tsifrovoy,
        ChannelData.TuneBox,
        ChannelData.UA_ODESA,
        ChannelData.Rada,
        ChannelData.Suspilne_Krym,
        ChannelData.Suspilne_Kultura,
        ChannelData.PLUS,
        ChannelData.Hlas,
        ChannelData.Hrad
    ];
    readonly digitalChannels: tChannel<'digital'>[] = [
        ChannelData.Inter,
        ChannelData.NTN,
        ChannelData.Zoom,
        ChannelData.Piksel,
        ChannelData.Enter_film,
        ChannelData.Meha,
        ChannelData.K1,
        ChannelData.K2,
        ChannelData.TRK_Ukrayina,
        ChannelData.NLO_TV,
        ChannelData.Indyho_TV,
        ChannelData.Bolt,
        ChannelData.Kvartal_TV,
        ChannelData.Apostrof_TV,
        ChannelData.Ukrainian_Fashion_TV,
        ChannelData.Ukrayina_24,
        ChannelData.STB,
        ChannelData.ICTV,
        ChannelData.Novyy_kanal,
        ChannelData.M1,
        ChannelData.M2,
        ChannelData.OTSE,
        ChannelData.Odyn_plyus_odyn,
        ChannelData.Dva_plyus_dva,
        ChannelData.TET,
        ChannelData.FILMUADrama,
        ChannelData.Paramount_Comedy,
        ChannelData.UNIAN,
        ChannelData.PlusPlus,
        ChannelData.Bihudi,
        ChannelData.Somyy_kanal,
        ChannelData.ReserveG,
        ChannelData.Dumskaya_TV,
        ChannelData.Pervyy_gorodskoy,
        ChannelData.ReserveG,
        ChannelData.Tretiy_tsifrovoy
    ];
}

class BazovyyTariff extends aTariff {

    readonly name = 'Базовый';
    readonly analogChannels: tChannel<'analog'>[] = [
        ChannelData.M2,
        ChannelData.NTN,
        ChannelData.IT3,
        ChannelData.TET,
        ChannelData.Dva_plyus_dva,
        ChannelData.Odyn_plyus_odyn,
        ChannelData.ICTV,
        ChannelData.STB,
        ChannelData.Novyy_kanal,
        ChannelData.TRK_Ukrayina,
        ChannelData.Inter,
        ChannelData.Bihudi,
        ChannelData.OTSE,
        ChannelData.UNIAN,
        ChannelData.Paramount_Comedy,
        ChannelData.PlusPlus,
        ChannelData.Enter_film,
        ChannelData.Meha,
        ChannelData.Piksel,
        ChannelData.NLO_TV,
        ChannelData.K1,
        ChannelData.Somyy_kanal,
        ChannelData.Milady_Television,
        ChannelData.ECO_TV,
        ChannelData.Pershyy,
        ChannelData.Karavan_TV,
        ChannelData.Dumskaya_TV,
        ChannelData.Reporter,
        ChannelData.Pervyy_gorodskoy,
        ChannelData.Natali,
        ChannelData.Tretiy_tsifrovoy,
        ChannelData.TuneBox,
        ChannelData.UA_ODESA,
        ChannelData.Rada,
        ChannelData.Suspilne_Krym,
        ChannelData.Suspilne_Kultura,
        ChannelData.PLUS,
        ChannelData.Hlas,
        ChannelData.Hrad,
        ChannelData.Odesa_live,
        ChannelData.TV1000_World_Kino,
        ChannelData.Sontse,
        ChannelData.Kruh,
        ChannelData.Terra,
        ChannelData.Epokha,
        ChannelData.Fauna,
        ChannelData.Genuine_TV,
        ChannelData.Dacha,
        ChannelData.Nauka,
        ChannelData.Shist_sotok,
        ChannelData.News_24,
        ChannelData.Espreso_TV,
        ChannelData.Chanell_4,
        ChannelData.Setanta_Sports,
        ChannelData.Live,
        ChannelData.Ukrayina_24,
        ChannelData.DocuBox,
        ChannelData.Media_Inform,
        ChannelData.Pryamyy,
        ChannelData.Pershyy_avtomobilnyy,
        ChannelData.Discovery,
        ChannelData.Animal_Planet,
        ChannelData.Eurosport_1,
        ChannelData.XSPORT,
        ChannelData.History_HD,
        ChannelData.Travel_HD,
        ChannelData.Trofey,
        ChannelData.EU_Music,
        ChannelData.AMC,
        ChannelData.FilmBox,
        ChannelData.NIKI_Kids,
        ChannelData.NIKI_Junior,
        ChannelData.Ever_Cinema,
        ChannelData.SEA_TV,
        ChannelData.TLC,
        ChannelData.FlixSnip,
        ChannelData.Cartoon_Network,
        ChannelData.Kino_1
    ];
    readonly digitalChannels: tChannel<'digital'>[] = [
        ChannelData.Inter,
        ChannelData.NTN,
        ChannelData.Zoom,
        ChannelData.Piksel,
        ChannelData.Enter_film,
        ChannelData.Meha,
        ChannelData.K1,
        ChannelData.K2,
        ChannelData.Bolt,
        ChannelData.Kvartal_TV,
        ChannelData.TRK_Ukrayina,
        ChannelData.NLO_TV,
        ChannelData.Indyho_TV,
        ChannelData.Ukrayina_24,
        ChannelData.STB,
        ChannelData.ICTV,
        ChannelData.Novyy_kanal,
        ChannelData.M1,
        ChannelData.M2,
        ChannelData.OTSE,
        ChannelData.Odyn_plyus_odyn,
        ChannelData.Dva_plyus_dva,
        ChannelData.TET,
        ChannelData.FILMUADrama,
        ChannelData.Paramount_Comedy,
        ChannelData.UNIAN,
        ChannelData.PlusPlus,
        ChannelData.Bihudi,
        ChannelData.Somyy_kanal,
        ChannelData.ReserveG,
        ChannelData.Dumskaya_TV,
        ChannelData.Pervyy_gorodskoy,
        ChannelData.ReserveG,
        ChannelData.Tretiy_tsifrovoy,
        ChannelData.Media_Inform,
        ChannelData.ReserveG,
        ChannelData.Tsentralnyy,
        ChannelData.Zoryanyy,
        ChannelData.ReserveG,
        ChannelData.ReserveG,
        ChannelData.Odesa_live,
        ChannelData.Apostrof_TV,
        ChannelData.Kruh,
        ChannelData.ReserveG,
        ChannelData.Reporter,
        ChannelData.Moya_Odessa,
        ChannelData.PLUS,
        ChannelData.Hlas,
        ChannelData.Hrad,
        ChannelData.IT3,
        ChannelData.Odessa_Fashion,
        ChannelData.UA_ODESA,
        ChannelData.TIS_TV,
        ChannelData.Classic_Music,
        ChannelData.Pyatyy_kanal,
        ChannelData.Shist_sotok,
        ChannelData.Rada,
        ChannelData.Trofey,
        ChannelData.Fourever_Music,
        ChannelData.Epokha,
        ChannelData.Terra,
        ChannelData.Dacha,
        ChannelData.Fauna,
        ChannelData.Nauka,
        ChannelData.Kyyiv,
        ChannelData.Obozrevatel_TV,
        ChannelData.PravdaTUT,
        ChannelData.Chornomorska_teleradiokompaniya,
        ChannelData.Suspilne_Krym,
        ChannelData.Genuine_TV,
        ChannelData.KRTK,
        ChannelData.Pryamyy,
        ChannelData.Extreme_Sports,
        ChannelData.UATV,
        ChannelData.Televsesvit,
        ChannelData.HD_Fashion,
        ChannelData.Pershyy,
        ChannelData.TVIQ,
        ChannelData.Natali,
        ChannelData.Suspilne_Kultura,
        ChannelData.Svarozhichi,
        ChannelData.Halychyna,
        ChannelData.Espreso_TV,
        ChannelData.Milady_Television,
        ChannelData.Sonata,
        ChannelData.News_24,
        ChannelData.Karavan_TV,
        ChannelData.Discovery,
        ChannelData.Animal_Planet,
        ChannelData.Eurosport_1,
        ChannelData.TLC,
        ChannelData.Suspilne_Uzhhorod,
        ChannelData.XSPORT,
        ChannelData.Avers,
        ChannelData.Zakon_TV,
        ChannelData.Chanell_4,
        ChannelData.Pershyy_dilovyy,
        ChannelData.UNC,
        ChannelData.Islandiya,
        ChannelData.Live,
        ChannelData.Sontse,
        ChannelData.ATR,
        ChannelData.Vosmyy_kanal,
        ChannelData.Nadiya,
        ChannelData.Pershyy_avtomobilnyy,
        ChannelData.ECO_TV,
        ChannelData.Dvanadtsyatyy_Kanal,
        ChannelData.CHPINFO,
        ChannelData.Pershyy_Zakhidnyy,
        ChannelData.Boutique_TV,
        ChannelData.TV5,
        ChannelData.BBC_World_News,
        ChannelData.Deutsche_Welle,
        ChannelData.France_24,
        ChannelData.ReserveG,
        ChannelData.Euronews,
        ChannelData.CNN_International,
        ChannelData.KBS_World,
        ChannelData.Nastoyashcheye_vremya,
        ChannelData.CNL_Ukrayina,
        ChannelData.OstWest,
        ChannelData.This_is_Bulgaria,
        ChannelData.Travel_TV,
        ChannelData.Deluxe_Lounge,
        ChannelData.Wness_TV,
        ChannelData.Deluxe_Music,
        ChannelData.Rock_TV,
        ChannelData.Jukebox,
        ChannelData.Mason_TV,
        ChannelData.TravelAdventure,
        ChannelData.Kino_1,
        ChannelData.History_HD,
        ChannelData.Travel_HD,
        ChannelData.Viasat_History,
        ChannelData.Viasat_Explorer,
        ChannelData.Viasat_Nature,
        ChannelData.Black,
        ChannelData.EU_Music,
        ChannelData.DuckTV,
        ChannelData.Duck_TV,
        ChannelData.TiJi,
        ChannelData.Boomerang,
        ChannelData.FlixSnip,
        ChannelData.Malyatko_TV,
        ChannelData.Cartoon_Network,
        ChannelData.Lale,
        ChannelData.Mezzo,
        ChannelData.NIKI_Kids,
        ChannelData.NIKI_Junior,
        ChannelData.Suspilne_Donbas,
        ChannelData.Sport1,
        ChannelData.Sport2,
        ChannelData.Setanta_Sports,
        ChannelData.Viasat_Sport,
        ChannelData.Sport1_Baltic,
        ChannelData.Sport2_Baltic,
        ChannelData.Sport1_HD,
        ChannelData.FastFun_Box,
        ChannelData.DocuBox,
        ChannelData.Trace_Sport_HD,
        ChannelData.FilmBox_ArtHouse,
        ChannelData.FilmBox,
        ChannelData.FashionBox,
        ChannelData.TuneBox,
        ChannelData.FightBox,
        ChannelData.Nautical_Channel,
        ChannelData.SEA_TV,
        ChannelData.VIP_Premiere,
        ChannelData.VIP_Megahit,
        ChannelData.VIP_Comedy,
        ChannelData.TV1000_East,
        ChannelData.TV1000_Action_East,
        ChannelData.TV1000_World_Kino,
        ChannelData.Hollywood,
        ChannelData.Epic_Drama,
        ChannelData.Trace_Urban,
        ChannelData.Ever_Cinema,
        ChannelData.Dorama,
        ChannelData.AMC,
        ChannelData.ReserveG,
        ChannelData.KinoKazka,
        ChannelData.Bollywood,
        ChannelData.QuizTV,
        ChannelData.Ukrainian_Fashion_TV
    ]
}

// @Injectable ()
export class TariffsData {
    static get tariffs () : aTariff [] {
        return [ new SotsialnyyTariff () , new BazovyyTariff () ] ;
    } ;
}