import { spinDial } from "./index";

describe("Advent of Code 2025 Day 01", () => {
  it("should spin the dial left correctly", () => {
    const result = spinDial(50, "L10");
    expect(result).toBe(40);
  });

  it("should spin the dial right correctly", () => {
    const result = spinDial(50, "R15");
    expect(result).toBe(65);
  });

  it("should wrap around the dial correctly when spinning left", () => {
    const result = spinDial(5, "L10");
    expect(result).toBe(95); // Assuming the dial goes from 0 to 99
  });

  it("should wrap around the dial correctly when spinning right", () => {
    const result = spinDial(95, "R10");
    expect(result).toBe(5); // Assuming the dial goes from 0 to 99
  });
});
