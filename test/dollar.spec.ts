import { Dollar } from "../src/dollar";

describe('Dollar', () => {
  it('shold return 10 when five dollars are multiplied by two' , () => {
    const five = new Dollar(5)
    five.times(2)
    expect(five.amount).toEqual(10)
  });
});