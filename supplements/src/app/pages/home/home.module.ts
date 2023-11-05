import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { BoxCategoryComponent } from './box-category/box-category.component';



@NgModule({
  declarations: [
    HomeComponent,
    BoxCategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    BoxCategoryComponent
  ]
})
export class HomeModule { }
