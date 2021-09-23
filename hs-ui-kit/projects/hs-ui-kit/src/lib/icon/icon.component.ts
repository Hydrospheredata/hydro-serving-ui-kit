import {ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {IconsRegistryService} from "./icons-registry.service";

@Component({
  selector: 'hs-icon',
  template: `<ng-content></ng-content>`,
  styles: [':host::ng-deep svg{width: inherit; height: inherit}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  private svgIcon: SVGElement | undefined;

  @Input()
  set name(iconName: string) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.iconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(
    private element: ElementRef,
    private iconRegistry: IconsRegistryService,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {}

  private svgElementFromString(svgContent: string | undefined): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }
}
