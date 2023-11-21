import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWishListComponent } from './pages/page-wish-list/page-wish-list.component';
import { HomeComponent } from './pages/home/home.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageSignupComponent } from './pages/page-signup/page-signup.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { CheckoutComponent } from './pages/forms/checkout/checkout.component';
import { PageCheckoutComponent } from './pages/page-checkout/page-checkout.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'wishlist', component: PageWishListComponent},
  {path: 'about', component: PageAboutComponent},
  {path: 'signup', component: PageSignupComponent},
  {path: 'login', component: PageLoginComponent},
  {path: 'payment', component: PageCheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
