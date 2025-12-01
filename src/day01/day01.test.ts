import { spinDial } from "./spinDial";

describe("Advent of Code 2025 Day 01", () => {
  it("should spin the dial left correctly", () => {
    let answer = spinDial(40, "L50");
    expect(answer.result).toBe(90);
    expect(answer.clicksOnZero).toBe(1);

    answer = spinDial(40, "L100");
    expect(answer.result).toBe(40);
    expect(answer.clicksOnZero).toBe(1);

    answer = spinDial(40, "L150");
    expect(answer.result).toBe(90);
    expect(answer.clicksOnZero).toBe(2);

    answer = spinDial(40, "L200");
    expect(answer.result).toBe(40);
    expect(answer.clicksOnZero).toBe(2);

    answer = spinDial(40, "L2000");
    expect(answer.result).toBe(40);
    expect(answer.clicksOnZero).toBe(20);
  });

  it("should spin the dial right correctly", () => {
    let answer = spinDial(40, "R50");
    expect(answer.result).toBe(90);
    expect(answer.clicksOnZero).toBe(0);

    answer = spinDial(40, "R100");
    expect(answer.result).toBe(40);
    expect(answer.clicksOnZero).toBe(1);

    answer = spinDial(40, "R150");
    expect(answer.result).toBe(90);
    expect(answer.clicksOnZero).toBe(1);

    answer = spinDial(40, "R200");
    expect(answer.result).toBe(40);
    expect(answer.clicksOnZero).toBe(2);

    answer = spinDial(40, "R2000");
    expect(answer.result).toBe(40);
    expect(answer.clicksOnZero).toBe(20);
  });

  it("should handle multiple spins correctly", () => {
    let currentPosition = 50;
    const spins = ["R30", "L60", "R80", "L20"];
    let totalTimesPassedZero = 0;

    spins.forEach((spin) => {
      const result = spinDial(currentPosition, spin);
      currentPosition = result.result;
      totalTimesPassedZero += result.clicksOnZero;
    });

    expect(currentPosition).toBe(80);
    expect(totalTimesPassedZero).toBe(1);
  });
});
