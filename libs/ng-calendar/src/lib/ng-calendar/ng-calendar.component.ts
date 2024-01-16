import { Component } from '@angular/core';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';

@Component({
  selector: 'ng-angular-tailwind-calendar-ng-calendar',
  standalone: true,
  imports: [CalendarHeaderComponent],
  host: {
    class: 'lg:min-h-96'
  },
  template: `
    <div class="lg:flex lg:flex-col lg:h-full">
      <ng-calendar-header></ng-calendar-header>
    </div>
  `
})
export class NgCalendarComponent {}
