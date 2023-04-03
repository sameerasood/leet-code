const buildArray = require("./permutationArray.js");

describe("zero based permutation array", () => {
  it("returns the same array", () => {
    const result = buildArray([0]);
    expect(result).toEqual([0]);
  });

  it("returns the array with two permutations", () => {
    const result = buildArray([0, 1]);
    expect(result).toEqual([0, 1]);
  });

  it("returns the array with logical permutation", () => {
    const result = buildArray([0, 2, 1]);
    expect(result).toEqual([0, 1, 2]);
  });

  it("returns [0,1,2,4,5,3] for input [0,2,1,5,3,4]", () => {
    const result = buildArray([0, 1, 2, 4, 5, 3]);
    expect(result).toEqual[(0, 2, 1, 5, 3, 4)];
  });

  it("returns [5,0,1,2,3,4] for input [4,5,0,1,2,3]", () => {
    const result = buildArray([5, 0, 1, 2, 3, 4]);
    expect(result).toEqual([4, 5, 0, 1, 2, 3]);
  });
});
