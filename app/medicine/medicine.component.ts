import { Component, OnInit } from "@angular/core";

import { Medicine } from "../shared/medicine";
import { TimeOfDay } from "../shared/time-of-day";
import { AppService } from "../shared/app.service";

@Component({
  moduleId: module.id,
  templateUrl: "medicine.component.html",
  styleUrls: [ "medicine.component.css", "../shared/shared.css" ],
  providers: [ AppService ]
})

export class MedicineComponent implements OnInit {
  medicines: Medicine[];
  timesOfDay: TimeOfDay[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getTimesOfDay().then(timesOfDay => this.timesOfDay = timesOfDay);
    this.appService.getMedicine().then(medicine => this.medicines = medicine);
  }
}