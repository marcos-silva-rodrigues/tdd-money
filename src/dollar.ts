import { Money } from "./Money";

export class Dollar extends Money {  
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(mulltipliers: number): Dollar {
    return new Dollar(this.amount * mulltipliers);
  }
}