import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApdateofferComponent } from './apdate-offer.component';

describe('ApdateofferComponent', () => {
  let component: ApdateofferComponent;
  let fixture: ComponentFixture<ApdateofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApdateofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApdateofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
