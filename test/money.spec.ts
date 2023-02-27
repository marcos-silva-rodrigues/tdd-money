import { Bank } from "../src/bank";
import { Expression } from "../src/expression";
import { Money } from "../src/money";

describe('Money', () => {
  it('should handle dollar multiplication' , () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy()
    expect(five.equals(Money.dollar(5))).toBeTruthy()
  })

  it('should handle money equality', () => {
    expect(Money.euro(5).equals(Money.euro(5))).toBeTruthy()
    expect(Money.euro(5).equals(Money.euro(6))).toBeFalsy()
    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy()
  })

  it('should handle currencies', () => {
    expect(Money.dollar(1).currency()).toEqual('USD');
    expect(Money.euro(1).currency()).toEqual('EUR');
  })

  it ('should handle simple addition', () => {
    const five = Money.dollar(5)
    const sum: Expression = five.plus(five)
    const bank = new Bank()
    const reduced: Money = bank.reduce(sum, 'USD')

    expect(reduced.equals(Money.dollar(10))).toBeTruthy()
  })
})