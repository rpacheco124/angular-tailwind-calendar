import { Component } from '@angular/core';

@Component({
  selector: 'ng-calendar-header',
  standalone: true,
  imports: [],
  template: `
    <header class="lg:flex-none py-4 px-6 border-b justify-between items-center flex bg-gray-50 border-gray-200">
      <h1 class="leading-6 font-semibold text-base">January 2022</h1>
      <div class="flex items-center">
        <div class="lg:items-stretch shadow-sm bg-white rounded-md flex relative items-center">
          <button type="button" class="lg:pr-0 lg:w-9 text-gray-400 pr-1 border-gray-300 border-l border-y rounded-l-md justify-center items-center w-12 h-9 flex hover:bg-gray-50 hover:text-gray-500 focus:relative">
            <!-- <span class="t">Previous month</span> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5"><path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd"></path></svg>
          </button>
          <button type="button" class="md:block text-gray-900 font-semibold text-sm px-3.5 border-gray-300 border-y hidden hover:bg-gray-50 focus:relative">Today</button>
          <span class="ab gg nz to aik cli"></span>
          <button type="button" class="lg:pr-0 lg:w-9 text-gray-400 pr-1 border-gray-300 border-r border-y rounded-r-md justify-center items-center w-12 h-9 flex hover:bg-gray-50 hover:text-gray-500 focus:relative">
            <!-- <span class="t">Next month</span> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
        <div class="md:items-center md:flex md:ml-4 hidden">
          <div class="relative">
            <select id="calendar-view" class="ring-gray-300 ring-inset shadow-sm text-gray-900 font-semibold text-sm py-2 px-3 bg-white border-2 rounded-md gap-x-1.5 items-center flex">
              <option>Day view</option>
              <option>Week view</option>
              <option>Month view</option>
              <option>Year view</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  `
})
export class CalendarHeaderComponent {}
