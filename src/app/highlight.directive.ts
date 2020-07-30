import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private _el: ElementRef,
  ) {

   }

   @HostListener('mouseenter') onMouseEnter() {
     console.log("mouse entered...");
     this._el.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseleave') onMouseLeave() {
     console.log("mouse left...");
     this._el.nativeElement.style.backgroundColor = null;
   }

}
