import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgCalendarComponent } from './ng-calendar.component';

describe('NgCalendarComponent', () => {
  let component: NgCalendarComponent;
  let fixture: ComponentFixture<NgCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
