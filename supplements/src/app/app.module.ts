import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './pages/home/home.module'
import { MenubarModule } from './pages/menubar/menubar.module';
import { DefaultButtonModule } from './pages/default-button/default-button.module';


import { NutritionalTableModule } from './pages/nutritional-table/nutritional-table.module';

import { FormsModule } from './pages/forms/forms.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BoxTotalPriceModule } from './pages/box-total-price/box-total-price.module';
import { PageWishListComponent } from './pages/page-wish-list/page-wish-list.component';
import { FooterModule } from './pages/footer/footer.module';








@NgModule({
  declarations: [
    AppComponent,
    PageWishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,  
    MenubarModule,
    NutritionalTableModule,
    FormsModule,
    DefaultButtonModule,
    BoxTotalPriceModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
