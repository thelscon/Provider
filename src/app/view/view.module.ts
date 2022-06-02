import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ViewComponent } from "./view.component";
import { ChannelModule } from "../model/channel.module";

@NgModule ({
    imports : [ BrowserModule , FormsModule , ChannelModule ] ,
    declarations : [ ViewComponent ] ,
    exports : [ ViewComponent ]
})
export class ViewModule {}