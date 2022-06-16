import { NgModule } from "@angular/core";

import { ChannelsRepository } from "./channels.repository";
import { Tmp } from "./channels.repository";

@NgModule ({
    providers : [ Tmp ]
})
export class ModelModule {}