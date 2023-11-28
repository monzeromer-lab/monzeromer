import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('typingAnimation', [
      state('start', style({ width: '0' })),
      state('end', style({ width: '100%' })),
      transition('start => end', animate('1s steps(20, end)'))
    ])
  ],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent {

  animationState: string = 'start';

  ngOnInit() {
    // Trigger the animation after a short delay (adjust as needed)
    setTimeout(() => {
      this.animationState = 'end';
    }, 500);
  }

  

}
