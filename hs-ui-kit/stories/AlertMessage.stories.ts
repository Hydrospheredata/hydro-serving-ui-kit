import { Story, Meta } from '@storybook/angular/types-6-0';
import AlertMessage from './alert-message.component';

export default {
  title: 'Hydrosphere/AlertMessage',
  component: AlertMessage,
} as Meta;

const Template: Story<AlertMessage> = (args: AlertMessage) => ({
  props: args,
  template: `
    <hs-alert-message>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti, nesciunt. Atque eius hic itaque necessitatibus quaerat quos similique, voluptatum!
    </hs-alert-message>`
});

export const Alert = Template.bind({});
Alert.args = {};
