import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarComponent } from './pages/menubar/menubar.component'
import { HomeComponent } from './pages/home/home.component';

import { DefaultButtonComponent } from './pages/default-button/default-button.component';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    DefaultButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
