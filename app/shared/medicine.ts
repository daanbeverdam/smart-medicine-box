export class Medicine {
  name: string;
  color: string;

  constructor (name: string, color?: string) {
    this.name = name;
    if (color) {
      this.color = color;
    } else {
      this.color = "black";
    }
  }
}