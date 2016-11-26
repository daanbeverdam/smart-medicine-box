import { Injectable } from "@angular/core";

import { TimeOfDay } from "./time-of-day";
import { Medicine } from "./medicine";

const MEDICINES = [
  new Medicine("red"),
  new Medicine("blue"),
  new Medicine("green"),
  new Medicine("black")
];

const TIMES = [
  new TimeOfDay("morning", "fa-sun-o"),
  new TimeOfDay("noon", "fa-sun-o"),
  new TimeOfDay("evening", "fa-moon-o")
];

@Injectable()
export class AppService {
  timeIndex: number = 0;
  medicines: Medicine[];
  timesOfDay: TimeOfDay[];

  getMedicine(): Promise<Medicine[]> {
    this.medicines = MEDICINES; // caching
    return Promise.resolve(this.medicines);
  }

  getTimesOfDay(): Promise<TimeOfDay[]> {
    this.timesOfDay = TIMES; // caching
    return Promise.resolve(this.timesOfDay);
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
  }
}