const ArrayConcatenation = require("../src/arrayConcatenation");

describe("class ArrayConcatenation", () => {
  it("returns the array with repeated first element", () => {
    const arrayConcatenation = new ArrayConcatenation([1]);
    expect(arrayConcatenation.getNewArray()).toEqual([1, 1]);
  });

  it("returns new array with double length of existing array", () => {
    const arrayConcatenation = new ArrayConcatenation([1, 2]);
    expect(arrayConcatenation.getNewArray()).toEqual([1, 2, 1, 2]);
  });
});
