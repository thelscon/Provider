import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { SocialTariff } from "./tariff.data";

@NgModule ({
    providers : [ SocialTariff ]
})
export class TariffModule {}