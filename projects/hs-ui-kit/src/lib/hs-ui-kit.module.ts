import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './form/input-text/input-text.component';
import { IconComponent } from './icon/icon.component';
import { IconsRegistryService } from './icon/icons-registry.service';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputTextComponent,
    IconComponent,
    AlertMessageComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ButtonComponent,
    InputTextComponent,
    IconComponent,
    AlertMessageComponent,
  ],
  providers: [IconsRegistryService],
})
export class HsUiKitModule {}
