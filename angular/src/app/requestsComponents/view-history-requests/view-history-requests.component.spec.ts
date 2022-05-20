import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoryRequestsComponent } from './view-history-requests.component';

describe('ViewHistoryRequestsComponent', () => {
  let component: ViewHistoryRequestsComponent;
  let fixture: ComponentFixture<ViewHistoryRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHistoryRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoryRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
