/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListComp2Component } from './listComp2.component';

describe('ListComp2Component', () => {
  let component: ListComp2Component;
  let fixture: ComponentFixture<ListComp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
