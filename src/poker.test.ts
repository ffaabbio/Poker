import { describe, it, expect } from "vitest";

const addition = (a: number, b: number): number => a + b;

describe("addition", () => {
  it("additionne deux nombres", () => {
    expect(addition(2, 3)).toBe(5);
  });
});