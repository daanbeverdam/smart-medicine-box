import { Medicine } from "./medicine";

export class Container {
  medicines: Medicine[];
  isBlocked: boolean;

  addMedicines(medicines: Medicine[]) {
    if (this.medicines) {
      this.medicines = this.medicines.concat(medicines);
    } else {
      this.medicines = medicines;
    }
    console.log("Meds in container:");
    console.log(this.medicines);
  }

  clearMedicines() {
    this.medicines = [];
  }

  getMedicines() {
    return this.medicines;
  }

  getNumberOfMedicines() {
    if (this.medicines) {
      return this.medicines.length;
    }
    return 0;
  }

  isEmpty() {
    if (this.getNumberOfMedicines() === 0) {
      return true;
    }
    return false;
  }

}