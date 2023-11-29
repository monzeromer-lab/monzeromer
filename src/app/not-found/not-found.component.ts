import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MobileNavComponent } from '../components/mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MobileNavComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
