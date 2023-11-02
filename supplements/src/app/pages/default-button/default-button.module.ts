import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultButtonComponent } from './default-button.component';



@NgModule({
  declarations: [
    DefaultButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultButtonComponent
  ]
})
export class DefaultButtonModule { }
