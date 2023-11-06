import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionalTableComponent } from './nutritional-table.component';
import { TitleComponent } from './title/title.component';
import { PortionComponent } from './portion/portion.component';
import { TableComponent } from './table/table.component';
import { TableTitleComponent } from './table/table-title/table-title.component';
import { TableSubtitleComponent } from './table/table-subtitle/table-subtitle.component';
import { TableValuesComponent } from './table/table-values/table-values.component';
import { TableIngredientsComponent } from './table/table-ingredients/table-ingredients.component';
import { ButtonComponent } from './portion/button/button.component';
import { KcalComponent } from './table/table-values/kcal/kcal.component';




@NgModule({
  declarations: [
    NutritionalTableComponent,
    TitleComponent,
    PortionComponent,
    TableComponent,
    TableTitleComponent,
    TableSubtitleComponent,
    TableValuesComponent,
    TableIngredientsComponent,
    ButtonComponent,
    KcalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NutritionalTableComponent
  ]
})
export class NutritionalTableModule { }
