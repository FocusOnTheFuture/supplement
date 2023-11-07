import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { BoxCategoryComponent } from './box-category/box-category.component';
import { MarkCategoryComponent } from './mark-category/mark-category.component';
import { DefaultButtonModule } from '../default-button/default-button.module';
import { BoxTotalPriceModule } from '../box-total-price/box-total-price.module';
import { CarrocelComponent } from '../carrocel/carrocel.component';


import { BoxItemPriceComponent } from '../box-item-price/box-item-price.component';
import { FullServicesModule } from '../full-services/full-services.module';
import { FooterModule } from '../footer/footer.module';




@NgModule({
  declarations: [
    HomeComponent,
    BoxCategoryComponent,
    MarkCategoryComponent,
    CarrocelComponent,
    BoxItemPriceComponent
  ],
  imports: [
    CommonModule,
    DefaultButtonModule,
    BoxTotalPriceModule,
    FullServicesModule,
    FooterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
