import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipes.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Cajun Shrimp Alfredo', 'This Desciption', 'https://www.nutmegnanny.com/wp-content/uploads/2017/01/cajun-shrimp-fettuccine-alfredo-3.jpg', [new Ingredient('Shirimp', 3), new Ingredient('Carbs', 300)]),
    new Recipe('Cajun Shrimpie Alfredo', 'Thisie Desciption', 'https://www.nutmegnanny.com/wp-content/uploads/2017/01/cajun-shrimp-fettuccine-alfredo-3.jpg', [new Ingredient('Shirimp', 2), new Ingredient('Carbs', 0.5)])
  ];

  selectedRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    // Returning slice with no arguments returns an copy of the recipes array and not the array itself
    return this.recipes.slice();
  }

}
