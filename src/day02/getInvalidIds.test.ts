import { getInvalidIds } from "./getInvalidIds";

describe("getInvalidIds test", () => {
  it("should return invalid IDs within the range of 11-22", () => {
    let result = getInvalidIds("11-22");
    expect(result.length).toEqual(2);
  });

  it("should return invalid IDs within the range of 95-115", () => {
    let result = getInvalidIds("95-115");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 998-1012", () => {
    let result = getInvalidIds("998-1012");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 1188511880-1188511890", () => {
    let result = getInvalidIds("1188511880-1188511890");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 222220-222224", () => {
    let result = getInvalidIds("222220-222224");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 1698522-1698528", () => {
    let result = getInvalidIds("1698522-1698528");
    expect(result.length).toEqual(0);
  });

  it("should return invalid IDs within the range of 446443-446449", () => {
    let result = getInvalidIds("446443-446449");
    expect(result.length).toEqual(1);
  });

  it("should return invalid IDs within the range of 38593856-38593862", () => {
    let result = getInvalidIds("38593856-38593862");
    expect(result.length).toEqual(1);
  });
});
