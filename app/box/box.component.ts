import { Component, OnInit } from "@angular/core";

import { Medicine } from "../shared/medicine";
import { TimeOfDay } from "../shared/time-of-day";
import { AppService } from "../shared/app.service";

@Component({
  moduleId: module.id,
  templateUrl: "box.component.html",
  styleUrls: [ "box.component.css", "../shared/shared.css" ],
  providers: [ AppService ]
})

export class BoxComponent implements OnInit {
  medicines: Medicine[];
  timesOfDay: TimeOfDay[];
  currentTimeOfDay: TimeOfDay;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getTimesOfDay().then(timesOfDay => this.timesOfDay = timesOfDay);
    this.appService.getMedicine().then(medicine => this.medicines = medicine);
    this.currentTimeOfDay = this.appService.getCurrentTimeOfDay();
  }

  simulateTimeShift() {
    this.appService.shiftTime();
    this.currentTimeOfDay = this.appService.getCurrentTimeOfDay();
  }
}