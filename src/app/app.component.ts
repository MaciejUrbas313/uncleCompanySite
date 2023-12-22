import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NavComponent } from "./nav/nav.component";
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';


// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      CommonModule,
      RouterOutlet,
      AboutComponent,
      NavComponent,
      OfferComponent,
      ContactComponent
    ],
})
export class AppComponent {
  title = 'uncleCompanySite';
}
