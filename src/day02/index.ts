import * as fs from "fs";
import { getInvalidIdsPart1, getInvalidIdsPart2 } from "./getInvalidIds";

const input = fs.readFileSync("src/day02/input.txt", "utf-8");
const ranges = input.split(",").filter((line) => line.trim() !== "");
let totalPart1 = 0;
let totalPart2 = 0;

for (let range of ranges) {
  const invalidIdsPart1 = getInvalidIdsPart1(range);
  const invalidIdsPart2 = getInvalidIdsPart2(range);

  totalPart1 += invalidIdsPart1.reduce((acc, id) => acc + id, 0);
  totalPart2 += invalidIdsPart2.reduce((acc, id) => acc + id, 0);
}

console.log(`Total sum of invalid IDs (Part 1): ${totalPart1}`);
console.log(`Total sum of invalid IDs (Part 2): ${totalPart2}`);
