import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHappensComponent } from './new-happens.component';

describe('NewHappensComponent', () => {
  let component: NewHappensComponent;
  let fixture: ComponentFixture<NewHappensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHappensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHappensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
