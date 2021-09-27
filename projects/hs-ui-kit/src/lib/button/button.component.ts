import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hs-button',
  template: `<button
    hs-button
    type="button"
    [ngClass]="classes"
    [disabled]="disabled"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() kind: 'base' | 'flat' | 'stroked' | undefined;
  @Input() color:
    | 'base'
    | 'primary'
    | 'accent'
    | 'warning'
    | 'cyan'
    | undefined;
  @Input() label = 'Button';
  @Input() disabled = false;

  public get classes(): string[] {
    return [
      'hs-button',
      `hs-button--${this.kind}`,
      `hs-button--${this.kind}-${this.color}`,
    ];
  }
}
