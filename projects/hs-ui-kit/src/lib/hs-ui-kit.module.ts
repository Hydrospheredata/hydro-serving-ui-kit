import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './form/input/input.component';
import { IconComponent } from './icon/icon.component';
import { IconsRegistryService } from './icon/icons-registry.service';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    IconComponent,
    AlertMessageComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ButtonComponent,
    InputComponent,
    IconComponent,
    AlertMessageComponent,
  ],
  providers: [IconsRegistryService],
})
export class HsUiKitModule {}
