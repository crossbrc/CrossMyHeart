import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutbpComponent } from './aboutbp.component';

describe('AboutbpComponent', () => {
  let component: AboutbpComponent;
  let fixture: ComponentFixture<AboutbpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutbpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
