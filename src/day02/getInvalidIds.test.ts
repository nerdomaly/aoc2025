import { getInvalidIdsPart1, getInvalidIdsPart2 } from "./getInvalidIds";

describe("getInvalidIdsPart1 test", () => {
  it("should return invalid IDs within the range of 11-22", () => {
    let result = getInvalidIdsPart1("11-22");
    expect(result.length).toEqual(2);
  });

  it("should return invalid IDs within the range of 95-115", () => {
    let result = getInvalidIdsPart1("95-115");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 998-1012", () => {
    let result = getInvalidIdsPart1("998-1012");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 1188511880-1188511890", () => {
    let result = getInvalidIdsPart1("1188511880-1188511890");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 222220-222224", () => {
    let result = getInvalidIdsPart1("222220-222224");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 1698522-1698528", () => {
    let result = getInvalidIdsPart1("1698522-1698528");
    expect(result.length).toEqual(0);
  });

  it("should return invalid IDs within the range of 446443-446449", () => {
    let result = getInvalidIdsPart1("446443-446449");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 38593856-38593862", () => {
    let result = getInvalidIdsPart1("38593856-38593862");
    expect(result.length).toEqual(1);
  });
});

describe("getInvalidIdsPart2 test", () => {
  it("should return invalid IDs within the range of 11-22", () => {
    let result = getInvalidIdsPart2("11-22");
    expect(result.length).toEqual(2);
  });

  it("should return invalid IDs within the range of 95-115", () => {
    let result = getInvalidIdsPart2("95-115");
    expect(result.length).toEqual(2);
  });

  it("should return invalid IDs within the range of 998-1012", () => {
    let result = getInvalidIdsPart2("998-1012");
    expect(result.length).toEqual(2);
  });

  it("should return invalid IDs within the range of 1188511880-1188511890", () => {
    let result = getInvalidIdsPart2("1188511880-1188511890");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 222220-222224", () => {
    let result = getInvalidIdsPart2("222220-222224");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 1698522-1698528", () => {
    let result = getInvalidIdsPart2("1698522-1698528");
    expect(result.length).toEqual(0);
  });

  it("should return invalid IDs within the range of 446443-446449", () => {
    let result = getInvalidIdsPart2("446443-446449");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 38593856-38593862", () => {
    let result = getInvalidIdsPart2("38593856-38593862");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 565653-565659", () => {
    let result = getInvalidIdsPart2("565653-565659");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 824824821-824824827", () => {
    let result = getInvalidIdsPart2("824824821-824824827");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 2121212118-2121212124 ", () => {
    let result = getInvalidIdsPart2("2121212118-2121212124");
    expect(result.length).toEqual(1);
  });
});
