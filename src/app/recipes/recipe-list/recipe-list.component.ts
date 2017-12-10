import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe: Recipe = new Recipe('Dummy', 'Dummy', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8teJxJAs1rMG1fqFqyVROFdsdJ6UuJBF7VNej5UB9vmSsPEnBQ');
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
