import { Money } from "../src/Money";

describe('Money', () => {
  it('should correctly handle dollar multiplication' , () => {
    const five: Money = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy()
    expect(five.equals(Money.dollar(5))).toBeTruthy()
  })

  it('should correctly handle euro multiplication' , () => {
    const five: Money = Money.euro(5);
    expect(five.times(2).equals(Money.euro(10))).toBeTruthy()
    expect(five.equals(Money.euro(5))).toBeTruthy()
  })

  it('should correctly handle money equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()

    expect(Money.euro(5).equals(Money.euro(5))).toBeTruthy()
    expect(Money.euro(5).equals(Money.euro(6))).toBeFalsy()
    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy()
  })
})