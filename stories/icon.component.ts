import { Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import { IconsRegistryService } from '../projects/hs-ui-kit/src/lib/icon/icons-registry.service';
import { DOCUMENT } from '@angular/common';
import {
  hsIconsApplications,
  hsIconsArrowDown,
  hsIconsArrowLeft,
  hsIconsArrowRight,
  hsIconsArrowUp,
  hsIconsBlock,
  hsIconsBookmark,
  hsIconsCalendar,
  hsIconsCheck,
  hsIconsChevronDown,
  hsIconsChevronLeft,
  hsIconsChevronRight,
  hsIconsChevronUp,
  hsIconsCircleX,
  hsIconsClock,
  hsIconsClose,
  hsIconsCloseSidebar,
  hsIconsCloud,
  hsIconsCopy,
  hsIconsDataProjection,
  hsIconsDc,
  hsIconsDone,
  hsIconsDriftReport,
  hsIconsEdit,
  hsIconsError,
  hsIconsErrorOutline,
  hsIconsFavorite,
  hsIconsFolder,
  hsIconsHelp,
  hsIconsInfo,
  hsIconsLogo,
  hsIconsModels,
  hsIconsMonitoring,
  hsIconsPlus,
  hsIconsProfiler,
  hsIconsRemove,
  hsIconsSearch,
  hsIconsSettings,
  hsIconsShow,
  hsIconsStar,
  hsIconsStarFilled,
  hsIconsUpload,
  hsIconsWarning,
} from '../projects/hs-ui-kit/src/lib/icon/icons';

@Component({
  selector: 'hs-icon',
  template: `<ng-content></ng-content>`,
  styles: [':host::ng-deep svg{width: 24px; height: 24px}'],
})
export default class IconComponent {
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
    public iconRegistry: IconsRegistryService,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {
    this.iconRegistry.registerIcons([
      hsIconsApplications,
      hsIconsArrowDown,
      hsIconsArrowLeft,
      hsIconsArrowRight,
      hsIconsArrowUp,
      hsIconsBlock,
      hsIconsBookmark,
      hsIconsCalendar,
      hsIconsCheck,
      hsIconsChevronDown,
      hsIconsChevronLeft,
      hsIconsChevronRight,
      hsIconsChevronUp,
      hsIconsCircleX,
      hsIconsClock,
      hsIconsClose,
      hsIconsCloseSidebar,
      hsIconsCloud,
      hsIconsCopy,
      hsIconsDataProjection,
      hsIconsDc,
      hsIconsDone,
      hsIconsDriftReport,
      hsIconsEdit,
      hsIconsError,
      hsIconsErrorOutline,
      hsIconsFavorite,
      hsIconsFolder,
      hsIconsHelp,
      hsIconsInfo,
      hsIconsLogo,
      hsIconsModels,
      hsIconsMonitoring,
      hsIconsPlus,
      hsIconsProfiler,
      hsIconsRemove,
      hsIconsSearch,
      hsIconsSettings,
      hsIconsShow,
      hsIconsStar,
      hsIconsStarFilled,
      hsIconsUpload,
      hsIconsWarning,
    ]);
  }

  private svgElementFromString(svgContent: string | undefined): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
