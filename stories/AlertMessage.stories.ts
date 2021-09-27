import { Story, Meta } from '@storybook/angular/types-6-0';
import { AlertMessageComponent } from '@components/alert-message/alert-message.component';

export default {
  title: 'Hydrosphere/AlertMessage',
  component: AlertMessageComponent,
} as Meta;

const Template: Story<AlertMessageComponent> = (
  args: AlertMessageComponent
) => ({
  props: args,
  template: `
    <hs-alert-message>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum deleniti, nesciunt. Atque eius hic itaque necessitatibus quaerat quos similique, voluptatum!
    </hs-alert-message>`,
});

export const Alert = Template.bind({});
Alert.args = {};
