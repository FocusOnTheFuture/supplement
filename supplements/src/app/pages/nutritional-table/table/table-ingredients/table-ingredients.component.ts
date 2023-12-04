import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-ingredients',
  templateUrl: './table-ingredients.component.html',
  styleUrls: ['./table-ingredients.component.css']
})
export class TableIngredientsComponent {
  @Input()
  labelTitle:string = '';

  @Input()
  labelDescription:string = '';

  @Input()
  labelAttention:string = '' ;

}
