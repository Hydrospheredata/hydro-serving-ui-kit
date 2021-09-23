import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import IconComponent from './icon.component';
import Input from './input.component';
import { iconsNames } from '../projects/hs-ui-kit/src/lib/icon/icons-names';

export default {
  title: 'Hydrosphere/Input',
  component: Input,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    icon: {
      options: iconsNames,
      control: { type: 'select' }
    },
    disabled: { type: 'boolean' },
    label: { type: 'text' }
  }
} as Meta;

const Template: Story<Input> = (args: Input) => ({
  props: args,
});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
  icon: undefined,
  errors: undefined
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  icon: undefined,
  errors: undefined
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  icon: undefined,
  errors: { err1: 'First error', err2: 'Second error' }
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'icon_search',
  errors: undefined
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  icon: undefined,
  errors: undefined
};


