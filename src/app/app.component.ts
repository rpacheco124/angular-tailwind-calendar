import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgCalendarComponent } from '@angular-tailwind-calendar/ng-calendar';
import { initFlowbite } from 'flowbite';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NgCalendarComponent],
  selector: 'angular-tailwind-calendar-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'angular-tailwind-calendar';

  
  ngOnInit(): void {
    initFlowbite();
  }

}
