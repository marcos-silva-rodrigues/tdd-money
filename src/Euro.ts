export class Euro {
  
  constructor(private readonly amount: number) {}

  times(mulltipliers: number): Euro {
    return new Euro(this.amount * mulltipliers);
  }

  equals(other: Euro) {
    return this.amount === other.amount;
  }
}