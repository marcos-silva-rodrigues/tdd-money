export class Dollar {
  
  constructor(public amount: number) {}

  times(mulltipliers: number): void {
    this.amount *= mulltipliers;
  }
}