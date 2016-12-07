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
  displayMessage: string;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.timesOfDay = this.appService.getTimesOfDay();
    this.medicines = this.appService.getMedicines();
    this.currentTimeOfDay = this.appService.getCurrentTimeOfDay();
    this.container = this.appService.container;
    this.displayMessage = this.appService.displayMessage;
  }

  takeMedicines() {
    this.container.clearMedicines();
    this.currentTimeOfDay.medicinesTaken = true;
    this.updateDisplay("Nom, nom!");
  }

  startSimulation() {
    if (!this.appService.simulationStarted) {
      this.appService.simulationStarted = true;
      this.updateDisplay("System initialized");
      if (this.currentTimeOfDay.medicinesAvailable() && !this.currentTimeOfDay.medicinesDropped) {
        this.updateDisplay("Medicines available! Please press the button to release them.");
      } else {
        this.updateDisplay("No medicines available at this time.");
      }
    }
  }

  dropMedicines() {
    this.appService.dropMedicines();
    this.updateDisplay("Medicines are in container. Please take them.");
    console.log(this.currentTimeOfDay);
  }

  advanceSimulation() {
    if (!this.container.isEmpty()) {
      this.container.isBlocked = true;
      this.updateDisplay("Oops! You haven't taken your medicine on time. Please contact your doctor.");
    } else {
      this.currentTimeOfDay.medicinesTaken = false;
      this.appService.shiftTime();
      this.currentTimeOfDay = this.appService.getCurrentTimeOfDay();
      if (this.currentTimeOfDay.medicinesAvailable()) {
        this.updateDisplay("Medicines available! Please press the button to release them.");
      } else {
        this.updateDisplay("No medicines available at this time.");
      }
    }
  }

  updateDisplay(message: string) {
    this.displayMessage = message;
    this.appService.displayMessage = message; // hey, I'm on a deadline
  }
}