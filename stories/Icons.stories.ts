import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { iconsNames } from '../projects/hs-ui-kit/src/lib/icon/icons-names';
import IconsComponent from './icons.component';
import IconComponent from './icon.component';

export default {
  title: 'Hydrosphere/Icons',
  component: IconsComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<IconsComponent> = (args: IconsComponent) => ({
  props: args,
});

export const Icons = Template.bind({});
Icons.args = {
  icons: iconsNames,
};
