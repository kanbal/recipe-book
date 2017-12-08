import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RecipeBookComponent } from './recipe-book.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';

@NgModule({
  declarations: [
    RecipeBookComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RecipeBookComponent]
})
export class AppModule { }
