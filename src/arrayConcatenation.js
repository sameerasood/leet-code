class ArrayConcatenation {
  constructor(num) {
    this.num = num;
    this.ans = [];
  }

  getNewArray() {
    this.ans = this.num.push(this.num[0], this.num[1]);
    return this.num;
  }
}

module.exports = ArrayConcatenation;
