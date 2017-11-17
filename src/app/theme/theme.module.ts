import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaSliderMenuComponent } from './components/ba-slider-menu/ba-slider-menu.component';
import { BaTopMenuComponent } from './components/ba-top-menu/ba-top-menu.component';
import { FixedMenuDirective } from './fixed-menu.directive';
import { EventService } from '@theme/event.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BaSliderMenuComponent,
    BaTopMenuComponent,
    FixedMenuDirective
  ],
  exports: [
    BaSliderMenuComponent,
    BaTopMenuComponent
  ],
  providers: [
    EventService
  ]
})
export class ThemeModule { }
