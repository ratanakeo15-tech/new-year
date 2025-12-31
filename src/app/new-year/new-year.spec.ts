import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYear } from './new-year';

describe('NewYear', () => {
  let component: NewYear;
  let fixture: ComponentFixture<NewYear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewYear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewYear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
