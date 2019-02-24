import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsibizionePage } from './esibizione.page';

describe('EsibizionePage', () => {
  let component: EsibizionePage;
  let fixture: ComponentFixture<EsibizionePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsibizionePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsibizionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
