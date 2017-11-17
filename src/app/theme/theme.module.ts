import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaSliderMenuComponent } from './components/ba-slider-menu/ba-slider-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BaSliderMenuComponent
  ],
  exports: [
    BaSliderMenuComponent
  ]
})
export class ThemeModule { }
