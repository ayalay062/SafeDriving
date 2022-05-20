import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActiveOffersComponent } from './view-active-offers.component';

describe('ViewActiveOffersComponent', () => {
  let component: ViewActiveOffersComponent;
  let fixture: ComponentFixture<ViewActiveOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewActiveOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActiveOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
