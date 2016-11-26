import { Injectable } from "@angular/core";

import { TimeOfDay } from "./time-of-day";
import { Medicine } from "./medicine";

const MEDICINE = [
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
  getMedicine(): Promise<Medicine[]> {
    return Promise.resolve(MEDICINE);
  }
  getTimesOfDay(): Promise<TimeOfDay[]> {
    return Promise.resolve(TIMES);
  }
}