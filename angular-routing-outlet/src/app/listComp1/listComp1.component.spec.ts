/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListComp1Component } from './listComp1.component';

describe('ListComp1Component', () => {
  let component: ListComp1Component;
  let fixture: ComponentFixture<ListComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
