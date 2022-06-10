import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ViewComponent } from "./view.component";

@NgModule ({
    imports : [ BrowserModule , FormsModule ] ,
    declarations : [ ViewComponent ] ,
    exports : [ ViewComponent ]
})
export class ViewModule {}