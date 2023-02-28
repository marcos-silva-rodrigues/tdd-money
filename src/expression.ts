import { Bank } from "./bank";
import { Money } from "./Money";

export interface Expression {
  reduce: (bank: Bank, to: string) => Money
}