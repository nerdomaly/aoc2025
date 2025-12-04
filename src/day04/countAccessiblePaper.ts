export const countAccessiblePaper = (
  grid: string[][]
): { totalAccessible: number; updatedGrid: string[][] } => {
  if (grid.length === 0) return { totalAccessible: 0, updatedGrid: [] };

  const workingGrid = grid.map((row) => [...row]);
  const numRows = grid.length;
  const numCols = grid[0].length;
  let totalAccessible = 0;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === "@") {
        let adjacentCount = 0;
        let accessible = false;

        // Top Left
        if (row !== 0 && col !== 0 && grid[row - 1][col - 1] === "@") {
          adjacentCount++;
        }
        // Top
        if (row !== 0 && grid[row - 1][col] === "@") {
          adjacentCount++;
        }
        // Top Right
        if (
          row !== 0 &&
          col !== numCols - 1 &&
          grid[row - 1][col + 1] === "@"
        ) {
          adjacentCount++;
        }

        // Left
        if (col !== 0 && grid[row][col - 1] === "@") {
          adjacentCount++;
        }
        // Right
        if (col !== numCols - 1 && grid[row][col + 1] === "@") {
          adjacentCount++;
        }

        // Bottom Left
        if (
          row !== numRows - 1 &&
          col !== 0 &&
          grid[row + 1][col - 1] === "@"
        ) {
          adjacentCount++;
        }
        // Bottom
        if (row !== numRows - 1 && grid[row + 1][col] === "@") {
          adjacentCount++;
        }
        // Bottom Right
        if (
          row !== numRows - 1 &&
          col !== numCols - 1 &&
          grid[row + 1][col + 1] === "@"
        ) {
          adjacentCount++;
        }

        if (adjacentCount < 4) {
          accessible = true;
          workingGrid[row][col] = "x";
        }

        if (accessible) {
          totalAccessible++;
        }
      }
    }
  }

  return { totalAccessible, updatedGrid: workingGrid };
};
