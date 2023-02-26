import { Dollar } from "../src/dollar";

describe('Dollar', () => {
  it('shold return 10 when five dollars are multiplied by two' , () => {
    const five = new Dollar(5)
    var product = five.times(2)
    expect(five.amount).toEqual(5)
    expect(product.amount).toEqual(10)
    product = five.times(3)
    expect(product.amount).toEqual(15)
  });
});