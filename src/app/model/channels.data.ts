import { tChannel } from "./channel.model";

export class ChannelData {

    static readonly Inter : tChannel < 'analog digital' > = {
        name : 'Інтер' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    } ;

    static readonly NTN : tChannel < 'analog digital' > = {
        name : 'НТН' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Zoom : tChannel < 'digital' > = {
        name : 'Zoom' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Piksel : tChannel < 'analog digital' > = {
        name : 'Піксель' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Enter_film : tChannel < 'analog digital' > = {
        name : 'Enter-фільм' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Meha : tChannel < 'analog digital' > = {
        name : 'Мега' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly K1 : tChannel < 'analog digital' > = {
        name : 'К1' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly K2 : tChannel < 'digital' > = {
        name : 'К2' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Bolt : tChannel < 'digital' > = {
        name : 'Bolt' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Kvartal_TV : tChannel < 'digital' > = {
        name : 'Квартал TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly TRK_Ukrayina : tChannel < 'analog digital' > = {
        name : 'ТРК Україна' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly NLO_TV : tChannel < 'analog digital' > = {
        name : 'НЛО TV' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Indyho_TV : tChannel < 'digital' > = {
        name : 'Індиго TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Ukrayina_24 : tChannel < 'analog digital' > = {
        name : 'Україна 24' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly STB : tChannel < 'analog digital' > = {
        name : 'СТБ' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly ICTV : tChannel < 'analog digital' > = {
        name : 'ICTV' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Novyy_kanal : tChannel < 'analog digital' > = {
        name : 'Новий канал' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly M1 : tChannel < 'digital' > = {
        name : 'M1' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly M2 : tChannel < 'analog digital' > = {
        name : 'M2' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly OTSE : tChannel < 'analog digital' > = {
        name : 'ОЦЕ' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Odyn_plyus_odyn : tChannel < 'analog digital' > = {
        name : '1+1' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Dva_plyus_dva : tChannel < 'analog digital' > = {
        name : '2+2' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly TET : tChannel < 'analog digital' > = {
        name : 'ТЕТ' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly FILMUADrama : tChannel < 'digital' > = {
        name : 'FILMUADrama' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Paramount_Comedy : tChannel < 'analog digital' > = {
        name : 'Paramount Comedy' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly UNIAN : tChannel < 'analog digital' > = {
        name : 'УНІАН' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly PlusPlus : tChannel < 'analog digital' > = {
        name : 'ПлюсПлюс' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Bihudi : tChannel < 'analog digital' > = {
        name : 'Бігуді' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Somyy_kanal : tChannel < 'analog digital' > = {
        name : '7 канал' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Dumskaya_TV : tChannel < 'analog digital' > = {
        name : 'Думская.TV' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Pervyy_gorodskoy : tChannel < 'analog digital' > = {
        name : 'Первый городской' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Tretiy_tsifrovoy : tChannel < 'analog digital' > = {
        name : 'Третий цифровой' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Media_Inform : tChannel < 'analog digital' > = {
        name : 'Медиа Информ' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Tsentralnyy : tChannel < 'digital' > = {
        name : 'Центральный' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Zoryanyy : tChannel < 'digital' > = {
        name : 'Зоряний' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Odesa_live : tChannel < 'analog digital' > = {
        name : 'Odesa.live' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Apostrof_TV : tChannel < 'digital' > = {
        name : 'Апостроф TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Kruh : tChannel < 'analog digital' > = {
        name : 'Круг' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Reporter : tChannel < 'analog digital' > = {
        name : 'Репортер' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Moya_Odessa : tChannel < 'digital' > = {
        name : 'Моя Одесса' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly PLUS : tChannel < 'analog digital' > = {
        name : 'PLUS' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Hlas : tChannel < 'analog digital' > = {
        name : 'Глас' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Hrad : tChannel < 'analog digital' > = {
        name : 'Град' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly IT3 : tChannel < 'analog digital' > = {
        name : 'ИТ3' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Odessa_Fashion : tChannel < 'digital' > = {
        name : 'Odessa Fashion' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly UA_ODESA : tChannel < 'analog digital' > = {
        name : 'UA: ODESA' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly TIS_TV : tChannel < 'digital' > = {
        name : 'ТІС-ТВ' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Music_Box_Ukraine : tChannel < 'digital' > = {
        name : 'Music Box Ukraine' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Pyatyy_kanal : tChannel < 'digital' > = {
        name : '5 канал' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Shist_sotok : tChannel < 'analog digital' > = {
        name : '6 соток' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Rada : tChannel < 'analog digital' > = {
        name : 'Рада' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Trofey : tChannel < 'analog digital' > = {
        name : 'Трофей' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Fourever_Music : tChannel < 'digital' > = {
        name : '4ever Music' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Epokha : tChannel < 'analog digital' > = {
        name : 'Єпоха' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Terra : tChannel < 'analog digital' > = {
        name : 'Терра' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Dacha : tChannel < 'analog digital' > = {
        name : 'Дача' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Fauna : tChannel < 'analog digital' > = {
        name : 'Фауна' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Nauka : tChannel < 'analog digital' > = {
        name : 'Наука' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Kyyiv : tChannel < 'digital' > = {
        name : 'Київ' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Obozrevatel_TV : tChannel < 'digital' > = {
        name : 'Obozrevatel TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly PravdaTUT : tChannel < 'digital' > = {
        name : 'ПравдаТУТ' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Chornomorska_teleradiokompaniya : tChannel < 'digital' > = {
        name : 'Чорноморська телерадіокомпанія' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Suspilne_Krym : tChannel < 'analog digital' > = {
        name : 'Суспільне Крим' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Genuine_TV : tChannel < 'analog digital' > = {
        name : 'Genuine TV' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly KRTK : tChannel < 'digital' > = {
        name : 'KRT-K' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Pryamyy : tChannel < 'analog digital' > = {
        name : 'Прямий' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Extreme_Sports : tChannel < 'digital' > = {
        name : 'Extreme Sports' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly UATV : tChannel < 'digital' > = {
        name : 'UATV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Pershyy : tChannel < 'analog digital' > = {
        name : 'Перший' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Televsesvit : tChannel < 'digital' > = {
        name : 'Телевсесвіт' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly HD_Fashion : tChannel < 'digital' > = {
        name : 'HD Fashion' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly TVIQ : tChannel < 'digital' > = {
        name : 'TVIQ' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Natali : tChannel < 'analog digital' > = {
        name : 'Наталі' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Suspilne_Kultura : tChannel < 'analog digital' > = {
        name : 'Суспільне Культура' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Svarozhichi : tChannel < 'digital' > = {
        name : 'Сварожичи' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Halychyna : tChannel < 'digital' > = {
        name : 'Галичина' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Espreso_TV : tChannel < 'analog digital' > = {
        name : 'Еспресо TV' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Milady_Television : tChannel < 'analog digital' > = {
        name : 'Milady Television' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Sonata : tChannel < 'digital' > = {
        name : 'Соната' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly News_24 : tChannel < 'analog digital' > = {
        name : 'News 24' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Karavan_TV : tChannel < 'analog digital' > = {
        name : 'Караван TV' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Discovery : tChannel < 'analog digital' > = {
        name : 'Discovery' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Animal_Planet : tChannel < 'analog digital' > = {
        name : 'Animal Planet' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Eurosport_1 : tChannel < 'analog digital' > = {
        name : 'Eurosport 1' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly TLC : tChannel < 'analog digital' > = {
        name : 'TLC' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Suspilne_Uzhhorod : tChannel < 'digital' > = {
        name : 'Суспільне Ужгород' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly XSPORT : tChannel < 'analog digital' > = {
        name : 'XSPORT' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Avers : tChannel < 'digital' > = {
        name : 'Аверс' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Zakon_TV : tChannel < 'digital' > = {
        name : 'Закон ТВ' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Chanell_4 : tChannel < 'analog digital' > = {
        name : 'Chanell 4' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Pershyy_dilovyy : tChannel < 'digital' > = {
        name : 'Перший діловий' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly UNC : tChannel < 'digital' > = {
        name : 'UNC' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Islandiya : tChannel < 'digital' > = {
        name : 'Ісландія' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Live : tChannel < 'analog digital' > = {
        name : 'Live' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Sontse : tChannel < 'analog digital' > = {
        name : 'Сонце' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly ATR : tChannel < 'digital' > = {
        name : 'ATR' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Vosmyy_kanal : tChannel < 'digital' > = {
        name : '8 канал' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Nadiya : tChannel < 'digital' > = {
        name : 'Надiя' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Pershyy_avtomobilnyy : tChannel < 'analog digital' > = {
        name : 'Перший автомобільний' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly ECO_TV : tChannel < 'analog digital' > = {
        name : 'ECO TV' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Dvanadtsyatyy_Kanal : tChannel < 'digital' > = {
        name : '12 Канал' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly CHPINFO : tChannel < 'digital' > = {
        name : 'ЧП.INFO' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Pershyy_Zakhidnyy : tChannel < 'digital' > = {
        name : 'Перший Захiдний' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Boutique_TV : tChannel < 'digital' > = {
        name : 'Boutique TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly TV5 : tChannel < 'digital' > = {
        name : 'TV-5' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly BBC_World_News : tChannel < 'digital' > = {
        name : 'BBC World News' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Deutsche_Welle : tChannel < 'digital' > = {
        name : 'Deutsche Welle' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly France_24 : tChannel < 'digital' > = {
        name : 'France 24' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Euronews : tChannel < 'digital' > = {
        name : 'Euronews' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly CNN_International : tChannel < 'digital' > = {
        name : 'CNN International' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly KBS_World : tChannel < 'digital' > = {
        name : 'KBS World' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Nastoyashcheye_vremya : tChannel < 'digital' > = {
        name : 'Настоящее время' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly CNL_Ukrayina : tChannel < 'digital' > = {
        name : 'CNL Україна' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly OstWest : tChannel < 'digital' > = {
        name : 'OstWest' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly This_is_Bulgaria : tChannel < 'digital' > = {
        name : 'This is Bulgaria' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Travel_TV : tChannel < 'digital' > = {
        name : 'Travel TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Deluxe_Lounge : tChannel < 'digital' > = {
        name : 'Deluxe Lounge' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Wness_TV : tChannel < 'digital' > = {
        name : 'Wness TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Deluxe_Music : tChannel < 'digital' > = {
        name : 'Deluxe Music' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Rock_TV : tChannel < 'digital' > = {
        name : 'Rock TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Jukebox : tChannel < 'digital' > = {
        name : 'Jukebox' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Mason_TV : tChannel < 'digital' > = {
        name : 'Масон ТВ' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly TravelAdventure : tChannel < 'digital' > = {
        name : 'Travel&Adventure' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Kino_1 : tChannel < 'analog digital' > = {
        name : 'Кино 1' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly History_HD : tChannel < 'analog digital' > = {
        name : 'History HD' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Travel_HD : tChannel < 'analog digital' > = {
        name : 'Travel HD' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Viasat_History : tChannel < 'digital' > = {
        name : 'Viasat History' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Viasat_Explorer : tChannel < 'digital' > = {
        name : 'Viasat Explorer' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Viasat_Nature : tChannel < 'digital' > = {
        name : 'Viasat Nature' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Black : tChannel < 'digital' > = {
        name : 'Black' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly EU_Music : tChannel < 'analog digital' > = {
        name : 'EU Music' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly DuckTV : tChannel < 'digital' > = {
        name : 'DuckTV+' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Duck_TV: tChannel < 'digital' > = {
        name : 'Duck TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly TiJi : tChannel < 'digital' > = {
        name : 'TiJi' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Boomerang : tChannel < 'digital' > = {
        name : 'Boomerang' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly FlixSnip : tChannel < 'analog digital' > = {
        name : 'Flix&Snip' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Malyatko_TV : tChannel < 'digital' > = {
        name : 'Малятко TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Cartoon_Network : tChannel < 'analog digital' > = {
        name : 'Cartoon Network' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Lale : tChannel < 'digital' > = {
        name : 'Lâle' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Mezzo : tChannel < 'digital' > = {
        name : 'Mezzo' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly NIKI_Kids : tChannel < 'analog digital' > = {
        name : 'NIKI Kids' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly NIKI_Junior : tChannel < 'analog digital' > = {
        name : 'NIKI Junior' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Suspilne_Donbas : tChannel < 'digital' > = {
        name : 'Суспільне Донбас' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Sport1 : tChannel < 'digital' > = {
        name : 'Sport1' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Sport2 : tChannel < 'digital' > = {
        name : 'Sport2' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Setanta_Sports : tChannel < 'analog digital' > = {
        name : 'Setanta Sports' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Viasat_Sport : tChannel < 'digital' > = {
        name : 'Viasat Sport' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Sport1_Baltic : tChannel < 'digital' > = {
        name : 'Sport1 Baltic' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Sport2_Baltic : tChannel < 'digital' > = {
        name : 'Sport2 Baltic' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Sport1_HD : tChannel < 'digital' > = {
        name : 'Sport1 HD' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly FastFun_Box : tChannel < 'digital' > = {
        name : 'Fast&Fun Box' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly DocuBox : tChannel < 'analog digital' > = {
        name : 'DocuBox' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Trace_Sport_HD : tChannel < 'digital' > = {
        name : 'Trace Sport HD' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly FilmBox_ArtHouse : tChannel < 'analog digital' > = {
        name : 'FilmBox ArtHouse' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly FilmBox : tChannel < 'analog digital' > = {
        name : 'FilmBox' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly FashionBox : tChannel < 'digital' > = {
        name : 'FashionBox' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly TuneBox : tChannel < 'analog digital' > = {
        name : '360TuneBox' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly FightBox : tChannel < 'digital' > = {
        name : 'FightBox' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Nautical_Channel : tChannel < 'digital' > = {
        name : 'Nautical Channel' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly SEA_TV : tChannel < 'analog digital' > = {
        name : 'SEA TV ' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly VIP_Premiere : tChannel < 'digital' > = {
        name : 'VIP Premiere' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly VIP_Megahit : tChannel < 'digital' > = {
        name : 'VIP Megahit' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly VIP_Comedy : tChannel < 'digital' > = {
        name : 'VIP Comedy' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly TV1000_East : tChannel < 'digital' > = {
        name : 'TV1000 East' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly TV1000_Action_East : tChannel < 'digital' > = {
        name : 'TV1000 Action East' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly TV1000_World_Kino : tChannel < 'analog digital' > = {
        name : 'TV1000 World Kino' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly TV1 : tChannel < 'digital' > = {
        name : 'ТВ-1' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Epic_Drama : tChannel < 'digital' > = {
        name : 'Epic Drama' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Trace_Urban : tChannel < 'digital' > = {
        name : 'Trace Urban' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Ever_Cinema : tChannel < 'analog digital' > = {
        name : 'Four Ever Cinema' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly Dorama : tChannel < 'digital' > = {
        name : 'Дорама' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly AMC : tChannel < 'analog digital' > = {
        name : 'AMC' ,
        broadcastFormat : {
            analog : true ,
            digital : true
        }
    }

    static readonly KinoKazka: tChannel < 'digital' > = {
        name : 'КіноКазка' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Bollywood : tChannel < 'digital' > = {
        name : 'Bollywood' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly QuizTV : tChannel < 'digital' > = {
        name : 'Quiz TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly Ukrainian_Fashion_TV : tChannel < 'digital' > = {
        name : 'Ukrainian Fashion TV' ,
        broadcastFormat : {
            digital : true
        }
    }

    static readonly ReserveA : tChannel < 'analog' > = {
        name : 'Резерв, аналогове мовлення' ,
        broadcastFormat : {
            analog : true
        }
    }

    static readonly ReserveG : tChannel < 'digital' > = {
        name : 'Резерв, аналогове і цифрове мовлення' ,
        broadcastFormat : {
            digital : true
        }
    }
    
}