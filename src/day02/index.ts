import * as fs from "fs";
import { getInvalidIds } from "./getInvalidIds";

const input = fs.readFileSync("src/day02/input.txt", "utf-8");
const ranges = input.split(",").filter((line) => line.trim() !== "");
let total = 0;

for (let range of ranges) {
  const invalidIds = getInvalidIds(range);
  console.log(
    `Range: ${range}, Invalid IDs count: ${
      invalidIds.length
    }, IDs: ${invalidIds.join(", ")}`
  );

  total += invalidIds.reduce((acc, id) => acc + id, 0);
}

console.log(`Total sum of invalid IDs: ${total}`);
