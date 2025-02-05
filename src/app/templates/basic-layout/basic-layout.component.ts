import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.css'
})
export class BasicLayoutComponent {

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
