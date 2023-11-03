import { Component } from '@angular/core';

@Component({
  selector: 'app-carrocel',
  templateUrl: './carrocel.component.html',
  styleUrls: ['./carrocel.component.css']
})
export class CarrocelComponent {

  currentSlide = 0;

  goToSlide(n: number) {
    this.currentSlide = n;
    let carousel = document.querySelector('.carousel-inner');
    if (carousel) {
      carousel.style.transform = 'translateX(-' + (this.currentSlide * 100) + '%)';
    }

    let buttons = document.querySelectorAll('.carousel-indicators button');
    buttons.forEach((button, index) => {
      if (index === n) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

}