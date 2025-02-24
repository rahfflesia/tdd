const mod = require("./tdd");

// Capitalize tests
test("Capitalize", () => {
  expect(mod.capitalize("hello")).toMatch("Hello");
});

test("Capitalize", () => {
  expect(mod.capitalize("goodbye")).toMatch("Goodbye");
});

test("Capitalize", () => {
  expect(mod.capitalize("yogurth")).toMatch("Yogurth");
});

// Reverse string tests
test("Reverse string", () => {
  expect(mod.reverseString("hello")).toMatch("olleh");
});

test("Reverse string", () => {
  expect(mod.reverseString("goodbye")).toMatch("eybdoog");
});

test("Reverse string", () => {
  expect(mod.reverseString("12345")).toMatch("54321");
});

// Calculator object test
test("Add", () => {
  expect(mod.calculator.add(1, 2)).toBe(3);
});

test("Add", () => {
  expect(mod.calculator.add(5, -5)).toBe(0);
});

test("Test for null", () => {
  expect(mod.calculator.add("a", "b")).toBeNull();
});

test("Substract", () => {
  expect(mod.calculator.substract(10, 1)).toBe(9);
});

test("Substract", () => {
  expect(mod.calculator.substract(10, 3)).toBe(7);
});

test("Substract", () => {
  expect(mod.calculator.substract(1, 7)).toBe(-6);
});

test("Multiply", () => {
  expect(mod.calculator.multiply(5, 5)).toBe(25);
});

test("Multiply", () => {
  expect(mod.calculator.multiply(5, 0)).toBe(0);
});

test("Multiply", () => {
  expect(mod.calculator.multiply(7, 49)).toBe(343);
});

test("Divide", () => {
  expect(mod.calculator.divide(10, 5)).toBe(2);
});

test("Division by zero test", () => {
  expect(mod.calculator.divide(10, 0)).toBeNull();
});

test("Divide", () => {
  expect(mod.calculator.divide(1, 10)).toBeCloseTo(0.1);
});

// Analyze array function tests
test("Test 1 analyze array", () => {});

// Caesar cipher tests
test("Test 1", () => {
  expect(mod.caesarCipher("Hello, world!", 3)).toMatch("Khoor, zruog!");
});

test("Test 2", () => {
  expect(mod.caesarCipher("xyz", 3)).toMatch("abc");
});

test("Test 3", () => {
  "";
  expect(mod.caesarCipher("banana", 10)).toMatch("lkxkxk");
});

test("Test 4", () => {
  expect(mod.caesarCipher("carlos soto", 13)).toMatch("pneybf fbgb");
});

test("Null test", () => {
  expect(mod.caesarCipher("Hello, world!", 100)).toBeNull();
});

test("Non alphabet characters test", () => {
  expect(mod.caesarCipher("123@@@@@....", 20)).toMatch("123@@@@@....");
});
