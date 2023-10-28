import { Recipe } from "./recipes.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Cajun Shrimp Alfredo', 'This Desciption', 'https://www.nutmegnanny.com/wp-content/uploads/2017/01/cajun-shrimp-fettuccine-alfredo-3.jpg'),
    new Recipe('Cajun Shrimpie Alfredo', 'Thisie Desciption', 'https://www.nutmegnanny.com/wp-content/uploads/2017/01/cajun-shrimp-fettuccine-alfredo-3.jpg')
  ];

  getRecipes() {
    // Returning slice with no arguments returns an copy of the recipes array and not the array itself
    return this.recipes.slice();
  }

}
