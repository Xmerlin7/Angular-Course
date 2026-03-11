import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComp } from './first-comp';

describe('FirstComp', () => {
  let component: FirstComp;
  let fixture: ComponentFixture<FirstComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstComp],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
