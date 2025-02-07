import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    
    ScrollReveal().reveal('.data-img img', {
      duration: 1000,
      origin: 'top',
      distance: '150px',
      easing: 'ease-in-out',
      delay: 250
    });

    ScrollReveal().reveal('.data-img h1, .data-img h2', {
      duration: 750,
      origin: 'top',
      distance: '50px',
      easing: 'ease-in-out',
      delay: 500
    });

    ScrollReveal().reveal('.special-content', {
      duration: 500,
      origin: 'rigth',
      distance: '150px',
      easing: 'ease-in-out',
      delay: 500
    });

    ScrollReveal().reveal('.cloud-data', {
      duration: 750,
      origin: 'left',
      distance: '150px',
      easing: 'ease-in-out',
      delay: 500
    });

    ScrollReveal().reveal('.content', {
      duration: 750,
      origin: 'bottom',
      distance: '150px',
      easing: 'ease-in-out',
      delay: 250
    });

  }

}
