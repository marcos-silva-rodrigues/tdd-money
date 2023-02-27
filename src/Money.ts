export class Money {
  public amount: number;
  public _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  times(multipliers: number): Money {
    return new Money(this.amount * multipliers, this._currency);
  }

  equals(other: Money) {
    if (this._currency !== other._currency) return false;
    return this.amount === other.amount;
  }

  currency(): string {
    return this._currency;
  } 

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static euro(amount: number): Money {
    return new Money(amount, 'EUR');
  }
}
