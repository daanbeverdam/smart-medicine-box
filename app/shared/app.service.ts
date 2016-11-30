import { Injectable } from "@angular/core";

import { TimeOfDay } from "./time-of-day";
import { Medicine } from "./medicine";
import { Container } from "./container";

const MEDICINES = [
  new Medicine("red", "red"),
  new Medicine("blue", "blue"),
  new Medicine("green", "green"),
  new Medicine("black", "black")
];

const TIMES = [
  new TimeOfDay("morning", "fa-sun-o"),
  new TimeOfDay("noon", "fa-sun-o"),
  new TimeOfDay("evening", "fa-moon-o")
];

@Injectable()
export class AppService {
  // this class provides the components with all relevant data and simulations
  medicines: Medicine[] = MEDICINES;
  timesOfDay: TimeOfDay[] = TIMES;
  timeIndex: number = 0;
  container: Container = new Container();
  currentTimeOfDay: TimeOfDay = TIMES[0];
  simulationStarted: boolean = false;

  getMedicines(): Medicine[] {
    return this.medicines;
  }

  addMedicine(medicine: Medicine) {
    this.medicines.push(medicine);
  }

  getTimesOfDay(): TimeOfDay[] {
    return this.timesOfDay;
  }

  getCurrentTimeOfDay(): TimeOfDay {
    return this.timesOfDay[this.timeIndex];
  }

  shiftTime() {
    if (this.timeIndex === this.timesOfDay.length - 1) {
      this.timeIndex = 0;
    } else {
      this.timeIndex += 1;
    }
    this.currentTimeOfDay = this.getCurrentTimeOfDay();
  }

  dropMedicines() {
    if (!this.currentTimeOfDay.medicinesDropped) {
      this.container.addMedicines(this.currentTimeOfDay.medicines);
    } else {
      console.log("Medicines already in container!");
    }
  }
}