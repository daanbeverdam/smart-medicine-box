import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BoxComponent } from "../box/box.component";
import { MedicineComponent } from "../medicine/medicine.component";

const routes: Routes = [
{ path: "", redirectTo: "/box", pathMatch: "full" },
{ path: "box",  component: BoxComponent },
{ path: "medicine", component: MedicineComponent }
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}
