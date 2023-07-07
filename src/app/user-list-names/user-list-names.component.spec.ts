import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListNamesComponent } from './user-list-names.component';

describe('UserListNamesComponent', () => {
  let component: UserListNamesComponent;
  let fixture: ComponentFixture<UserListNamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListNamesComponent]
    });
    fixture = TestBed.createComponent(UserListNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
