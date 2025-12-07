import {
  calculateRow,
  parseGrid,
  rotateGrid,
  splitColumns,
  splitRows,
  splitRawColumns,
  parseVerticalNumbers,
} from "./day06";

const TEST_INPUT = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `;

describe("Day 6", () => {
  test("Check parseVerticalNumbers function", () => {
    const rawColumns = splitRawColumns(TEST_INPUT);
    const result = parseVerticalNumbers(rawColumns);
    expect(result).toEqual([
      ["356", "24", "1", "*"],
      ["8", "248", "369", "+"],
      ["175", "581", "32", "*"],
      ["4", "431", "623", "+"],
    ]);
  });

  test("Check splitRawColumns function", () => {
    const result = splitRawColumns(TEST_INPUT);
    expect(result).toEqual([
      ["123", " 45", "  6", "*  "],
      ["328", "64 ", "98 ", "+  "],
      [" 51", "387", "215", "*  "],
      ["64 ", "23 ", "314", "+  "],
    ]);
  });

  test("Check splitRows function", () => {
    const result = splitRows(TEST_INPUT);
    expect(result).toHaveLength(4); // Example expected result
  });

  test("Check splitColumns function", () => {
    const row = splitRows(TEST_INPUT)[0];
    const result = splitColumns(row);
    expect(result).toEqual(["123", "328", "51", "64"]);
  });

  test("Check parseGrid function", () => {
    const result = parseGrid(TEST_INPUT);
    expect(result).toEqual([
      ["123", "328", "51", "64"],
      ["45", "64", "387", "23"],
      ["6", "98", "215", "314"],
      ["*", "+", "*", "+"],
    ]);
  });

  test("check rotateGrid function", () => {
    const grid = parseGrid(TEST_INPUT);
    const result = rotateGrid(grid);
    expect(result).toEqual([
      ["123", "45", "6", "*"],
      ["328", "64", "98", "+"],
      ["51", "387", "215", "*"],
      ["64", "23", "314", "+"],
    ]);
  });

  test("check calculateRow function", () => {
    const result = parseGrid(TEST_INPUT);
    const rotated = rotateGrid(result);

    const resultsGrid = rotated.map((row) => calculateRow(row));

    expect(resultsGrid).toEqual([33210, 490, 4243455, 401]);

    expect(resultsGrid.reduce((acc, val) => acc + val, 0)).toBe(4277556);
  });

  test("check calculateRow with vertical numbers", () => {
    const rawColumns = splitRawColumns(TEST_INPUT);
    const verticalNumbers = parseVerticalNumbers(rawColumns);

    const answers = verticalNumbers.map((row) => calculateRow(row));
    expect(answers).toEqual([8544, 625, 3253600, 1058]);

    expect(answers.reduce((acc, val) => acc + val, 0)).toBe(3263827);
  });
});
