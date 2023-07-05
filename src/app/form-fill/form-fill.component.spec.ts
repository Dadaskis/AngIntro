import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFillComponent } from './form-fill.component';

describe('FormFillComponent', () => {
  let component: FormFillComponent;
  let fixture: ComponentFixture<FormFillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFillComponent]
    });
    fixture = TestBed.createComponent(FormFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
