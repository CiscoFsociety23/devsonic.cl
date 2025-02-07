import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit {

  ngOnInit(): void {

      ScrollReveal().reveal('.intro-content h1', {
        duration: 1000,
        origin: 'top',
        distance: '100px',
        delay: 250
      });

      ScrollReveal().reveal('.intro-content span', { delay: 3000 });
      
      ScrollReveal().reveal('.home-mix-01', {
        duration: 2000,
        origin: 'bottom',
        distance: '250px',
        delay: 500
      });

      ScrollReveal().reveal('.home-mix-01-data', {
        duration: 2000,
        origin: 'bottom',
        distance: '225px',
        delay: 750
      });
      
      ScrollReveal().reveal('.hardstyle-set', {
        duration: 2000,
        origin: 'bottom',
        distance: '200px',
        delay: 1250
      });
      
      ScrollReveal().reveal('.hardstyle-set-data', {
        duration: 2000,
        origin: 'bottom',
        distance: '175px',
        delay: 1500
      });
      
      ScrollReveal().reveal('.mix-session-02', {
        duration: 2000,
        origin: 'bottom',
        distance: '175px',
        delay: 1000
      });

      ScrollReveal().reveal('.mix-session-02-data', {
        duration: 2000,
        origin: 'bottom',
        distance: '150px',
        delay: 1250
      });


  }

}
