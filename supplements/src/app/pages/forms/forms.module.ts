import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';



@NgModule({
  declarations: [
    FormsComponent,
    CheckoutComponent,
    AccountComponent,
    LoginComponent,
    CreateaccountComponent,
  ],
  imports: [
    CommonModule,
  ]
  ,exports: [FormsComponent]
})
export class FormsModule { }
