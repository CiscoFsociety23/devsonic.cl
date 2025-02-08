import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as Scrollreveal from 'scrollreveal';

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.css'
})
export class BasicLayoutComponent implements OnInit {

  ngOnInit(): void {
    ScrollReveal().reveal('.navigation-title', {
      duration: 500,
      origin: 'top',
      distance: '200px',
      easing: 'ease-in-out',
      delay: 1750
    });

    ScrollReveal().reveal('.navigation-items', {
      duration: 500,
      origin: 'top',
      distance: '200px',
      easing: 'ease-in-out',
      delay: 2000
    });

    ScrollReveal().reveal('.navigation-btn', {
      duration: 500,
      origin: 'top',
      distance: '200px',
      easing: 'ease-in-out',
      delay: 2000
    });
  }

  public toggleNavigationDropdown = (): void => {
    document.querySelector('.navigation-dropdown')?.classList.toggle('open');
    const iconElement = document.querySelector(".navigation-btn i.fa-solid");
    if (iconElement) {
      if (iconElement.classList.contains("fa-bars")) {
        iconElement.classList.remove("fa-bars");
        iconElement.classList.add("fa-x");
      } else {
        iconElement.classList.remove("fa-x");
        iconElement.classList.add("fa-bars");
      };
    };
  };

}
