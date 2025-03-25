const capitalizeFirstLetter = require("./app");
const reverseString = require("./reverse");
const calculator = require("./calculator");
const { cesarCypher, shiftCharacter } = require("./cesar_cypher");
const analyzeArray = require("./analyze_array");

test("capitalize (example 1)", () => {
  expect(capitalizeFirstLetter("banana")).toBe("Banana");
});

test("reverse empty", () => expect(reverseString("")).toEqual(""));

test("reverse (example 1)", () =>
  expect(reverseString("banana")).toEqual("ananab"));

test("calculator add", () => expect(calculator.add(3, 5)).toBe(8));
test("calculator multiply", () => expect(calculator.multiply(3, 5)).toBe(15));
test("calculator divide", () =>
  expect(calculator.divide(3, 5)).toBeCloseTo(3 / 5));
test("calculator substract", () => expect(calculator.substract(3, 5)).toBe(-2));

test("calculator divide by 0", () =>
  expect(() => calculator.divide(3, 0)).toThrow(/division by 0/));

test("Cesar Cypher", () => expect(cesarCypher("HeLLo", 3)).toEqual("KhOOr"));
test("Cesar Cypher", () => expect(cesarCypher("", 8)).toEqual(""));
test("Cesar Cypher", () =>
  expect(cesarCypher("Hello, World!", 3)).toEqual("Khoor, Zruog!"));

test("Shift charater", () => {
  expect(shiftCharacter("a", 2)).toBe("c");
});

test("Shift charater", () => {
  expect(shiftCharacter("!", 8)).toBe("!");
});

test("Shift charater", () => {
  expect(shiftCharacter("a", 26)).toBe("a");
});

test("Analyze Array ", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Analyze Array (Empty)", () => {
  expect(analyzeArray([])).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test("Analyze Array (Not only numbers)", () => {
  expect(() => analyzeArray(["az", 3, 2]).toThrow());
});
