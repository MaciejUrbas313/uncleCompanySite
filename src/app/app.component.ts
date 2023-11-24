import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { NavComponent } from "./nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, AboutComponent, NavComponent]
})
export class AppComponent {
  title = 'uncleCompanySite';
}
