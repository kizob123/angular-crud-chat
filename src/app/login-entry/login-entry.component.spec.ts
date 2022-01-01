import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEntryComponent } from './login-entry.component';

describe('LoginEntryComponent', () => {
  let component: LoginEntryComponent;
  let fixture: ComponentFixture<LoginEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
