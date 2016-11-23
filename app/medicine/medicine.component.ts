import { Component, OnInit } from "@angular/core";
import { Medicine } from "../shared/medicine";
import { AppService } from "../shared/app.service";

@Component({
  moduleId: module.id,
  templateUrl: "medicine.component.html",
  styleUrls: [ "medicine.component.css" ],
  providers: [ AppService ]
})

export class MedicineComponent implements OnInit {
  availableMedicine: Medicine[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getMedicine().then(medicine => this.availableMedicine = medicine);
    window.console.log(this.availableMedicine);
  }
}