import { Component, OnInit } from "@angular/core";

import { Medicine } from "../shared/medicine";
import { TimeOfDay } from "../shared/time-of-day";
import { AppService } from "../shared/app.service";
import { Container } from "../shared/container";

@Component({
  moduleId: module.id,
  templateUrl: "box.component.html",
  styleUrls: [ "box.component.css", "../shared/shared.css" ]
})

export class BoxComponent implements OnInit {
  medicines: Medicine[];
  timesOfDay: TimeOfDay[];
  container: Container;
  currentTimeOfDay: TimeOfDay;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.timesOfDay = this.appService.getTimesOfDay();
    this.medicines = this.appService.getMedicines();
    this.currentTimeOfDay = this.appService.getCurrentTimeOfDay();
    this.container = this.appService.container;
    this.startSimulation();
  }

  takeMedicines() {
    this.container.clearMedicines();
    this.currentTimeOfDay.medicinesTaken = true;
  }

  startSimulation() {
    if (!this.appService.simulationStarted) {
      this.appService.simulationStarted = true;
      this.appService.dropMedicines();
    }
  }

  advanceSimulation() {
    if (!this.container.isEmpty()) {
      this.container.isBlocked = true;
    }
    this.currentTimeOfDay.medicinesTaken = false;
    this.appService.shiftTime();
    this.currentTimeOfDay = this.appService.getCurrentTimeOfDay();
    this.appService.dropMedicines();
  }
}