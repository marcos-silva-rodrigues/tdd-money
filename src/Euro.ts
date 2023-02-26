import { Money } from "./Money";

export class Euro extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(mulltipliers: number): Euro {
    return new Euro(this.amount * mulltipliers);
  }
}