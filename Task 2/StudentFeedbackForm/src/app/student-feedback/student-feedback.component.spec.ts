import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeedbackComponent } from './student-feedback.component';

describe('StudentFeedbackComponent', () => {
  let component: StudentFeedbackComponent;
  let fixture: ComponentFixture<StudentFeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentFeedbackComponent]
    });
    fixture = TestBed.createComponent(StudentFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
