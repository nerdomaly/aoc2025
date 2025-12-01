import * as fs from "fs";
import { spinDial } from "./spinDial";

export let currentLocation = 50;

const input = fs.readFileSync("src/day01/input.txt", "utf-8");
const spinCodes = input.split("\n").filter((line) => line.trim() !== "");
const locations = spinCodes.map((code) => {
  let location = spinDial(currentLocation, code);
  currentLocation = location.result;
  return location;
});

console.log(`Final dial position: ${currentLocation}`);
console.log(
  `Final dial position (sanity check): ${
    locations[locations.length - 1].result
  }`
);
console.log(
  `Number of times dial landed position 0: ${
    locations.filter((loc) => loc.result === 0).length
  }`
);
console.log(
  `Number of times dial passed position 0: ${locations.reduce(
    (acc, loc) => acc + loc.clicksOnZero,
    0
  )}`
);
