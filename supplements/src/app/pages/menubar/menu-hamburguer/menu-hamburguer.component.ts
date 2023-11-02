import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-hamburguer',
  templateUrl: './menu-hamburguer.component.html',
  styleUrls: ['./menu-hamburguer.component.css']
})
export class MenuHamburguerComponent {
  isHidden: boolean = true;

  toggleList() {
    this.isHidden = !this.isHidden;
  }
}
