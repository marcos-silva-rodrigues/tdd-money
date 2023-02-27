export abstract class Money {
  public amount: number;
  public _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  abstract times(multipliers: number): Money;

  equals(other: Money) {
    if (this.constructor !== other.constructor) return false;
    return this.amount === other.amount;
  }

  currency(): string {
    return this._currency;
  } 

  static dollar(amount: number): Dollar {
    return new Dollar(amount, "USD");
  }

  static euro(amount: number): Euro {
    return new Euro(amount, 'EUR');
  }
}

export class Dollar extends Money {

  times(multipliers: number): Dollar {
    return Money.dollar(this.amount * multipliers);
  }
}

export class Euro extends Money {

  times(multipliers: number): Euro {
    return Money.euro(this.amount * multipliers);
  }
}