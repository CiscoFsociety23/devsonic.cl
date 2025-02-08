import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-photography',
  standalone: true,
  imports: [],
  templateUrl: './photography.component.html',
  styleUrl: './photography.component.css'
})
export class PhotographyComponent implements OnInit {

  ngOnInit(): void {
    ScrollReveal().reveal('.photography-content article h1', {
      duration: 1000,
      origin: 'top',
      distance: '100px',
      delay: 500
    });

    ScrollReveal().reveal('.photographys', {
      duration: 1000,
      origin: 'bottom',
      distance: '100px',
      delay: 1000
    });
  }

  private SantaLucia01: string = 'assets/santa-lucia/SantaLucia-01.jpg';
  private SantaLucia02: string = 'assets/santa-lucia/SantaLucia-02.jpg';
  private SantaLucia03: string = 'assets/santa-lucia/SantaLucia-03.jpg';
  private SantaLucia04: string = 'assets/santa-lucia/SantaLucia-04.jpg';
  private SantaLucia05: string = 'assets/santa-lucia/SantaLucia-05.jpg';
  private SantaLucia06: string = 'assets/santa-lucia/SantaLucia-06.jpg';
  private SantaLucia07: string = 'assets/santa-lucia/SantaLucia-07.jpg';
  private SantaLucia08: string = 'assets/santa-lucia/SantaLucia-08.jpg';
  private SantaLucia09: string = 'assets/santa-lucia/SantaLucia-09.jpg';
  private SantaLucia10: string = 'assets/santa-lucia/SantaLucia-10.jpg';
  private SantaLucia11: string = 'assets/santa-lucia/SantaLucia-11.jpg';
  private SantaLucia12: string = 'assets/santa-lucia/SantaLucia-12.jpg';

  public SantaLuciaPhotos = [
    this.SantaLucia01, this.SantaLucia02, this.SantaLucia03, 
    this.SantaLucia04, this.SantaLucia05, this.SantaLucia06, 
    this.SantaLucia07, this.SantaLucia08, this.SantaLucia09,
    this.SantaLucia10, this.SantaLucia11, this.SantaLucia12
  ];

}
