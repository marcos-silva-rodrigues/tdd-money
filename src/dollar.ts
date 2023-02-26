export class Dollar {
  
  constructor(private readonly amount: number) {}

  times(mulltipliers: number): Dollar {
    return new Dollar(this.amount * mulltipliers);
  }

  equals(other: Dollar) {
    return this.amount === other.amount;
  }
}