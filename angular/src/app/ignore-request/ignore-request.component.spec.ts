import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnoreRequestComponent } from './ignore-request.component';

describe('IgnoreRequestComponent', () => {
  let component: IgnoreRequestComponent;
  let fixture: ComponentFixture<IgnoreRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgnoreRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgnoreRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
