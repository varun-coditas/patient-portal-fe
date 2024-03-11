import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appGetOrigin]',
  standalone: true,
})
export class GetOriginDirective {
  @Output() clickOrigin = new EventEmitter();
  constructor(private elementRef: ElementRef) {}
  @HostListener('click')
  onClick() {
    this.clickOrigin.emit(this.elementRef.nativeElement);
  }
}
