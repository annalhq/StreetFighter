import { Fighter } from "./fighter.js";

export class Ken extends Fighter {
  constructor(x, y, velocity) {
    super('Ken', x, y, velocity);

    this.image = document.querySelector("img[alt='ken']");
  }
}