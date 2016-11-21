import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }   from "@angular/forms";
import { RouterModule }   from "@angular/router";

import { AppComponent }	 from "./core/app.component";
import { AppRoutingModule }     from "./core/app-routing.module";
import { BoxComponent } from "./box/box.component";
import { MedicineComponent } from "./medicine/medicine.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BoxComponent,
    MedicineComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
