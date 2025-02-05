import { AfterViewInit, Component } from '@angular/core';
import * as Scrollreveal from 'scrollreveal';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    
    ScrollReveal().reveal('.presentation img', {
      duration: 1000,
      origin: 'top',
      distance: '100px',
      easing: 'ease-in-out',
      delay: 250
    });

    ScrollReveal().reveal('.cloud-data', {
      duration: 500,
      origin: 'left',
      distance: '50px',
      easing: 'ease-in-out',
      delay: 500
    });

    ScrollReveal().reveal('.content', {
      duration: 1000,
      origin: 'rigth',
      distance: '100px',
      easing: 'ease-in-out',
      delay: 750
    });

  }

}
