class ArrayConcatenation {
  constructor(num) {
    this.num = num;
    this.ans = [];
  }

  getNewArray() {
    for (let i = 0; i < this.num.length; i++) {
      this.ans.push(this.num[i]);
    }
    for (let i = 0; i < this.num.length; i++) {
      this.ans.push(this.num[i]);
    }
    return this.ans;
  }
}

module.exports = ArrayConcatenation;

const arrayConcatenation = new ArrayConcatenation([1]);
arrayConcatenation.getNewArray();
