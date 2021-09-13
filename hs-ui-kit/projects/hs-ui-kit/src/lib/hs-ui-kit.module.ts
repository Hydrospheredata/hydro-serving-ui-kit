import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { InputTextComponent } from './form/input-text/input-text.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputTextComponent,
    IconComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ButtonComponent
  ],
})
export class HsUiKitModule { }
