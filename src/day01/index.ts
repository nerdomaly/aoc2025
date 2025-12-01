import * as fs from "fs";

export const spinDial = (
  startingPosition: number,
  spinCode: string
): number => {
  let direction = spinCode.substring(0, 1);
  let distance = parseInt(spinCode.substring(1), 10);

  if (direction === "L") {
    currentLocation = (startingPosition - distance + 100) % 100;
  } else if (direction === "R") {
    currentLocation = (startingPosition + distance) % 100;
  }

  return currentLocation;
};

let currentLocation = 50;

const input = fs.readFileSync("src/day01/input.txt", "utf-8");
const spinCodes = input.split("\n").filter((line) => line.trim() !== "");
const locations = spinCodes.map((code) => {
  currentLocation = spinDial(currentLocation, code);
  return currentLocation;
});

console.log(`Final dial position: ${currentLocation}`);
console.log(
  `Final dial position (sanity check): ${locations[locations.length - 1]}`
);
console.log(
  `Number of times dial passed position 0: ${
    locations.filter((loc) => loc === 0).length
  }`
);
