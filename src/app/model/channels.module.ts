import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ChannelsData } from "./channels.data";

@NgModule ({
    providers : [ ChannelsData ]
})
export class ChannelsModule {}