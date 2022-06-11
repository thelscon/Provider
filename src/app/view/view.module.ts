import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ViewComponent } from "./view.component";
import { ChannelsModule } from "../model/channels.module";
import { TariffModule } from "../model/tariff.module";

@NgModule ({
    imports : [ BrowserModule , FormsModule , ChannelsModule , TariffModule ] ,
    declarations : [ ViewComponent ] ,
    exports : [ ViewComponent ]
})
export class ViewModule {}