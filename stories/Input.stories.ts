import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import IconComponent from './icon.component';
import { InputComponent } from '@components/form/input/input.component';
import { iconsNames } from '@components/icon/icons-names';

export default {
  title: 'Hydrosphere/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent],
      imports: [CommonModule, FormsModule],
    }),
  ],
  argTypes: {
    icon: {
      options: iconsNames,
      control: { type: 'select' },
    },
    disabled: { type: 'boolean' },
    label: { type: 'text' },
    type: {
      options: ['text', 'number'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Label',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {};

export const WithErrors = Template.bind({});
WithErrors.args = {
  errors: { err1: 'First error', err2: 'Second error' },
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'icon_search',
};

export const TextType = Template.bind({});
TextType.args = {
  type: 'text',
};

export const NumberType = Template.bind({});
NumberType.args = {
  type: 'number',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
