import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar.component';
import { MenuHamburguerComponent } from './menu-hamburguer/menu-hamburguer.component';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';
import { MenusearchComponent } from './menusearch/menusearch.component';


@NgModule({
  declarations: [
    MenubarComponent,
    MenuHamburguerComponent,
    MenuHorizontalComponent,
    MenusearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenubarComponent
  ]
})
export class MenubarModule { }
