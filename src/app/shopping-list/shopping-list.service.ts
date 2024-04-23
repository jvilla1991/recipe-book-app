import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 2),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => {
      const ingredientIndex = this.ingredients.findIndex(
        (existingIngredient) => existingIngredient.name === ingredient.name
      );

      if (ingredientIndex !== -1) {
        this.ingredients[ingredientIndex].amount += ingredient.amount;
      } else {
        this.ingredients.push(ingredient);
      }
    });
    this.ingredientChanged.emit(this.ingredients.slice());
  }

}
