import {
  checkAvailableFreshIngredients,
  getFreshIngredientsList,
  splitInput,
} from "./day05";

const exampleInput = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;

describe("day05 tests", () => {
  test("splitInput splits the input into sections", () => {
    const result = splitInput(exampleInput);
    expect(result).toHaveLength(2);
    expect(result[0]).toBe(`3-5
10-14
16-20
12-18`);
    expect(result[1]).toBe(`1
5
8
11
17
32`);
  });

  test("getFreshIngredientsList returns a list of unique ingredients from ranges", () => {
    const [freshIngredientSection] = splitInput(exampleInput);
    const result = getFreshIngredientsList(freshIngredientSection);
    expect(result).toContain("3");
    expect(result).toContain("4");
    expect(result).toContain("5");
    expect(result).toContain("10");
    expect(result).toContain("11");
    expect(result).toContain("12");
    expect(result).toContain("13");
    expect(result).toContain("14");
    expect(result).toContain("16");
    expect(result).toContain("17");
    expect(result).toContain("18");
    expect(result).toContain("19");
    expect(result).toContain("20");
    expect(result).toContain("15");

    expect(result).not.toContain("2");
    expect(result.length).toBe(14); // 3,4,5,10,11,12,13,14,15,16,17,18,19,20
  });

  test("can identify fresh ingredients from needed ingredients", () => {
    const [freshIngredientSection, neededIngredientSection] =
      splitInput(exampleInput);
    const freshIngredients = getFreshIngredientsList(freshIngredientSection);
    const neededIngredients = neededIngredientSection
      .split("\n")
      .map((line) => line.trim());

    const availableFreshIngredients = checkAvailableFreshIngredients(
      freshIngredients,
      neededIngredients
    );

    expect(availableFreshIngredients).toEqual(["5", "11", "17"]);
    expect(availableFreshIngredients).toHaveLength(3);
  });
});
