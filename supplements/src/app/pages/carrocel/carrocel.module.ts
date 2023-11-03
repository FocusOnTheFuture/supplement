import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrocelComponent } from './carrocel.component';
import {BoxItemPriceComponent} from '../box-item-price/box-item-price.component';


@NgModule({
  declarations: [
    CarrocelComponent,
    BoxItemPriceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarrocelModule { }
