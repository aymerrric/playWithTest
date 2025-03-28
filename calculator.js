const calculator = (function makeCalculator() {
  function add(x, y) {
    return x + y;
  }
  function substract(x, y) {
    return x - y;
  }
  function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    if (y === 0) {
      throw new Error("division by 0");
    }
    return x / y;
  }

  return { add, substract, multiply, divide };
})();

module.exports = calculator;
