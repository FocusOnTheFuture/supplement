import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './pages/home/home.module'
import { FooterModule } from './pages/footer/footer.module';
import { MenubarModule } from './pages/menubar/menubar.module';
import { DefaultButtonModule } from './pages/default-button/default-button.module';


import { NutritionalTableModule } from './pages/nutritional-table/nutritional-table.module';

import { FormsModule } from './pages/forms/forms.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BoxItemPriceComponent } from './pages/box-item-price/box-item-price.component';
import { BoxTotalPriceComponent } from './pages/box-total-price/box-total-price.component';


import { FullServicesComponent } from './pages/full-services/full-services.component';

import {CarrocelComponent} from './pages/carrocel/carrocel.component';






@NgModule({
  declarations: [
    AppComponent,
    BoxItemPriceComponent,
    BoxTotalPriceComponent,
    FullServicesComponent,
    CarrocelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,  
    MenubarModule,
    FooterModule,
    NutritionalTableModule,
    FormsModule,
    DefaultButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
