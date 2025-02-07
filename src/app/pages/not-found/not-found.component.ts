import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {

  ngOnInit(): void {
    ScrollReveal().reveal('.not-found-content img', {
      duration: 1000,
      origin: 'top',
      distance: '100px',
      easing: 'ease-in-out',
      delay: 250
    });

    ScrollReveal().reveal('.not-found-content h1', {
      duration: 1000,
      origin: 'bottom',
      distance: '100px',
      delay: 250
    });
  }

}
