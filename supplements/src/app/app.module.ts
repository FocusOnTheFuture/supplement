import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuHorizontalComponent } from './pages/menubar/menu-horizontal/menu-horizontal.component';
import {MenuHamburguerComponent} from './pages/menubar/menu-hamburguer/menu-hamburguer.component'
import { MenubarComponent } from './pages/menubar/menubar.component'

import { HomeComponent } from './pages/home/home.component';

import { DefaultButtonComponent } from './pages/default-button/default-button.component';

import { BoxCategoryComponent } from './pages/home/box-category/box-category.component';

import { BoxItemPriceComponent } from './pages/box-item-price/box-item-price.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuHorizontalComponent,
    MenuHamburguerComponent,
    MenubarComponent,
    HomeComponent,
    DefaultButtonComponent,
    BoxCategoryComponent,
    BoxItemPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
