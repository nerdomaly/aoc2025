export const splitInput = (input: string): string[] => {
  return input.split("\n\n");
};

class VirtualIngredientsList {
  private ranges: { min: number; max: number }[];
  public length: number;

  constructor(input: string) {
    const ranges = input
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map((line) => {
        const [min, max] = line.split("-").map(Number);
        return { min, max };
      });

    ranges.sort((a, b) => a.min - b.min);
    const merged: { min: number; max: number }[] = [];
    for (const r of ranges) {
      if (merged.length === 0) {
        merged.push({ ...r });
      } else {
        const last = merged[merged.length - 1];
        // If overlapping or adjacent (e.g. 3-5 and 6-8 can be 3-8)
        if (r.min <= last.max + 1) {
          last.max = Math.max(last.max, r.max);
        } else {
          merged.push({ ...r });
        }
      }
    }
    this.ranges = merged;
    this.length = merged.reduce((acc, r) => acc + (r.max - r.min + 1), 0);
  }

  includes(item: string): boolean {
    const num = Number(item);
    return this.ranges.some((r) => num >= r.min && num <= r.max);
  }

  *[Symbol.iterator]() {
    for (const r of this.ranges) {
      for (let i = r.min; i <= r.max; i++) {
        yield i.toString();
      }
    }
  }
}

export const getFreshIngredientsList = (
  input: string
): VirtualIngredientsList => {
  return new VirtualIngredientsList(input);
};

export const checkAvailableFreshIngredients = (
  freshIngredients: VirtualIngredientsList,
  neededIngredients: string[]
): string[] => {
  return neededIngredients.filter((ingredient) =>
    freshIngredients.includes(ingredient)
  );
};
