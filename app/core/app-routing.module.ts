import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BoxComponent } from "../box/box.component";
import { AppService } from "../shared/app.service";
import { MedicineComponent } from "../medicine/medicine.component";

const routes: Routes = [
{ path: "", redirectTo: "/medicine", pathMatch: "full" },
{ path: "box",  component: BoxComponent },
{ path: "medicine", component: MedicineComponent }
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ],
providers: [ AppService ]
})

export class AppRoutingModule {}
