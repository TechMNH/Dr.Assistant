import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSigninComponent } from './patient-signin.component';

describe('PatientSigninComponent', () => {
  let component: PatientSigninComponent;
  let fixture: ComponentFixture<PatientSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
