import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  scrollToContact() {
    let scrollHeight: number = 0;
    let heightHelper: any = 0;

    heightHelper = document.querySelector('.nav')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = heightHelper;
    }
    heightHelper = document.querySelector('.about')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }
    heightHelper = document.querySelector('.offer')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = scrollHeight + heightHelper;
    }

    setTimeout(() => {
      window.scroll({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 100);
  }
}
