import {
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

type buttonKinds = 'base' | 'flat' | 'stroked';
type buttonColors = 'base' | 'primary' | 'accent' | 'warning' | 'cyan';

@Component({
  selector: 'hs-button',
  templateUrl: 'button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() kind: buttonKinds = 'base';
  @Input() color: buttonColors = 'base';

  get kindClass(): string {
    return `hs-button--${this.kind}`;
  }

  get kindAndColorClass(): string {
    return `hs-button--${this.kind}-${this.color}`;
  }
}
