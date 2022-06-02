import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ChannelData } from "./channel.data";
import { ChannelRepository } from "./channel.repository";

@NgModule ({
    providers : [ ChannelData , ChannelRepository ]
})
export class ChannelModule {}