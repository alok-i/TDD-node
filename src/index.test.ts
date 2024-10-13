import { describe, expect, test } from "@jest/globals";
import { sumOfNumbers } from ".";

describe("sumOfNumbers", () => {
  test("should return 0 for empty input", () => {
    expect(sumOfNumbers("")).toBe(0);
  });

  test('should return 1 for input "1"', () => {
    expect(sumOfNumbers("1")).toBe(1);
  });

  test('should return 6 for input "1,5"', () => {
    expect(sumOfNumbers("1,5")).toBe(6);
  });

  test('should return 15 for input "1,2,3,4,5"', () => {
    expect(sumOfNumbers("1,2,3,4,5")).toBe(15);
  });

  test('should handle input with spaces " 1, 2, 3 "', () => {
    expect(sumOfNumbers(" 1, 2, 3 ")).toBe(6);
  });

  test('should return 0 for input with all spaces " "', () => {
    expect(sumOfNumbers(" ")).toBe(0);
  });

  test('should handle negative numbers "-1,2,-3"', () => {
    expect(sumOfNumbers("-1,2,-3")).toBe(-2);
  });
});
