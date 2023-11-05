import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { BoxCategoryComponent } from './box-category/box-category.component';
import { MarkCategoryComponent } from './mark-category/mark-category.component';



@NgModule({
  declarations: [
    HomeComponent,
    BoxCategoryComponent,
    MarkCategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
