import { eFormatType } from "./types";
import { iChannel } from "./types";


export class Channel < K extends eFormatType > implements iChannel < K > {

    constructor ( 
        public name : string ) {}

}