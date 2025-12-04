import * as fs from "fs";
import { countAccessiblePaper } from "./countAccessiblePaper";

const input = fs.readFileSync("src/day04/input.txt", "utf-8");
const paperGrid = input.split("\n").map((line) => line.split(""));

const accessiblePaperCount = countAccessiblePaper(paperGrid);
console.log("Accessible Paper Count:", accessiblePaperCount);
