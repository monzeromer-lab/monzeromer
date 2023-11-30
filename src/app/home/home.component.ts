import { Component } from '@angular/core';
import { CommonModule, provideImgixLoader } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MobileNavComponent } from '../components/mobile-nav/mobile-nav.component';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, MobileNavComponent, RouterModule, NgOptimizedImage],
  providers: [
    provideImgixLoader('https://monzeromer.vercel.app/'),
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
