import { describe, expect, it } from "@jest/globals";
import { add } from ".";

describe("add", () => {
  it("should return 0 for empty input", () => {
    expect(add("")).toBe(0);
  });

  // Test for single number input
  it("should return the number itself for a single number input", () => {
    expect(add("1")).toBe(1);
  });

  // Test for multiple comma-separated numbers
  it("should return the sum for multiple comma-separated numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  // Test for handling newlines between numbers
  it("should return the sum for numbers separated by commas and newlines", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // Test for handling custom delimiter
  it("should return the sum for numbers separated by a custom delimiter", () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

  // Test for negative numbers throwing exception
  it("should throw an exception for a single negative number", () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  // Test for multiple negative numbers throwing exception
  it("should throw an exception with all negative numbers listed", () => {
    expect(() => add("1,-2,-3,4")).toThrow(
      "Negative numbers not allowed: -2, -3"
    );
  });
});
