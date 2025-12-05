import * as fs from "fs";
import {
  checkAvailableFreshIngredients,
  getFreshIngredientsList,
  splitInput,
} from "./day05";

const input = fs.readFileSync("src/day05/input.txt", "utf-8");
const [freshIngredientSection, neededIngredientSection] = splitInput(input);

console.log("Split Inputs");

const freshIngredientsList = getFreshIngredientsList(freshIngredientSection);
console.log("Got Fresh Ingredients List:", freshIngredientsList.length);

const neededIngredients = neededIngredientSection.split("\n");
console.log("Got Needed Ingredients List:", neededIngredients.length);

const availableFreshIngredients = checkAvailableFreshIngredients(
  freshIngredientsList,
  neededIngredients
);

console.log("Available Fresh Ingredients:", availableFreshIngredients.length);
