import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RecipeBookComponent } from './recipe-book.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    RecipeBookComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RecipeBookComponent]
})
export class AppModule { }
