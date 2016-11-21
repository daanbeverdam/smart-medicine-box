import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { RouterModule }   from "@angular/router";

import { AppComponent }	 from "./core/app.component";
import { AppRoutingModule }     from "./core/app-routing.module";
import { BoxComponent } from "./box/box.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BoxComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
