import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RecipeBookComponent } from './recipe-book.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';

@NgModule({
  declarations: [
    RecipeBookComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RecipeBookComponent]
})
export class AppModule { }
