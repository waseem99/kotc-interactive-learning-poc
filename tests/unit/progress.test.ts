import { describe, expect, it } from "vitest";
import { calculateProgress } from "../../lib/progress";

describe("calculateProgress", () => {
  it("returns a rounded percentage", () => {
    expect(calculateProgress(2, 6)).toBe(33);
  });

  it("guards against invalid totals and values", () => {
    expect(calculateProgress(2, 0)).toBe(0);
    expect(calculateProgress(-2, 6)).toBe(0);
    expect(calculateProgress(9, 6)).toBe(100);
  });
});
