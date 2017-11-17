import { Directive, OnInit, Input, ElementRef } from '@angular/core';
import { EventService } from '@theme/event.service';

@Directive({
  selector: '[appFixedMenu]'
})
export class FixedMenuDirective implements OnInit {

  @Input() appFixedMenu: string;
  @Input() howFixed: string;

  constructor(
    private _elem: ElementRef,
    private _EventService: EventService
  ) {
  }

  ngOnInit() {
    this._EventService.scrollEvent
      .map(e => this.conditions())
      .subscribe(bool => {
        if (bool) {
          this._elem.nativeElement.classList.add(this.appFixedMenu);
        } else {
          this._elem.nativeElement.classList.remove(this.appFixedMenu);
        }
      });
  }

  private conditions() {
    switch (this.howFixed) {
      case 'scroll':
        return this._elem.nativeElement.parentElement.getBoundingClientRect().top < 0;
      case 'top':
        return window.scrollY > 0;
    }
  }

}
