import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameContentInput: ElementRef;
  @ViewChild('amountInput') amountContentInput: ElementRef;

  @Output() ingredientAddedEvent = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    this.ingredientAddedEvent.emit(new Ingredient(
      this.nameContentInput.nativeElement.value,
      this.amountContentInput.nativeElement.value
    ));
  }
}
