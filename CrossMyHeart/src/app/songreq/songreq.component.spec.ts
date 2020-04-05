import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongreqComponent } from './songreq.component';

describe('SongreqComponent', () => {
  let component: SongreqComponent;
  let fixture: ComponentFixture<SongreqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongreqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
