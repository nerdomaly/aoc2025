import * as fs from "fs";
import { countAccessiblePaper } from "./countAccessiblePaper";

const input = fs.readFileSync("src/day04/input.txt", "utf-8");
const paperGrid = input.split("\n").map((line) => line.split(""));

const { totalAccessible: initiallyAccessiblePaperCount } =
  countAccessiblePaper(paperGrid);
console.log("Accessible Paper Count:", initiallyAccessiblePaperCount);

let gridForRecursion = paperGrid.map((row) => [...row]);
let totalAccessible = 0;
while (true) {
  const { totalAccessible: currentTotal, updatedGrid } =
    countAccessiblePaper(gridForRecursion);

  if (currentTotal === 0) {
    break;
  }

  totalAccessible += currentTotal;
  gridForRecursion = updatedGrid;
}
console.log("Total Accessible Paper Count (Recursive):", totalAccessible);
