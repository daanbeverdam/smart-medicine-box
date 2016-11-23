export class Medicine {
  name: string;
  timeOfDay: string; // morning, noon or evening
  takenAtMorning: boolean = false;
  takenAtNoon: boolean = false;
  takenAtEvening: boolean = false;

  constructor (name: string, timeOfDay: string) {
    this.name = name;
    this.timeOfDay = timeOfDay;
    this.setTakenAt(timeOfDay);
  }

  setTakenAt (timeOfDay: string) {
    if (timeOfDay === "morning") {
      this.takenAtMorning = true;
    } else if (timeOfDay === "noon") {
      this.takenAtNoon = true;
    } else if (timeOfDay === "evening") {
      this.takenAtEvening = true;
    }
  }

}