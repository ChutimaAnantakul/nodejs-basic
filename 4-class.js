class calculator {
  static sum(x, y) {
    return x * y;
  }
  sum2(x, y) {
    return x + y;
  }
  multiply(x, y) {
    return x * y;
  }
}

const calculator0bject = new calculator();
console.log(calculator.sum(1, 2));
console.log(calculator0bject.sum2(2, 3));
// console.log(calculator0bject.sum2(5, 6));
console.log(calculator0bject.multiply(10, 20));
