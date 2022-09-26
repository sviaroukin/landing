import { Directive, HostListener, Input } from '@angular/core';
import { ScrollManagerDirective } from './scroll-manager.directive';

@Directive({
  selector: '[appScrollAnchor]',
})
export class ScrollAnchorDirective {
  @Input('appScrollAnchor') id: string | number;

  constructor(private manager: ScrollManagerDirective) {
    this.id = null!;
  }

  @HostListener('click')
  scroll() {
    this.manager.scroll(this.id);
  }
}
