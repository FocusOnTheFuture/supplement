import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './pages/home/home.module'
import { MenubarModule } from './pages/menubar/menubar.module';
import { DefaultButtonModule } from './pages/default-button/default-button.module';
import { RouterModule } from '@angular/router';


import { NutritionalTableModule } from './pages/nutritional-table/nutritional-table.module';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BoxTotalPriceModule } from './pages/box-total-price/box-total-price.module';
import { PageWishListComponent } from './pages/page-wish-list/page-wish-list.component';
import { FooterModule } from './pages/footer/footer.module';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { FullServicesModule } from './pages/full-services/full-services.module';
import { BoxItemPriceModule } from './pages/box-item-price/box-item-price.module';
import { PageSignupComponent } from './pages/page-signup/page-signup.component';
import { CreateaccountComponent } from './pages/forms/createaccount/createaccount.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginComponent } from './pages/forms/login/login.component';
import { CheckoutComponent } from './pages/forms/checkout/checkout.component';
import { PageCheckoutComponent } from './pages/page-checkout/page-checkout.component';
import { PageAccountComponent } from './pages/page-account/page-account.component';
import { AccountComponent } from './pages/forms/account/account.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';












@NgModule({
  declarations: [
    AppComponent,
    PageWishListComponent,
    PageAboutComponent,
    PageSignupComponent,
    CreateaccountComponent,
    PageLoginComponent,
    LoginComponent,
    CheckoutComponent,
    PageCheckoutComponent,
    PageAccountComponent,
    AccountComponent,
    PageErrorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,  
    MenubarModule,
    NutritionalTableModule,
    DefaultButtonModule,
    BoxTotalPriceModule,
    FooterModule,
    FullServicesModule,
    BoxItemPriceModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
