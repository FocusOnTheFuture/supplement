import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './pages/home/home.module'
import { FooterModule } from './pages/footer/footer.module';
import { MenubarModule } from './pages/menubar/menubar.module';

import { NutritionalTableModule } from './pages/nutritional-table/nutritional-table.module';

import { FormsModule } from './pages/forms/forms.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DefaultButtonComponent } from './pages/default-button/default-button.component';


import { BoxItemPriceComponent } from './pages/box-item-price/box-item-price.component';
import { BoxTotalPriceComponent } from './pages/box-total-price/box-total-price.component';


import { FullServicesComponent } from './pages/full-services/full-services.component';

import {CarrocelComponent} from './pages/carrocel/carrocel.component';
import { MenuHamburguerComponent } from './pages/menubar/menu-hamburguer/menu-hamburguer.component';
import { MenuHorizontalComponent } from './pages/menubar/menu-horizontal/menu-horizontal.component';
import { MenusearchComponent } from './pages/menubar/menusearch/menusearch.component';




@NgModule({
  declarations: [
    AppComponent,
    DefaultButtonComponent,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
