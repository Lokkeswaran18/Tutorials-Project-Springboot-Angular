import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutDetUserComponent } from './tut-det-user.component';

describe('TutDetUserComponent', () => {
  let component: TutDetUserComponent;
  let fixture: ComponentFixture<TutDetUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutDetUserComponent]
    });
    fixture = TestBed.createComponent(TutDetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
