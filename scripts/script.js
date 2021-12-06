const calculator = {
  read() {
    this.firstNum = prompt(`Enter the first number:`, ``);
    if (
      this.firstNum === null ||
      isNaN(+this.firstNum) ||
      this.firstNum.trim() === ""
    ) {
      alert(`Error! The first number you entered must be a number.`);
      return this.read();
    }
    this.secondNum = prompt(`Enter the second number:`, ``);
    if (
      this.secondNum === null ||
      isNaN(+this.secondNum) ||
      this.secondNum.trim() === ""
    ) {
      alert(`Error! The second number you entered must be a number.`);
      return this.read();
    }
  },

  sum() {
    return Number(this.firstNum) + Number(this.secondNum);
  },

  mul() {
    return this.firstNum * this.secondNum;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
