export class Dollar {
  
  constructor(public readonly amount: number) {}

  times(mulltipliers: number): Dollar {
    return new Dollar(this.amount * mulltipliers);
  }
}