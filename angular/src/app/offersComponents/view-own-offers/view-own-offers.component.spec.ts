import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOwnOffersComponent } from './view-own-offers.component';

describe('ViewOwnOffersComponent', () => {
  let component: ViewOwnOffersComponent;
  let fixture: ComponentFixture<ViewOwnOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOwnOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOwnOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
