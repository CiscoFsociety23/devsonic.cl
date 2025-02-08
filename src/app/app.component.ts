import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { BasicLayoutComponent } from '@templates/basic-layout/basic-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BasicLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  
  ngOnInit(): void {
      injectSpeedInsights();
  }

}
