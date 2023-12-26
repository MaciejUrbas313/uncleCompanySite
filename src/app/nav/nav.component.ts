import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isExpanded = false;

  colapse() {
    this.isExpanded = true;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    let navHeightValue;

    const navHeight = document.querySelector('.nav');
    navHeightValue = navHeight?.clientHeight;

    if (navHeightValue != undefined) {
      if (window.scrollY >= navHeightValue - 10) {
        document
          .querySelector('.navScrollToTop')
          ?.classList.add('navScrollToTop-active');
      } else {
        document
          .querySelector('.navScrollToTop')
          ?.classList.remove('navScrollToTop-active');
      }
    }
  }

  scrollToAbout() {
    let scrollHeight: number = 0;
    let heightHelper: any = 0;

    heightHelper = document.querySelector('.nav')?.clientHeight;
    if (heightHelper != undefined) {
      scrollHeight = heightHelper;
    }

    setTimeout(() => {
      this.isExpanded = !this.isExpanded;

      window.scroll({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 100);
  }
  scrollToOffer() {
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

    setTimeout(() => {
      this.isExpanded = !this.isExpanded;

      window.scroll({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 100);
  }
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
      this.isExpanded = !this.isExpanded;

      window.scroll({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }, 100);
  }

  scrollTop() {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 100);

    if (this.isExpanded == true) {
      this.isExpanded = !this.isExpanded;
    }
  }

  OnInit(): void {
    // const navScrollToTopButton = document.querySelector('navScrollToTop');
    // const appName = document.querySelector('.app');

    // appName?.addEventListener('scroll', this.addclassToNavScrollToTopButton);
  }
}
