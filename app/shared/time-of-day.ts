import { Medicine } from "./medicine";

export class TimeOfDay {
  name: string; // for example morning, noon or evening
  icon: string; // fa-icon
  medicines: Medicine[]; // meds that need to be taken at this time of day
  medicinesTaken: boolean = false;
  medicinesDropped: boolean = false;

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
  }

  updateMedicines (medicine: Medicine) {
    let index = this.medicines.indexOf(medicine, 0);
    if (index > -1) {
      this.medicines.splice(index, 1);
    } else {
      this.medicines.push(medicine);
    }
    console.log("Medicines to be taken in the " + this.name + ":");
    console.log(this.medicines);
  }

  isInMedicines (medicine: Medicine) {
    if (this.medicines.indexOf(medicine) === -1) {
      return false;
    }
    return true;
  }

  medicinesAvailable() {
    if (this.medicines && this.medicines.length > 0) {
      return true;
    }
    return false;
  }

  takeMedicines () {
    this.medicinesTaken = true;
  }

  reset () {
    this.medicinesTaken = false;
    this.medicinesDropped = false;
  }
}