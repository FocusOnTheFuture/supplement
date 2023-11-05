import { Component } from '@angular/core';

@Component({
  selector: 'app-carrocel',
  templateUrl: './carrocel.component.html',
  styleUrls: ['./carrocel.component.css']
})
export class CarrocelComponent {
  slideIndex = 0;

  showSlides() {
    const slides = document.getElementsByClassName("carousel-item") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "block"; // Alterado para 'block' para exibir todos os slides
    }
  }

  prevSlide() {
    const slides = document.getElementsByClassName("carousel-item") as HTMLCollectionOf<HTMLElement>;
    this.slideIndex = (this.slideIndex - 1 + slides.length) % slides.length;
    this.showSlides();
  }

  nextSlide() {
    const slides = document.getElementsByClassName("carousel-item") as HTMLCollectionOf<HTMLElement>;
    this.slideIndex = (this.slideIndex + 1) % slides.length;
    this.showSlides();
  }

  ngAfterViewInit() {
    this.showSlides();
  }
}
