import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDataComponent } from './showMovies.component';

describe('MovieDataComponent', () => {
  let component: MovieDataComponent;
  let fixture: ComponentFixture<MovieDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
