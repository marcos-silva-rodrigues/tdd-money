import { Bank } from "./bank";
import { Expression } from "./expression";
import { Money } from "./Money";

export class Sum implements Expression {
  constructor (
    public augend: Expression,
    public addend: Expression
  ) {}

  reduce(bank: Bank, to: string) {
    const amount = this.augend.reduce(bank, to).amount() + 
      this.addend.reduce(bank, to).amount();
    return new Money(amount, to);
  }

  plus(addend: Expression): Expression {
    return null
  }
}