import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-category',
  templateUrl: './box-category.component.html',
  styleUrls: ['./box-category.component.css']
})
export class BoxCategoryComponent {
  @Input()
  imgCover: string = "";

  @Input()
  label: string = '';

    
  constructor(private router: Router) { }

  navegarParaOutraPagina() {
    this.router.navigate(['/wishlist']);
  }
}
