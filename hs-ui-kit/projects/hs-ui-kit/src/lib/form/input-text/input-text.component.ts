/* eslint-disable @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match */
import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgModel,
} from '@angular/forms';

const noop = (_?: any) => {};

@Component({
  selector: 'hs-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @angular-eslint/no-forward-ref
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  get value(): any {
    return this._value;
  }

  set value(value: any) {
    if (value !== this._value) {
      this._value = value;
      this.onChange(value);
    }
  }

  @Input() public name: string | undefined;
  @Input() public label: string | undefined;
  @Input() public icon: string | undefined;
  @Input() public errors: { [err: string]: string; } | null | undefined;
  @Input() public disabled: boolean | undefined;
  @Input() public placeholder: string | undefined;

  protected _value: any;
  protected onChange: (_: any) => void = noop;
  protected onTouched: () => void = noop;

  get inputClassMap(): { [p: string]: boolean } {
    const rootClass = 'hs-input__input';
    return {
      [rootClass]: true,
      [`${rootClass}--with-icon`]: this.icon !== undefined,
    };
  }

  public writeValue(value: any) {
    if (value !== this._value) {
      this._value = value;
    }
  }

  public registerOnChange(fn: (_: any) => void) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  public hasErrors(input: NgModel): boolean {
    return <boolean>input.touched && this.errors != null;
  }
}
