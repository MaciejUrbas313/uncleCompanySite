import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {
  constructor() {}
}
