import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hydro-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent {
  @Input() type: string = '';
  @Input() title: string = '';
}
