import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(private router: Router) { }

  navegarParaOutraPagina() {
    this.router.navigate(['/account']);
  }
  
}
