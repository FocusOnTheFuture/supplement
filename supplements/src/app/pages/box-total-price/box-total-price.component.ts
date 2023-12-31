import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-total-price',
  templateUrl: './box-total-price.component.html',
  styleUrls: ['./box-total-price.component.css']
})
export class BoxTotalPriceComponent {
  @Input()
  labelSubtotal:string = '';

  @Input()
  labelTotal:string = '';

  @Input()
  Cart: string = '';

  constructor(private router: Router) { }

  navegarParaOutraPagina() {
    this.router.navigate(['/payment']);
  }
}
