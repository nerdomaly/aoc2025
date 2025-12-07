export const splitRows = (input: string): string[] => {
  return input.split("\n");
};

export const splitColumns = (row: string): string[] => {
  return row.trim().split(/\s+/);
};

export const parseGrid = (input: string): string[][] => {
  const rows = splitRows(input);
  return rows.map((row) => splitColumns(row).map((value) => value));
};

export const rotateGrid = (grid: string[][]): string[][] => {
  const numRows = grid.length;
  const numCols = grid[0].length;
  const rotated: string[][] = Array.from({ length: numCols }, () =>
    Array.from({ length: numRows }, () => "")
  );

  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCols; c++) {
      rotated[c][r] = grid[r][c];
    }
  }

  return rotated;
};

export const calculateRow = (row: string[]): number => {
  const opStack: string[] = [];

  row.forEach((value) => {
    opStack.push(value);
  });

  const operation = opStack.pop();
  if (operation === "+")
    return opStack.reduce((acc, val) => acc + Number(val), 0);

  if (operation === "*")
    return opStack.reduce((acc, val) => acc * Number(val), 1);

  return 0;
};

export const splitRawColumns = (input: string): string[][] => {
  const rows = input.split("\n");
  let bottomRowIndex = rows.length - 1;
  while (bottomRowIndex >= 0 && rows[bottomRowIndex].trim().length === 0) {
    bottomRowIndex--;
  }
  if (bottomRowIndex < 0) return [];

  const bottomRow = rows[bottomRowIndex];
  const operatorIndices: number[] = [];
  
  for (let i = 0; i < bottomRow.length; i++) {
    if (bottomRow[i] === "*" || bottomRow[i] === "+") {
      operatorIndices.push(i);
    }
  }

  const columns: string[][] = [];
  for (let i = 0; i < operatorIndices.length; i++) {
    const start = operatorIndices[i];
    const end =
      i < operatorIndices.length - 1 ? operatorIndices[i + 1] - 1 : undefined;
    const column: string[] = [];

    for (let r = 0; r <= bottomRowIndex; r++) {
      const row = rows[r];
      column.push(row.substring(start, end));
    }
    columns.push(column);
  }

  return columns;
};

export const parseVerticalNumbers = (columns: string[][]): string[][] => {
  return columns.map((col) => {
    const operator = col[col.length - 1].trim();
    const numbers = col.slice(0, -1);
    if (numbers.length === 0) return [operator];
    const width = numbers[0].length;

    const newCol: string[] = [];

    for (let i = width - 1; i >= 0; i--) {
      let num = "";
      for (const row of numbers) {
        num += row[i];
      }
      newCol.push(num.trim());
    }

    newCol.push(operator);
    return newCol;
  });
};
