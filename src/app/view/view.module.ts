import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ModelModule } from "../model/model.module";
import { ViewComponent } from "./view.component";

@NgModule ({
    imports : [ ModelModule , BrowserModule , FormsModule ] ,
    declarations : [ ViewComponent ] ,
    exports : [ ViewComponent ]
})
export class ViewModule {}