const calculator = {
  checkValid(num) {
    this.num = num;
    if (this.num === null || isNaN(+this.num) || this.num.trim() === "") {
      throw new Error(`Value you entered is not valid.`);
    }
    return true;
  },

  read(
    firstNum = prompt(`Enter the first number, please:`),
    secondNum = prompt(`Enter the second number, please:`)
  ) {
    this.checkValid(firstNum);
    this.checkValid(secondNum);
    this.firstNum = firstNum;
    this.secondNum = secondNum;
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
