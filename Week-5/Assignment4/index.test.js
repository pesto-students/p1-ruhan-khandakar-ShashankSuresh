const { add, subtract, multiply, division } = require("./index");

/**
 * @desc toBe() uses Object.is to test exact equality.
 */

describe("Test for add function", () => {
  test("10 + 10 = 20", () => {
    expect(add(10, 10)).toBe(20);
  });
  test("0.1 + 0.2 = close to 0.3", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
  test("10 + '10' = TypeError", () => {
    expect(() => add(10, "10")).toThrow(TypeError);
    expect(() => add(10, "10")).toThrow("Given number must be a number type");
  });
  test("10 + 'A' = TypeError", () => {
    expect(() => add(10, "A")).toThrow(TypeError);
    expect(() => add(10, "A")).toThrow("Given number must be a number type");
  });
});

describe("Test for subtract function", () => {
  test("100 -  10 = 90", () => {
    expect(subtract(100, 10)).toBe(90);
  });
  test("0 -  0 = 0", () => {
    expect(subtract(0, 0)).toBe(0);
  });
  test("100 - '10' = TypeError", () => {
    expect(() => subtract(100, "10")).toThrow(TypeError);
    expect(() => subtract(100, "10")).toThrow(
      "Given number must be a number type"
    );
  });
  test("100 - 'A' = TypeError", () => {
    expect(() => subtract(100, "A")).toThrow(TypeError);
    expect(() => subtract(100, "A")).toThrow(
      "Given number must be a number type"
    );
  });
});

describe("Test for multiply function", () => {
  test("0.1 *  0.3 = 3", () => {
    expect(multiply(0.1, 0.3)).toBe(0.03);
  });
  test("0 *  0 = 0", () => {
    expect(multiply(0, 0)).toBe(0);
  });
  test("19 * '0' = TypeError", () => {
    expect(() => subtract(19, "0")).toThrow(TypeError);
    expect(() => subtract(19, "0")).toThrow(
      "Given number must be a number type"
    );
  });
  test("'a' * '0' = TypeError", () => {
    expect(() => subtract("a", "0")).toThrow(TypeError);
    expect(() => subtract("a", "0")).toThrow(
      "Given number must be a number type"
    );
  });
});

describe("Test for division function", () => {
  test("10 /  2 = 5", () => {
    expect(division(10, 2)).toBe(5);
  });
  test("10 /  3 = 3", () => {
    expect(division(10, 3)).toBeCloseTo(3.33);
  });
  test("10 /  '0' = TypeError", () => {
    expect(() => division(10, "0")).toThrow(TypeError);
    expect(() => division(10, "0")).toThrow(
      "Given number must be a number type"
    );
  });
  test("10 /  0 = TypeError", () => {
    expect(() => division(10, 0)).toThrow(Error);
    expect(() => division(10, 0)).toThrow("Divide by zero.");
  });
});
