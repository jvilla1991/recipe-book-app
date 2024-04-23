import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameContentInput: ElementRef;
  @ViewChild('amountInput') amountContentInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    this.shoppingListService.addIngredient(
      new Ingredient(this.nameContentInput.nativeElement.value,
        this.amountContentInput.nativeElement.value));
  }
}
