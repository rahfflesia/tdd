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
