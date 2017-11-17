import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaSliderMenuComponent } from './ba-slider-menu.component';

describe('BaSliderMenuComponent', () => {
  let component: BaSliderMenuComponent;
  let fixture: ComponentFixture<BaSliderMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaSliderMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaSliderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
