import * as fs from "fs";
import {
  calculateRow,
  parseGrid,
  parseVerticalNumbers,
  rotateGrid,
  splitRawColumns,
} from "./day06";

const input = fs.readFileSync("src/day06/input.txt", "utf-8");

const processGrid = parseGrid(input);
const rotatedGrid = rotateGrid(processGrid);
const results = rotatedGrid.map((row) => calculateRow(row));
const finalResult = results.reduce((acc, val) => acc + val, 0);

console.log("Final Result (Part 1):", finalResult);

const rawColumns = splitRawColumns(input);
const verticalNumbers = parseVerticalNumbers(rawColumns);

const answers = verticalNumbers.map((row) => calculateRow(row));
const finalVerticalResult = answers.reduce((acc, val) => acc + val, 0);

console.log("Final Result (Part 2):", finalVerticalResult);
