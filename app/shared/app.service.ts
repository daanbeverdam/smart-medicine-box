import { Injectable } from "@angular/core";

import { TimeOfDay } from "./time-of-day";
import { Medicine } from "./medicine";
import { Container } from "./container";

const MEDICINES = [
  new Medicine("Red", "red"),
  new Medicine("Blue", "blue"),
  new Medicine("Green", "green"),
  new Medicine("Black", "black")
];

const TIMES = [
  new TimeOfDay("Morning", "fa-sun-o"),
  new TimeOfDay("Noon", "fa-sun-o"),
  new TimeOfDay("Evening", "fa-moon-o")
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