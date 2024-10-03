import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchdetailsComponent } from './batchdetails.component';

describe('BatchdetailsComponent', () => {
  let component: BatchdetailsComponent;
  let fixture: ComponentFixture<BatchdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatchdetailsComponent]
    });
    fixture = TestBed.createComponent(BatchdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
