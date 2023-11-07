import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxTotalPriceComponent } from './box-total-price.component';
import { DefaultButtonModule } from '../default-button/default-button.module';



@NgModule({
  declarations: [
    BoxTotalPriceComponent,
  ],
  imports: [
    CommonModule,
    DefaultButtonModule
  ],
  exports: [
    BoxTotalPriceComponent
  ]
})
export class BoxTotalPriceModule { }
