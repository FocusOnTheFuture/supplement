import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  buttonLabel: string = 'Ver todos os produtos';
  buttonTest: string = 'Teste';

  constructor(private router: Router) { }

  navegarParaOutraPagina() {
    // O parâmetro para navigate é a rota para a qual você deseja navegar
    this.router.navigate(['/about']);
  }
}


