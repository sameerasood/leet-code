const Palindrome = require("./palindrome.js");

describe("class Plaindrome", () => {
  it("returns the number as an array", () => {
    const palindrome = new Palindrome("1");
    expect(palindrome.result()).toEqual(["1"]);
  });

  it("returns the number as a split array", () => {
    const palindrome = new Palindrome("123");
    expect(palindrome.result()).toEqual(["1", "2", "3"]);
  });
});
