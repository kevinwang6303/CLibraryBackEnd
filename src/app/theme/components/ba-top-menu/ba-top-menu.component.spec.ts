import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaTopMenuComponent } from './ba-top-menu.component';

describe('BaTopMenuComponent', () => {
  let component: BaTopMenuComponent;
  let fixture: ComponentFixture<BaTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
