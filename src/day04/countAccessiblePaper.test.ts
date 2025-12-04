import { countAccessiblePaper } from "./countAccessiblePaper";

describe("countAccessiblePaper", () => {
  it("should return 0 for an empty grid", () => {
    const grid: string[][] = [];
    expect(countAccessiblePaper(grid).totalAccessible).toBe(0);
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

    expect(countAccessiblePaper(grid).totalAccessible).toBe(13);
  });

  it("should recusively mark accessible paper", () => {
    let grid: string[][] = [
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

    let totalAccessible = 0;
    while (true) {
      const { totalAccessible: currentTotal, updatedGrid } =
        countAccessiblePaper(grid);

      if (currentTotal === 0) {
        break;
      }

      totalAccessible += currentTotal;
      grid = updatedGrid;
    }
    expect(totalAccessible).toBe(43);
  });
});
