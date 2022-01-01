import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaShowsComponent } from './idea-shows.component';

describe('IdeaShowsComponent', () => {
  let component: IdeaShowsComponent;
  let fixture: ComponentFixture<IdeaShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
