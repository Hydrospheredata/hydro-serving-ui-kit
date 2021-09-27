import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../projects/hs-ui-kit/src/lib/button/button.component';

export default {
  title: 'Hydrosphere/Button',
  component: ButtonComponent,
  argTypes: {
    kind: {
      options: ['base', 'flat', 'stroked'],
      control: { type: 'select' },
    },
    color: {
      options: ['base', 'primary', 'accent', 'warning', 'cyan'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: { ...args },
});

export const Base = Template.bind({});
Base.args = {
  kind: 'base',
};

export const Flat = Template.bind({});
Flat.args = {
  kind: 'flat',
};

export const Stroked = Template.bind({});
Stroked.args = {
  kind: 'stroked',
};

export const BaseDisabled = Template.bind({});
BaseDisabled.args = {
  disabled: true,
  kind: 'base',
};

export const FlatDisabled = Template.bind({});
FlatDisabled.args = {
  disabled: true,
  kind: 'flat',
};

export const StrokedDisabled = Template.bind({});
StrokedDisabled.args = {
  disabled: true,
  kind: 'stroked',
};

export const BasePrimary = Template.bind({});
BasePrimary.args = {
  kind: 'base',
  color: 'primary',
};

export const BaseAccent = Template.bind({});
BaseAccent.args = {
  kind: 'base',
  color: 'accent',
};

export const BaseWarning = Template.bind({});
BaseWarning.args = {
  kind: 'base',
  color: 'warning',
};

export const BaseCyan = Template.bind({});
BaseCyan.args = {
  kind: 'base',
  color: 'cyan',
};

export const FlatPrimary = Template.bind({});
FlatPrimary.args = {
  kind: 'flat',
  color: 'primary',
};

export const FlatAccent = Template.bind({});
FlatAccent.args = {
  kind: 'flat',
  color: 'accent',
};

export const FlatWarning = Template.bind({});
FlatWarning.args = {
  kind: 'flat',
  color: 'warning',
};

export const FlatCyan = Template.bind({});
FlatCyan.args = {
  kind: 'flat',
  color: 'cyan',
};

export const StrokedPrimary = Template.bind({});
StrokedPrimary.args = {
  kind: 'stroked',
  color: 'primary',
};

export const StrokedAccent = Template.bind({});
StrokedAccent.args = {
  kind: 'stroked',
  color: 'accent',
};

export const StrokedWarning = Template.bind({});
StrokedWarning.args = {
  kind: 'stroked',
  color: 'warning',
};

export const StrokedCyan = Template.bind({});
StrokedCyan.args = {
  kind: 'stroked',
  color: 'cyan',
};
