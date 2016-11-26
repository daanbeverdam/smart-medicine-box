import { Medicine } from "./medicine";

export class TimeOfDay {
  name: string; // for example morning, noon or evening
  icon: string; // fa-icon
  medicines: Medicine[]; // meds that need to be taken at this time of day
  test: boolean;

  constructor (name: string, icon?: string, medicines?: Medicine[]) {
    this.name = name;
    if (icon) {
      this.icon = icon;
    }
    if (medicines) {
      this.medicines = medicines;
    } else {
      this.medicines = [];
    }
    this.test = true;
  }

  updateMedicines (medicine: Medicine) {
    let index = this.medicines.indexOf(medicine, 0);
    if (index > -1) {
      this.medicines.splice(index, 1);
    } else {
      this.medicines.push(medicine);
    }
    console.log(this.medicines);
  }

  isInMedicines (medicine: Medicine) {
    if (this.medicines.indexOf(medicine) === -1) {
      return false;
    }
    return true;
  }
}