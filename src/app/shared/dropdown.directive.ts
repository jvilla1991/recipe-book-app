import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropDownDirective {
  @HostBinding('class') classes = 'btn-group';

  @HostListener('click') onclick(eventData: Event) {
    if (this.classes.includes("open")) {
      this.classes = 'btn-group';
    }
    else {
      this.classes += " open"
    }
  }
}
