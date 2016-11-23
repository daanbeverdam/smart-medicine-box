import { Injectable } from "@angular/core";

import { Medicine } from "./medicine";
import { TimesOfDay } from "./times-of-day";

const MEDICINE = [
  new Medicine("red", "morning"),
  new Medicine("blue", "noon"),
  new Medicine("green", "evening")
];

const TIMES = [
  "morning",
  "noon",
  "evening"
];

@Injectable()
export class AppService {
  getMedicine(): Promise<Medicine[]> {
    return Promise.resolve(MEDICINE);
  }
  getTimesOfDay() {
    return TIMES;
  }
}