import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbgComponent } from './aboutbg.component';

describe('AboutbgComponent', () => {
  let component: AboutbgComponent;
  let fixture: ComponentFixture<AboutbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
