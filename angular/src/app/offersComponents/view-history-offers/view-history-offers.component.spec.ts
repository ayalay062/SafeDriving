import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoryOffersComponent } from './view-history-offers.component';

describe('ViewHistoryOffersComponent', () => {
  let component: ViewHistoryOffersComponent;
  let fixture: ComponentFixture<ViewHistoryOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHistoryOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoryOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
