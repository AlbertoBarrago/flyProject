import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgettoPage } from './progetto.page';

describe('ProgettoPage', () => {
  let component: ProgettoPage;
  let fixture: ComponentFixture<ProgettoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgettoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgettoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
