import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActiveRequestsComponent } from './view-active-requests.component';

describe('ViewActiveRequestsComponent', () => {
  let component: ViewActiveRequestsComponent;
  let fixture: ComponentFixture<ViewActiveRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewActiveRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActiveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
