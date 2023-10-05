import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Cajun Shrimp Alfredo', 'This Desciption', 'https://www.nutmegnanny.com/wp-content/uploads/2017/01/cajun-shrimp-fettuccine-alfredo-3.jpg'),
    new Recipe('Cajun Shrimpie Alfredo', 'Thisie Desciption', 'https://www.nutmegnanny.com/wp-content/uploads/2017/01/cajun-shrimp-fettuccine-alfredo-3.jpg')
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  selectRecipe(selectedRecipe: Recipe) {
    this.selectedRecipe.emit(selectedRecipe);
  }

}
