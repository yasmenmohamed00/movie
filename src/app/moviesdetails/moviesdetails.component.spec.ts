import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesdetailsComponent } from './moviesdetails.component';

describe('MoviesdetailsComponent', () => {
  let component: MoviesdetailsComponent;
  let fixture: ComponentFixture<MoviesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
