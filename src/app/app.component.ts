import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NgCalendarComponent } from '@angular-tailwind-calendar/ng-calendar';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NgCalendarComponent],
  selector: 'angular-tailwind-calendar-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tailwind-calendar';
}
