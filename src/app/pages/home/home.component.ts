import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    ScrollReveal().reveal('.home-showcase h1', {
      duration: 1000,
      origin: 'top',
      distance: '150px',
      easing: 'ease-in-out',
      delay: 250
    });

    ScrollReveal().reveal('.home-showcase h4', {
      duration: 500,
      origin: 'top',
      distance: '125px',
      easing: 'ease-in-out',
      delay: 1250
    });

    ScrollReveal().reveal('.home-showcase hr', {
      duration: 750,
      origin: 'left',
      distance: '500px',
      delay: 2000
    });

    ScrollReveal().reveal('.home-showcase h2', {
      duration: 750,
      origin: 'bottom',
      distance: '50px',
      delay: 3000
    });

    ScrollReveal().reveal('.home-showcase h3', {
      duration: 1000,
      origin: 'bottom',
      distance: '100px',
      delay: 2750
    });

    setTimeout(() => { document.querySelector(".name")?.classList.add("name-active") }, 2000);

  }

}
