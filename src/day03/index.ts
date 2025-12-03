import * as fs from "fs";
import { largestJoltage } from "./largestJoltage";

const input = fs.readFileSync("src/day03/input.txt", "utf-8");
const ranges = input.split("\n").filter((line) => line.trim() !== "");
let totalJoltageTwoBattery = 0;
let totalJoltageTwelveBattery = 0;

for (let range of ranges) {
  console.log(`Processing range: ${range}`);
  const totalJoltageForLineTwoBatteries = largestJoltage(range, 2);
  const totalJoltageForLineTwelveBatteries = largestJoltage(range, 12);

  totalJoltageTwoBattery += totalJoltageForLineTwoBatteries;
  totalJoltageTwelveBattery += totalJoltageForLineTwelveBatteries;
}

console.log(
  `Total joltage for two batteries (Part 1): ${totalJoltageTwoBattery}`
);
console.log(
  `Total joltage for twelve batteries (Part 1): ${totalJoltageTwelveBattery}`
);
