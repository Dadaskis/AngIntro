import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListFullComponent } from './user-list-full.component';

describe('UserListFullComponent', () => {
  let component: UserListFullComponent;
  let fixture: ComponentFixture<UserListFullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListFullComponent]
    });
    fixture = TestBed.createComponent(UserListFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
