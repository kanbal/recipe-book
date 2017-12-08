import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RecipeBookComponent } from './recipe-book.component';

@NgModule({
  declarations: [
    RecipeBookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RecipeBookComponent]
})
export class AppModule { }
