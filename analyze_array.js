function analyzeArray(array) {
  if (array.length === 0) {
    return {
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0,
    };
  }
  for (element of array) {
    if (typeof element !== "number" && typeof element !== "bigint") {
      throw new Error("Please provide an array only with numbers");
    }
  }
  const length = array.length;
  // length is different of 0 so dividing is OK
  const average = array.reduce((acc, number) => acc + number / length, 0);
  const min = array.reduce(
    (acc, number) => (number < acc ? number : acc),
    +Infinity
  );
  const max = array.reduce(
    (acc, number) => (number > acc ? number : acc),
    -Infinity
  );
  return { average, min, max, length };
}

module.exports = analyzeArray;
