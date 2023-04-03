const buildArray = require("./permutationArray.js");

describe("zero based permutation array", () => {
  it("returns the same array", () => {
    const result = buildArray([1]);
    expect(result).toEqual([1]);
  });
});
