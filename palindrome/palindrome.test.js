const Palindrome = require("./palindrome.js");

describe("class Plaindrome", () => {
  it("returns the number", () => {
    const palindrome = new Palindrome(123);
    expect(palindrome.result()).toEqual(123);
  });
});
