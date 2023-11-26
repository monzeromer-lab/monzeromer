import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, SplashComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeOut', [
      transition(':leave', animate('500ms ease-out', style({ opacity: 0 }))) // Adjust the duration as needed
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'monzeromer';

  isLoading: boolean = true;
  splashVisible: boolean = false;


  ngOnInit() {
    // Simulate an asynchronous operation (e.g., API call or initialization)
    setTimeout(() => {
      this.splashVisible = true;
      this.isLoading = false;
    }, 5000); // Adjust the duration as needed
  }


}
