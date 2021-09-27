import { Component, Input } from '@angular/core';

@Component({
  selector: 'hs-icons',
  template: `
    <div class="icons">
      <div *ngFor="let icon of icons">
        <hs-icon [name]="icon"></hs-icon>
      </div>
    </div>
  `,
  styleUrls: ['./icons.scss'],
})
export default class IconsComponent {
  @Input() icons: string[] | undefined;

  constructor() {}
}
