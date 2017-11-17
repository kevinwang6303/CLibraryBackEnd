import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

export const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';

@Component({
  selector: 'app-ba-slider-menu',
  templateUrl: './ba-slider-menu.component.html',
  styleUrls: ['./ba-slider-menu.component.scss'],
  animations: [
    trigger('bodyExpansion', [
      transition('void => *', [
        style({
          height: 0
        }),
        animate(EXPANSION_PANEL_ANIMATION_TIMING)
      ]),
      transition('* => void', [
        animate(EXPANSION_PANEL_ANIMATION_TIMING, style({
          height: 0
        }))
      ]),
    ]),
    trigger('transMenu', [
      state('show', style({ transform: 'translateX(0%)' })),
      state('hide', style({ transform: 'translateX(-100%)' })),
      transition('show <=> hide', animate(EXPANSION_PANEL_ANIMATION_TIMING))
    ])
  ],
})
export class BaSliderMenuComponent implements OnInit {

  state = 'expanded';
  @Input() menuShow;
  @Output() changeStatus: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  checkStatus() {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed';
  }

  checkMenuShow() {
    this.menuShow = 'hide';
    this.changeStatus.emit(this.menuShow);
  }
}
