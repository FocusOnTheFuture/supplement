import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { BoxCategoryComponent } from './box-category/box-category.component';
import { MarkCategoryComponent } from './mark-category/mark-category.component';
import { DefaultButtonModule } from '../default-button/default-button.module';




@NgModule({
  declarations: [
    HomeComponent,
    BoxCategoryComponent,
    MarkCategoryComponent,
  ],
  imports: [
    CommonModule,
    DefaultButtonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
