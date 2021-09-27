import { Component, ElementRef, Inject, Input, Optional } from '@angular/core';
import { IconsRegistryService } from '../projects/hs-ui-kit/src/lib/icon/icons-registry.service';
import { DOCUMENT } from '@angular/common';
import {
  hsIconsBlock,
  hsIconsBookmark,
  hsIconsCalendar,
  hsIconsCheck,
  hsIconsCircleCheck,
  hsIconsCircleX,
  hsIconsClock,
  hsIconsClose,
  hsIconsDataProjection,
  hsIconsDc,
  hsIconsDriftReport,
  hsIconsError,
  hsIconsFavorite,
  hsIconsHelp,
  hsIconsIconApplications,
  hsIconsIconArrow,
  hsIconsIconArrowDown,
  hsIconsIconArrowLeft,
  hsIconsIconArrowRight,
  hsIconsIconCancel,
  hsIconsIconCheckFail,
  hsIconsIconCheckSuccess,
  hsIconsIconCircle,
  hsIconsIconClose,
  hsIconsIconCloseSidebar,
  hsIconsIconCloud,
  hsIconsIconCopy,
  hsIconsIconDone,
  hsIconsIconEdit,
  hsIconsIconErrorOutline,
  hsIconsIconFolder,
  hsIconsIconHelp,
  hsIconsIconLeft,
  hsIconsIconLoader,
  hsIconsIconModels,
  hsIconsIconPending,
  hsIconsIconPipline,
  hsIconsIconPlus,
  hsIconsIconRemove,
  hsIconsIconRemoveCircle,
  hsIconsIconRight,
  hsIconsIconSearch,
  hsIconsIconSettings,
  hsIconsIconStar,
  hsIconsIconStart,
  hsIconsIconTimemachine,
  hsIconsIconUpgrade,
  hsIconsIconUpload,
  hsIconsIconWarning,
  hsIconsInfo,
  hsIconsLogo,
  hsIconsMerge,
  hsIconsMonitoring,
  hsIconsNext,
  hsIconsProfiler,
  hsIconsScatter,
  hsIconsShow,
  hsIconsSplit,
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
      hsIconsBlock,
      hsIconsBookmark,
      hsIconsCalendar,
      hsIconsCheck,
      hsIconsCircleCheck,
      hsIconsCircleX,
      hsIconsClock,
      hsIconsClose,
      hsIconsDataProjection,
      hsIconsDc,
      hsIconsDriftReport,
      hsIconsError,
      hsIconsFavorite,
      hsIconsHelp,
      hsIconsIconApplications,
      hsIconsIconArrowDown,
      hsIconsIconArrowLeft,
      hsIconsIconArrowRight,
      hsIconsIconArrow,
      hsIconsIconCancel,
      hsIconsIconCheckFail,
      hsIconsIconCheckSuccess,
      hsIconsIconCircle,
      hsIconsIconCloseSidebar,
      hsIconsIconClose,
      hsIconsIconCloud,
      hsIconsIconCopy,
      hsIconsIconDone,
      hsIconsIconEdit,
      hsIconsIconErrorOutline,
      hsIconsIconFolder,
      hsIconsIconHelp,
      hsIconsIconLeft,
      hsIconsIconLoader,
      hsIconsIconModels,
      hsIconsIconPending,
      hsIconsIconPipline,
      hsIconsIconPlus,
      hsIconsIconRemoveCircle,
      hsIconsIconRemove,
      hsIconsIconRight,
      hsIconsIconSearch,
      hsIconsIconSettings,
      hsIconsIconStar,
      hsIconsIconStart,
      hsIconsIconTimemachine,
      hsIconsIconUpgrade,
      hsIconsIconUpload,
      hsIconsIconWarning,
      hsIconsInfo,
      hsIconsLogo,
      hsIconsMerge,
      hsIconsMonitoring,
      hsIconsNext,
      hsIconsProfiler,
      hsIconsScatter,
      hsIconsShow,
      hsIconsSplit,
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
