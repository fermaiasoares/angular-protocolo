import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormPage } from './user-form.page';

describe('CreateUserComponent', () => {
  let component: UserFormPage;
  let fixture: ComponentFixture<UserFormPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
