class Palindrome {
  constructor(num) {
    this.num = num;
    this.num = this.num.toString();
  }

  result() {
    let i = 0;
    while (i <= this.num.length / 2) {
      if (this.num[i] != this.num[this.num.length - 1 - i]) {
        return false;
      }
      i++;
    }
    return true;
  }
}

module.exports = Palindrome;
