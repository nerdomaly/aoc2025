import { countAccessiblePaper } from "./countAccessiblePaper";

describe("countAccessiblePaper", () => {
  it("should return 0 for an empty grid", () => {
    const grid: string[][] = [];
    expect(countAccessiblePaper(grid)).toBe(0);
  });

  it("should return the correct count for test data", () => {
    const grid: string[][] = [
      [".", ".", "@", "@", ".", "@", "@", "@", "@", "."],
      ["@", "@", "@", ".", "@", ".", "@", ".", "@", "@"],
      ["@", "@", "@", "@", "@", ".", "@", ".", "@", "@"],
      ["@", ".", "@", "@", "@", "@", ".", ".", "@", "."],
      ["@", "@", ".", "@", "@", "@", "@", ".", "@", "@"],
      [".", "@", "@", "@", "@", "@", "@", "@", ".", "@"],
      [".", "@", ".", "@", ".", "@", ".", "@", "@", "@"],
      ["@", ".", "@", "@", "@", ".", "@", "@", "@", "@"],
      [".", "@", "@", "@", "@", "@", "@", "@", "@", "."],
      ["@", ".", "@", ".", "@", "@", "@", ".", "@", "."],
    ];

    expect(countAccessiblePaper(grid)).toBe(13);
  });
});
