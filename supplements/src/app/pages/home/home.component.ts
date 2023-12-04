import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  allProducts: string = 'Ver todos os produtos';

  constructor(private router: Router) { }

  navegarParaOutraPagina() {
    this.router.navigate(['/login']);
  }
}


