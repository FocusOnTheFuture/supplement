import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-item-price',
  templateUrl: './box-item-price.component.html',
  styleUrls: ['./box-item-price.component.css']
})
export class BoxItemPriceComponent {
  @Input()
  labelTitle:string = '';

  @Input()
  labelPrice:string = '';

}
