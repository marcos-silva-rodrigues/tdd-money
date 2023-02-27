export abstract class Money {
  public amount: number;

  abstract times(mulltipliers: number): Money;

  equals(other: Money) {
    if (this.constructor !== other.constructor) return false;
    return this.amount === other.amount;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

   static euro(amount: number): Euro {
    return new Euro(amount);
  }
}

export class Dollar extends Money {  
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(mulltipliers: number): Dollar {
    return new Dollar(this.amount * mulltipliers);
  }
}

export class Euro extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(mulltipliers: number): Euro {
    return new Euro(this.amount * mulltipliers);
  }
}