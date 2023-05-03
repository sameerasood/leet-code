class Palindrome {
  constructor(num) {
    this.num = num;
    this.num = this.num.split("");
  }

  result() {
    return this.num;
  }
}

module.exports = Palindrome;
