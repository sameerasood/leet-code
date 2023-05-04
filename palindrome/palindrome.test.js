const Palindrome = require("./palindrome.js");

describe("class Plaindrome", () => {
  it("returns true for a single digit number", () => {
    const palindrome = new Palindrome(1);
    expect(palindrome.result()).toEqual(true);
  });

  it("returns true for a double digit number", () => {
    const palindrome = new Palindrome(11);
    expect(palindrome.result()).toEqual(true);
  });

  it("returns true for triple digit number", () => {
    const palindrome = new Palindrome(121);
    expect(palindrome.result()).toEqual(true);
  });

  it("returns false for a negative number", () => {
    const palindrome = new Palindrome(-121);
    expect(palindrome.result()).toEqual(false);
  });
});
