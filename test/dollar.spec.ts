import { Dollar } from "../src/dollar";

describe('Dollar', () => {
  it('shold return 10 when five dollars are multiplied by two' , () => {
    const five = new Dollar(5)
    var product = five.times(2)
    expect(five.amount).toEqual(5)
    expect(product.amount).toEqual(10)
    product = five.times(3)
    expect(product.amount).toEqual(15)
  })

  it('should return true when $5 is compared to $5', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})