import { Component, OnInit } from "@angular/core";

import { Medicine } from "../shared/medicine";
import { TimeOfDay } from "../shared/time-of-day";
import { AppService } from "../shared/app.service";
import { Container } from "../shared/container";

@Component({
  moduleId: module.id,
  templateUrl: "medicine.component.html",
  styleUrls: [ "medicine.component.css", "../shared/shared.css" ]
})

export class MedicineComponent implements OnInit {
  medicines: Medicine[];
  timesOfDay: TimeOfDay[];
  container: Container;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.timesOfDay = this.appService.getTimesOfDay();
    this.medicines = this.appService.getMedicines();
    this.container = this.appService.container;
  }

  unblockContainer() {
    this.container.isBlocked = false;
  }

}