import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGrootComponent } from './ng-groot.component';

describe('NgGrootComponent', () => {
  let component: NgGrootComponent;
  let fixture: ComponentFixture<NgGrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
