import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hs-input-text',
  template: `
    <div class="hs-input">
      <label *ngIf="label" class="hs-input__label" [attr.for]="name">{{ label }}</label>
      <div class="hs-input__control">
        <hs-icon *ngIf="icon" name="{{icon}}" class="hs-input__icon"></hs-icon>
        <input
          [ngClass]="inputClassMap"
          (change)="onChange.emit($event)"
          (touchstart)="onTouch.emit($event)"
          [attr.id]="name"
          [disabled]="disabled"
        />
        <ng-container *ngIf="errors">
          <div class="hs-input__errors">
            <div class="hs-input__error" *ngFor="let error of errors | keyvalue">
              {{ error.value }}
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./input.scss'],
})
export default class InputComponent {
  get value(): any {
    return this._value;
  }

  set value(value: any) {
    if (value !== this._value) {
      this._value = value;
      new this.onChange(value);
    }
  }

  @Input() public name: string | undefined;
  @Input() public label: string | undefined = '';
  @Input() public icon: string | undefined;
  @Input() public errors: { [err: string]: string; } | null | undefined;
  @Input() public disabled: boolean | undefined;
  @Input() public placeholder: string | undefined;

  @Output()
  onChange = new EventEmitter<Event>();
  @Output()
  onTouched = new EventEmitter<Event>();

  protected _value: any;

  get inputClassMap(): { [p: string]: boolean } {
    const rootClass = 'hs-input__input';
    return {
      [rootClass]: true,
      [`${rootClass}--with-icon`]: this.icon !== undefined,
    };
  }
}
