import { iChannel } from "./types";
import { eFormatType } from "./types";

export class Inter implements iChannel < eFormatType.AnalogDigital >  {
    name = 'Інтер' ;
}

export class NTN implements iChannel < eFormatType.AnalogDigital >  {
    name = 'НТН' ;
}

export class Zoom implements iChannel < eFormatType.Digital > {
    name = 'Zoom' ;
}

export class Piksel implements iChannel < eFormatType.AnalogDigital > {
    name = 'Піксель' ;
}

export class Enter_film implements iChannel < eFormatType.AnalogDigital >  {
    name = 'Enter-фільм' ;
}

export class Meha implements iChannel < eFormatType.AnalogDigital > {
    name = 'Мега' ;
}

export class K1 implements iChannel < eFormatType.AnalogDigital > {
    name = 'К1' ;
}

export class K2 implements iChannel < eFormatType.Digital > {
    name = 'К2' ;
}

export class Bolt implements iChannel < eFormatType.Digital > {
    name = 'Bolt' ;
}

export class Kvartal_TV implements iChannel {

    name = 'Квартал TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class TRK_Ukrayina implements iChannel {

    name = 'ТРК Україна' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class NLO_TV implements iChannel {

    name = 'НЛО TV' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Indyho_TV implements iChannel {

    name = 'Індиго TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Ukrayina_24 implements iChannel {

    name = 'Україна 24' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class STB implements iChannel {

    name = 'СТБ' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class ICTV implements iChannel {

    name = 'ICTV' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Novyy_kanal implements iChannel {

    name = 'Новий канал' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class М1 implements iChannel {

    name = 'M1' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class M2 implements iChannel < 'analog digital' > {
    name = 'M2' ;
}

export class OTSE implements iChannel {

    name = 'ОЦЕ' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Odyn_plyus_odyn implements iChannel {

    name = '1+1' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Dva_plyus_dva implements iChannel {

    name = '2+2' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class TET implements iChannel {

    name = 'ТЕТ' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class FILMUADrama implements iChannel {

    name = 'FILMUADrama' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Paramount_Comedy implements iChannel {

    name = 'Paramount Comedy' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class UNIAN implements iChannel {

    name = 'УНІАН' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class PlusPlus implements iChannel {

    name = 'ПлюсПлюс' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Bihudi implements iChannel {

    name = 'Бігуді' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Somyy_kanal implements iChannel {

    name = '7 канал' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Dumskaya_TV implements iChannel {

    name = 'Думская.TV' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Pervyy_gorodskoy implements iChannel {

    name = 'Первый городской' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Tretiy_tsifrovoy implements iChannel {

    name = 'Третий цифровой' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Media_Inform implements iChannel {

    name = 'Медиа Информ' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Tsentralnyy implements iChannel {

    name = 'Центральный' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Zoryanyy implements iChannel {

    name = 'Зоряний' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Odesa_live implements iChannel {

    name = 'Odesa.live' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Apostrof_TV implements iChannel {

    name = 'Апостроф TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Kruh implements iChannel {

    name = 'Круг' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Reporter implements iChannel {

    name = 'Репортер' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Moya_Odessa implements iChannel {

    name = 'Моя Одесса' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class PLUS implements iChannel {

    name = 'PLUS' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Hlas implements iChannel {

    name = 'Глас' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Hrad implements iChannel {

    name = 'Град' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class IT3 implements iChannel {

    name = 'ИТ3' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Odessa_Fashion implements iChannel {

    name = 'Odessa Fashion' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class UA_ODESA implements iChannel {

    name = 'UA: ODESA' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class TIS_TV implements iChannel {

    name = 'ТІС-ТВ' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Music_Box_Ukraine implements iChannel {

    name = 'Music Box Ukraine' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Pyatyy_kanal implements iChannel {

    name = '5 канал' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Shist_sotok implements iChannel {

    name = '6 соток' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Rada implements iChannel {

    name = 'Рада' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Trofey implements iChannel {

    name = 'Трофей' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Fourever_Music implements iChannel {

    name = '4ever Music' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Epokha implements iChannel {

    name = 'Єпоха' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Terra implements iChannel {

    name = 'Терра' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Dacha implements iChannel {

    name = 'Дача' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Fauna implements iChannel {

    name = 'Фауна' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Nauka implements iChannel {

    name = 'Наука' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Kyyiv implements iChannel {

    name = 'Київ' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Obozrevatel_TV implements iChannel {

    name = 'Obozrevatel TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class PravdaTUT implements iChannel {

    name = 'ПравдаТУТ' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Chornomorska_teleradiokompaniya implements iChannel {

    name = 'Чорноморська телерадіокомпанія' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Suspilne_Krym implements iChannel {

    name = 'Суспільне Крим' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Genuine_TV implements iChannel {

    name = 'Genuine TV' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class KRTK implements iChannel {

    name = 'KRT-K' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Pryamyy implements iChannel {

    name = 'Прямий' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Extreme_Sports implements iChannel {

    name = 'Extreme Sports' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class UATV implements iChannel {

    name = 'UATV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Televsesvit implements iChannel {

    name = 'Телевсесвіт' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class HD_Fashion implements iChannel {

    name = 'HD Fashion' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Pershyy implements iChannel {

    name = 'Перший' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class TVIQ implements iChannel {

    name = 'TVIQ' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Natali implements iChannel {

    name = 'Наталі' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Suspilne_Kultura implements iChannel {

    name = 'Суспільне Культура' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Svarozhichi implements iChannel {

    name = 'Сварожичи' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Halychyna implements iChannel {

    name = 'Галичина' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Espreso_TV implements iChannel {

    name = 'Еспресо TV' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Milady_Television implements iChannel {

    name = 'Milady Television' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Sonata implements iChannel {

    name = 'Соната' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class News_24 implements iChannel {

    name = 'News 24' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Karavan_TV implements iChannel {

    name = 'Караван TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Discovery implements iChannel {

    name = 'Discovery' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Animal_Planet implements iChannel {

    name = 'Animal Planet' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Eurosport_Odin implements iChannel {

    name = 'Eurosport 1' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class TLC implements iChannel {

    name = 'TLC' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Suspilne_Uzhhorod implements iChannel {

    name = 'Суспільне Ужгород' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class XSPORT implements iChannel {

    name = 'XSPORT' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Avers implements iChannel {

    name = 'Аверс' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Zakon_TV implements iChannel {

    name = 'Закон ТВ' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Chanell_4 implements iChannel {

    name = 'Chanell 4' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Pershyy_dilovyy implements iChannel {

    name = 'Перший діловий' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class UNC implements iChannel {

    name = 'UNC' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Islandiya implements iChannel {

    name = 'Ісландія' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Live implements iChannel {

    name = 'Live' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Sontse implements iChannel {

    name = 'Сонце' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class ATR implements iChannel {

    name = 'ATR' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Vosmyy_kanal implements iChannel {

    name = '8 канал' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Nadiya implements iChannel {

    name = 'Надiя' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Pershyy_avtomobilnyy implements iChannel {

    name = 'Перший автомобільний' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class ECO_TV implements iChannel {

    name = 'ECO TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Dvanadtsyatyy_Kanal implements iChannel {

    name = '12 Канал' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class CHPINFO implements iChannel {

    name = 'ЧП.INFO' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Pershyy_Zakhidnyy implements iChannel {

    name = 'Перший Захiдний' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Boutique_TV implements iChannel {

    name = 'Boutique TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class TV5 implements iChannel {

    name = 'TV-5' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class BBC_World_News implements iChannel {

    name = 'BBC World News' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Deutsche_Welle implements iChannel {

    name = 'Deutsche Welle' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class France_24 implements iChannel {

    name = 'France 24' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Euronews implements iChannel {

    name = 'Euronews' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class CNN_International implements iChannel {

    name = 'CNN International' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class KBS_World implements iChannel {

    name = 'KBS World' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Nastoyashcheye_vremya implements iChannel {

    name = 'Настоящее время' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class CNL_Ukrayina implements iChannel {

    name = 'CNL Україна' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class OstWest implements iChannel {

    name = 'OstWest' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class This_is_Bulgaria implements iChannel {

    name = 'This is Bulgaria' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Travel_TV implements iChannel {

    name = 'Travel TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Deluxe_Lounge implements iChannel {

    name = 'Deluxe Lounge' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Wness_TV implements iChannel {

    name = 'Wness TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Deluxe_Music implements iChannel {

    name = 'Deluxe Music' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Rock_TV implements iChannel {

    name = 'Rock TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Jukebox implements iChannel {

    name = 'Jukebox' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Mason_TV implements iChannel {

    name = 'Масон ТВ' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class TravelAdventure implements iChannel {

    name = 'Travel&Adventure' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Kino_1 implements iChannel {

    name = 'Кино 1' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class History_HD implements iChannel {

    name = 'History HD' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Travel_HD implements iChannel {

    name = 'Travel HD' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Viasat_History implements iChannel {

    name = 'Viasat History' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Viasat_Explorer implements iChannel {

    name = 'Viasat Explorer' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Viasat_Nature implements iChannel {

    name = 'Viasat Nature' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Black implements iChannel {

    name = 'Black' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class EU_Music implements iChannel {

    name = 'EU Music' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class DuckTV implements iChannel {

    name = 'DuckTV+' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Duck_TV implements iChannel {

    name = 'Duck TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class TiJi implements iChannel {

    name = 'TiJi' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Boomerang implements iChannel {

    name = 'Boomerang' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class FlixSnip implements iChannel {

    name = 'Flix&Snip' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Malyatko_TV implements iChannel {

    name = 'Малятко TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Cartoon_Network implements iChannel {

    name = 'Cartoon Network' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Lale implements iChannel {

    name = 'Lâle' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Mezzo implements iChannel {

    name = 'Mezzo' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class NIKI_Kids implements iChannel {

    name = 'NIKI Kids' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class NIKI_Junior implements iChannel {

    name = 'NIKI Junior' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Suspilne_Donbas implements iChannel {

    name = 'Суспільне Донбас' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Sport1 implements iChannel {

    name = 'Sport1' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Sport2 implements iChannel {

    name = 'Sport2' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Setanta_Sports implements iChannel {

    name = 'Setanta Sports' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Viasat_Sport implements iChannel {

    name = 'Viasat Sport' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Sport1_Baltic implements iChannel {

    name = 'Sport1 Baltic' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Sport2_Baltic implements iChannel {

    name = 'Sport2 Baltic' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Sport1_HD implements iChannel {

    name = 'Sport1 HD' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class FastFun_Box implements iChannel {

    name = 'Fast&Fun Box' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class DocuBox implements iChannel {

    name = 'DocuBox' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Trace_Sport_HD implements iChannel {

    name = 'Trace Sport HD' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class FilmBox_ArtHouse implements iChannel {

    name = 'FilmBox ArtHouse' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class FilmBox implements iChannel {

    name = 'FilmBox' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class FashionBox implements iChannel {

    name = 'FashionBox' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class TuneBox implements iChannel {

    name = '360TuneBox' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class FightBox implements iChannel {

    name = 'FightBox' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Nautical_Channel implements iChannel {

    name = 'Nautical Channel' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class SEA_TV implements iChannel {

    name = 'SEA TV' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class VIP_Premiere implements iChannel {

    name = 'VIP Premiere' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class VIP_Megahit implements iChannel {

    name = 'VIP Megahit' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class VIP_Comedy implements iChannel {

    name = 'VIP Comedy' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class TV1000_East implements iChannel {

    name = 'TV1000 East' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class TV1000_Action_East implements iChannel {

    name = 'TV1000 Action East' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class TV1000_World_Kino implements iChannel {

    name = 'TV1000 World Kino' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class TV1 implements iChannel {

    name = 'ТВ-1' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Epic_Drama implements iChannel {

    name = 'Epic Drama' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Trace_Urban implements iChannel {

    name = 'Trace Urban' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Four_Ever_Cinema implements iChannel {

    name = 'Four Ever Cinema' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class Dorama implements iChannel {

    name = 'Дорама' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class AMC implements iChannel {

    name = 'AMC' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}

export class KinoKazka implements iChannel {

    name = 'КіноКазка' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Bollywood implements iChannel {

    name = 'Bollywood' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class QuizTV implements iChannel {

    name = 'Quiz TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class Ukrainian_Fashion_TV implements iChannel {

    name = 'Ukrainian Fashion TV' ;
    broadcastFormat = {
        digital : true
    }
    
}

export class ReserveA implements iChannel {

    name = 'Резерв, аналогове мовлення' ;
    broadcastFormat = {
        analog : true 
    }
    
}

export class ReserveAG implements iChannel {

    name = 'Резерв, аналогове і цифрове мовлення' ;
    broadcastFormat = {
        analog : true ,
        digital : true
    }
    
}