import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkCategoryComponent } from '../home/mark-category/mark-category.component';
import { CarrocelComponent } from '../carrocel/carrocel.component';



@NgModule({
  declarations: [
    MarkCategoryComponent,
    CarrocelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageCartModule { }
