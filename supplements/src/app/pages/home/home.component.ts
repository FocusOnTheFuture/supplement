import { Component } from '@angular/core';
import { DefaultButtonComponent } from '../default-button/default-button.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  buttonLabel: string = 'Ver todos os produtos';
  buttonTest: string = 'Teste';
}


