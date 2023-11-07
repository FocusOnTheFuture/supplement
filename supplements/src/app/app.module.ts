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


import { FullServicesComponent } from './pages/full-services/full-services.component';

import { BoxTotalPriceModule } from './pages/box-total-price/box-total-price.module';








@NgModule({
  declarations: [
    AppComponent,
    FullServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,  
    MenubarModule,
    FooterModule,
    NutritionalTableModule,
    FormsModule,
    DefaultButtonModule,
    BoxTotalPriceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
