import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ChannelsData } from "./channels.data";
import { ChannelsRepository } from "./channels.repository";

@NgModule ({
    providers : [ ChannelsData , ChannelsRepository ]
})
export class ChannelsModule {}