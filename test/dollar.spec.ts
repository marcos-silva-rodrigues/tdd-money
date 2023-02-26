import { Dollar } from "../src/dollar";
import { Euro } from "../src/Euro";

describe('Dollar', () => {
  it('shold return 10 when five dollars are multiplied by two and 15 when multiplied by three' , () => {
    const five = new Dollar(5)
    expect(five.times(2).equals(new Dollar(10))).toBeTruthy()
    expect(five.equals(new Dollar(5))).toBeTruthy();

    expect(five.times(3).equals(new Dollar(15))).toBeTruthy()
    expect(five.equals(new Dollar(5))).toBeTruthy();
  })

  it('shold return 10 when five euros are multiplied by two and 15 when multiplied by three' , () => {
    const five = new Euro(5)
    expect(five.times(2).equals(new Euro(10))).toBeTruthy()
    expect(five.equals(new Euro(5))).toBeTruthy();
  })

  it('should return true when $5 is compared to $5', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})