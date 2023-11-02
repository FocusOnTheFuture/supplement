import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MenuHamburguerComponent} from './pages/menubar/menu-hamburguer/menu-hamburguer.component'
import { MenubarComponent } from './pages/menubar/menubar.component'
import { HomeComponent } from './pages/home/home.component';

import { DefaultButtonComponent } from './pages/default-button/default-button.component';

import { BoxCategoryComponent } from './pages/home/box-category/box-category.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuHamburguerComponent,
    MenubarComponent,
    HomeComponent,
    DefaultButtonComponent,
    BoxCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
