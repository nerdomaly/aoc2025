import { largestJoltage } from "./largestJoltage";

describe("joltage test", () => {
  describe("joltage with two batteries", () => {
    it('should return the correct joltage for "987654321111111"', () => {
      expect(largestJoltage("987654321111111", 2)).toEqual(98);
    });
    it('should return the correct joltage for "811111111111119"', () => {
      expect(largestJoltage("811111111111119", 2)).toEqual(89);
    });
    it('should return the correct joltage for "234234234234278"', () => {
      expect(largestJoltage("234234234234278", 2)).toEqual(78);
    });
    it('should return the correct joltage for "818181911112111"', () => {
      expect(largestJoltage("818181911112111", 2)).toEqual(92);
    });
  });

  describe("joltage with twelve batteries", () => {
    it('should return the correct joltage for "987654321111111"', () => {
      expect(largestJoltage("987654321111111", 12)).toEqual(987654321111);
    });
    it('should return the correct joltage for "811111111111119"', () => {
      expect(largestJoltage("811111111111119", 12)).toEqual(811111111119);
    });
    it('should return the correct joltage for "234234234234278"', () => {
      expect(largestJoltage("234234234234278", 12)).toEqual(434234234278);
    });
    it('should return the correct joltage for "818181911112111"', () => {
      expect(largestJoltage("818181911112111", 12)).toEqual(888911112111);
    });
  });
});
