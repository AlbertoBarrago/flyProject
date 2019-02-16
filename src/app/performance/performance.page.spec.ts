import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancePage } from './performance.page';

describe('PerformancePage', () => {
  let component: PerformancePage;
  let fixture: ComponentFixture<PerformancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
